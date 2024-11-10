
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const showPasswordCheckbox = document.getElementById('rememberme1');
const message = document.getElementById('message');
const users = [
  { username: 'Small Jee', password: '2912011' },
  { username: 'jane', password: 'janesPassword' },
  { username: 'Hubert', password: '1722008' },
];

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  const user = users.find((user) => user.username === username);

  
if (user && user.password === password) {
  message.style.color = 'green';
  message.textContent = 'Login successful! Welcome, ' + username + '!';

  // Wait for 3 seconds before redirecting
  setTimeout(() => {
    window.location.href = '3d nav.html'; // Redirect to treasure chest page!
  }, 3000); // 3000 milliseconds = 3 seconds
} else {
  message.style.color = 'red';
  message.textContent = 'Invalid username or password.';
}

});
showPasswordCheckbox.addEventListener('change', (e) => {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});
