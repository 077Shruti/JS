let myDate=new Date()
//console.log(myDate.toLocaleString());//also use other methods
//console.log(typeof myDate)
let myCurrentDate=new Date(2024,0,23);
//console.log(myCurrentDate.toLocaleDateString())//months start in from 0 in JS
let myCurDate=new Date(2024,0,23,5,3);
//console.log(myCurDate.toLocaleString())
let m=new Date("01-14-2023");
//console.log(m.toLocaleString())
let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(myCurrentDate.getTime());
console.log(Math.floor(Date.now()/1000))//to //find current time in ms
let newDate=new Date();
console.log(newDate.getHours());
console.log(`${newDate.getDay()} and the time is ${newDate.getHours()}`)
console.log(newDate.toLocaleString('default',{weekday:"long",}))



