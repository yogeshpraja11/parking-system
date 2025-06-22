import {VehicleType} from "../models";

const ratePerHour: Record<VehicleType, number> = {
  motorcycle: 10,
  car: 20,
  bus: 30,
};

export const calculateFee = (
  vehicleType: VehicleType,
  entryTime: Date,
  exitTime: Date
): number => {
  const hours = Math.ceil(
    (exitTime.getTime() - entryTime.getTime()) / (1000 * 60 * 60)
  );
  return hours * ratePerHour[vehicleType];
};
