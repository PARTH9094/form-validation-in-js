


function validate() {
    let a = document.getElementById("fname").value;
    let b = document.getElementById('lname').value;
    let c = document.getElementById("email").value;
    let d = document.getElementById("phone").value;
    let e = document.getElementById("address").value;
    let f = document.getElementsByName("gender").value;
    let g = document.getElementById("password").value;
    let h = document.getElementById("cpassword").value;



    localStorage.setItem("FirstName",a);
    localStorage.setItem("LastName",b);
    localStorage.setItem("Email",c);
    localStorage.setItem("PhoneNo",d);
    localStorage.setItem("Address",e);
    localStorage.setItem("Gender",f);
    localStorage.setItem("Password",g);
    localStorage.setItem("CPassword",h);



    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (a == "" || b == "" || c == "" || d == "" || e == "" || f == "" || g == "" || h == "") {
        alert("All fields are Mandatory");
        return false;
    }
    else if (d.length > 10 || d.length < 10) {
        alert("Phone number should be 10 digits. Please enter a valid Number");
        return false;
    }
    else if (isNaN(d)) {
        alert("Only numbers are allowed. Please enter a valid Number");
        return false;
    }
    else if (!emailPattern.test(c)){
        alert("Please Enter a Valid Email !!!");
        return false;
    }
    else if ( g != h){
        alert("Please enter same password");
        return false;
    }

    else {
        true;
    }
}



