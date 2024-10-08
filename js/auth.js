document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Registration successful!');
    window.location.href = 'login.html';
});

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert('Login successful!');
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'profile.html';
    } else {
        alert('Incorrect username or password');
    }
});


if (window.location.pathname.endsWith('profile.html')) {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        alert('You need to log in first!');
        window.location.href = 'login.html';
    } else {
        document.getElementById('profileUsername').textContent = localStorage.getItem('username');
        document.getElementById('profileEmail').textContent = localStorage.getItem('email');
    }
}

document.getElementById('logoutButton')?.addEventListener('click', function() {
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = 'login.html';
});
