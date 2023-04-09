// gsap.to(".circle", {
//     y:200,
//     backgroundColor : "blue",
//     duration : 5,
//     delay : 1,
//     ease : "bounce",
//     repeat : -1,
//     yoyo: true,
// })

const timeline = gsap.timeline({repeat : -1, yoyo: true})

timeline.to(".circle", {x:100})
timeline.to(".circle", {y:200})
timeline.to(".circle", {x:300})