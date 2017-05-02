// taskEvent class to add to array
function taskEvent(name, date, start, duration) {
  this.name = name;
  this.date = date;
  this.start = start;
  this.duration = duration;
}

// 24 Hour time to make calculations simpler
var calendar = [
  new taskEvent('Interview at the Portal', 'Feb 23, 2017', 15, 1.5),
  new taskEvent('"Lunch with Cindy"', 'Feb 25, 2017', 12, 1.0),
  new taskEvent('Dinner with John', 'Feb 24, 2017', 17, .5),
  new taskEvent('Conference', 'Feb 24, 2017', 11, 6.5),
  new taskEvent('Meeting with HR', 'Feb 23, 2017', 14, 1.5),
  new taskEvent('Networking', 'Feb 27, 2017', 14, 1),
  new taskEvent('Shareholders Meeting', 'Feb 23, 2017', 17, 2),
  new taskEvent('Annual Potluck', 'Feb 27, 2017', 13, 3)];

// Empty array to hold conflicts for output
var conflicts = [];

// Loops through each event, checking against every other event for scheduling conflicts
for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    if (calendar[i].name !== calendar[j].name) {
      if (calendar[i].date === calendar[j].date) {
        if ((calendar[i].start + calendar[i].duration > calendar[j].start && calendar[i].start <= calendar[j].start) ||
        (calendar[i].start >= calendar[j].start && calendar[i].start < calendar[j].start + calendar[j].duration)) {
          conflicts.push(calendar[i].name);
        }
      }
    }
  }
}

console.log(conflicts);
