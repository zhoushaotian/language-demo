function treeView(array, isLast = true, prefix = '') {
    const T = '├';
    const vertical = '│';
    const horizontal = '─';
    const L = '└';
    const space = ' ';
    const indent = 1, gap = 2, gapBeforeName = 3;
    //  Linux command real parameters below
    // const indent = 2, const gap = 3, gapBeforeName = 4;
    const breakLine = '\n';

    return array.map((item, index) => {
        let isLast = index === array.length - 1;
        let isString = typeof item === 'string';
        if (!isString) {
            let appendix = `${prefix}${(isLast ? L : T) + horizontal.repeat(indent)}`;
            let passedPrefix = `${prefix}${(isLast ? space.repeat(gapBeforeName) : (vertical + space.repeat(gap)))}`;
            return `${appendix} ${item.name}${breakLine}${treeView(item.children, isLast, passedPrefix)}`;
        } else {
            if (isLast) {
                return `${prefix}${L}${horizontal.repeat(indent)}${space}${item}`;
            } else {
                return `${prefix}${T}${horizontal.repeat(indent)}${space}${item}`
            }
        }
    }).join(breakLine);
}

console.log('****');
console.log(treeView(['a', 'b', 'c']));

// ├── a
// ├── b
// └── c

console.log('****');
console.log(treeView(['a', 'b', 'c', {name: 'd', children: ['ss', 'ddd']}]));

// ├── a
// ├── b
// ├── c
// └── d
//     ├── ss
//     └── ddd

console.log('****');
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
    }, 'pk', {name: 'xxxsdf', children: ['dddd']}, 'yes', {name: 'caowei', children: ['xxx', 'uuuu']}]));

// ├── folder
// ├── ddd
// ├── dddddcd
// ├── wewewe
// │   ├── a
// │   ├── caowei
// │   │   ├── xxx
// │   │   └── uuuu
// │   ├── b
// │   ├── c
// │   └── caowei
// │       ├── xxx
// │       └── uuuu
// ├── pk
// ├── xxxsdf
// │   └── dddd
// ├── yes
// └── caowei
//     ├── xxx
//     └── uuuu

console.log('****');

console.log(treeView([{
    name: 'Container', children:
        [
            {
                name: 'Stage', children: [
                    'Stage-Header',
                    {
                        name: 'Stage-Main',
                        children: [
                            {
                                name: 'GridView', children: [
                                    {
                                        name: 'DraggableGrid', children: [{
                                            name: 'GridNode', children: [
                                                'ScaffoldStart',
                                                {
                                                    name: 'GridNodeContent', children: [
                                                        'IndentStart',
                                                        {name: 'Content', children: ['ContentRenderer']}
                                                    ]
                                                },
                                                'ScaffoldEnd'
                                            ]
                                        }]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {name: 'Sidebar', children: ['EmployeeList', 'ProjectOutline']},
            'ProjectDetail',
            'CustomerService'
        ]
}]));

// └── Container
//     ├── Stage
//     │   ├── Stage-Header
//     │   └── Stage-Main
//     │       └── GridView
//     │           └── DraggableGrid
//     │               └── GridNode
//     │                   ├── ScaffoldStart
//     │                   ├── GridNodeContent
//     │                   │   ├── IndentStart
//     │                   │   └── Content
//     │                   │       └── ContentRenderer
//     │                   └── ScaffoldEnd
//     ├── Sidebar
//     │   ├── EmployeeList
//     │   └── ProjectOutline
//     ├── ProjectDetail
//     └── CustomerService
