import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  // TODO: Implement the gsap.to() method
  useGSAP(() => {
    gsap.to("#blueBox", {
      x: 280,
      repeat: -1,
      yoyo: true,
      duration: 1,
      rotation: 360,
    });
  }, []);

  return (
    <main className="container p-5">
      <h1 className="text-4xl font-bold text-white">GsapTo</h1>
      <p className="mt-5 text-gray-500">
        The <code className="text-yellow-500">gsap.to()</code> method is used to
        animate elements from their current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code className="text-yellow-500">gsap.to()</code> method is similar
        to the <code className="text-yellow-500">gsap.from()</code> method, but
        the difference is that the{" "}
        <code className="text-yellow-500">gsap.to()</code> method animates from
        their current state to a new state, while the{" "}
        <code className="text-yellow-500">gsap.from()</code> method animates
        element from a new state to their current state.
      </p>
      <div className="mt-20">
        <div id="blueBox" className="w-20 h-20 bg-blue-200 rounded-lg"></div>
      </div>
    </main>
  );
};

export default GsapTo;
