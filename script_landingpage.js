/*typewriter */

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  deleteSpeed: 25,
  loop: true,
})
  .changeDelay(25)
  .typeString('<span style="color: green">HTML</span>')
  .pauseFor(2000)
  .deleteChars(4)
  .typeString('<span style="color: #fb8500">CSS</span>')
  .pauseFor(2000)
  .deleteChars(3)
  .typeString('<span style="color: yellow">Javascript</span>')
  .pauseFor(2000)
  .deleteChars(10)
  .typeString('<span style="color: purple">PHP</span>')
  .pauseFor(2000)
  .start();



/*dark mode */
function switchStyle(style) {
  var css = document.getElementById("mycss").getAttribute("href");
  var path = document.getElementById("mypath").getAttribute("d");
  console.log(css);
  if (css === "./style1/style.css") {
    document.getElementById("mycss").setAttribute("href", "./style2/style.css");
    document
      .getElementById("mypath")
      .setAttribute(
        "d",
        "M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z"
      );
  } else {
    document.getElementById("mycss").setAttribute("href", "./style1/style.css");
    document
      .getElementById("mypath")
      .setAttribute(
        "d",
        "M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"
      );
  }
}
/*switchside */
function switchSide() {
  var left = document.getElementById("leftside");
  var right = document.getElementById("rightside");
  console.log(left);
  console.log(right);
  right.classList.toggle("lefts");
  left.classList.toggle("rights");
}

/* pop fade */

const effect = document.querySelector("nav");
const form = document.querySelector("form");
const advantages = document.querySelector(".avantages");
const titlle = document.querySelector(".title");

window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true });
  TL.staggerFrom(
    effect,
    1,
    {
      top: -100,
      ease: "power2.out",
    },
    0.3
  )
    .from(
      advantages,
      2,
      {
        opacity: 0,
        width: -50,
        ease: "power2.out",
      },
      0.6
    )
    .from(
      form,
      1,
      {
        opacity: 0,
        ease: "power2.out",
      },
      "-=2"
    )

    .from(
      titlle,
      1,
      {     
        opacity: 0,
        ease: "power2.out",
      },
      "-=1"
    )
    


  TL.play();
});
