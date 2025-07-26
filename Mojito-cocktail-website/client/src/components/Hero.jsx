import gsap from "gsap";
import { useGSAP } from "@gsap/react"; // GSAP React hook for animations
import { SplitText } from "gsap/all"; // Plugin to split text into chars, words, lines
import { useRef } from "react";
import { useMediaQuery } from "react-responsive"; // Detect mobile or desktop

const Hero = () => {
  const videoRef = useRef(); // Reference to the video element
  const isMobile = useMediaQuery({ maxWidth: 767 }); // true if screen ≤ 767px

  useGSAP(() => {
    // Split the .title text into characters and words for animation
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    // Split the .subtitle text into lines for animation
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    // Add "text-gradient" class to each character for styling before animation
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    // Animate each character of the title from below (yPercent: 100 → 0)
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06, // animate chars one by one
    });

    // Animate each line of the subtitle from below with fade in, starting after 1s delay
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    // Timeline for moving leaf images up/down as user scrolls
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero", // section that triggers scroll animation
          start: "top top", // animation starts when top of #hero hits top of viewport
          end: "bottom top", // ends when bottom of #hero hits top of viewport
          scrub: true, // sync animation progress with scroll position
        },
      })
      .to(".right-leaf", { y: 200 }, 0) // move right leaf down 200px
      .to(".left-leaf", { y: -200 }, 0); // move left leaf up 200px (0 means start at same time)

    // Define scroll trigger start/end for video animation depending on device type
    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    // Video animation timeline - plays video based on scroll progress and pins video element
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video", // target the video element for scroll trigger
        start: startValue, // when animation starts (differs for mobile vs desktop)
        end: endValue, // when animation ends
        scrub: true, // link animation progress to scroll
        pin: true, // pin video in place while scrolling through animation
      },
    });

    // When video metadata (like duration) loads, animate video playback time from 0 to full duration
    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration, // play video progress from start to end synced with scroll
      });
    };
  }, []); // run only once on mount

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on out menu is a blend of premium ingredients,
                creative, flair, and timeless recipes - designed to delight your
                senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
      {/* Video positioned absolutely behind content */}
      <div className="absolute video inset-0">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
