import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const GsapFrom = () => {
  // TODO: Implement the gsap.fromTo() method
  useGSAP(() => {
    gsap.fromTo(
      "#redBox",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },

      {
        x: 500,
        repeat: -1,
        yoyo: true,
        rotation: 360,
        duration: 2,
        borderRadius: "100%",
        ease: "back.out",
      }
    );
  }, []);

  return (
    <main className="container p-5">
      <h1 className="text-4xl font-bold text-white">GsapFromTo</h1>
      <p className="mt-5 text-gray-500">
        The <code className="text-yellow-500">gsap.fromTo()</code> method is
        used to animate elements from a new state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code className="text-yellow-500">gsap.fromTo()</code> method is
        similar to the
        <code className="text-yellow-500"> gsap.from()</code> and{" "}
        <code className="text-yellow-500">gsap.to()</code> methods, but the
        difference is that the{" "}
        <code className="text-yellow-500">gsap.fromTo()</code> method animates
        from a new state to a new state, while the{" "}
        <code className="text-yellow-500">gsap.from()</code> method animates
        element from a new state to their current state, and the{" "}
        <code className="text-yellow-500">gsap.to()</code> method animates
        element from their current state to a new state.
      </p>
      <div className="mt-20">
        <div id="redBox" className="w-20 h-20 bg-red-400 rounded-lg"></div>
      </div>
    </main>
  );
};

export default GsapFrom;
