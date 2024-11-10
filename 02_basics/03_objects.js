//object literals
const mysym=Symbol("key1");
const JUser={
    name:"shruti",
    "full name":"shruti chauhan",
    [mysym]:1,
    age:21,
    location:"agra",
    email:"xyz",
    logindays:["monday","wednesday"]
}
//accces way
console.log(JUser.email);
console.log(JUser["full name"]);//more prefered
console.log(JUser["email"]);
console.log(JUser[mysym]);
//u can change the values of key 
JUser.email="abc";
console.log(JUser["email"]);
//but if u dont want to allow anyone to change it or override it u can use freez method
// 
console.log(JUser);

//now add a function in object


JUser.greeting=function(){
    console.log("hello js user");
    
}
console.log(JUser.greeting);//[Function (anonymous)]
console.log(JUser.greeting());//hello js user undefined

JUser.greeting2=function(){
    console.log(`hello js user ${this["full name"]}`); 
}
console.log(JUser.greeting2());//hello js user shruti chauhan undefined
