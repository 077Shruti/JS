const myobj=new Object();//singleton object
myobj.id="123";
myobj.islogin="true";
myobj.name="shruti";
console.log(myobj);

const regularuser={
    email:"abs",
    fuulname:{
        hi:"cute",
        userfullname:{
            first:"shruti",
            last:"chauhan"
        }
    }
}
console.log(regularuser);
console.log(regularuser.fuulname.userfullname.first);

//concatinate the objects
const obj1={1:"a",2:"b",3:"c"};
const obj2={4:"a",5:"b",6:"c"};
const obj3=Object.assign({},obj1,obj2);
//or
const obj4={...obj1,...obj2};
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b', '6': 'c' }
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b', '6': 'c' }

