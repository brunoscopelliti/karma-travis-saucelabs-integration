
function sum(){
    // var args = Array.from(arguments);
    // use the previous expression if you want to see the build fail on IE
    var args = Array.prototype.slice.apply(arguments);
    return args.length == 0 ? 0 : args.reduce(function(a,b) { return a+b; });
}

exports = module.exports = sum;
