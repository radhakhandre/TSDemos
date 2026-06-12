// let age:number=30;
// console.log(typeof(age));

// let message="hello";
// let count=20;
// message=100
//once declare again same variable can'nt to be used.

// let num1:string="5";
// let num2:number=3;
// let result=num1+num2;
// console.log(result)

// let num1="5";
// let num2=3;
// let result=num1+num2;
// console.log(result)

// let firstName:string="radha";
// let lastName:string="khandre";
// let greetings:string=`hello ${firstName} ${lastName}`;
// console.log(greetings)


// let firstName:string="radha";
// let lastName:string="khandre";
// //etings:string="hello";
// console.log("hello",firstName,lastName)

// let isStudent:boolean=true;
// let hasPassed:boolean=false;
// console.log("is student? ", isStudent);

// let emptyValue:null=null;
// let notAssinged:undefined=undefined;
// console.log(emptyValue);
// console.log(notAssinged);

// let age:number;    // has not assinged on that time we will get undefined.
// console.log(age);

//data type  any
// let value:any="welcome";
// console.log(typeof(value))
// console.log(value)

// value=100;
// console.log(typeof(value))

// value=true;
// console.log(typeof(value))
// console.log(value)

//combined or union data type.
// let id:number | string | boolean;
// id="welcome123"
// console.log(id)
// id=1234
// console.log(id)
// id=true;
// console.log(id)

//void is used in typescript when function doesnot return any value.
// function sum():void
//    {
//     console.log(10+20);
//    }
// sum()

function sum(x:number,y:number):number
   {
    return(x+y);
   }
let result:number =sum(10,20);
console.log(result)