const fish = {
    name: 'King hilsa',
    address : 'Chadpur',
    color : 'Silver',
    phone : '0174843321',
    price : 4000
}
const phone = fish.phone;
// const price = fish.price;
// const color = fish.color

// bar bar na like simple version--------------------
// const {name} = fish;


//  console.log(name)
console.log(phone)
console.log(phone)
console.log(phone)

// object teke sorasori akta variable same property nam a declare korco
const {age,nam} = {nam: 'sayem', age: 30, id: 1234 , village: 'moidail'}
console.log(age,nam)

//array destructuring
const [first,another,sakib,sayem] = [44, 21, 22, 00,  55]
console.log(first,another,sakib,sayem);

const nayoks = ['sakib', 'bappi', 'raj']
const [picci,middle,last] = nayoks;
console.log(picci,last)

function getNames(){
    return ['Alim', 'jalim']
}
const [baba, caca] = getNames()
console.log(baba,caca)