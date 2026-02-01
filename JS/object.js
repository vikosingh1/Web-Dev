// let obj ={
//     username: "kunal",
//     age: 22,
//     ismarried: true,
//     childeren: 10,
//     bankbalancw: null,
//     7: "dhoni",
// };
// console.log(obj.username);
// console.log(obj.age);

// let myage= "age";

// obj.username="xyz";
// console.log(obj);

// obj[myage]=50;
// console.log(obj);

// console.log(obj);

// console.log(obj["7"]);

// console.log(obj);

// obj.ages=65;

// obj["username"]="myname";
// console.log(obj);
// delete obj.childerens;
// console.log(obj);


// let person ={
//     username: "xyz",
//     age: 12,
//     gender:"male",
//     ismarried: false,
//     skills: ["html","css","js"],
//     address: {
//         city: "abc city",
//         street: "mystreet",
//         country: "my country",
//         completeaddress: {
//             completeaddress: "this is complete address",
//         },
//     },
//     greet: ()=>console.log("hii this is greet functions"),
// };
// console.log(person);
// console.log(person.address);
// // console.log(person.address.completeaddress.address)
// console.log(person.skills.map((el)=>console.log(el)))
// console.log(person.address.completeaddress.completeaddress)
// console.log(person.greet())

//object methods

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

//Basic object

// let person = {
//     username: "xyz",
//     age: 22,
//     ismarried: false,
// };

// for (let i in person){
//     console.log(person[i]);
// }

// let allkeys=Object.keys(person);
// console.log(allkeys);
//console.map((el)=>console.log(person[el]));

// let allEnteries=Object.entries(person);
// console.log(
//     allEnteries.map((el)=>{
//         console.log(`key=${el[0]}: value=${el[1]}`);
//     })
// );

// let obj1={
//     username: "xyz",
//     age: 22,
//     address: {
//         city: "xyz city",
//     },
// };
// let obj2={ ...obj1 };
// console.log(obj2);

// obj2.age=100;
// obj2.address.city="mycity";
// console.log(obj1);
// console.log(obj2);

// let jsonObject = JSON.stringify(obj1);
// console.log(jsonObject);

// let normalJsObject=JSON.parse(jsonObject);
// console.log(normalJsObject);

// normalJsObject.age=200;
// normalJsObject.address.city="Honda City";

// console.log(obj1);
// console.log(normalJsObject);

// let obj1 = {
//     username: "xyz",
//     age: 22,
//     address: {
//         completeaddress: "my address",
//     },
// };

// let obj2={
//     age: 100,
//     ismarried: false,
// }
// // let myObj=Object.assign({...obj1});

// // myObj.age=500;
// // myObj.ismarried="yes"
// // myObj.address.completeaddress="new address"
// // console.log(obj1)
// // console.log(myObj)

// let myObj=Object.create(null)

let person_details=[{
    name: "xyz",
    id: 123,
    ranking: 10
},
{
    name: "abc",
    id: 456,
    ranking: 9
},
{
    name: "pqr",
    id: 789,
    ranking: 8
}]
let result;
let userchoice=prompt("How you want to search: 1:name 2:id 3:ramking")
if(userchoice==1){
    let name=prompt("enter name: ")
    result=person_details.filter((user,ind)=>{
        return user.name.toLowerCase().includes(name.toLowerCase())
    })
}else if (userchoice==2){
    let id=prompt("enter id")
    result=person_details.filter((user,ind)=>{
        return user.id==id;
    })
}else if (userchoice==3){
    let ranking=prompt("enter ranking");
    result=person_details.filter((user,ind)=>{
        return user.ranking==ranking;;
    })
}
console.log(result);

result.map((user,ind)=>{
    alert(user.name)
})




