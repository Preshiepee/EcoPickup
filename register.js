document.getElementById("registerForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const data = {
        fullname: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value
    };

    fetch("https://script.google.com/macros/s/AKfycbyrcrSTZbWZRrcSg8gcuRp9emAmRxnKCk1IM0sdX7mKBc9voDdpVxqW0k9gQGgtafQ9/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {

        alert("✅ Registration Successful!");

        document.getElementById("registerForm").reset();

        window.location.href = "login.html";

    })
    .catch(error => {

        alert("❌ Registration failed!");

        console.log(error);

    });

});

}
