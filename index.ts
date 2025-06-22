import {initParkingLot} from "./init";
import {checkIn, checkOut} from "./services/parkingManager";

const run = async () => {
  initParkingLot();

  const vehicle1 = {plateNumber: "KA01AB1234", type: "car"};
  const vehicle2 = {plateNumber: "KA02CD5678", type: "motorcycle"};

  const tx1 = await checkIn(vehicle1);
  console.log("Checked in:", tx1);

  const tx2 = await checkIn(vehicle2);
  console.log("Checked in:", tx2);

  // Wait some time to simulate duration
  setTimeout(async () => {
    const out1 = await checkOut(vehicle1.plateNumber);
    console.log("Checked out:", out1);
  }, 3000);
};

run();
