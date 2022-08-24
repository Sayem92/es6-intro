// function add(first,second){
//     console.log(first,second)
//     // seconsd ar man takle oita niba naile 0 niba
//     second = second || 0;
//     // if(second == undefined){
//     //     second = 0;
//     // }
//     const total = first+second;
//     return total;
// }



//es6 ar version mane parameter ja diba oita age nibe .  judi oita na pay parameter a, taile default man oita nibe calculation korbe

// function add(first = 40,second = 12){
//     const total =first+second
//     return total;
// }
// const result = add(10);
// console.log(result)


function fullName(first ,second = 'Chowdhury'){
    const name =first + ' ' + second;
    return name;
}
const name = fullName('Aslam');
console.log(name)