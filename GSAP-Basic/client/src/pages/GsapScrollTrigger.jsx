import {ScrollTrigger} from "gsap/all";
import gsap from "gsap";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)


const GsapScrollTrigger = () => {
    // 1. Create a React ref to target the scrollable container
    const scrollRef = useRef();

    // 2. Run the GSAP animation when the component mounts (with GSAP context cleanup using useGSAP)
    useGSAP(() => {
        // 3. Convert all child elements of the scrollRef container into an array
        const boxes = gsap.utils.toArray(scrollRef.current.children);

        // 4. Loop through each box and apply individual animations
        boxes.forEach((box) => {
            gsap.to(box, {
                x: 300,                    // Move element 300px to the right
                rotation: 360,            // Rotate the element fully (360 degrees)
                borderRadius: "100%",     // Make it a circle
                scale: 1.5,               // Scale it up by 1.5x
                duration: 2,              // Animation duration (only matters if no scrub)
                scrollTrigger: {
                    trigger: box,         // Each element triggers its own animation
                    start: "bottom bottom", // Animation starts when bottom of element hits bottom of viewport
                    end: "top 10%",       // Animation ends when top of element reaches 10% of viewport height
                    scrub: true           // Links animation progress to scroll position (smooth transition)
                },
                ease: 'power1.inOut'      // Smooth easing for in/out animation
            });
        });
    }, [{ scope: scrollRef }]); // 5. Attach scrollRef to the GSAP context for cleanup


    return (
        <>
            <main className="container p-5">
                <h1 className="text-4xl font-bold text-white">Gsap Scroll Trigger</h1>
                <p className="mt-5 text-gray-500">
                    Gsap Scroll Trigger is a <span className='text-yellow-500'>plugin</span> that allows you to create animations that are triggered by the scroll position of the page.
                </p>
                <p className="mt-5 text-gray-500">
                    With ScrollTrigger, you can define various actions to be triggered at specific scroll points, such as starting or ending an animation, scrubbing through animations as the user scrolls, pinning elements to the screen, and more.
                </p>
                <div className='w-full h-[70vh] flex justify-center items-center flex-col'>
                    <p className='text-center text-gray-300'>
                        Scroll down to see the animation.
                    </p>
                    <svg
                        className="animate-bounce mt-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="blue"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {/* Vertical line */}
                        <path d="M12 5v14"/>

                        {/* Arrowhead */}
                        <path d="M19 12l-7 7l-7-7"/>
                    </svg>

                </div>
                <div className="mt-20 w-full h-screen" ref={scrollRef}>
                    <div id="purpleBox" className=" scrollBox mb-4 w-20 h-20 bg-purple-500 rounded-lg"/>
                    <div id="orangeBox" className=" scrollBox w-20 h-20 bg-orange-500 rounded-lg"/>
                </div>
            </main>
        </>
    );
};

export default GsapScrollTrigger;