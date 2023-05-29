var func = function () {
    var a = 12;
    var b = 55;
    var addition = a + b;
    return console.log('addition', addition);
};
var ReturnValue = func();
var funcSub = function (s, u) { return console.log(s - u); };
var ReturnValueSub = funcSub(10, 5);
var funcMulti = function (m, t) { return console.log(m * t); };
var ReturnValueMulti = funcMulti(10, 5);
var funcDivi = function (d, v) { return console.log(d / v); };
var ReturnValueDiv = funcDivi(100, 5);
