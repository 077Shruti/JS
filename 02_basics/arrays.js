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

