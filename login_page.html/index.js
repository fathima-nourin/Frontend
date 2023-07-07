
  document.querySelector('.neon').addEventListener('click', function (event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var nameErr = document.getElementById('nameErr');
    var passErr = document.getElementById('passErr');

    // Reset error messages
    nameErr.innerHTML = '';
    passErr.innerHTML = '';

    if (username.length === 0) {
      nameErr.innerHTML = 'Username is required.';
    } else if (username.length < 4) {
      nameErr.innerHTML = 'Username should be at least 4 characters long.';
    }

    if (password.length === 0) {
      passErr.innerHTML = 'Password is required.';
    } else if (password.length < 8) {
      passErr.innerHTML = 'Password should be at least 8 characters long.';
    }

    // Submit the form if no errors
    if (nameErr.innerHTML === '' && passErr.innerHTML === '') {
      // Perform form submission or redirect to another page
      // Uncomment the line below to submit the form
      window.location.href = 'login.html';
    //   document.querySelector('form').submit();
    }
  });
