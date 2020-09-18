/**
 * define common function
 * utility/common.js
 */
// utility/common.js
function sum(a, b) {
    return a + b;
}
module.exports = sum;
/**
 * using common function
 */
const sum1 = require('../utility/common');
sum1(10,30);


