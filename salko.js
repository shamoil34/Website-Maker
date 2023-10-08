
//! javascript

const you = document.querySelector(".you");
const you2 = document.querySelector(".you2");
const you3 = document.querySelector(".you3");
const you4 = document.querySelector(".you4");
const dot = document.querySelector(".dot");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");
const dot4 = document.querySelector(".dot4");
const dot5 = document.querySelector(".dot5");
const dot6 = document.querySelector(".dot6");
const dot7 = document.querySelector(".dot7");
const dot8 = document.querySelector(".dot8");
const dot9 = document.querySelector(".dot9");
const body = document.querySelector(".body");
const allBodyAll = document.querySelector(".allBodyAll");
// const div2a = document.querySelector(".div2a");
// const div2b = document.querySelector(".div2b");
// const registerLink = document.querySelector(".register-link");
// const btnPopup = document.querySelector(".btnLogin-popup");
// const iconClose = document.querySelector(".icon-close");


// !ADD


you.addEventListener("click", () => {
    you.classList.add("active");
});
you2.addEventListener("click", () => {
    you2.classList.add("active2");
});
you3.addEventListener("click", () => {
    you3.classList.add("active3");
});
you4.addEventListener("click", () => {
    you4.classList.add("active4");
});

// ! REMOVE



// todo 1

you2.addEventListener("click", () => {
    you.classList.remove("active");
});
you3.addEventListener("click", () => {
    you.classList.remove("active");
});
you4.addEventListener("click", () => {
    you.classList.remove("active");
});

// todo2

you.addEventListener("click", () => {
    you2.classList.remove("active2");
});
you3.addEventListener("click", () => {
    you2.classList.remove("active2");
});
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
you3.addEventListener("click", () => {
    you4.classList.remove("active4");
});



// !LOGIN JAVA SCRIPT
// TODO    LOGIN JAVA SCRIPT




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

// btnPopup.addEventListener("click", () => {
//     // wrapper.classList.add("active-popup");
// });

iconClose.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
});
iconClose.addEventListener("click", () => {
    you2.classList.remove("active2");
});
iconClose.addEventListener("click", () => {
    you.classList.add("active");
});

you.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
});
you3.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
});
you4.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
});

you.addEventListener("click", () => {
    wrapper.classList.remove("active");
});
you2.addEventListener("click", () => {
    wrapper.classList.remove("active");
});
you3.addEventListener("click", () => {
    wrapper.classList.remove("active");
});
you4.addEventListener("click", () => {
    wrapper.classList.remove("active");
});
iconClose.addEventListener("click", () => {
    wrapper.classList.remove("active");
});


//!dot    theme


dot.addEventListener("click", () => {
    dot.classList.add("active-dot");
});
dot2.addEventListener("click", () => {
    dot2.classList.add("active-dot");
});
dot3.addEventListener("click", () => {
    dot3.classList.add("active-dot");
});
dot4.addEventListener("click", () => {
    dot4.classList.add("active-dot");
});
dot5.addEventListener("click", () => {
    dot5.classList.add("active-dot");
});
dot6.addEventListener("click", () => {
    dot6.classList.add("active-dot");
});
dot7.addEventListener("click", () => {
    dot7.classList.add("active-dot");
});
dot8.addEventListener("click", () => {
    dot8.classList.add("active-dot");
});
dot9.addEventListener("click", () => {
    dot9.classList.add("active-dot");
});


dot.addEventListener("click", () => {
    dot2.classList.remove("active-dot");
});
dot.addEventListener("click", () => {
    dot3.classList.remove("active-dot");
});
dot.addEventListener("click", () => {
    dot4.classList.remove("active-dot");
});
dot.addEventListener("click", () => {
    dot5.classList.remove("active-dot");
});
dot.addEventListener("click", () => {
    dot6.classList.remove("active-dot");
});
dot.addEventListener("click", () => {
    dot7.classList.remove("active-dot");
});
dot.addEventListener("click", () => {
    dot8.classList.remove("active-dot");
});
dot.addEventListener("click", () => {
    dot9.classList.remove("active-dot");
});


dot2.addEventListener("click", () => {
    dot.classList.remove("active-dot");
});
dot2.addEventListener("click", () => {
    dot3.classList.remove("active-dot");
});
dot2.addEventListener("click", () => {
    dot4.classList.remove("active-dot");
});
dot2.addEventListener("click", () => {
    dot5.classList.remove("active-dot");
});
dot2.addEventListener("click", () => {
    dot6.classList.remove("active-dot");
});
dot2.addEventListener("click", () => {
    dot7.classList.remove("active-dot");
});
dot2.addEventListener("click", () => {
    dot8.classList.remove("active-dot");
});
dot2.addEventListener("click", () => {
    dot9.classList.remove("active-dot");
});


