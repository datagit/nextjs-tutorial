function sum1(a, b) {
    return a + b;
}
function sum2(a, b) {
    return a + b;
}
function ConsoleLogHelper (data) {
    //TODO: abc
    if (process.env.ENV_NAME === 'production') return;
    console.log(data);
}
exports.sum1 = sum1;
exports.sum2 = sum2;
//FIXME: cba
exports.ConsoleLogHelper = ConsoleLogHelper;