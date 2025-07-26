import React from "react";
import { featureLists, goodLists } from "../../constant/index.js";
import { useGSAP } from "@gsap/react"; // React hook for using GSAP inside components
import { useMediaQuery } from "react-responsive"; // Hook to detect screen size
import gsap from "gsap"; // Main GSAP animation library

const Art = () => {
  // Detect if the screen width is less than or equal to 767px (mobile)
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Run GSAP animation when the component is mounted
  useGSAP(() => {
    // Set different scroll trigger start positions depending on device
    const start = isMobile ? "top 20%" : "top top";

    // Create a timeline with scrollTrigger
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",      // The element that triggers the animation
        start,                // When the top of #art hits top/top OR top/20% of viewport
        end: "bottom center", // When the bottom of #art hits center of viewport
        scrub: 1.5,           // Smooth scrubbing effect while scrolling
        pin: true,            // Pins the section during the animation
      },
    });

    // Timeline steps:
    maskTimeline
      // Fade out all elements with class "will-fade" one after another
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      // Zoom in the masked image and change its mask properties
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      // Fade in the masked content area
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  });

  // Component UI
  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        {/* Section Title */}
        <h2 className="will-fade">The Art</h2>

        {/* Main Content */}
        <div className="content">
          {/* First Feature List */}
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          {/* Center Image with Mask */}
          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          {/* Second Feature List */}
          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Masked Reveal Content */}
        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn't just a drink. It's a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
