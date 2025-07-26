import React from "react";
import { openingHours, socials } from "../../constant/index.js"; // Import hours and social links
import { useGSAP } from "@gsap/react"; // React hook to use GSAP inside React
import { SplitText } from "gsap/all"; // SplitText plugin (for animating words separately)
import gsap from "gsap"; // GSAP main animation library

const Contact = () => {
  useGSAP(() => {
    // Split the h2 heading into individual words (for word-by-word animation)
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    // Create a GSAP timeline that starts when the #contact section enters the viewport
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact", // Triggers when #contact section scrolls into view
        start: "top center", // Animation starts when top of #contact hits center of screen
      },
      ease: "power1.inOut", // Easing for smooth animation
    });

    // Animate each word of the title from bottom to top with fade
    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02, // animate each word with a delay
      })
      // Then animate h3 and p tags with similar effect
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      // Then move the right leaf upward
      .to("#f-right-leaf", {
        y: "-50px",
        duration: 1,
        ease: "power1.inOut",
      })
      // Then move the left leaf upward at the same time ("<" means start at same time as previous)
      .to(
        "#f-left-leaf",
        {
          y: "-50px",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  }, []); // Empty dependency array: runs only once on mount

  return (
    <footer id="contact">
      {/* Decorative leaf images for visual styling */}
      <img
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-left-leaf"
      />

      {/* Footer content section */}
      <div className="content">
        <h2>Where to Find Us</h2>

        {/* Location info */}
        <div>
          <h3>Visit our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        {/* Contact info */}
        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>hello@cocktail.com</p>
        </div>

        {/* Opening hours from data */}
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        {/* Social media icons from data */}
        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
