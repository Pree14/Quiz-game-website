function loginValidation(){
    var entername = document.getElementById("username").value;
    var enterpass = document.getElementById("pass").value;

    var getname = localStorage.getItem("username");
    var getpassword = localStorage.getItem("userpassword");

    if (entername == getname && enterpass == getpassword){
        alert("Successfully verified")
        alert("Kindly click the login to continue")
    }else{
        alert("Invalid username or password")
    }
}