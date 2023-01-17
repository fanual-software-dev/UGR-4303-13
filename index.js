const form=document.getElementsByClassId('form');
const email=document.getElementsByClassId('em');
const password=document.getElementsByClassId('pass');


form.addEventListner('submit',e=> {
    e.preventDefault();

    validateInputs();
})

const setError= (element, message) => {
    const inputControl= element.parentElement;
    const errorDisplay= inputControl.querySelector(' .error');

    errorDisplay.innerText= message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess= element =>{
    const inputControl= element.parentElement;
    const errorDisplay= inputControl.querySelector(' .error');

    errorDisplay.innerText= '';

    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}

const validateInputs= () => {
    const emailValue= email.value.trim();
    const passwordValue= password.value.trim();

    if (email.value=== '') {
        setError(email,"Email is required");
    } else {
        setSuccess(email);   
    }

    if (password.value==='') {
        setError(password, "password is required");
    } else if (password.length<8) {
        setError(password,"password must be at least eight characters long")
    } 
    else {
        setSuccess(password)
    }
}