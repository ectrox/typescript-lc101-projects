// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

spacecraftName = "Space Shuttle";
speedMph = 17500;
kilometersToMars = 225000000;
kilometersToTheMoon = 384400;
 milesPerKilometer = 0.621;

// Code the "getDaysToLocation" function here:

function getDaysToLocation(kilometersAway: number): number {
    let milesAway: number = kilometersAway * milesPerKilometer;
    let hours: number = milesAway / speedMph;
    return hours / 24;
};

// Call the function and print the outputs for the Mars trip and the moon trip:

console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToMars)} days to get to Mars.`);
console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);

