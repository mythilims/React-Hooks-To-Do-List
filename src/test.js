
//Day One Java script code practice

//even odd number print


function evenOddNum(number) {
    // % operator (modulus)
    if (number % 2 === 0) {
      console.log(`% is even number ${number}`);
    } else {
      console.log(`% is odd number ${number}`);
    }
  
    // & operator (bitwise AND with 1)
    if ((number & 1) === 1) {
      console.log(`& is odd number ${number}`);
    } else {
      console.log(`& is even number ${number}`);
    }
  
   
  }
  
  evenOddNum(2);
  evenOddNum(7);
  

// greater then less then

function conditionCheck (age) {
  console.log(age > 7); 
  console.log(age < 7);
  console.log(age <= 7);
  console.log(age >= 7);
}

conditionCheck(5)


//reveser string

function reveserString (string) {
  let rev ='';
  for(let i =string.length -1;i>=0;i--){
    rev +=string[i]
  }
  console.log(rev);

   return rev ;
   
}

reveserString('mythili');


function findLargestNumber(arr) {
  let lNumber =arr[0];

  for(let i =1;i<arr.length;i++){
    if(arr[i]>lNumber){
      lNumber =arr[i];
    }
  }
   return lNumber;
}

// Test the function with an example array
let numbers = [5, 10, 15, 2, 8, 20];
let result = findLargestNumber(numbers);
console.log("The largest number is:", result);


//Question: Find the sum of all numbers in an array



function arrayValueSum (array) {

  let number =0;
  for(let i=0; i < array.length;i++){
    number +=array[i]
  }
  return number
}

console.log(arrayValueSum([2,3,4,5]));


//Question: Count the number of even numbers in an array

function arrayListEvenNumber (array) {
  let count =0

  for(let i =0; i < array.length ;i++){
    if(array[i] % 2 ===0){
      count +=1;
    }
  }

  return count;
}

console.log(arrayListEvenNumber([1, 2, 3, 4, 5, 6]),'even');

//Question: Count the number of odd numbers in an array

function arrayListOddNumber (arr) {
  let count =0;
  for (let i =0; i < arr.length;i++){
    if(arr[i] & 1===1){
      count ++;
    }
  }

  return count;
}

console.log(arrayListOddNumber([1, 2, 3, 4, 5, 6]),'odd');


//Question: Find the factorial of a number


function facFun (numbers) {
  let fact =1 ;
  for(let i=1;i<=numbers;i++){
    fact *=i;
  }
  return fact;

 
}

console.log(facFun(5),'facFun');

function primeNumber (arr) {
  let prime =[];

  for(let i=0;i<arr.length;i++){
    if(arr[i] < 2){
      prime.push(arr[i]);
    }
  }

  return prime;
}

console.log(primeNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17],'prime'));



