
function montyHall(numDoors, willSwitch) {
  var winningDoor = getRandomInt(1, numDoors + 1);
  var choice = getRandomInt(1, numDoors + 1);
  var doors = range(1, numDoors);

  while (doors.length > 2) {
    var doorToOpenIndex = getRandomInt(1, doors.length + 1);
    var doorToOpen = doors[doorToOpenIndex];

    if (doorToOpen === winningDoor && doorToOpen === choice) {
      doors.splice(doorToOpenIndex, 1);
    }
  }

  if (willSwitch) {
    choice = (doors[1] === choice && doors[2] || doors[1]);
  }


  return (choice === winningDoor)

}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Creates an array of a range of numbers with both ends inclusive
 */
function range(start, end) {
    var foo = [];
    for (var i = start; i <= end; i++) {
        foo.push(i);
    }
    return foo;
}

module.exports = montyHall;
