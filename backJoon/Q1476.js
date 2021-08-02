const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map((el) => parseInt(el));
}).on('close', function () {
    let year = 1;

    const obj = {
        E: input[0],
        S: input[1],
        M: input[2],
    };
    if (obj.E === obj.S && obj.S === obj.M) {
        return;
    }

    while (!isAllNumberOne(obj)) {
        year++;
        discount(obj);
    }
    console.log(year);
    process.exit();
});

function discount(args) {
    args.E--;
    args.S--;
    args.M--;
    if (args.E <= 0) args.E = 15;
    if (args.S <= 0) args.S = 28;
    if (args.M <= 0) args.M = 19;
}

function isAllNumberOne(args) {
    return args.E == 1 && args.S == 1 && args.M == 1;
}
