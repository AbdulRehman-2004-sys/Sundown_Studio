// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

// var fixed_img = document.querySelector("#fixed-image")
// document.querySelector(".pro-features").addEventListener("mouseenter",()=>
// {
//     fixed_img.style.display = "block";
// })
// document.querySelector(".pro-features").addEventListener("mouseleave",()=>
// {
//     fixed_img.style.display = "none";
// })

// var elems = document.querySelectorAll(".feature")
// elems.forEach((e)=>
// {
//     e.addEventListener("mouseenter",()=>
//     {
//         // alert("lol");
//         var attr = e.getAttribute("data-image");
//         console.log(attr);
//         fixed_img.style.backgroundImage = `url(${attr})`
//     })
// })


// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: "auto",
//     centeredSlides: true,
//     // spaceBetween: 70,
//   });

//   var gola = document.querySelector(".gola")
//   document.querySelector(".swiper").addEventListener("mousemove",(dets)=>
//   {
//     gola.style.left = dets.x-60 + "px";
//     gola.style.top = dets.y-400 + "px";
//     gola.style.display = "block";
//   })
//   document.querySelector(".swiper").addEventListener("mouseleave",(dets)=>
//   {
//     gola.style.display = "none";
//   })



//   var h1s = document.querySelectorAll(".btn-group h1")
//   var bc_img = document.querySelector(".right-cont-swip")
//   var paragraph = document.querySelector(".paragraph")

// h1s.forEach((e)=>
// {
//     e.addEventListener("click",()=>
//     {
//         var att = e.getAttribute("data-imge");
//         var p = e.getAttribute("data-para");
//         bc_img.style.backgroundImage = `url(${att})`
//         paragraph.innerHTML = p;
//     })
// })


// var loader = document.querySelector("#loader")
// setTimeout(()=>
// {
//     loader.style.top = "-100%";
// },4000)


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()

