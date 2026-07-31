// Register Form

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const fullname = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Check if all fields are filled
        if (
            fullname === "" ||
            email === "" ||
            phone === "" ||
            address === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            alert("Please fill in all fields.");
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Registration Successful!");

        // Redirect to Dashboard
        window.location.href = "dashboard.html";

    });

}