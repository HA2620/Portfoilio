
function circleMover(){
    window.addEventListener("mousemove",function(det){
        // console.log(det.clientX);
        document.querySelector("#miniCircle").style.transform = `translate(${det.clientX}px, ${det.clientY}px)`
    });
}
function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,  
    })
        .to(".boundingElem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        stagger:.2,
        delay:-1
    })
    .to(".boundingElemSmall",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        stagger:.2,
        delay:-1.5
    })

    .from(".contFooter",{
        y:-10,
        opacity:0,
        ease:Expo.easeInOut,
            duration:1.5,
            delay:-1
        })
}

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate=0;
    var distX=0;
    elem.addEventListener('mousemove',function(dets){
        var diff = Math.abs(dets.clientY - elem.getBoundingClientRect().top);
        distX  = dets.clientX  - rotate;
        rotate = dets.clientX;
        // console.log(diff);
        
        gsap.to(elem.querySelector('img'),{
            opacity:1,
            ease:Power3,
            top:diff-160,
            left:dets.clientX,
            rotate:gsap.utils.clamp(-15,15,distX)
        });
    });
});
document.querySelectorAll(".elem").forEach(function(elem){
 
    elem.addEventListener('mouseleave',function(dets){
        
        gsap.to(elem.querySelector('img'),{
            opacity:0,
            ease:Power3,
            duration:.5

        });
    });
});
firstPageAnim();
circleMover();

