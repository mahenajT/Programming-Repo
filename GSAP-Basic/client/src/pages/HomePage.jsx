import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div className='container mx-auto '>
            <h1 className='text-5xl text-gray-200 my-8 text-center'>GSAP</h1>
            <ul className='home my-7 gap-6 flex items-center flex-col'>
                <li className='w-full text-center py-7 cursor-pointer'>
                    <Link to='/gsapTo' className='text-3xl li text-white'>Gsap To</Link>
                </li>
                <li className='w-full text-center py-7 cursor-pointer'>
                    <Link to='/gsapFrom' className='text-3xl li text-white'>Gsap From</Link>
                </li>
                <li className='w-full text-center py-7 cursor-pointer'>
                    <Link to='/gsapFromTo' className='text-3xl li text-white'>Gsap FromTo</Link>
                </li>
                <li className='w-full text-center py-7 cursor-pointer'>
                    <Link to='/gsapTimeline' className='text-3xl li text-white'>Gsap Timeline</Link>
                </li>
                <li className='w-full text-center py-7 cursor-pointer'>
                    <Link to='/gsapStagger' className='text-3xl li text-white'>Gsap Stagger</Link>
                </li>
                <li className='w-full text-center py-7 cursor-pointer'>
                    <Link to='/gsapScrollTrigger' className='text-3xl li text-white'>Gsap ScrollTrigger</Link>
                </li>
                <li className='w-full text-center py-7 cursor-pointer'>
                    <Link to='/gsapText' className='text-3xl li text-white'>Gsap Text</Link>
                </li>

            </ul>
        </div>
    );
};

export default HomePage;