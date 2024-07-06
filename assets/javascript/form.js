const formContainer=document.querySelector('form');

function handleSubmitForm(event) {
    event.preventDefault();
    console.log(event);
}

formContainer.addEventListener('submit', handleSubmitForm)