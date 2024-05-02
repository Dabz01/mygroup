// JavaScript for Registration Form

document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get form values
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  
  // Create an object to store the form data
  var formData = {
    firstname: firstname,
    lastname: lastname,
    phone: phone,
    email: email
  };
  
  // Add the form data to local storage
  var storedData = JSON.parse(localStorage.getItem('registrationRecords')) || [];
  storedData.push(formData);
  localStorage.setItem('registrationRecords', JSON.stringify(storedData));
  
  // Clear the form
  document.getElementById("registrationForm").reset();
  
  alert("Registration successful!");
});

