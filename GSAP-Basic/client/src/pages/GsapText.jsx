import React from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
const GsapText = () => {

    useGSAP(()=>{
        gsap.to(".text", {
            ease: "power1.inOut",
            opacity: 1,
            y:0
        })
        gsap.fromTo(".para",
            {opacity: 0, y: 20},
            {opacity: 1, y: 0, stagger: 0.1}
        )
    }, [])


    return (
        <>
            <main className="flex h-screen   justify-center flex-col container p-5">
                <h1 className="text translate-y-11 text-4xl font-bold text-white opacity-0 ">Text Animation</h1>
                <p className="mt-5 text-gray-500 para">
                    We can use same method like <code className="text-yellow-500">gsap.to()</code>, <code
                    className="text-yellow-500">gsap.from()</code> and <code className="text-yellow-500">gsap.fromTo()</code> to animate text.
                </p>
                <p className="mt-5 text-gray-500 para">
                    Using these methods we can achieve various text animations and effects like fade in, fade out, slide in, slide out, and many more.
                </p>
                <p className="mt-5 text-gray-500 para">
                    For more advanced test animations and effects, you can explore the GSAP TextPlugin or other third-party libraries that specialize in text animations
                </p>
            </main>

        </>
    );
};

export default GsapText;