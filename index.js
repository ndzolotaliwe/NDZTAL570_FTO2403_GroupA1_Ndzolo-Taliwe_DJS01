/**
 * Mars Climate Orbiter Challenge Solution
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

// Function to calculate new velocity (convert units appropriately)
const calcNewVel = ({ vel, acc, time }) => { 
  const velMetersPerSecond = vel * 1000 / 3600; // Convert km/h to m/s
  const newVelMetersPerSecond = velMetersPerSecond + acc * time;
  const newVelKmPerHour = newVelMetersPerSecond * 3600 / 1000; // Convert m/s back to km/h
  return newVelKmPerHour;
}

// Function to calculate new distance (convert units appropriately)
const calcNewDistance = ({ vel, time }) => {
  const newDistance = vel * 1000 * (time / 3600); // Convert km/h to m/s for velocity and seconds to hours for time
  return newDistance;
}

// Function to calculate remaining fuel
const calcRemainingFuel = ({ fuel, fbr, time }) => {
  const remainingFuel = fuel - fbr * time;
  if (remainingFuel < 0) {
    throw new Error("Insufficient fuel. Mission aborted.");
  }
  return remainingFuel;
}

// Perform calculations
const newVelocity = calcNewVel({ vel, acc, time });
const newDistance = calcNewDistance({ vel, time });
const remainingFuel = calcRemainingFuel({ fuel, fbr, time });

// Output corrected values
console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);

