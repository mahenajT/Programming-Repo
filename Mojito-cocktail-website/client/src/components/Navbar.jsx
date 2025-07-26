import { navLinks } from "../../constant/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top", // when the bottom of the navbar reaches the top of the viewport
      },
    });
    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        duration: 1,
        backdropFilter: "blur(10px)",
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav>
      <div>
        <a href="#hero" className="flex items-center justify-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
