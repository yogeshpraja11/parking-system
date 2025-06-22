import {parkingSpots} from "./data";

export const initParkingLot = () => {
  // Floor 1: 2 motorcycles, 2 cars
  parkingSpots.push(
    {id: "F1-M1", floor: 1, type: "motorcycle", isOccupied: false},
    {id: "F1-M2", floor: 1, type: "motorcycle", isOccupied: false},
    {id: "F1-C1", floor: 1, type: "car", isOccupied: false},
    {id: "F1-C2", floor: 1, type: "car", isOccupied: false}
  );

  // Floor 2: 1 bus, 1 car
  parkingSpots.push(
    {id: "F2-B1", floor: 2, type: "bus", isOccupied: false},
    {id: "F2-C1", floor: 2, type: "car", isOccupied: false}
  );
};
