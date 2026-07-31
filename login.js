// Login Form

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e) {

        e.preventDefault();

        // Get values
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Simple validation
        if(email === "" || password === ""){

            alert("Please fill in all fields.");

            return;
        }

        // Redirect to Dashboard
        window.location.href = "dashboard.html";

    });

}