// Animation variant for fading in from a direction
export const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };
};

// Used to stagger multiple child elements
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
 