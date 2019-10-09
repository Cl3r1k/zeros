module.exports = function zeros(expression) {

    const factors = expression.split('*');

    let resultZerosTotal = 0;
    let twoAmount = 0;
    factors.map(numStr => {
        const symbols = numStr.split('!');
        const num = parseInt(symbols[0], 10);
        const isDoubleFact = symbols.length > 2;

        const resultFactZeros = zerosCountV2(num, isDoubleFact);
        if (!isDoubleFact || (isDoubleFact && num % 2 === 0)) {
            twoAmount = twoAmount > Math.floor(num / 2) ? twoAmount : Math.floor(num / 2);
        }
        resultZerosTotal += resultFactZeros;
    });

    return twoAmount > 0 ? resultZerosTotal : 0;
};

function factorial(num, isDoubleFact) {
    let startIndex = BigInt(1);
    let adjustment = BigInt(1);
    if (isDoubleFact) {
        if (num % 2 === 0) {
            startIndex = BigInt(2);
        }
        adjustment = BigInt(2);
    }

    let factResult = BigInt(1);
    for (let index = startIndex; index <= BigInt(num); index += adjustment) {
        factResult *= index;
    }

    return factResult;
}

function zerosCountV2(num, isDoubleFact = false) {

    let result = 0;

    if (isDoubleFact) {
        if (num % 2 === 0) {
            result = Math.floor(num / 10) + Math.floor(num / 50);
        } else {
            for (let i = 1; i <= num; i += 2) {
                if (i % 5 === 0) {
                    result++;
                }
                if (i % 25 === 0) {
                    result++;
                }
            }
        }
    } else {
        result = Math.floor(num / 5) + Math.floor(num / (5 * 5)) + Math.floor(num / (5 * 5 * 5));
    }

    return result;
}