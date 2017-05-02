function taskEvent(name, date, start, duration) {
  this.name = name;
  this.date = date;
  this.start = start;
  this.duration = duration;
}

var calendar = [
  new taskEvent('Interview at the Portal', 'Feb 23, 2017', 3, 1.5),
  new taskEvent('"Lunch with Cindy"', 'Feb 25, 2017', 12, 1.0),
  new taskEvent('Dinner with John', 'Feb 24, 2017', 5, .5),
  new taskEvent('Conference', 'Feb 24, 2017', 11, 6.5),
  new taskEvent('Meeting with HR', 'Feb 23, 2017', 2, 1.5),
  new taskEvent('Networking', 'Feb 24, 2017', 2, 1),
  new taskEvent('Shareholders Meeting', 'Feb 23, 2017', 5, 2),
  new taskEvent('Annual Potluck', 'Feb 28, 2017', 1, 3)];

var conflicts = [];

for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    if (calendar[i].name !== calendar[j].name) {
      if (calendar[i].date === calendar[j].date) {
        if (calendar[i].start + calendar[i].duration > calendar[j].start && calendar[i].start <= calendar[j].start) {
          conflicts.push(calendar[i].name);
        }
      }
    }
  }
}

console.log(conflicts);
