// let userInput=prompt("enter the car seprated by: ")
// let newArrayInput=userInput.split(",");
// let filteredArray=[];
// for (let i=0; i<newArrayInput.length; i++){
//     if (!filteredArray.includes(newArrayInput[i])){
//         filteredArray.push(newArrayInput[i]);
//     }
// }
// console.log(newArrayInput);
// console.log(filteredArray)


//flat

// let arr=[10,20[[[["hii,nby"]]]]];
// let arr=[[[[[20,30,20,[[[[[[5000]]]]]]]]]]]
// console.log(arr.flat(Infinity));

//slice,splice


// let arr=[10,20,30,40,50,60,70,80,90,100];
// // console.log(arr)
// // console.log(arr.slice(2,5));
// // console.log(arr);
// console.log(arr);
// console.log(arr.splice(2,3,"hii"));
// console.log(arr);

// let arr=[10,20,30,40,50,60,70,80,90,100];
// let arr1=["hii","bye","tye"];
// let arr2=["hello","bello","tello"];

// arr.splice(2,0,...arr1);
// arr.splice(6+arr1.length,0,...arr2);
// console.log(arr);

// let arr=[10,20,30,40,50,60,70,80,90,100] find even number then add their postion then find their even number
//2. find first three element index and last 3 element index then add respectively if is it even then add 2 otherwise 3
// let arr=[10,20,30,40,50,60,70,80,90,100];
// let startingsum=arr[0]+arr[1]+arr[2];
// let endingsum=arr[arr.length-1]+arr[arr.length-2]+arr[arr.length-3];
// let middlesum=0;
// if (arr.length%2==0){
//     middlesum=arr[arr.length/2]+arr[arr.length/2-1];
// }else {
//     let middleIndex=parseInt(arr.length/2);
//     middlesum=arr[middleIndex]+[middleIndex-1]+arr[middleindex-3]
// }

// index and isarray
// let arr=[10,20,30,40,50,60,70,80,90,100];
// console.log(arr.indexOf(11))
// let a=10;
// let obj={}
// console.log(Array.isArray(obj));


//for of. for in,foreach

// let arr=[10,20,30,40,50,60,70,80,90,100]
// for (let i in arr){
//     console.log(i);
// }

// for (let i of arr){
//     console.log(i;)
// }

// arr.forEach((p1,p2,p3)=>{
//     console.log(`element : ${p1} index : ${p2}`);
// })

// let sum=0;
// for(let i in arr){
//     arr[i]=arr[i]+5;
// }
// console.log(arr);

//map


// let resMap=arr.map((el,ind,arr)=>{
//     return el+5;
// });
// console.log(resMap);
// console.log(arr);

// filter

// let arr=[10,20,30,40,50,60,70,80,90,100];
// let resFilter=arr.filter((el,ind)=>{
//     return (el>20&&el<60) || (el>70&&el<90);
// });
// // console.log(resFilter);

//Reduce()
// let arr=[10,20,30,40,50];
// let resReduce=arr.reduce((p1,p2,p3)=>{
//     console.log(p3);
//     console.log("collector :", p1, " pointer :",p2);
//     return p1+p2;
// },50);
// console.log(resReduce)

//filter
// let arr=[10,20,30,10,20,40,50,70,10,20,40];
// let filteredArray=arr.filter((el,ind)=>{
//     return arr.indexOf(el)==ind;
// })
// console.log(filteredArray)

// let arr=[10,20,50,80,60,70];
// let res=arr.reduce((col,pointer)=>{
//     return pointer>col ? col:pointer;
// })
// console.log(res);


// let arr=[10,20,30,40,50]
// let count1 = 0;
// let count2= 0;
// let resFind = arr.find((el,ind)=>{
//     count1++;
//     return el == 50;
// });
// let resFilter = arr.filter((el,ind)=>{
//     count2++;
//     return el ==50;
// });

// console.log("res of find",resFind);
// console.log("find count",count1);

// console.log("res of filter",resFilter);
// console.log("filter count",count2);

// let arr=[100,20,40,50,40,41,60,42,80,49,250]
// console.log(arr.reverse())
// console.log(
//     arr.sort((a,b)=>{
//         return a-b;
//     })
// );