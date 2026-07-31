// =============================
// Load Saved Profile
// =============================
window.onload = function () {

    document.getElementById("fullname").value =
        localStorage.getItem("fullname") || "";

    document.getElementById("email").value =
        localStorage.getItem("email") || "";

    document.getElementById("phone").value =
        localStorage.getItem("phone") || "";

    document.getElementById("address").value =
        localStorage.getItem("address") || "";
};


// =============================
// Update Profile
// =============================
document.getElementById("profileForm").addEventListener("submit", function(event) {

    // Stop page from refreshing
    event.preventDefault();

    // Get values
    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();

    // Validation
    if(fullname === "" || email === "" || phone === "" || address === ""){

        alert("Please fill in all fields.");

        return;
    }

    // Save to Local Storage
    localStorage.setItem("fullname", fullname);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("address", address);

    // Success Message
    alert("✅ Profile Updated Successfully!");

    // Redirect after clicking OK
    window.location.href = "dashboard.html";

});