const marvel=["thor","ironman","spiderman"];
const dc=["superman","flash","batman"];
// marvel.push(dc);
// console.log(marvel);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] it join the while array not the element and make changes in orginal array

const arr2=marvel.concat(dc);//it doest not make changes in original array thats why we hv to give it a new array
console.log(arr2);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//in concat we can only give one value and we also know that we cant use the push so we use the spread operator
const all_heros=[...marvel,...dc];//spread operator
console.log(all_heros);

// ------------------------------------------------------------------------
const arr=[1,2,[3,4],5,6,[7,8,[9,10]]];
const all_elemets_in_one_array= arr.flat(Infinity);//[1, 2, 3, 4,  5,6, 7, 8, 9, 10]
console.log(all_elemets_in_one_array);


console.log(Array.isArray("shruti"));//false
console.log(Array.from("shruti"));//[ 's', 'h', 'r', 'u', 't', 'i' ]
let s1=100;
let s2=200;
let s3=300;
console.log(Array.of(s1,s2,s3));//[ 100, 200, 300 ]


