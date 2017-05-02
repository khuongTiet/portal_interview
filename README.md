# portal_interview

# Summary
## Choice of Data Structure/Model
### I decided to use a function to simulate a class in JavaScript to have easier access to the individual pieces of data
### Using an array, I stored each of the events into the array to allow for simple access through indexing the array
### This model allows me to loop through the array, while accessing the data using the 'this' to access members of the class

## The Algorithm
### The algorithm I used was a simple algorithm that loops through the array to check against every other taskEvent in the array
### Using the start time, in 24 hour/military time, I then calculate if there will be an overlap in the time
### If the start time + duration of the first event is greater than the start time of the second event, then there is an overlap
### There is also an overlap if the start time of the first event is greater than the start time of the second event but less than the end time

## Potential Edge Cases
### Potential edge cases were ones that arose from the time.
### If I had kept the time in the original format, there would be more complicated calculations required to determine conflicts
### This was solved using the 24 Hour time model
### Another edge case was an event overlapping with itself, which was easily taken care of with a simple if statement
