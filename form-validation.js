// form-validation.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');
  
    form.addEventListener('submit', function (event) {
      const password = document.querySelector('[data-testid="password"]').value;
      const confirmPassword = document.querySelector('[data-testid="confirm-password"]').value;
      const phone = document.querySelector('[data-testid="phone"]').value;
      const firstName = document.querySelector('[data-testid="first-name"]').value;
      const lastName = document.querySelector('[data-testid="last-name"]').value;
  
      const namePattern = /^[A-Za-z]+$/;
      const phonePattern = /^\d{10}$/;
  
      // Validate first and last name (no symbols or numbers)
      if (!namePattern.test(firstName)) {
        alert("First name must contain only letters.");
        event.preventDefault();
        return;
      }
  
      if (!namePattern.test(lastName)) {
        alert("Last name must contain only letters.");
        event.preventDefault();
        return;
      }
  
      // Validate password match
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault();
        return;
      }
  
      // Validate phone (if not empty)
      if (phone && !phonePattern.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        event.preventDefault();
        return;
      }
  
      // Check native HTML5 validation (email, URL, etc.)
      if (!form.checkValidity()) {
        alert("Please fill out all required fields correctly.");
        event.preventDefault();
        return;
      }
  
      // Success
      alert("Form submitted successfully!");
    });
  });
  