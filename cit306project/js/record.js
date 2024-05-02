// Registration Records Array
var registrationRecords = [];

// Function to display registration records
function displayRegistrationRecords() {
  var registrationRecordsDiv = document.getElementById("registrationRecords");
  registrationRecordsDiv.innerHTML = "<h3>Registration Records:</h3>";
  
  if (registrationRecords.length > 0) {
    registrationRecords.forEach(function(record, index) {
      registrationRecordsDiv.innerHTML += "<p><strong>Record " + (index + 1) + ":</strong></p>";
      registrationRecordsDiv.innerHTML += "<p>Name: " + record.name + "</p>";
      registrationRecordsDiv.innerHTML += "<p>Email: " + record.email + "</p>";
      registrationRecordsDiv.innerHTML += "<hr>";
    });
  } else {
    registrationRecordsDiv.innerHTML += "<p>No registration records found.</p>";
  }
}

// Event listener for form submission - Registration Form
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
  
  // Add the form data to the registration records array
  registrationRecords.push(formData);
  
  // Clear the form
  document.getElementById("registrationForm").reset();
  
  // Display registration records
  displayRegistrationRecords();
  
  alert("Registration successful!");
});

// Event listener for form submission - Admin Login
document.getElementById("adminLoginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get admin credentials
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Check if credentials are valid (for demonstration purposes, using hardcoded values)
  if (username === "admin" && password === "password") {
    // Show the admin page and hide the login form
    document.getElementById("adminLoginForm").style.display = "none";
    document.getElementById("adminPage").style.display = "block";
    
    // Display registration records
    displayRegistrationRecords();
  } else {
    alert("Invalid username or password. Please try again.");
  }
});