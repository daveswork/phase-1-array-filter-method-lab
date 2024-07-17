// Code your solution here


function findMatching(drivers, driverName){
    return drivers.filter((driver) => driver.toUpperCase() === driverName.toUpperCase() );
}

function fuzzyMatch(drivers, partialName) {
    return drivers.filter((driver) => driver.slice(0, partialName.length) === partialName);
}


function matchName(drivers, driverName) {
    return drivers.filter((driver) => driver.name === driverName);
}