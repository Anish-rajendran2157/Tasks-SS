//Type Convertors

const x=-10;
const y=20;

const name="Anish";

// document.getElementById("demo").innerHTML=String(x);

// document.getElementById("demo").innerHTML=Number(name);

// document.getElementById("demo").innerHTML=Boolean(x);

// let obj={
//     name:"Anish",
//     age:21
// };

// for(const i in obj){
//     console.log(i+" "+obj[i]);
// }

// console.log(check(name));


function check(name){
    return "your food is ready "+name;
}


//callback function 

function gate(callback){
    console.log("You have ordered an food");

    console.log(callback(name));
}

gate(check);

const check1=(name)=> "this is my name "+name;

console.log(check1(name));



const object={
    foods:"dosa",
    bills:320,
    name:"Anish",
    ordered:function(){
        console.log("The ordered person name is : "+this.name+" The Food he ordered is : "+this.foods);   
    }
};

console.log(object.ordered());



