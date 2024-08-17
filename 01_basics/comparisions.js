 console.log(2>=1)
 console.log(2<=1)
 console.log(2==1)
 console.log(2!=1)
 console.log(2>1)
console.log("2">1);//true //typescript never allow u to compare different datatypes but in js u can but not a good habit
console.log(null>=0);//true
console.log(null==0);//false 
//reason is that an equality check(==) and comparisions(>,<,<=,>=) work differently
//Comparisions convert null to a number i.e. 0
//That's why >= gives true and == gives false
//undefined always gives false
//<******** Strict Check*******>
console.log("2"==2)//true
console.log("2"===2)//false bcz it is a different datatypes
//always write clean code
