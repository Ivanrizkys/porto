import { Variants } from "framer-motion";

export const dividerRightVariants: Variants = {
  offScreen: {
    width: 0,
  },
  onScreen: {
    width: "100%",
    transition: {
      duration: 1.5,
    },
  },
};

export const dividerLeftVariants: Variants = {
  offScreen: {
    width: "100%",
  },
  onScreen: {
    width: 0,
    transition: {
      duration: 1.5,
    },
  },
};
