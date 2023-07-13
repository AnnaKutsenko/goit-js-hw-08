import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}; 

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onInput, 500));
refs.email.addEventListener('input', throttle(onInput, 500));
document.addEventListener("DOMContentLoaded", ready);

function onFormSubmit(e) { 
    e.preventDefault();
    const savedValues = localStorage.getItem("feedback-form-state");
    const parseSavedValues = JSON.parse(savedValues);
    refs.email.value = '';
    refs.textarea.value = '';
    localStorage.removeItem("feedback-form-state");
    console.log(parseSavedValues);
};

function onInput() {
    const input = {
        emailInput: refs.email.value,
        message: refs.textarea.value,
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(input))
};

function ready() {
    if (localStorage.getItem("feedback-form-state") !== null) {
        const savedValues = localStorage.getItem("feedback-form-state");
        const parseSavedValues = JSON.parse(savedValues);
        refs.email.value = parseSavedValues.emailInput;
        refs.textarea.value = parseSavedValues.message;
    }
};