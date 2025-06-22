export type VehicleType = "motorcycle" | "car" | "bus";

export interface Vehicle {
  plateNumber: string;
  type: VehicleType;
}

export interface ParkingSpot {
  id: string;
  floor: number;
  type: VehicleType;
  isOccupied: boolean;
}

export interface ParkingTransaction {
  transactionId: string;
  vehicle: Vehicle;
  spotId: string;
  entryTime: Date;
  exitTime?: Date;
  fee?: number;
}
