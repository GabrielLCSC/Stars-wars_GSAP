// gsap.to(".circle", {
//     y:200,
//     backgroundColor : "blue",
//     duration : 5,
//     delay : 1,
//     ease : "bounce",
//     repeat : -1,
//     yoyo: true,
// })

//const timeline = gsap.timeline({repeat : -1, yoyo: true})

// timeline.to(".circle", {x:100})
// timeline.to(".circle", {y:200})
// timeline.to(".circle", {x:300})

const box = document.getElementById('box')
const point = document.getElementById('point')

const luc = document.getElementById('luc')
const r2d2 = document.getElementById('r2d2')
const vador = document.getElementById('vador')
const trooper = document.getElementById('trooper')
const solo = document.getElementById('solo')
const baka = document.getElementById('baka')
const boba = document.getElementById('boba')
const leila = document.getElementById('leila')

let title = document.getElementById('name')
let msg = document.getElementById('msg')


Draggable.create(r2d2,{
    bounds : box,
    type:'x,y',
    onDrag : function(){
        if(this.hitTest(point, '10'))
        console.log('r2d2'), title.innerHTML ='r2d2', msg.innerHTML ='lorem'
    },

    onDragEnd : function(){
        if(!this.hitTest(point, '10'))
        title.innerHTML ='', msg.innerHTML =''
    }
})


Draggable.create(luc,{
    bounds : box,
    type:'x,y',
    onDrag : function(){
        if(this.hitTest(point, '10'))
        console.log('luc'), title.innerHTML ='luc', msg.innerHTML ='lorem'
    },

    onDragEnd : function(){
        if(!this.hitTest(point, '10'))
        title.innerHTML ='', msg.innerHTML =''
    }
})

Draggable.create(vador,{
    bounds : box,
    type:'x,y',
    onDrag : function(){
        if(this.hitTest(point, '10'))
        console.log('vador'), title.innerHTML ='vador', msg.innerHTML ='lorem'
    },

    onDragEnd : function(){
        if(!this.hitTest(point, '10'))
        title.innerHTML ='', msg.innerHTML =''
    }
})

Draggable.create(trooper,{
    bounds : box,
    type:'x,y',
    onDrag : function(){
        if(this.hitTest(point, '10'))
        console.log('trooper'), title.innerHTML ='trooper', msg.innerHTML ='lorem'
    },

    onDragEnd : function(){
        if(!this.hitTest(point, '10'))
        title.innerHTML ='', msg.innerHTML =''
    }
})

Draggable.create(solo,{
    bounds : box,
    type:'x,y',
    onDrag : function(){
        if(this.hitTest(point, '10'))
        console.log('solo'), title.innerHTML ='solo', msg.innerHTML ='lorem'
    },

    onDragEnd : function(){
        if(!this.hitTest(point, '10'))
        title.innerHTML ='', msg.innerHTML =''
    }
})


Draggable.create(baka,{
    bounds : box,
    type:'x,y',
    onDrag : function(){
        if(this.hitTest(point, '10'))
        console.log('baka'), title.innerHTML ='chewbacca', msg.innerHTML ='lorem'
    },

    onDragEnd : function(){
        if(!this.hitTest(point, '10'))
        title.innerHTML ='', msg.innerHTML =''
    }
})

Draggable.create(boba,{
    bounds : box,
    type:'x,y',
    onDrag : function(){
        if(this.hitTest(point, '10'))
        console.log('boba'), title.innerHTML ='boba', msg.innerHTML ='lorem'
    },

    onDragEnd : function(){
        if(!this.hitTest(point, '10'))
        title.innerHTML ='', msg.innerHTML =''
    }
})

Draggable.create(leila,{
    bounds : box,
    type:'x,y',
    onDrag : function(){
        if(this.hitTest(point, '10'))
        console.log('leila'), title.innerHTML ='leila', msg.innerHTML ='lorem'
    },

    onDragEnd : function(){
        if(!this.hitTest(point, '10'))
        title.innerHTML ='', msg.innerHTML =''
    } 
})