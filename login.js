function login() {
    const emailLogin = document.querySelector(".emailLogin").value;

    var placeName = document.querySelector(".placeName");
    var placeEmail = document.querySelector(".placeEmail");



    console.log(email);
    console.log(Name);

    placeName.innerHTML = Name;
    placeEmail.innerHTML = email;

    localStorage.setItem("Email", emailLogin);

}


function reg() {


    const emailLoginR = document.querySelector(".emailLoginR").value;

    const userNameReg = document.querySelector(".userNameReg").value;
    const passwordLogin = document.querySelector(".passwordLogin").value;

    var placeName = document.querySelector(".placeName");
    var placeEmail = document.querySelector(".placeEmail");


    localStorage.setItem("Email", emailLoginR);
    localStorage.setItem("Username", userNameReg);

    placeName.innerHTML = userNameReg;
    placeEmail.innerHTML = emailLoginR;

}


const placeName = document.querySelector(".placeName");
const placeEmail = document.querySelector(".placeEmail");


placeName.innerHTML = localStorage.getItem("Username");
placeEmail.innerHTML = localStorage.getItem("Email");


const btn = document.querySelector(".btn");
const btnR = document.querySelector(".btnR");
btn.addEventListener("click", () => {
    login();
});

btnR.addEventListener("click", () => {
    reg();
});


const logOut = document.querySelector(".log-out");

logOut.addEventListener("click", () => {
    localStorage.setItem("Email", "You need to Login or Register");
    localStorage.setItem("Username", "You need to Login or Register");
});
