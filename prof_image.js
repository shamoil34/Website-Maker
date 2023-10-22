const image = document.querySelector("#Default_img");
const bx = document.querySelector("#bx_prof");

var input = document.querySelector("#file");

image.classList.add("none");

input.addEventListener("change", () => {
    image.src = URL.createObjectURL(input.files[0]);
    image.classList.remove("none");
    bx.classList.remove("bx");
    bx.classList.remove("bxs-user");



    var imageSrc = image.src;

    localStorage.setItem("profile_image", imageSrc);
});

image.src = localStorage.getItem("profile_image");