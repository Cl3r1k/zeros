module.exports = function zeros(expression) {

    const factors = expression.split('*');

    let result = BigInt(1);
    factors.map(numStr => {
        const symbs = numStr.split('!');
        const num = parseInt(symbs[0], 10);
        const isDoubleFact = symbs.length > 2;

        const fact = factorial(num, isDoubleFact);
        result *= fact;
    });

    const testCase = result.toString();
    const zerosResult = testCase.match(/[0]+$/gmi);

    let zerosCount = 0;
    if (zerosResult && zerosResult.length > 0) {
        zerosCount = zerosResult[0].length;
    }

    return zerosCount;

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