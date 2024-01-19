import { ReactNode } from "react";
import { MotionDiv } from "../Framer";
import { dividerLeftVariants, dividerRightVariants } from "./animate";

interface DividerProps {
  title: string;
  icon: ReactNode;
}

const Divider = ({ title, icon }: DividerProps) => {
  return (
    <div className="w-full flex items-center gap-x-7">
      <div className="basis-full h-8 border-r border-solid border-r-bord-200 flex items-center">
        <div className="h-[1px] w-full bg-bord-200">
          <MotionDiv
            variants={dividerLeftVariants}
            initial="offScreen"
            whileInView="onScreen"
            className="h-[1px] bg-white"
          ></MotionDiv>
        </div>
      </div>
      <div className="flex items-center gap-x-2 shrink-0 grow-0">
        {icon}
        <h2 className="font-mullish text-lg md:text-xl font-bold text-secondary-300">
          {title}
        </h2>
      </div>
      <div className="basis-full h-8 border-l border-solid border-l-bord-200 flex items-center">
        <MotionDiv
          variants={dividerRightVariants}
          initial="offScreen"
          whileInView="onScreen"
          className="h-[1px] bg-bord-200"
        ></MotionDiv>
      </div>
    </div>
  );
};

export default Divider;
