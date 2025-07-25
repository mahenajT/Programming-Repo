# Main Tween Methods
### gsap.to() - Animates TO specified values:
```
javascriptsap.to(".box", {duration: 2, x: 100, rotation: 360});
```
### gsap.from() - Animates FROM specified values to current values:

    javascriptgsap.from(".box", {duration: 2, x: 100, opacity: 0});

### gsap.fromTo() - Animates FROM one set of values TO another:
    javascriptgsap.fromTo(".box", 
      {x: 0, opacity: 0}, 
      {duration: 2, x: 100, opacity: 1}
    );

### gsap.set() - Immediately sets values without animation:
    javascriptgsap.set(".box", {x: 100, scale: 2});

# Common Properties
Tweens can animate CSS properties, transforms, and custom properties:
- Position: `x`, `y`, `left`, `top`
- Scale: `scale`, `scaleX`, `scaleY`
- Rotation: `rotation`, `rotationX`, `rotationY`
- Opacity: `opacity`
- Colors: `backgroundColor`, `color`
- And many more

# Tween Configuration
Tweens accept various configuration options:

    javascriptgsap.to(".box", {
      duration: 2,
      x: 100,
      ease: "bounce.out",
      delay: 0.5,
      repeat: 2,
      yoyo: true,
      onComplete: function() {
        console.log("Animation finished");
      }
    });