


const form = document.getElementById("form");
const firstName = document.getElementById("fname").value;
const lastName = document.getElementById("lname").value;
const email = document.getElementById("email").value;
const phoneNumber = document.getElementById("phone").value;

const nameRegex = /^[a-zA-Z ]+$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[0-9]{10}$/;

form.addEventListener('submit', (e) => {
	e.preventDefault();

	validate();		
});

function validate(){

if (!nameRegex.test(firstName) && firstName == null && firstName == ""){
	alert('Enter firstname with letters only');
}

if(!nameRegex.test(lastName)){
	alert('Enter lastname with letters only');
}

if(!emailRegex.test(email)){
	alert('Enter a valid email id');
}

if(!phoneRegex.test(phone)){
	alert('Enter a valid phone number');
}
}


