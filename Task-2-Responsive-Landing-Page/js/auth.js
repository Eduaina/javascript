document.addEventListener("DOMContentLoaded", () => {
  // Handle Sign Up Form
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Stop page reload

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Simulated validation
      if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
      }

      // Create simulated user object
      const user = {
        name: name,
        email: email,
        password: password, // NOTE: NEVER store raw passwords in real apps
      };

      // Store in local storage (simulating a database save)
      localStorage.setItem("bloomsUser", JSON.stringify(user));

      alert("Account created successfully! Redirecting to home.");
      window.location.href = "index.html";
    });
  }

  // Handle Sign In Form
  const signinForm = document.getElementById("signin-form");
  const authError = document.getElementById("auth-error");

  if (signinForm) {
    signinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      authError.style.display = "none";

      const emailInput = document.getElementById("email").value;
      const passwordInput = document.getElementById("password").value;

      // Get stored user
      const storedUserStr = localStorage.getItem("bloomsUser");

      if (!storedUserStr) {
        authError.textContent = "No account found. Please sign up.";
        authError.style.display = "block";
        return;
      }

      const storedUser = JSON.parse(storedUserStr);

      // Validate credentials against stored data
      if (
        emailInput === storedUser.email &&
        passwordInput === storedUser.password
      ) {
        // SUCCESS
        console.log("Login successful");
        // Ideally, you'd set a session token here. We'll just redirect.
        window.location.href = "index.html";
      } else {
        // FAIL
        authError.textContent = "Invalid email or password.";
        authError.style.display = "block";
      }
    });
  }
});
