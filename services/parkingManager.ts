import {Vehicle, ParkingTransaction, ParkingSpot} from "../models";
import {calculateFee} from "../utils/feeCalculator";
import {parkingSpots, transactions} from "../data";
import {v4 as uuidv4} from "uuid";

// Simple lock to simulate concurrency control
let isLocked = false;

const lock = async () => {
  while (isLocked) await new Promise((r) => setTimeout(r, 10));
  isLocked = true;
};

const unlock = () => (isLocked = false);

export const checkIn = async (
  vehicle: Vehicle
): Promise<ParkingTransaction | null> => {
  await lock();

  try {
    const availableSpot = parkingSpots.find(
      (spot) => spot.type === vehicle.type && !spot.isOccupied
    );

    if (!availableSpot) return null;

    availableSpot.isOccupied = true;

    const transaction: ParkingTransaction = {
      transactionId: uuidv4(),
      vehicle,
      spotId: availableSpot.id,
      entryTime: new Date(),
    };

    transactions.push(transaction);
    return transaction;
  } finally {
    unlock();
  }
};

export const checkOut = async (
  plateNumber: string
): Promise<ParkingTransaction | null> => {
  await lock();

  try {
    const transaction = transactions.find(
      (t) => t.vehicle.plateNumber === plateNumber && !t.exitTime
    );

    if (!transaction) return null;

    transaction.exitTime = new Date();
    transaction.fee = calculateFee(
      transaction.vehicle.type,
      transaction.entryTime,
      transaction.exitTime
    );

    const spot = parkingSpots.find((s) => s.id === transaction.spotId);
    if (spot) spot.isOccupied = false;

    return transaction;
  } finally {
    unlock();
  }
};
