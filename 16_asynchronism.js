// In general, any task that has been delegated to the browser through a callback,
// waits until all the instructions of the main program have been executed.
// For this reason, the timeout defined in functions like setTimeout,
// does not control the callback runs at that exact time, but any time thereafter,
// only when the task queue is empty.

console.log('a');
setTimeout(function() {
  console.log('b')
}, 0);
console.log('c');

// a
// c
// b