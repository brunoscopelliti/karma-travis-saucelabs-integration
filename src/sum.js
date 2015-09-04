
function sum(){
    var args = Array.from(arguments);
    return args.length == 0 ? 0 : args.reduce(function(a,b) { return a+b; });
}

exports = module.exports = sum;
