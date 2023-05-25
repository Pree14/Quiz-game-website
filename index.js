function validation(){
    var name1= document.getElementById("name").value;
    var email1= document.getElementById("email1").value;
    var password= document.getElementById("pass").value;
    var confirmpassword= document.getElementById("confirmpass").value;
    if (password == confirmpassword){
        localStorage.setItem("username", name1);
        localStorage.setItem("email", email1);
        localStorage.setItem("userpassword",password);
        alert("Kindly login using the same ") 
        document.getElementById("pass").value="";
    }else{
        alert("OOPS! Wrong credentials kindly check again ! ")
    }
}