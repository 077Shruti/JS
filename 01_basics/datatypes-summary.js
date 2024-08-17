//datatypes are of two types:
//PRIMITIVE(Reference type)(Call By Value):7categories
//1.String 2.Number(int,float) 3.Boolean 4.null 5.undefined(variable and memory declared but value is still not declared) 6.Symbol(To make value unique) 7.BigInt
//Reference type(Non-Primitive)
//1.Arrays 2.Objects 3.Functios
//If we want to defined the language means we need to give the datatype to a variable then it is "Statically typed Language"
//But JS is a Dynamically typed Language
const id=Symbol("123")
const Anotherid=Symbol("123")
const temp=null;
console.log(id==Anotherid)//false//bcz the name same but they are unique bcz of Symbole keyword used
const BigNumber=123456789123456789n//BigInt use by putting "n"
const heros=["Ironman","Captain America","doga"]//Arrays
//OBJECTS:
let myOBJ={
    name:"shruti",
    age:22,
    city:"agra",

}
//console.log(myOBJ)
//FUNCTIONS
const myFunction=function(){
    console.log("hello world")
}
//console.log(typeof BigNumber)//to know the datatype
console.log(typeof temp)//Datatype of null is "OBJECT"
//function datatype is OBJECT FUNCTION