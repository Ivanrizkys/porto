import { Variants } from "framer-motion";

export const dividerVariats: Variants = {
  offScreen: {
    height: 0,
  },
  onScreen: {
    height: "100%",
    transition: {
      duration: 1.5,
    },
  },
};

export const sectionVariatns: Variants = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};
