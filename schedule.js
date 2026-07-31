// Schedule Pickup Form

const pickupForm = document.getElementById("pickupForm");

if (pickupForm) {

    pickupForm.addEventListener("submit", function(event){

        event.preventDefault();

        alert("Pickup Request Submitted Successfully!");

        window.location.href = "history.html";

    });

}