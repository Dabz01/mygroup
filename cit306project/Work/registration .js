// JavaScript for Registration Form

document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  
  // Create an object to store the form data
  var formData = {
    name: name,
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

