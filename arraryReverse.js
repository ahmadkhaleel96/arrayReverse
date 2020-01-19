'use strict'

// a simple reverse looping method
const loopReverse = (arr) => {
    let reversedArray = [];
    for (let i= arr.length-1; i>=0; i--){
       reversedArray.push(arr[i]);
    }
    return reversedArray;
}

// with no methods like the code challenge originally wanted
const methodReverse = (arr) => {
    let reversedArray = [];
    for (let i= arr.length-1; i>=0; i--){
       reversedArray[reversedArray.length]= arr[i];
    }
    return reversedArray;
}

// of course the easiest solution ever 
const simpleReverse = (arr) =>{
    return arr.reverse();
}

// this is a weird solution
const indexReverse = (arr) => {
    let reversedArray = []
     for (let i=0; i<arr.length; i++){
         reversedArray.push(arr[(arr.length-1)-i]) 
     }
     return reversedArray
}
