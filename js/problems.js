// problem 1 ------------------------done
const multification = (num1,num2,num3) => num1*num2*num3 ;
//  console.log(multification(3,4,5)); // 60

//p-2-------------------------------done
const multiLine = `I am a web developer.
I love to code.
I love to eat biryani.`;
//  console.log(multiLine); // /* 
//  I am a web developer.
// I love to code.
// I love to eat biryani.
 //

// p-3------------------------------done
const money = (baba, ma = 500) => (baba+ma);
// console.log(money(100));  // 600



//practise problem      4  ----------------------------------done

const friends = ['Habib', 'Majarul', 'Foyzur', 'Aziz', 'Bokkor'];

const favouriteFriends = (friends) => {
    const evenLengthNameFriend = [];
    for( let i=0; i < friends.length; i++){
        if(friends[i].length % 2 == 0){
            evenLengthNameFriend.push(friends[i])
        }
    }
    return evenLengthNameFriend;
}
// console.log(favouriteFriends(friends))     //[ 'Foyzur', 'Aziz', 'Bokkor' ]
    


var words = [ "Hello", "World", "I", "am", "here" ];
const length= words.map(w => w.length);
// console.log(length) //  Array [ 5, 5, 1, 2, 4 ]



// practise problem 5 ---------------------done

const numbers = [2, 4, 6, 8, 12];

const  doMath = (numbers) => {       
   let sumOfSqureNumbers = 0;
for(let i=0; i < numbers.length; i++){
    sumOfSqureNumbers += numbers[i] * numbers[i];
    };
    return (sumOfSqureNumbers / numbers.length).toFixed(2);
}
// console.log(doMath(numbers))  //52.80




// -------------------------------------------------------4---6  done
const digits1= [12, 22, 55, 45 ]
const digits2= [85, 298, 77, 4]

const maxnumber = (digits1,digits2) => {
    const newArray = [...digits1,...digits2];
        return Math.max(...newArray)
}
//  console.log(maxnumber(digits1,digits2))  //298

