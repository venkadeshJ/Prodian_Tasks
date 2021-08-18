function register(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("birthday").value;
    var file = document.getElementById("myfile").value;
    var number = document.getElementById("phone").value;

    

    console.log("The details recorded are");
    console.log("Email : ",email);
    console.log("Password : ",password);
    console.log("Gender : ",gender);
    console.log("Dob : ",dob);
    console.log("File : ",file);
    console.log("Mobile Number : ",number);
}