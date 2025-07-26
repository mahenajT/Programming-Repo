import React from "react";
import { cocktailLists, mockTailLists } from "../../constant/index.js"; // Data arrays for cocktails and mocktails
import { useGSAP } from "@gsap/react"; // GSAP hook for React
import gsap from "gsap"; // GSAP core library

const Cocktails = () => {
  useGSAP(() => {
    // Create a GSAP timeline linked to scroll position (parallax effect)
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails", // The element that triggers the animation
        start: "top 30%", // Start animation when top of #cocktails hits 30% down viewport
        end: "bottom 80%", // End animation when bottom hits 80% down viewport
        scrub: true, // Smoothly sync animation progress with scroll position
      },
    });

    // Animate left leaf moving from x: -100 (left) and y: 100 (down) to its natural position
    parallaxTimeline.from("#c-left-leaf", {
      x: -100,
      y: 100,
    });

    // Animate right leaf moving from x: 100 (right) and y: 100 (down) to natural position
    parallaxTimeline.from("#c-right-leaf", {
      x: 100,
      y: 100,
    });
  });

  return (
    <section id="cocktails" className="noisy">
      {/* Decorative leaf images with IDs to target in animations */}
      <img
        src="/images/cocktail-left-leaf.png"
        alt="cocktail-left-leaf"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="cocktail-right-leaf"
        id="c-right-leaf"
      />

      {/* List container */}
      <div className="list">
        {/* Popular cocktails section */}
        <div className="popular">
          <h2>Most popular cocktails:</h2>
          <ul>
            {/* Map over cocktailLists array to create list items */}
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                {/* Price shown with dash */}
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Loved mocktails section */}
        <div className="loved">
          <h2>Most loved mocktails:</h2>
          <ul>
            {/* Map over mockTailLists array to create list items */}
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                {/* Price shown with dash */}
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
