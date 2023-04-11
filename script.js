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
        console.log('r2d2'), title.innerHTML ='R2-D2', msg.innerHTML ='A resourceful and loyal astromech droid, R2-D2 served Padmé Amidala, Anakin Skywalker and Luke Skywalker in turn, showing great bravery in rescuing his masters and their friends from many perils. '
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
        console.log('luke'), title.innerHTML =' Luke Skywalker', msg.innerHTML ='Luke Skywalker is the main protagonist of the Star Wars original trilogy. The son of famous Jedi Knight Anakin Skywalker, he was left on Tatooine with his aunt and uncle after the fall of the Jedi Order. 19 years later, he encountered former Jedi Master Obi-Wan Kenobi (Under the alias "Ben Kenobi") and joined the Rebel Alliance to bring down the Galactic Empire.'
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
        console.log('vador'), title.innerHTML ='Darth Vader', msg.innerHTML ='Darth Vader is a Dark Lord of the Sith and the apprentice of Emperor Palpatine, ruler of the Galactic Empire. Vader was once the esteemed Jedi Knight Anakin Skywalker, whose unparalleled midichlorian count labeled him as the Chosen One destined to bring balance to the Force. However, the numerous tragedies he suffered during his service to the Jedi Order in the Clone Wars took their toll on Skywalker, making the young knight desperate to find a way to protect his lover Padme Amidala. This opened the Chosen One to the manipulations of Darth Sidious, who turned the newly christened Vader against the Jedi Order, slaughtering numerous Jedi and their younglings as part of Order 66.'
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
        console.log('trooper'), title.innerHTML ='Stormtrooper  ', msg.innerHTML ='A Stormtrooper was a member of the elite shock troops in the Imperial Army, placed under the Stormtrooper Corps, the land-based forces of the Galactic Empire\'s Imperial Army. They were particularly distinguished by their loyalty to the Emperor Sheev Palpatine, the founder of the Empire, and were reputedly incapable of betraying either him or the Imperial regime.'
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
        console.log('solo'), title.innerHTML ='Han Solo', msg.innerHTML ='Han Solo was one of the many smugglers that worked during the Galactic Empire\'s reign over the galaxy.<br>He and his pal, Chewbacca, ended up getting involved with the Rebellion when they were hired by Luke and Obi-Wan to transport them to Alderaan. But it turned out that the planet was destroyed by The Death Star, and they ended up boarding the space station.'
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
        console.log('baka'), title.innerHTML ='Chewbacca', msg.innerHTML ='Chewbacca is a Wookie born on Kashyyyk 200 years before the Battle of Yavin. Chewbacca fought in the Clone Wars on the Republic\'s side, but when The Galactic Empire was formed he was turned into a slave. Years later, Han saved him from slavery and since Chewbacca owed him a life debt, he decided to accompany Han on his smuggling adventures.'
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
        console.log('Boba Fett'), title.innerHTML ='boba', msg.innerHTML ='Boba Fett is a human with Mandalorian armor and a bounty hunter. He is a clone of the famed Jango Fett and became a bounty hunter after the death of his father at the hands of Mace Windu. He would try and take his revenge on Windu but would ultimately fail. During the Empire\'s rule, he would often work very closely with Darth Vader and Jabba the Hutt and would even bring the famed Han Solo in carbonite to Jabba.'
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
        console.log('leila'), title.innerHTML ='Leia Organa', msg.innerHTML ='Leia Organa was a Force-sensitive human female who served as the princess of Alderaan, a member of the Imperial Senate, a leader in the Alliance to Restore the Republic and New Republic, and the founding general of the Resistance, she was instrumental alongside her brother Luke Skywalker and comrade and later husband Han Solo in defeating the Empire’s forces on Endor. In the legends timeline, she would become a Jedi knight and serve the New Republic against the forces of Yuuzhan Vong and her very own son Jacen.'
    },

    onDragEnd : function(){
        if(!this.hitTest(point, '10'))
        title.innerHTML ='', msg.innerHTML =''
    } 
})