import { HashMap } from "./index.js";

const test = new HashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden');

test.set('kite', 'zola')
test.set('lion', 'gola')
test.set('moon', 'silver')
test.set('moon', 'silver')

test.set('moon', 'zzzzzzzzzzz')
test.set('lion', 'gasasasa');
test.remove('lion')
test.remove('dog')
test.remove('moon')
console.log(test.values())
console.log(test.keys())
console.log(test.entries())
console.log(test.get('kite'));
console.log(test.has('kite'));





