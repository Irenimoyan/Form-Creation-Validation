document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get and trim value
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        const messages = [];

        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be atleast 3 character long.')
        }

        // Email validation

        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Email must include '@' and '.'");
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be atleast 8 characters long.')
        }

        // Show feedback
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful";
            feedbackDiv.style.color = "#28a745"
            feedbackDiv.style.backgroundColor = "#d4edda"

        } else {
            feedbackDiv.innerHTML = messages.join('<br>')
            feedbackDiv.style.color = "#d8000c";
            feedbackDiv.style.backgroundColor="ffbaba"
        }
    });
});