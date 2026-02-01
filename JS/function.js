// function greet(){
//     console.log("Hello good morning");
//     console.log("This is second line");
// }
// greet();

// function greet(name){
//     console.log("Hello good morning");
//     console.log("This is second line");
//     console.log("Hello",name)
// }
// greet("x");
// greet("y");
// greet("z");

// function add(a,b){
//     console.log(a+b);
// }
// add(10,20);
// add(50,20);
// add(100,20);

// function add(a,b){
//     // console.log(a);
//     // console.log(b);
//     // console.log(arguments);
//     console.log("sum is: ",arguments[0] + arguments[1]);
//     console.log("This is add functions");
// }
// add(10,20,30,"40");

// function add(a=10,b=20){
//     console.log(a);
//     console.log(b);
//     return a+b;
// }

// function add(a,b){
//     return(a+b)
// }
// // let addres = add(10,20);
// function sub(a){
//     return 100-a;
// }
// let subres = sub(add(10,20))
// // console.log("sub",subres);
// function mul(a,b){
//     return a*b;
// }
// function div(a){
//     return a/10
// }
// console.log(div(mul(add(10,20),subres)))

// let a=function greet(){
//     return "Hii i am function";
// };
// console.log(a());

// (function demo(a){
//     console.log(a);
//     console.log("This is IIFE function");
// })();

// let res=(function demo(a){
//     console.log(a);
//     console.log("This is IIFE function");
//     return "This is returned value"
// })('argument');
// console.log(res);
 


// Arrow function


// let a = $ => $ ;
// console.log(a(10));

// let a = (a,b) => {
//     return a+b;
// };
// console.log(a(10,20));//Explicit return

// let b = (a,b) => a+b;
// console.log(b(10,20));//Implicit return

// let c=$=>$;
// console.log(c(20));

// function mathop(a,b,task){
//     return task(a,b);
// }
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function mul(a,b){
//     return a*b
// }
// function div(a,b){
//     return a/b;
// }
// let num1=parseInt(prompt("enter first number1: "));
// let num2=parseInt(prompt("enter your 2nd no: "));;
// let choice=prompt("Enter which operations you want to perform")
// switch(choice){
//     case "add":
//         console.log(mathop(num1,num2,add));
//         break;
//     case "sub":
//         console.log(mathop(num1,num2,sub));
//         break;
//     case "mul":
//         console.log(mathop(num1,num2,mul))
//         break;
//     case "div":
//         console.log(mathop(num1,num2,div))
//         break;
//     defult:
//         console.log("enter valid operations")

// }
//console.log(mathop(10,20,add));
// console.log(mathop(100,20,sub));
// console.log(mathop(10,20,mul));
// console.log(mathop(100,20,div));


//wap to find squre and check pelindrome or not also find fizz-buzz
//wap to find squre of number find whichever the squre print before and after 3 digits square

// function square(num){
//     return num*num;
// }
// function pelindrome(sq){
//     let temp=sq;
//     let rev=0;

//     while(sq>0){
//         rev=rev*10+(sq%10);
//         sq=parseInt(sq/10);
//     }

//     if (temp==rev){
//         return true;
//     }
//     return false;
// }
// function fizzbuzz(num){
//     if (num%21==0){
//         console.log("fizzbuzz");
//     }else if (num%7==0){
//         console.log("Buzz");
//     }else{
//         console.log("not a fizz buzz");
//     }
// }
// let ressquare = square(21);
// console.log(ressquare);
// let ispelindrome=palindrome(ressquare);
// console.log(ispelindrome);
// if (ispelindrome){
//     fizzbuzz(ressquare);
// }else{
//     console.log("not a pelindrome and we are not going to check further");
// }

// nested function

// console.log("starting")
// function demo(){
//     console.log("This is demo");

//     function innerdemo(a){
//         console.log("This is inner demo");
//         return a;
//     }
//     return innerdemo;
// }
// let resdemo=demo();
// console.log(resdemo(10));

// console.log("This is ending");

function grandfather(){
    console.log("grandfather");
    let grandfathergold=60;
    let grandfatherweapon="katta";

    function father(){
        console.log("father");

        let fathergold=30;
        let fatherweapon="AK47";

        function child(){
            console.log("child");
        let childgold=1;
        let childweapon="bretta 92fs";
        let totalgold=grandfathergold+fathergold+childgold;

        console.log("total gold",totalgold)
        }
     return child();
    }
    return father();
}
grandfather()()();