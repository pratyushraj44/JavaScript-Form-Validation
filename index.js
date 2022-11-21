const form = document.getElementById('Form');
const Username = document.getElementById('Username');
const Email= document.getElementById('Email');
const Phonenumber= document.getElementById('Phone number');
const Password = document.getElementById('Password');
const Confirmpassword = document.getElementById('Confirm password');

form,addEventListener('Submit', e=> {
    e.preventDefault();

    validateInputs();
});

const setError= (element,message) => {
    const inputcontrol= element.parentElement;
    const errorDisplay= inputcontrol.querySelector('.error');

    errorDisplay.innnerText = message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');

};

const setSuccess=element =>{
    const inputControl = element.parentElement;
    const errorDisplay= inputControl.querySeelector('.error');

    errorDisplay.innerText= '';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');
    
};

const isValidEmail= email =>{

    /*
    const re= /^(([^<>()[\]]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+) ))

    */
   
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
    const Username = Username.value.trim();
    const EmailValue= Email.value.trim();
    const PasswordValue= Password.value.trim();
    const ConfirmpasswordValue= Confirmpassword.value.trim();

    if(Username === ' '){
        setError(Username, 'Username is required');
    } else{
          setSuccess(Username);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
    } else if(!isValidEmail(EmailValue)){
        setError(email, 'Provide a valid email address');
    }else{
        setSuccess(email);
    }

    if(PasswordValue === '') {
        setError(Password, 'Password is required');
    }else if(PasswordValue.length < 8){
        setError(Password, 'password must be atleat 8 character.')
    }else {
        setSuccess(password);
    }

    if(ConfirmPasswordValue === ''{
        setError(password, 'Please confirm your password');
    } else if(Confirmpasswordvalue !== PasswordValue){
        setError(ConfirmPassword, "Password doesn't match");
    } else{
        setSucccess(password);
    }
};


