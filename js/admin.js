
// JavaScript for Admin Page

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

// Function to display registration records
function displayRegistrationRecords() {
  var registrationRecords = JSON.parse(localStorage.getItem('registrationRecords'));
  var registrationRecordsDiv = document.getElementById("registrationRecords");
  registrationRecordsDiv.innerHTML = "<h3>Registration Records:</h3>";
  
  if (registrationRecords && registrationRecords.length > 0) {
    registrationRecords.forEach(function(record, index) {
      registrationRecordsDiv.innerHTML += "<p><strong>Record " + (index + 1) + ":</strong></p>";
      registrationRecordsDiv.innerHTML += "<p>FirstName: " + record.firstname + "</p>";
      registrationRecordsDiv.innerHTML += "<p>LastName: " + record.lastname + "</p>";
      registrationRecordsDiv.innerHTML += "<p>Phone: " + record.phone + "</p>";
      registrationRecordsDiv.innerHTML += "<p>Email: " + record.email + "</p>";
      registrationRecordsDiv.innerHTML += "<hr>";
    });
  } else {
    registrationRecordsDiv.innerHTML += "<p>No registration records found.</p>";
  }
}
