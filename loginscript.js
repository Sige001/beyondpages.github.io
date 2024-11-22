document.addEventListener("DOMContentLoaded", () => {
  const profileIcon = document.querySelector(".profile-icon");
  const formContainer = document.getElementById("form-container");
  const signupBtn = document.getElementById("signup-btn");
  const loginBtn = document.getElementById("login-btn");
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");
  const loginEmail = document.getElementById("login-email");
  const loginPassword = document.getElementById("login-password");

  // Show/Hide the form container when the profile icon is clicked
  profileIcon.addEventListener("click", () => {
    formContainer.classList.toggle("hidden");
  });

  // Toggle between Sign Up and Login forms
  signupBtn.addEventListener("click", () => {
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
  });

  loginBtn.addEventListener("click", () => {
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
  });

  // Login form validation
  loginForm.addEventListener("submit", (event) => {
    // Prevent form submission to handle validation first
    event.preventDefault();

    // Get the email and password values
    const emailValue = loginEmail.value.trim();
    const passwordValue = loginPassword.value.trim();

    // Simple validation checks
    let valid = true;

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailValue)) {
      alert("Please enter a valid email address.");
      valid = false;
    }

    // Validate password (check if it's empty)
    if (passwordValue === "") {
      alert("Password cannot be empty.");
      valid = false;
    }

    // If the form is valid, submit it (this is where you would send the data to the server)
    if (valid) {
      alert("Login successful!");
      // You can now submit the form using loginForm.submit() if needed
    }
  });
});

  