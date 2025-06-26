//closure

// const counter=(function(){

//     let count=0;
//     return {
//         increment:function(){

//             count++;
//             return count;
//         },

//         reset:function(){
//             return "Reset Completed...";
            
//         }
//     };
// })();

// console.log(counter.increment());



//////////////////////////////////////////////////setTimeOut() function/////////////////////////////////////////////////////////////////

// setTimeout(anish,4000);

// setInterval(anish,1000);

// let count=2;


// function anish(){
//     count++;
//     console.log(count);
    
// }


// let val=1;

// let interval=setInterval(()=>{
//     console.log("Thank-you no : "+val++);
// },1000);

// setTimeout(()=>{
//     clearInterval(interval);
//     console.log("Interval has finished...");
    
// },5000);



////////////////////////////////////////////////////////Async Functions////////////////////////////////////////////////////////////////


// async function Anish(){
//     console.log("Waiting...");
 
//     await delay();

//     console.log("Hello guys after 2 seconds...");
    
    
// }


// function delay(){
//     return new Promise(resolve=>{
//         setTimeout(resolve,2000);
//     })
// }


// Anish();


// async function Harish(){
//     let myfunction=new Promise(function(resolve,reject){
//         resolve("I have water...");
//     });

//     console.log(await myfunction);
// }

// Harish();




//////////////////////////////////////////////////////// Exception Handling ////////////////////////////////////////////////////////////

// function ganesh(){
//     let get=document.getElementById("jack").value;

// try{

//     if(get.trim()==""){
//         throw "Empty...";
//     }

//     if(isNaN(get)){
//         throw " not a number";
//     }

//     get=Number(get);

//     if(get>10){
//         throw "too big.."
//     }
//     console.log("Correct "+get);
     
// }
// catch(err){
//     console.log("Input is "+err);
// }
// }




// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //task add
// let arr=[
//     {title:"task1",completed:false},
//     {title:"task2",completed:true},
// ];

// function addtask(title){
//     arr.push({title:title,completed:false});
// };

// addtask("task3");

// //task find

// function findtask(title){

//     const find = arr.find(item=>item.title==title);

//     if(find){
//         find.completed=true;
//         console.log(find);
        
//     }
//     else{
//         console.log("it doesn't has a object ");
        
//     }
// }

// findtask("task1");

//////////////////////////////////////////promises


// const promise=new Promise((resolve,reject=>{
//     const success =true;
//     setTimeout(()=>{
//         if(success){
//             resolve("Promise given...");
//         }
//         else{
//             reject("Promise not given...");
//         }
//     },2000);
// }))

// promise
//     .then(message=>{
//         console.log(message);
//     })
//     .catch(error){
//         console.log(error); 
//     }







// async function namee(){
//     console.log("waiting...");

//     await harishh();

//     console.log("Waiting completed...");
    

    
// }

// function harishh(){
//     return new Promise(function(resolve,reject){
//         setTimeout(resolve,2000);
//     })
// }


// namee();



const song=new Promise((resolve,reject)=>{
    const fire=false;
    if(!fire){
        resolve("Song released...")
    }
    else{
        reject("Song was't released...")
    }
})

song
.then(released=>{
    console.log("fans got the song..."+released);
    
})
.catch(err=>{
    console.log("Fans not received the song..."+err);
})



// async function thayakar(){
//     console.log("Waiting...");

//     await another();
    
//     console.log("After waiting...2 seconds");
    
// }

// function another(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,2000);
//     })
// }

// thayakar();



///////////////////////////////////////////////////////////destructuring////////////////////////////////////////////////////////////////


let obj={
    namme:"Anish",
    age:21,
    height:170
};

let {namme,age,height}=obj;

let {namme:lastname}=obj;

console.log(namme+" "+age+" "+height+" "+lastname);



