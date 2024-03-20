let images = [
    "https://res.cloudinary.com/mrst12/image/upload/v1710335798/mams%20tribute/mam6_rzujcb.jpg",
    "https://res.cloudinary.com/mrst12/image/upload/v1710335798/mams%20tribute/mam7_jmt4zk.jpg",
    "https://res.cloudinary.com/mrst12/image/upload/v1710335797/mams%20tribute/mam8_ycuoat.jpg",
    "https://res.cloudinary.com/mrst12/image/upload/v1710338085/mams%20tribute/mam9new_nvvdj1.jpg",
    "https://res.cloudinary.com/mrst12/image/upload/v1710335795/mams%20tribute/mam_bo0jy2.jpg",
    "https://res.cloudinary.com/mrst12/image/upload/c_scale,h_700,w_500/v1710335794/mams%20tribute/mam3_jmn60l.jpg",
    "https://res.cloudinary.com/mrst12/image/upload/c_scale,w_600/v1710335794/mams%20tribute/mam2_p9wvbw.jpg",
    "https://res.cloudinary.com/mrst12/image/upload/v1710335795/mams%20tribute/mam1_dfmg1o.jpg",
    "https://res.cloudinary.com/mrst12/image/upload/c_scale,w_600/v1710335794/mams%20tribute/mam4_htvgbn.jpg",
    "https://res.cloudinary.com/mrst12/image/upload/v1710335794/mams%20tribute/mam5_kipmff.jpg"
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


