const name="shruti "
const repoCount=50
console.log(name + repoCount +" Value")//less preferable now we use something else
//i.e backticks('') comes with string interpolation bcz we use placeholders in js that's why we use ''
console.log(`hii my name is ${name}and my repocount is ${repoCount}`);
let n=new String("shruti-sc-jk-pl")
 console.log(n[0])
 console.log(n.__proto__);
console.log(n.length)
 console.log(n.toUpperCase())
 console.log(n.charAt(4));
console.log(n.indexOf('t'))
const a=n.substring(2,4);//not take -ve vale
console.log(a)
console.log(n.slice(-8,4))
const m="           hi         i"
console.log(m.trim())
const url="http://shruti%20jello%20whyuhere%20bye"
console.log(url.replaceAll('%20','-'))
console.log(url.includes('%20'))
console.log(n.split('-')) //[ 'shruti', 'sc', 'jk', 'pl' ]-convert in array

