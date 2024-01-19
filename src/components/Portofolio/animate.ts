import { Variants } from "framer-motion";

export const cardVariants: Variants = {
  offScreen: {
    y: 100
  },
  onScreen: {
    y: 0,
    transition: {
      duration: 0.3
    }
  }
}