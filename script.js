const loginForm = document.querySelector('.right-box');
const emailInput = loginForm.querySelector('input[type="text"]');
const passwordInput = loginForm.querySelector('input[type="password"]');
const rememberMeCheckbox = loginForm.querySelector('#formCheck');

// event listener to the login button
const loginButton = loginForm.querySelector('button');
loginButton.addEventListener('click', handleLogin);

// Function to handle the login process
function handleLogin(event) {
  event.preventDefault(); // Prevent form submission

  const email = emailInput.value;
  const password = passwordInput.value;

  // Performing validation
  if (email === '') {
    alert('Please enter your email address.');
    emailInput.focus();
    return;
  }

  if (password === '') {
    alert('Please enter your password.');
    passwordInput.focus();
    return;
  }

  // Performing authentication
  if (email === 'admin@gmail.com' && password === 'password') {
    // Authentication successful
    alert('Login successful!');
    
    // Check if the "Remember Me" checkbox is checked
    if (rememberMeCheckbox.checked) {
      // Save the user's email and password to local storage
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    } else {
      // Clear the saved email and password from local storage
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }

    // Redirect the user to the Chitkara University website
    window.location = "index.html"
  } else {
    // Authentication failed
    alert('Invalid email or password. Please try again.');
  }
}

// Check if there is saved email and password in local storage
const savedEmail = localStorage.getItem('email');
const savedPassword = localStorage.getItem('password');
if (savedEmail && savedPassword) {
  emailInput.value = savedEmail;
  passwordInput.value = savedPassword;
  rememberMeCheckbox.checked = true;
}