export const zoomInLeft = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { ease: "ease", duration: 0.8 },
  },

  //   initial: { opacity: 0, scale: 0.8, x: -100 },
  //   whileInView: { opacity: 1, scale: 1, x: 0 },
  //   transition: (delay = 0) => ({
  //     duration: 0.6,
  //     delay,
  //     ease: "easeOut",
  //   }),
};

export const zoomInRight = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.8 },
  },
};

export const fadeUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { ease: "easeIn", duration: 0.8 },
  },

  //   initial: { opacity: 0, y: 50 },
  //   whileInView: { opacity: 1, y: 0 },
  //   transition: (delay = 0) => ({
  //     duration: 0.6,
  //     delay,
  //     ease: "easeIn",
  //   }),
};

export const fadeDown = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.8 },
  },

  //   initial: { opacity: 0, y: -50 },
  //   whileInView: { opacity: 1, y: 0 },
  //   transition: (delay = 0) => ({
  //     duration: 0.6,
  //     delay,
  //     ease: "easeOut",
  //   }),
};

export const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.8 },
  },
};
