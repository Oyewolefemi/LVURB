// Import GSAP
import { gsap } from "https://cdn.skypack.dev/gsap";

// Hero Section Text Animations
window.addEventListener("load", () => {
  // Animate the title
  gsap.from("#hero-title", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power4.out",
  });

  // Animate the subtitle with a delay
  gsap.from("#hero-subtitle", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    ease: "power4.out",
  });

  // Animate the button with a delay
  gsap.from("#hero-button", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 1,
    ease: "elastic.out(1, 0.3)",
  });
});

// Image Transition Animation
const images = document.querySelectorAll(".hero-image");
let currentImageIndex = 0;

function transitionImages() {
  const currentImage = images[currentImageIndex];
  const nextImageIndex = (currentImageIndex + 1) % images.length;
  const nextImage = images[nextImageIndex];

  // Fade out the current image
  gsap.to(currentImage, {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  // Fade in the next image
  gsap.to(nextImage, {
    opacity: 1,
    duration: 1,
    ease: "power2.in",
    onComplete: () => {
      currentImageIndex = nextImageIndex;
      setTimeout(transitionImages, 3000); // Transition every 3 seconds
    },
  });
}

// Start image transition loop
transitionImages();
