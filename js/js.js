/*let btn=document.getElementById("update");
btn.addEventListener("click",()=>{
    alert("new student has been Updated");
})
let btn1=document.getElementById("delete");
btn1.addEventListener("click",()=>{
    alert("new student has been Deleted");
})
let btn2=document.getElementById("insert");
btn2.addEventListener("click",()=>{
    alert("new student has been Inserted");
})

window.addEventListener("keydown",kafi=>{
    if(kafi.key=="e"){
        document.body.style.backgroundColor="pink";
    }
    else if(kafi.key=="q"){
        document.body.style.fontFamily="arial";
    }

})
*/
//get the info fronm thetextboxs 
let txtFirstName=document.getElementById("txtFirstName");
let txtLastName=document.getElementById("txtLastName");
let txtPassword=document.getElementById("txtPassword");
let txtcPassword=document.getElementById("txtcPassword");
let txtEmail=document.getElementById("txtEmail");
let txtphone=document.getElementById("txtphone");
let btncancel=document.getElementById("btncancel");
let btnsave=document.getElementById("btnsave");
let geterror=document.getElementById("geterror");

// geting form
let form=document.getElementById("form");
//creating the function
function check(textbox){
    if ( textbox.value== ""|| textbox.value== null){
        geterror.innerHTML="Error Vardir Cozun Hemen!";
        geterror.style.color="red";
        return false;
    }
    
    else{
        geterror.innerHTML="";
        return true;
    }
}
//event listener
form.addEventListener("submit",event=>{
    event.preventDefault();
if(check(txtFirstName) && check(txtLastName) && check(txtPassword) && check(txtcPassword) && check(txtEmail)  && check(txtphone) ){
      

}

})