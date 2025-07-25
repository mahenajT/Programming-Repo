import React from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
const GsapStagger = () => {

    useGSAP(()=>{
       gsap.to(".stagger-box", {
           y: 200,
           rotation: 360,
           // stagger: 0.1, // 0.1 seconds between when each ".stagger-box" element starts animating
           borderRadius: "100%",
           repeat: -1,
           repeatDelay: 0.5,
           yoyo: true,
           stagger: {
               amount: 1.5,         // Total duration of the stagger. All animations will be spread out across 1.5 seconds.
               grid: [2,1],         // Applies the stagger effect in a grid of 2 rows and 1 column.
               axis: "y",           // Staggering happens vertically (top to bottom).
               ease: 'circ.inOut',  // Easing function that makes the animation smooth at start and end.
               from: 'center'       // Starts staggering from the center of the grid and moves outward.
           }
       })
    },[])

    return (
        <div>
            <main className="container p-5">
                <h1 className="text-4xl font-bold text-white">Gsap Stagger</h1>
                <p className="mt-5 text-gray-500">
                    <code className="text-yellow-500">GSAP stagger</code> is a feature that allows you to apply animations with a staggered delay to a group
                </p>
                <p className="mt-5 text-gray-500">
                    By using the stagger feature in GSAP, you can specify the amount of time to stagger the animations between each element, as well as customize the easing and duration of each individual animation. This enables you to create dynamic and visually appealing effects, such as staggered fades, rotations, movements, and more.
                </p>
                <div className="mt-20">
                    <div className='flex gap-5'>
                        <div className='w-20 h-20 bg-blue-200 rounded-lg stagger-box'></div>
                        <div className='w-20 h-20 bg-blue-300 rounded-lg stagger-box'></div>
                        <div className='w-20 h-20 bg-blue-400 rounded-lg stagger-box'></div>
                        <div className='w-20 h-20 bg-blue-500 rounded-lg stagger-box'></div>
                        <div className='w-20 h-20 bg-blue-600 rounded-lg stagger-box'></div>
                        <div className='w-20 h-20 bg-blue-700 rounded-lg stagger-box'></div>
                        <div className='w-20 h-20 bg-blue-800 rounded-lg stagger-box'></div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default GsapStagger;