'use strict';

function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
  return 'bye';
}

const gen = generator(10);

const a = gen.next();
console.log(a.value);          // 10
console.log(a.done);           // false
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
const b = gen.next()
console.log(b.value);          // bye
console.log(b.done);           // true
