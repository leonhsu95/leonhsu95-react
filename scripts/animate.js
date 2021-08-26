// gsap.registerPlugin(ScrollTrigger);
gsap.from('#creativity-banner-scroll', {duration: 1, x: '30%', ease: 'power1.out', opacity: 0});

gsap.from(".contact-box", {
y: '-50%', 
opacity: 0, 
delay: 1.5,
scrollTrigger: ".contact-box",
});

gsap.to(".contact-box",{
    
    delay: 1.5,
    ease: "power3.inOut",
    
});

gsap.from(".skills-box", {
    y: '-50%', 
    opacity: 0, 
    delay: 1.5,
    // scrollTrigger: ".skills-box",
});
    
gsap.to(".skills-box",{
        
        delay: 3,
        ease: "power3.inOut",
        
});

timeline = gsap.timeline({scrollTrigger: "#portfolio"});
timeline
.from("#project0", { 
    y: "-10%",
    opacity: 0, 
    delay: 1,
})
.to("#project0",{
    opacity: 100, 
    ease: "power2.inOut",
    
}, 1)
    .from("#project1", { 
        y: "-10%",
        opacity: 0, 
        delay: 1,
    })
    .to("#project1",{
        opacity: 100, 
        ease: "power2.inOut",
        
    }, 2)
    .from("#project2", { 
        y: "-10%",
        opacity: 0, 
    })
    .to("#project2",{
        opacity: 100, 
        ease: "power2.inOut",
        
    }, 3) 
    .from("#project3", { 
        y: "-10%",
        opacity: 0, 
    })
    .to("#project3",{
        opacity: 100, 
        ease: "power2.inOut",
        
    }, 4)
    .from("#project4", { 
        y: "-10%",
        opacity: 0, 
    })
    .to("#project4",{
        opacity: 100, 
        ease: "power2.inOut",
        
    }, 5) 
    .from("#project5", { 
        y: "-10%",
        opacity: 0, 
    })
    .to("#project5",{
        opacity: 100, 
        ease: "power2.inOut",
        
    }, 6) 
    .from("#project6", { 
        y: "-10%",
        opacity: 0, 
    })
    .to("#project6",{
        opacity: 100, 
        ease: "power2.inOut",
        
    }, 7)
    .from("#project7", { 
        y: "-10%",
        opacity: 0, 
    })
    .to("#project7",{
        opacity: 100, 
        ease: "power2.inOut",
        
    }, 8)
    .from("#project8", { 
        y: "-10%",
        opacity: 0, 
    })
    .to("#project8",{
        opacity: 100, 
        ease: "power2.inOut",
        
    }, 9)

    .from("#project9", { 
        y: "-10%",
        opacity: 0, 
    })
    .to("#project9",{
        opacity: 100, 
        ease: "power2.inOut",
        
    }, 10)

    .from("#project10", { 
        y: "-10%",
        opacity: 0, 
    })
    .to("#project10",{
        opacity: 100, 
        ease: "power2.inOut",
        
    }, 11)
    .from("#project11", { 
        y: "-10%",
        opacity: 0, 
        delay: 1,
    })
    .to("#project11",{
        opacity: 100, 
        ease: "power2.inOut",
        
    }, 12);