dot3.addEventListener("click", () => {
    dot2.classList.remove("active-dot");
});
dot3.addEventListener("click", () => {
    dot.classList.remove("active-dot");
});
dot3.addEventListener("click", () => {
    dot4.classList.remove("active-dot");
});
dot3.addEventListener("click", () => {
    dot5.classList.remove("active-dot");
});
dot3.addEventListener("click", () => {
    dot6.classList.remove("active-dot");
});
dot3.addEventListener("click", () => {
    dot7.classList.remove("active-dot");
});
dot3.addEventListener("click", () => {
    dot8.classList.remove("active-dot");
});
dot3.addEventListener("click", () => {
    dot8.classList.remove("active-dot");
});


dot4.addEventListener("click", () => {
    dot2.classList.remove("active-dot");
});
dot4.addEventListener("click", () => {
    dot3.classList.remove("active-dot");
});
dot4.addEventListener("click", () => {
    dot.classList.remove("active-dot");
});
dot4.addEventListener("click", () => {
    dot5.classList.remove("active-dot");
});
dot4.addEventListener("click", () => {
    dot6.classList.remove("active-dot");
});
dot4.addEventListener("click", () => {
    dot7.classList.remove("active-dot");
});
dot4.addEventListener("click", () => {
    dot8.classList.remove("active-dot");
});
dot4.addEventListener("click", () => {
    dot9.classList.remove("active-dot");
});


dot5.addEventListener("click", () => {
    dot2.classList.remove("active-dot");
});
dot5.addEventListener("click", () => {
    dot3.classList.remove("active-dot");
});
dot5.addEventListener("click", () => {
    dot.classList.remove("active-dot");
});
dot5.addEventListener("click", () => {
    dot4.classList.remove("active-dot");
});
dot5.addEventListener("click", () => {
    dot6.classList.remove("active-dot");
});
dot5.addEventListener("click", () => {
    dot7.classList.remove("active-dot");
});
dot5.addEventListener("click", () => {
    dot8.classList.remove("active-dot");
});
dot5.addEventListener("click", () => {
    dot9.classList.remove("active-dot");
});



dot6.addEventListener("click", () => {
    dot2.classList.remove("active-dot");
});
dot6.addEventListener("click", () => {
    dot3.classList.remove("active-dot");
});
dot6.addEventListener("click", () => {
    dot.classList.remove("active-dot");
});
dot6.addEventListener("click", () => {
    dot5.classList.remove("active-dot");
});
dot6.addEventListener("click", () => {
    dot4.classList.remove("active-dot");
});
dot6.addEventListener("click", () => {
    dot7.classList.remove("active-dot");
});
dot6.addEventListener("click", () => {
    dot8.classList.remove("active-dot");
});
dot6.addEventListener("click", () => {
    dot9.classList.remove("active-dot");
});



dot7.addEventListener("click", () => {
    dot2.classList.remove("active-dot");
});
dot7.addEventListener("click", () => {
    dot3.classList.remove("active-dot");
});
dot7.addEventListener("click", () => {
    dot.classList.remove("active-dot");
});
dot7.addEventListener("click", () => {
    dot5.classList.remove("active-dot");
});
dot7.addEventListener("click", () => {
    dot6.classList.remove("active-dot");
});
dot7.addEventListener("click", () => {
    dot4.classList.remove("active-dot");
});
dot7.addEventListener("click", () => {
    dot8.classList.remove("active-dot");
});
dot7.addEventListener("click", () => {
    dot9.classList.remove("active-dot");
});



dot8.addEventListener("click", () => {
    dot2.classList.remove("active-dot");
});
dot8.addEventListener("click", () => {
    dot3.classList.remove("active-dot");
});
dot8.addEventListener("click", () => {
    dot.classList.remove("active-dot");
});
dot8.addEventListener("click", () => {
    dot5.classList.remove("active-dot");
});
dot8.addEventListener("click", () => {
    dot6.classList.remove("active-dot");
});
dot8.addEventListener("click", () => {
    dot7.classList.remove("active-dot");
});
dot8.addEventListener("click", () => {
    dot4.classList.remove("active-dot");
});
dot8.addEventListener("click", () => {
    dot9.classList.remove("active-dot");
});


dot9.addEventListener("click", () => {
    dot2.classList.remove("active-dot");
});
dot9.addEventListener("click", () => {
    dot3.classList.remove("active-dot");
});
dot9.addEventListener("click", () => {
    dot.classList.remove("active-dot");
});
dot9.addEventListener("click", () => {
    dot5.classList.remove("active-dot");
});
dot9.addEventListener("click", () => {
    dot6.classList.remove("active-dot");
});
dot9.addEventListener("click", () => {
    dot7.classList.remove("active-dot");
});
dot9.addEventListener("click", () => {
    dot8.classList.remove("active-dot");
});
dot9.addEventListener("click", () => {
    dot4.classList.remove("active-dot");
});












