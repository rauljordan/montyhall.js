
/**
 * Monty Hall Simulator
 * @param numDoors {Integer} Number of doors in simulation
 * @param willSwitch {Boolean} if contestant wants to switch or not
 * @return {Boolean} if contestant won or not
 */
function montyHall(numDoors, willSwitch) {
  // Sets up the random winning door and the choice
  // by adding one because geRandomInt has an exclusive upper limit
  var winningDoor = getRandomInt(1, numDoors + 1);
  var choice = getRandomInt(1, numDoors + 1);

  // Gets an array of all the doors. Does not need to add one
  // because the range function is inclusive
  var doors = range(1, numDoors);

  while (doors.length > 2) {
    // obtains the door to open by monty
    var doorToOpenIndex = getRandomInt(1, doors.length + 1);
    var doorToOpen = doors[doorToOpenIndex];

    // if the door is the winning one, remove it from the
    // doors array
    if (doorToOpen === winningDoor && doorToOpen === choice) {
      doors.splice(doorToOpenIndex, 1);
    }
  }

  // If the contestant wants to switch, switches the doors
  if (willSwitch) {
    choice = (doors[1] === choice && doors[2] || doors[1]);
  }

  // returns whether or not the choice was the winning door
  return (choice === winningDoor)

}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 * @param min {Integer} inclusive lower limit
 * @param max {Integer} exclusive upper limit
 * @return {Integer} random number
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Creates an array of a range of numbers with both ends inclusive
 * @param start {Integer} inclusive lower limit
 * @param end {Integer} exclusive upper limit
 * @return {Array} array of integers
 */
function range(start, end) {
    var foo = [];
    for (var i = start; i <= end; i++) {
        foo.push(i);
    }
    return foo;
}

module.exports = montyHall;
