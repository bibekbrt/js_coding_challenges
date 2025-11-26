// Import named exports
import { add, sub } from './math.js';
import g from './greet.js';
import * as util from './utill.js';
import _ from "lodash";


console.log(add(5, 3)); // 8
console.log(sub(5, 3)); // 2


console.log(g("Pasang")); // Hello pasang


console.log(util.greet("Suraj")); // Hello, Alice!
console.log(util.add(2, 3));      // 5

//lodash

const arr = [1, 2, 3, 4, 5, 6];
console.log(_.chunk(arr, 2));

