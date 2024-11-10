const arr=[1,2,3,"Shruti","Muskiii"];
console.log(arr[2]);
arr.push(8);
console.log(arr);
console.log(arr.pop());
arr.shift();
console.log(arr);//[ 2, 3, 'Shruti', 'Muskiii' ]
arr.unshift(9);
console.log(arr);//[ 9, 2, 3, 'Shruti', 'Muskiii' ]

console.log(arr.includes(3));//true
console.log(arr.indexOf(2));//1
const narr=arr.join();//join and convert it into string
console.log(narr);//9,2,3,Shruti,Muskiii

//slice or splice
console.log('A',arr);
const narr2=arr.slice(1,3);
console.log(narr2);
console.log('B',arr);//B [ 9, 2, 3, 'Shruti', 'Muskiii' ]
const narr3=arr.splice(1,3);
console.log('C',arr);//C [ 9, 'Muskiii' ]
console.log(narr3);//[ 2, 3, 'Shruti' ]
//splice change the original array by remoing the range that was mention it from original array 
