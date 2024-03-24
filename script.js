function sendOTP() {
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    // Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    let otp_val = Math.floor(Math.random() * 10000);

    let emailbody = `<h2>Your OTP is </h2>${otp_val}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ahmadimran9001@gmail.com",
        Password : "827279ADD463B001AF472FA51FBA913AE99B",
        To : email.value,
        From : "ahmadimran9001@gmail.com",
        Subject : "Email OTP using JavaScript",
        Body : emailbody,
    }).then(
        message => {
            if (message === "OK") {
                alert("OTP sent to your email " + email.value);

                otpverify.style.display = "flex";
                const otp_inp = document.getElementById('otp_inp');
                const otp_btn = document.getElementById('otp-btn');

                otp_btn.addEventListener('click', () => {
                    if (otp_inp.value == otp_val) {
                        alert("Email address verified...");
                    }
                    else {
                        alert("Invalid OTP");
                    }
                })
            }
        }
    );
}