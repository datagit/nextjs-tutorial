const PI = 3.14159265359;

// exports variables or functions
exports.area = radius => (radius ** 2) * PI;
exports.circumference = radius => 2 * radius * PI;

exports.sum1 = (a, b) => {
    return a + b;
}
exports.sum2 = (a, b) => {
    return a + b;
}
exports.consoleLogHelper = (data) => {
    if (process.env.ENV_NAME === 'production') { return; }
    console.log(data);
}