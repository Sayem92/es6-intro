/* 
1. breakup with var
2. no more use var
3. let : let it to reassign
4. const : do not allow it to reassign
*/
let money  = 25;
money = 30;
console.log(money);

const bird = 'jan pakhi';
// bird = 'moyna';  error dibe 
const message = bird + 'ki koro'
console.log(message)

const numbers = [12, 33, 25, 45]
// not allow reassign
// numbers=[11, 52, 85, 78, 44]
numbers[1]=40
numbers.push(250)
// edit allow but reassign not allow
console.log(numbers);


const student = {
    name: 'mofiz',
    address : 'rongpur'
}
// student = {
//     name : 'mufazzol'
// }
// not allow reassign
student.name = 'mufazzol'
// edit allow

let sum=0;
for(let i = 0; i < numbers.length ; i++){
    const number = numbers[i]
    sum =sum + number
    console.log(number)
}