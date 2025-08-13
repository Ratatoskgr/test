const validate = new JustValidate('#registerForm');

validate.addField('#registerForm__name', [
    {
        rule: 'required',
        errorMessage: 'This field is required',
    },
    {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Name must be at least 2 characters'
    },
]);

validate.addField('#registerForm__email', [
    {
        rule: 'required',
        errorMessage: 'This field is required',
    },
    {
        rule: 'email',
        errorMessage: 'Email format is invalid',
    },
]);

validate.addField('#registerForm__password', [
    {
        rule: 'required',
        errorMessage: 'This field is required',
    },
    {
        rule: 'password',
        errorMessage: 'Password must contain minimum eight characters, at least one letter and one number',
    },
]);

validate.addField('#registerForm__confirmpassword', [
    {
        rule: 'required',
        errorMessage: 'Please confirm your password',
    },
    {
        validator: (value, fields) => {
            const password = fields['#registerForm__password'].elem.value;
            return value === password;
        },
        errorMessage: 'Passwords do not match',
    }
]);

const showPasswordBtn = document.getElementById('registerForm__showPass');
showPasswordBtn.addEventListener('click', () => {
    const password = document.getElementById('registerForm__password');
    const confirmPassword = document.getElementById('registerForm__confirmpassword');
    if(password.type === 'password' && confirmPassword.type === 'password') {
        password.type = 'text';
        confirmPassword.type = 'text';
        showPasswordBtn.textContent = 'Hide password';
    } else {
        password.type = 'password';
        confirmPassword.type = 'password';
        showPasswordBtn.textContent = 'Show password';
    }
});
