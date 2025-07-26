"use client"; // Enables React Server Components with client-side interactivity

import { sliderLists } from "../../constant/index.js"; // Array of cocktail data (name, image, title, description)
import { useRef, useState } from "react"; // React hooks for state and references
import { useGSAP } from "@gsap/react"; // GSAP React hook for animations
import gsap from "gsap"; // Main GSAP animation library

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Keeps track of which cocktail is being shown
  const totalCocktails = sliderLists.length; // Total number of cocktails

  // Function to navigate to a specific slide (wraps around using modulo)
  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  // Helper to get a cocktail at a given offset from current index
  const getCocktailAt = (indexOffset) => {
    return sliderLists[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  // Get current, previous, and next cocktails
  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  const contentRef = useRef(); // Ref used to target an element (not used directly here, maybe for future GSAP animation)

  // GSAP animations triggered every time the `currentIndex` changes
  useGSAP(() => {
    // Fade in the cocktail name/title
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });

    // Slide in the cocktail image from the left with fade
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      { opacity: 1, xPercent: 0, duration: 1, ease: "power1.inOut" }
    );

    // Animate the heading and paragraph into view from below
    gsap.fromTo(
      ".details h2",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details p",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, ease: "power1.inOut" }
    );
  }, [currentIndex]); // Runs the animation whenever `currentIndex` changes

  return (
    <section id="menu" aria-labelledby="menu-heading">
      {/* Decorative leaf images on the sides */}
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />

      {/* Accessible heading for screen readers */}
      <h2 id="meanu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      {/* Navigation buttons for each cocktail name */}
      <nav className="cocktail-tabs" aria-label="Cocktail Nav">
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex; // Check if the tab is active
          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => {
                goToSlide(index); // Navigate to clicked cocktail
              }}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        {/* Navigation arrows with preview of previous and next cocktail names */}
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Current cocktail image */}
        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain" />
        </div>

        {/* Cocktail description and name */}
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>
          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
