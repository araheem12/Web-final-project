document.getElementById("login-form").addEventListener("submit", function(event){
  event.preventDefault();
  // Get user inputs
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Here you can perform authentication logic, such as sending the data to a server for verification
  // For demonstration purposes, let's just show the success message
  document.getElementById("login-message").style.display = "block";
});