//  Assignment for the week is:
// 1 - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
// 2 - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
// \3 - Write a program that uses a while loop to print the first 25 integers.
// 4 - Write a program that uses a while loop to print the first 10 even numbers.
// 5 - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
// 6 - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
// 7- Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
// 8 - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.




// 1 - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
function modify(arry: number[], index: number, value: number) {
    arry.splice(index, 0, value)
    return arry
}
let arra: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let valu: number = 17
let indx: number = 4
console.log(modify(arra, indx, valu));


// 2  - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
var shopingcart: string[] = ["books", "stationary", "bag", "watch", "uniform"]
function modifycart(arys: string[], indexe: number, value: string) {
    arys.splice(indexe, 3, value)
    // console.log(arys);
    return arys

}
var val: string = "choclate"
var indexe: number = 2
console.log(modifycart(shopingcart, indexe, val));


// 3 - Write a program that uses a while loop to print the first 25 integers.
// var n1:number=1
// while(n1<=25){
// console.log(n1);
// n1++
// }


// 4 - Write a program that uses a while loop to print the first 10 even numbers.

// var n2: number = 1
// while (n2 <= 20) {
//     if (n2 % 2 == 0) {
//         console.log(n2);
//     }
//     n2++
// }


//5- Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

function fact(num1: number) {
    var num2: number = num1 - 1
    if (num1 > 0) {
        while (num1 > 0) {
            num2 = num2 * num1
            num1--
        }
        console.log(num2);
    }
    return num1
}
var factoria:number|undefined=fact(5)
console.log(factoria);


// 6 - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

function removeNegatives(rray: number[]) {
    // Create a new array to store the positive numbers.
    const positiveNumbers = [];
    // Iterate over the original array.
    for (const number of rray) {
        // If the number is positive, add it to the new array.
        if (number >= 0) {
            positiveNumbers.push(number);
        }
    }
    // Return the new array.
    return positiveNumbers;
}

const rray = [1, -2, 3, -4, 5, 7, 23, -1234, 50];
const positveNumbers = removeNegatives(rray);
console.log(positiveNumbers); // [1, 3, 5]




// 7 - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
var numbAry:number[]=[1,2,3,6,7,8,9]
function numbArry(num8:number[]) {
    var ind:number=0
    var sums:number=0
    while (ind<num8.length) {
        sums=sums+num8[ind]
        ind++
    }
    return sums
}
console.log(numbArry(numbAry));



// 8 - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
var tempinc1:number[]=[9,20,1,17]
var tempinf1:number=tempinc1[0]*9/5+32
console.log(tempinf1)
var tempinf2:number=tempinc1[1]*9/5+32
console.log(tempinf2);
var tempinf3:number=tempinc1[2]*9/5+32
console.log(tempinf3);
var tempinf4:number=tempinc1[3]*9/5+32
console.log(tempinf4);
var tempinf5:number=tempinc1[3]*9/5+32
console.log(tempinf5);
