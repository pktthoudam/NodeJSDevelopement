const add = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};

const mul = (a,b)=>{
    return a * b;
};

const name = "Priyakanta Thoudam"

const date = Date();

// module.exports = add;

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.name = name;

module.exports= { add, sub, mul, name, date};