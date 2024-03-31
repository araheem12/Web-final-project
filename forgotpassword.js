document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;

    // Here you can add AJAX request to send the email for password recovery
    // For this example, let's just simulate a success message
    var messageElement = document.getElementById("message");
    messageElement.innerHTML = "Password reset link has been sent to " + email;
    messageElement.classList.remove("error");
    messageElement.classList.add("success");
});
