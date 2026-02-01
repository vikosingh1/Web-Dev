// let i=0;
// while (i < 10) {
//     console.log("Hello world");
//     i++;
// }

// let i=0;
// while(i<=20){
//     console.log(i);
//     i++;
//     i++;
// }

// wap to reverse the number 1253 to 3521
// let number=1245;
// let rev=0;
// while(number>0){
//     rev=rev*10+(number%10);
//     number=parseInt(number/10);
// }
// console.log(rev);

// wap to print palindrome number

// let number=1245;
// let temp=number;
// let rev=0;
// while(number>0){
//     rev=rev*10+(number%10);
//     number=parseInt(number/10);
// }
// console.log(rev);
// if (temp==rev){
//     console.log("pelindrome");
// }else {
//     console.log("Not pelindrome")
// }

// Wap to find all the pelindrome number between 1 to 1000
// let i=0;
// while(i<=1000){
//         let temp=i;
//         let rev=0;
//         while(temp>0){
//             rev=rev*10+(temp%10);
//             temp=parseInt(temp/10);
//         }
//         if (i==rev){
//             console.log("pelindrome:",i);
//         }
//         i++;
//     }

// wap to fizz buzz game between 1 to 1000 in reverse order number using loop
// let i=1000;
// while(i>=0){
//     if (i%21==0){
//         console.log('fizz buzz', i)
//     }else if(i%3==0){
//         console.log("Fizz",i)
//     }else if(i%7==0){
//         console.log("Buzz",)
//     }else {
//         console.log("not a fizz buzz")
//     }
//     i--;
// }


//find the second last largest digit in the given number
// let num=123456789;
// let temp=num;
// let largest=0;
// let secondLargest=0;
// while(num>0){
//     let ld = num%10;
//     if(ld>largest){
//         largest=ld;
//     }else if (ld>secondLargest && ld<largest){
//         secondLargest=ld;
//     }
//     num=parseInt(num/10);
// }
// console.log(largest);
// log(secondLargest);


// let a=22;
// let count=0;
// let isPrime=true;
// for(let i=2;i<=parseInt(a/2);i++){
//     if(a%i==0){
//         isPrime=false;
//         break;
//     }
// }
// if(isPrime){
//     console.log("prime number");
    
// }else{
//     log("not a prime number");
// }

// let count=0;
// let i=1;
// while(i<=1000){
//     if(i%i!=0){
//         count+=1;
//     }
// }
// console.log(count);