//!     body.....
//!     body.....
//!     body.....
//!     body.....
//!     body.....
//!     body.....
//!     body.....
//!     body.....
//!     body.....
//!     body.....
//!     body.....
//!     body.....
//!     body.....












dot.addEventListener("click", () => {
    body.classList.add("active-body");
});
dot2.addEventListener("click", () => {
    body.classList.remove("active-body");
});
dot3.addEventListener("click", () => {
    body.classList.remove("active-body");
});
dot4.addEventListener("click", () => {
    body.classList.remove("active-body");
});
dot5.addEventListener("click", () => {
    body.classList.remove("active-body");
});
dot6.addEventListener("click", () => {
    body.classList.remove("active-body");
});
dot7.addEventListener("click", () => {
    body.classList.remove("active-body");
});
dot8.addEventListener("click", () => {
    body.classList.remove("active-body");
});
dot9.addEventListener("click", () => {
    body.classList.remove("active-body");
});



dot2.addEventListener("click", () => {
    body.classList.add("active-body2");
});
dot.addEventListener("click", () => {
    body.classList.remove("active-body2");
});
dot3.addEventListener("click", () => {
    body.classList.remove("active-body2");
});
dot4.addEventListener("click", () => {
    body.classList.remove("active-body2");
});
dot5.addEventListener("click", () => {
    body.classList.remove("active-body2");
});
dot6.addEventListener("click", () => {
    body.classList.remove("active-body2");
});
dot7.addEventListener("click", () => {
    body.classList.remove("active-body2");
});
dot8.addEventListener("click", () => {
    body.classList.remove("active-body2");
});
dot9.addEventListener("click", () => {
    body.classList.remove("active-body2");
});



dot3.addEventListener("click", () => {
    body.classList.add("active-body3");
});
dot.addEventListener("click", () => {
    body.classList.remove("active-body3");
});
dot2.addEventListener("click", () => {
    body.classList.remove("active-body3");
});
dot4.addEventListener("click", () => {
    body.classList.remove("active-body3");
});
dot5.addEventListener("click", () => {
    body.classList.remove("active-body3");
});
dot6.addEventListener("click", () => {
    body.classList.remove("active-body3");
});
dot7.addEventListener("click", () => {
    body.classList.remove("active-body3");
});
dot8.addEventListener("click", () => {
    body.classList.remove("active-body3");
});
dot9.addEventListener("click", () => {
    body.classList.remove("active-body3");
});



dot4.addEventListener("click", () => {
    body.classList.add("active-body4");
});
dot.addEventListener("click", () => {
    body.classList.remove("active-body4");
});
dot2.addEventListener("click", () => {
    body.classList.remove("active-body4");
});
dot.addEventListener("click", () => {
    body.classList.remove("active-body4");
});
dot3.addEventListener("click", () => {
    body.classList.remove("active-body4");
});
dot5.addEventListener("click", () => {
    body.classList.remove("active-body4");
});
dot6.addEventListener("click", () => {
    body.classList.remove("active-body4");
});
dot7.addEventListener("click", () => {
    body.classList.remove("active-body4");
});
dot8.addEventListener("click", () => {
    body.classList.remove("active-body4");
});
dot9.addEventListener("click", () => {
    body.classList.remove("active-body4");
});



dot5.addEventListener("click", () => {
    body.classList.add("active-body5");
});
dot.addEventListener("click", () => {
    body.classList.remove("active-body5");
});
dot2.addEventListener("click", () => {
    body.classList.remove("active-body5");
});
dot.addEventListener("click", () => {
    body.classList.remove("active-body5");
});
dot3.addEventListener("click", () => {
    body.classList.remove("active-body5");
});
dot4.addEventListener("click", () => {
    body.classList.remove("active-body5");
});
dot6.addEventListener("click", () => {
    body.classList.remove("active-body5");
});
dot7.addEventListener("click", () => {
    body.classList.remove("active-body5");
});
dot8.addEventListener("click", () => {
    body.classList.remove("active-body5");
});
dot9.addEventListener("click", () => {
    body.classList.remove("active-body5");
});



dot6.addEventListener("click", () => {
    body.classList.add("active-body6");
});
dot.addEventListener("click", () => {
    body.classList.remove("active-body6");
});
dot2.addEventListener("click", () => {
    body.classList.remove("active-body6");
});
dot.addEventListener("click", () => {
    body.classList.remove("active-body6");
});
dot3.addEventListener("click", () => {
    body.classList.remove("active-body6");
});
dot5.addEventListener("click", () => {
    body.classList.remove("active-body6");
});
dot4.addEventListener("click", () => {
    body.classList.remove("active-body6");
});
dot7.addEventListener("click", () => {
    body.classList.remove("active-body6");
});
dot8.addEventListener("click", () => {
    body.classList.remove("active-body6");
});
dot9.addEventListener("click", () => {
    body.classList.remove("active-body6");
});


