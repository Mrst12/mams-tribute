let images = [
    "./assets/images/mam-start.jpg",
    "./assets/images/mam1_dfmg1o.jpg",
    "./assets/images/mam2_p9wvbw.jpg",
    "./assets/images/mam3_jmn60l.jpg",
    "./assets/images/mam4_htvgbn.jpg",
    "./assets/images/mam5_kipmff.jpg",
    "./assets/images/mam6_rzujcb.jpg",
    "./assets/images/mam7_jmt4zk.jpg",
    "./assets/images/mam8_ycuoat.jpg",
    "./assets/images/mam9new_nvvdj1.jpg",
    "./assets/images/mam_bo0jy2.jpg",
    "./assets/images/mam-dawn.jfif",
    "./assets/images/mam-dawn1.jfif",
    "./assets/images/mam-dawn2.jfif",
    "./assets/images/mam-dawn3.jfif",
    "./assets/images/mam-follow.jpg"
]
let num = 0;

function next() {
    let slider = document.getElementById("slider");
    num ++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    let slider = document.getElementById("slider");
    num --;
    if (num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}


// back to top button
const toTopButton = document.getElementById("to-top-button");

//show the button
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopButton.classList.remove("hidden");
    } else {
        toTopButton.classList.add("hidden");
    }
}

//scroll to top
function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


