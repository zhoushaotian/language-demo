const T = '├';
const vertical = '│';
const horizontal = '─';
const L = '└';
const space = ' ';
const indent = 2;
const gap = 3;
const gapBeforeName = 4;


function treeView(array, isLast = true, prefix = '') {
    return array.map((item, index) => {
        let isLast = index === array.length - 1;
        let isString = typeof item === 'string';
        if (!isString) {
            let appendix = `${prefix}${(isLast ? L : T) + horizontal.repeat(indent)}`;
            let passedPrefix = prefix + (isLast ? (space.repeat(gapBeforeName)) : (vertical + space.repeat(gap)));
            return `${appendix} ${item.name}\n${treeView(item.children, isLast, passedPrefix)}`
        } else {
            if (isLast) {
                return `${prefix}${L}${horizontal.repeat(indent)} ${item}`;
            } else {
                return `${prefix}├── ${item}`
            }
        }
    }).join('\n')
}


console.log(treeView(['a', 'b', 'c']));

console.log(treeView(['a', 'b', 'c',{name:'d',children:['ss','ddd']}]));


console.log(treeView([
    'folder',
    'ddd',
    'dddddcd', {
        name: 'wewewe',
        children: [
            'a',
            {name: 'caowei', children: ['xxx', 'uuuu']},
            'b',
            'c',
            {name: 'caowei', children: ['xxx', 'uuuu']}]
    }, 'fuck', {name: 'xxxsdf', children: ['dddd']}, 'yes', {name: 'caowei', children: ['xxx', 'uuuu']}]));
