// Importing GSAP's React hook and core library
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Component for demonstrating GSAP timeline animations
const GsapTimeline = () => {

    // Create a GSAP timeline to sequence multiple animations
    // `repeat: -1` makes it loop forever
    // `yoyo: true` plays the animation forward then backward
    const timeline = gsap.timeline({
        repeat: -1,
        yoyo: true,
    });

    // useGSAP is a special hook from GSAP for React apps
    // This runs once after the component loads (just like useEffect)
    useGSAP(() => {
        // First animation: Move box to the right, rotate, and make it a circle
        timeline.to("#pinkBox", {
            x: 250,
            rotation: 360,
            borderRadius: "100%",
            duration: 2,
            ease: "back.inOut", // Makes the movement bounce slightly
        });

        // Second animation: Move down, scale up, rotate, stay circular
        timeline.to("#pinkBox", {
            y: 250,
            scale: 2,
            rotation: 360,
            borderRadius: "100%",
            duration: 2,
            ease: "back.inOut",
        });

        // Third animation: Move more to the right, shrink a bit, turn square
        timeline.to("#pinkBox", {
            x: 500,
            scale: 1.3,
            rotation: 360,
            borderRadius: "8px",
            duration: 2,
            ease: "back.inOut"
        });
    }, []); // empty array = run only once on mount

    // ==============================
    // JSX UI Rendering Starts Here
    // ==============================
    return (
        <main className="container p-5">
            {/* Page Heading */}
            <h1 className="text-4xl font-bold text-white">Gsap Timeline</h1>

            {/* Paragraph explaining gsap.timeline() */}
            <p className="mt-5 text-gray-500">
                The <code className="text-yellow-500">gsap.timeline()</code> method is
                used to create a timeline instance that helps manage multiple
                animations in sequence.
            </p>

            {/* Detailed explanation with comparison */}
            <p className="mt-5 text-gray-500">
                The <code className="text-yellow-500">gsap.timeline()</code> method is
                similar to
                <code className="text-yellow-500"> gsap.to()</code>,{" "}
                <code className="text-yellow-500">gsap.from()</code>, and{" "}
                <code className="text-yellow-500">gsap.fromTo()</code>. <br />
                The difference is:{" "}
                <code className="text-yellow-500">gsap.timeline()</code> lets you
                combine and sequence multiple animations together, while the other
                methods handle one animation at a time.
            </p>

            {/* Play/Pause Button */}
            <div className="mt-20 space-y-10">
                <button
                    onClick={() => {
                        // Toggle animation play/pause
                        if (timeline.paused()) {
                            timeline.play();
                        } else {
                            timeline.pause();
                        }
                    }}
                    className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
                >
                    Play / Pause
                </button>
            </div>

            {/* The animated box */}
            <div className="mt-20">
                <div id="pinkBox" className="w-20 h-20 bg-pink-600 rounded-lg"></div>
            </div>
        </main>
    );
};

export default GsapTimeline;
