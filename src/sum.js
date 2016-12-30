
const sum = (...args) => args.length == 0 ? 0 : args.reduce((a,b) => a+b);

export default sum;
