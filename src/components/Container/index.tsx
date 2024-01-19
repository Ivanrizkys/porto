import { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`container px-5 sm:px-12 lg:px-[100px] ${className} mx-auto`}
    >
      {children}
    </div>
  );
};

export default Container;
