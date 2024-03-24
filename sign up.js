document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
    // Get user inputs
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // You can perform further validation here

    // For demonstration purposes, let's just show the message
    document.getElementById("signup-message").style.display = "block";

    // You can add code here to send the data to a server for further processing
  });