
/**
 * @param {number[]} input
 * @return {number[]}
 */
var distinctDifferenceArray = function (input) {
    const uniquePrefixes = new Set();
    const uniqueSuffixes = new Map();
    for (let i = 0; i < input.length; ++i) {
        if (!uniqueSuffixes.has(input[i])) {
            uniqueSuffixes.set(input[i], 1);
        } else {
            uniqueSuffixes.set(input[i], uniqueSuffixes.get(input[i]) + 1);
        }
    }

    const distinctDifference = [];
    for (let i = 0; i < input.length; ++i) {
        uniquePrefixes.add(input[i]);

        if (uniqueSuffixes.get(input[i]) === 1) {
            uniqueSuffixes.delete(input[i]);
        } else {
            uniqueSuffixes.set(input[i], uniqueSuffixes.get(input[i]) - 1);
        }

        distinctDifference[i] = uniquePrefixes.size - uniqueSuffixes.size;
    }
    return distinctDifference;
};
