const Number2Words = require('number-to-words');


/**
 * @param {number} n number to be transformed
 * @param {boolean} preserveDecimals whether to transform decimals
 * @param {string} connector default to ','
 *
 * @example transformDigitToEN(-2880123.1, true) =>
 * minus two million, eight hundred eighty thousand, one hundred twenty-three point one
 *
 * @example transformDigitToEN(10808, false, 'and') =>
 * ten thousand and eight hundred eight
 */
function transformDigitToEN(n, preserveDecimals = false, connector) {
    if (typeof n !== 'number') return '';

    const isFloat = Math.floor(n) !== n;
    let postFix = '';
    let param = n;

    if (isFloat && preserveDecimals) {
        const str = n.toString();
        const [integer, decimals] = str.split('.');
        param = integer;
        const arr = decimals.split('');
        postFix = ` point ${arr.map(Number2Words.toWords).join(' ')}`;
    }

    let rst = Number2Words.toWords(param);
    if (connector) {
        rst = rst.replace(/,/g, ` ${connector}`);
    }

    return rst + postFix;
}
