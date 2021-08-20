// handel animation button

let theButtonAni = document.querySelector('.arwo');

theButtonAni.addEventListener("click", (e) => {

    let theSection = document.querySelector(".features");

    theSection.scrollIntoView({

        behavior : 'smooth'

    })
});

// handel button Show more

// Select the button
const theButtonShow = document.querySelector(".Show-More");
// select all element have hidden class
let theElements = document.querySelectorAll(".hidden");
// select the button hidden
const thebuttonhidden = document.querySelector(".hidden-More");
// handel function click
theButtonShow.addEventListener("click", () => {
    // do loop to access on the all elments
    theElements.forEach(el => el.classList.remove("hidden"));
    // add hidden class on the theButtonShow
    theButtonShow.classList.add("hidden");
});
// handel button hidden
thebuttonhidden.addEventListener("click", _ => {
    // do loop to access on the all elments
    theElements.forEach(el => el.classList.add("hidden"));
    // add hidden class on the theButtonhidden
    thebuttonhidden.classList.add("hidden");
    // remove hidden class from theButtonShow
    theButtonShow.classList.remove("hidden");
})
