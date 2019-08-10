
complete these exercises from javascript.info and paste your solutions in to this file:

----

* [promise basics](https://javascript.info/promise-basics#tasks)

### 1 Re-resolve a promise?

What’s the output of the code below?
```js
let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
```
The output is: 1.
The second call to resolve is ignored, because only the first call of reject/resolve is taken into account. Further calls are ignored.

### 2 Delay with a promise

The built-in function setTimeout uses callbacks. Create a promise-based alternative.

The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:
```js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms)); //// New line
}

delay(3000).then(() => alert('runs after 3 seconds'));
```
Please note that in this task resolve is called without arguments. We don’t return any value from delay, just ensure the delay.

### 3 Animated circle with promise

Rewrite the showCircle function in the solution of the task Animated circle with callback so that it returns a promise instead of accepting a callback.

[callback](https://plnkr.co/edit/RkVpygzQXYd0yAqwWElx?p=preview) ---> [.then](https://plnkr.co/edit/gSQLOOs3AK3jbcCBKuna?p=preview)

----

* [promise chaining](https://javascript.info/promise-chaining#tasks) 

### Promise: then versus catch

Are these code fragments equal? In other words, do they behave the same way in any circumstances, for any handler functions?

The short answer is: no, they are not the equal:
The difference is that if an error happens in f1, then it is handled by .catch here:
```js
promise
  .then(f1)
  .catch(f2);
```
…But not here:
```js
promise
  .then(f1, f2);
```
That’s because an error is passed down the chain, and in the second code piece there’s no chain below f1.

In other words, .then passes results/errors to the next .then/catch. So in the first example, there’s a catch below, and in the second one – there isn’t, so the error is unhandled.

----

* [promise api](https://javascript.info/promise-api)

---
and here's another [helpful resources](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
