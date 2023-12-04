const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const cadastroLink = document.querySelector('.cadastro-link');
const btnPopup = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.icon_close');

cadastroLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});


btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

// alert("ola");