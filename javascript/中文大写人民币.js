/**
 *
 * @param number {Number}
 */
function chinese(number) {
    let numbers = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    let middleLevels = ['', '拾', '佰', '仟'];
    let largeUnits = ['元', '万', '亿'];
    if (number % 1 === 0) {
        let numberStr = String(number);
        let array = numberStr.split('').reverse();
        while (array.length % 4 !== 0) {
            array.push('0');
        }
        let arrays = [];
        let i, j, temparray, chunk = 4;
        for (i = 0, j = array.length; i < j; i += chunk) {
            temparray = array.slice(i, i + chunk);
            arrays.push(temparray);
        }
        console.log(arrays);
        let result = arrays.map((arr, largeIndex) => {
            arr = arr.reverse();
            return arr.map((value, smallIndex) => {
                let v = value * 1;
                return numbers[value * 1] + (v === 0 ? '' : middleLevels[4 - smallIndex - 1]);
            }).join('') + largeUnits[largeIndex];
        }).reverse().join('');
        result += '整';
        result.replace(/零元/g, '元')
            .replace(/零+/g, '零')
            .replace(/^整$/, '零元整');
        if (result.startsWith('零')) {
            result = result.substr(1);
        }
        console.log(result);
    } else {

    }
}


chinese(880089821);
