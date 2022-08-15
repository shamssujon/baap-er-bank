const userEmailField = document.getElementById("user-email");
const userPasswordIfield = document.getElementById("user-password");
const loginButton = document.getElementById("login-btn");

// Step-1: Add event handler with the submit button
loginButton.addEventListener("click", function () {
    // Step-2: Get the email address from the input field
    const userEmail = userEmailField.value;

    // Step-3: Get password from the password field.
    const userPassword = userPasswordIfield.value;

    // Step-4: Verify email and password
    // DANGER: DO NOT VERIFY email password on the client side

    if (userEmail === "sujon@gorib.com" && userPassword === "bolbonago") {
        console.log("Welcome abord");
        window.location.href = 'bank.html'
    } else {
        alert("Go to HELL!!!");
    }
});
