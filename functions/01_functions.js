function sayMyName(){
    console.log("s");
    console.log("h");
    console.log("r");
    console.log("u");
    console.log("t");
    console.log("i");

    
}

function addTwoNumbers(N1,N2){
    console.log(N1+N2);
    
}
addTwoNumbers(2,3)//5
addTwoNumbers(2,"4")//24
addTwoNumbers(2,"a")//2a
addTwoNumbers(2,null)//2


function addTwoNumbers(N1,N2){
   let result=N1+N2;
   return result;
    
}
console.log(addTwoNumbers(3,4));
  function is_logged_in(username){
    if(!username){
        console.log("enter the name");
        return
        
    }
    return `${username} just loggedin`
  }
  //or
  
  function is_logged_in(username="Sam"){
    
    return `${username} just loggedin`
  }
  console.log(is_logged_in("shruti"));
  