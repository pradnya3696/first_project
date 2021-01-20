// const form = document.getElementById("form");

// form.addEventListener('submit', (e) => {
// 	e.preventDefault();

// 	validate();
// });

const nameRegex = /^[a-zA-Z ]+$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[0-9]{10}$/;


<<<<<<< HEAD
	validate();		
});
=======
const firstName = document.getElementById("fname").value;
const lastName = document.getElementById("lname").value;
const email = document.getElementById("email").value;
const phoneNumber = document.getElementById("phone").value;
>>>>>>> 8015db353acba64cdbfb0bf1369b1203ca159709

function validate(){

if (!nameRegex.test(firstName)){
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


