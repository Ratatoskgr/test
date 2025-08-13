const validate = new JustValidate('#exampleForm');

validate
  .addField('#password', [
    {
        rule: 'required',
        errorMessage: 'This field is required',
    },
    {
        rule: 'password',
        errorMessage: 'Password must contain minimum eight characters, at least one letter and one number',
    },
])
  .addField('#repeatPassword', [
    { 
        rule: 'required', 
        errorMessage: 'Please repeat password' 
    },
    {
      validator: (value, fields) => {
        const password = fields['#password'].elem.value;
        return value === password;
      },
      errorMessage: 'Passwords do not match',
    },
  ])

  .addField('#message', [
    { 
        rule: 'required', 
        errorMessage: 'Message is required' 
    },
  ])
  .addField('#favoriteAnimal', [
    { 
        rule: 'required', 
        errorMessage: 'Select an animal'
     },
  ])
  .addField('#consent', [
    { 
        rule: 'required', 
        errorMessage: 'Consent is required'
     },
  ])
    .addField('input[name="newsletter"]', [
  {
    rule: 'required',
    errorMessage: 'Select communication method'
  },
])

//   .addField('input[name="communication"]', [
//   {
//     rule: 'required',
//     errorMessage: 'Select communication method'
//   },
// ])
// не хоче працювати



.addField('#anyNumber', [
  { 
    rule: 'required', 
    errorMessage: 'This field is required' 
  },
  { 
    rule: 'number', 
    errorMessage: 'Must be a number' 
  }
])


.addField('#integerNumber', [
  { 
    rule: 'required', 
    errorMessage: 'This field is required' 
  },
  { 
    validator: (value) => Number.isInteger(Number(value)), //допомога гпт
    errorMessage: 'Must be an integer' 
  }
])


  .addField('#between10and20', [
    { 
        rule: 'required',
        errorMessage: 'Enter a number between 10 and 20'
    },
    { 
        rule: 'minNumber', value: 10, 
        errorMessage: 'Min 10'
     },
    { 
        rule: 'maxNumber', value: 20, 
        errorMessage: 'Max 20'
     },
  ]);


const showPassBtn = document.getElementById('showPassBtn');
showPassBtn.addEventListener('click', () => {
  const password = document.getElementById('password');
  const repeatPassword = document.getElementById('repeatPassword');
  if (password.type === 'password') {
    password.type = 'text';
    repeatPassword.type = 'text';
    showPassBtn.textContent = 'Hide password';
  } else {
    password.type = 'password';
    repeatPassword.type = 'password';
    showPassBtn.textContent = 'Show password';
  }
});