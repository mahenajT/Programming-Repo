import { useGSAP } from "@gsap/react"; // GSAP React hook for animation
import { SplitText } from "gsap/all"; // GSAP plugin to split text for animation
import gsap from "gsap"; // GSAP core library

const About = () => {
  useGSAP(() => {
    // Split the h2 text inside #about into separate words for animation
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    // Create a GSAP timeline triggered by scrolling to #about section
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about", // Element that triggers the animation
        start: "top center", // Start animation when top of #about hits center of viewport
      },
    });

    scrollTimeline
      // Animate the words of the title from invisible & below to visible and in place
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02, // Animate words one by one quickly
      })
      // Animate the divs inside .top-grid and .bottom-grid to fade in with stagger,
      // starting 0.5 seconds before the previous animation ends (negative delay)
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });

  return (
    <div id="about">
      {/* Text content section */}
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of out obsession with
              detail - from the first muddle to the final garnish. That case is
              what turns a simple drink into something truly memorable
            </p>
            <div>
              <p className="md:3xl test-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +1200 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top grid of images */}
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="grid-img-5 " />
        </div>
      </div>

      {/* Bottom grid of images */}
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-3 " />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-4 " />
        </div>
      </div>
    </div>
  );
};

export default About;
