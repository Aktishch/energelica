import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import ScrollSmoother from "./lib/ScrollSmoother.3.11.5.min.js";



window.addEventListener('DOMContentLoaded', () => loadHandler())


function loadHandler() {
    gsap.registerPlugin(Flip, ScrollTrigger, ScrollSmoother)

    scrollSmootherInit()

    {
        // about
        gsap.from(
            '.about__content',
            {
                xPercent: -50,
                scrollTrigger: {
                    trigger: '.about',
                    start: 'top bottom',
                    end: 'center 80%',
                    scrub: 3
                }
            }
        )
        gsap.from(
            '.about__pack',
            {
                xPercent: 20,
                scrollTrigger: {
                    trigger: '.about',
                    start: 'top bottom',
                    end: 'center 80%',
                    markers: true,
                    scrub: 3
                }
            }
        )
    }
    {
        // approach 
        gsap.from(
            '.approach__content',
            {
                xPercent: 50,
                scrollTrigger: {
                    trigger: '.approach',
                    start: 'top bottom',
                    end: 'center 80%',
                    scrub: 3
                }
            }
        )
        gsap.from(
            '.approach__pack',
            {
                xPercent: -20,
                scrollTrigger: {
                    trigger: '.approach',
                    start: 'top bottom',
                    end: 'center 80%',
                    markers: true,
                    scrub: 3
                }
            }
        )
    }
    {
        // feedback 
        gsap.from(
            '.feedback__content',
            {
                xPercent: -50,
                scrollTrigger: {
                    trigger: '.feedback',
                    start: 'top bottom',
                    end: 'center 80%',
                    scrub: 3
                }
            }
        )
        gsap.from(
            '.feedback__pack',
            {
                xPercent: 20,
                scrollTrigger: {
                    trigger: '.feedback',
                    start: 'top bottom',
                    end: 'center 80%',
                    markers: true,
                    scrub: 3
                }
            }
        )
    }
    {
        // feedback 
        const cards = gsap.utils.toArray('.advantages__card')
        cards.forEach((card, index) => {
            gsap.from(
                card,
                {
                    trigger: card,
                    yPercent: 50,
                    opacity: 0,
                    duration: 1,
                    delay: index / 10,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 95%',
                        markers: true
                    }
                }
            )
        })


    }
}


function scrollSmootherInit() {
    if (ScrollTrigger.isTouch !== 1) {
        window.scrollY = 0
        window.pageYOffset = 0
        ScrollSmoother.create({
            wrapper: '.smooth-wrapper',
            content: '.smooth-content',
            smooth: 3,
            effects: true,
        })
    }




}

