function forgotpassword(){
    var password= document.getElementById("pass").value;
    var confirmpassword= document.getElementById("confirmpass").value;
    document.getElementById("pass").value="";
    document.getElementById("confirmpass").value="";
    localStorage.getItem("pass");
    localStorage.getItem("confirmpass");
    localStorage.removeItem("pass");
    localStorage.removeItem("confirmpass");
    localStorage.setItem("userpassword",password);
    if (password == confirmpassword){
        alert("password changed")
    }else{
        alert("OOPSS! something went wrong")
    }
}
