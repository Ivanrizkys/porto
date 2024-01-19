import ScrollButton from "@/icons/ScrollButton";
import Container from "../Container";
import Link from "next/link";

interface BannerProps {
  name: string;
}

const Banner = ({ name }: BannerProps) => {
  return (
    <Container>
      <div
        style={{ backgroundImage: `url(/banner-background.svg)` }}
        className="w-full rounded-2.5xl mt-24 py-32 px-2 bg-cover"
      >
        <div className="flex justify-center">
          <div>
            <h1 className="font-fraunces text-5xl min-[455px]:text-6xl md:text-8xl font-semibold text-primary-200 animate-type-cursor overflow-hidden text-nowrap border-r-4 border-solid border-primary-200 mx-auto">
              Hi, I{"'"}m {name}!
            </h1>
          </div>
        </div>
        <p className="w-full max-w-[581px] text-center font-mullish font-medium text-3xl md:text-5xl text-primary-200 mx-auto mt-4">
          a <span className="text-tertiary-100">Frontend Developer</span>{" "}
          specialize in <span className="text-primary-100">React</span> and{" "}
          <span className="text-primary-200">NextJs</span>
        </p>
        <div className="flex justify-center mt-14">
          <Link href="#project-section" className="animate-bounce">
            <ScrollButton />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