dot7.addEventListener("click", () => {
    body.classList.add("active-body7");
});
dot.addEventListener("click", () => {
    body.classList.remove("active-body7");
});
dot2.addEventListener("click", () => {
    body.classList.remove("active-body7");
});
dot.addEventListener("click", () => {
    body.classList.remove("active-body7");
});
dot3.addEventListener("click", () => {
    body.classList.remove("active-body7");
});
dot5.addEventListener("click", () => {
    body.classList.remove("active-body7");
});
dot6.addEventListener("click", () => {
    body.classList.remove("active-body7");
});
dot4.addEventListener("click", () => {
    body.classList.remove("active-body7");
});
dot8.addEventListener("click", () => {
    body.classList.remove("active-body7");
});
dot9.addEventListener("click", () => {
    body.classList.remove("active-body7");
});


dot8.addEventListener("click", () => {
    body.classList.add("active-body8");
});
dot.addEventListener("click", () => {
    body.classList.remove("active-body8");
});
dot2.addEventListener("click", () => {
    body.classList.remove("active-body8");
});
dot.addEventListener("click", () => {
    body.classList.remove("active-body8");
});
dot3.addEventListener("click", () => {
    body.classList.remove("active-body8");
});
dot5.addEventListener("click", () => {
    body.classList.remove("active-body8");
});
dot6.addEventListener("click", () => {
    body.classList.remove("active-body8");
});
dot7.addEventListener("click", () => {
    body.classList.remove("active-body8");
});
dot4.addEventListener("click", () => {
    body.classList.remove("active-body8");
});
dot9.addEventListener("click", () => {
    body.classList.remove("active-body8");
});



dot9.addEventListener("click", () => {
    body.classList.add("active-body9");
});
dot.addEventListener("click", () => {
    body.classList.remove("active-body9");
});
dot2.addEventListener("click", () => {
    body.classList.remove("active-body9");
});
dot.addEventListener("click", () => {
    body.classList.remove("active-body9");
});
dot3.addEventListener("click", () => {
    body.classList.remove("active-body9");
});
dot5.addEventListener("click", () => {
    body.classList.remove("active-body9");
});
dot6.addEventListener("click", () => {
    body.classList.remove("active-body9");
});
dot7.addEventListener("click", () => {
    body.classList.remove("active-body9");
});
dot8.addEventListener("click", () => {
    body.classList.remove("active-body9");
});
dot4.addEventListener("click", () => {
    body.classList.remove("active-body9");
});






















































const create = document.querySelector(".create");
const myBlur = document.querySelector(".blur");
const submit = document.querySelector(".submit");
const websiteName = document.querySelector(".website-name");



create.addEventListener("click", () => {
    myBlur.classList.add("blur-on");
    create.classList.add("create-act");
});

submit.addEventListener("click", () => {
    body.classList.add("loading");

    const doneLoad = document.getElementById("doneLoad");
    const oneLoad = document.querySelector(".oneLoad");
    const CW = document.querySelector(".CW");
    setTimeout(() => {
        doneLoad.innerHTML = ("Done 👍🏻");
        oneLoad.classList.add("complete");
        CW.classList.add("complete");
        doneLoad.style.fontSize = "2em";
    },4550)
    setTimeout(() => {
        allBodyAll.classList.remove("remove"); 
        body.classList.remove("loading"); 
        body.classList.add("active-body");
        websiteName.classList.add("submitted");
    }, 5000);
});























//!  FOR  LOGIN  CONTENT  TO   LOGO  CONTENT
//!  FOR  LOGIN  CONTENT  TO   LOGO  CONTENT
//!  FOR  LOGIN  CONTENT  TO   LOGO  CONTENT
//!  FOR  LOGIN  CONTENT  TO   LOGO  CONTENT
//!  FOR  LOGIN  CONTENT  TO   LOGO  CONTENT
//!  FOR  LOGIN  CONTENT  TO   LOGO  CONTENT
//!  FOR  LOGIN  CONTENT  TO   LOGO  CONTENT
//!  FOR  LOGIN  CONTENT  TO   LOGO  CONTENT




















function yourLogo() {
    var logo = document.querySelector(".for");
    var input = document.querySelector(".input");
    var input2 = document.querySelector(".input2");
    var para = document.querySelector(".para");
    var inval = input.value;
    var paratext = input2.value;
    var paralast = para.textContent = paratext;
    var logval = logo.textContent = inval;
}
