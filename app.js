const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");


registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
    wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
    wrapper.classList.remove("active");
    you2.classList.remove("active2");
    you.classList.add("active");
});




const you = document.querySelector(".you");
const you2 = document.querySelector(".you2");
const you3 = document.querySelector(".you3");
const you4 = document.querySelector(".you4");
const profile = document.querySelector(".profile");

you4.addEventListener("click", () => {
    profile.classList.add("profile-active");
});


you.addEventListener("click", () => {
    you.classList.add("active");
    profile.classList.remove("profile-active");
});
you2.addEventListener("click", () => {
    you2.classList.add("active2");
    profile.classList.remove("profile-active");
});
you3.addEventListener("click", () => {
    you3.classList.add("active3");
    // profile.classList.remove("profile-active");
});
you4.addEventListener("click", () => {
    you4.classList.add("active4");
});

// ! REMOVE



// todo 1

you2.addEventListener("click", () => {
    you.classList.remove("active");
});
// you3.addEventListener("click", () => {
//     you.classList.remove("active");
// });
you4.addEventListener("click", () => {
    you.classList.remove("active");
});

// todo2

you.addEventListener("click", () => {
    you2.classList.remove("active2");
});
// you3.addEventListener("click", () => {
//     you2.classList.remove("active2");
// });
you4.addEventListener("click", () => {
    you2.classList.remove("active2");
});

//todo 3

you.addEventListener("click", () => {
    you3.classList.remove("active3");
});
you2.addEventListener("click", () => {
    you3.classList.remove("active3");
});
you4.addEventListener("click", () => {
    you3.classList.remove("active3");
});

//todo 4

you.addEventListener("click", () => {
    you4.classList.remove("active4");
});
you2.addEventListener("click", () => {
    you4.classList.remove("active4");
});
// you3.addEventListener("click", () => {
//     you4.classList.remove("active4");
// });

//? Login Remove

you.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
});

you3.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
});

you4.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
});



// alert("defualt");