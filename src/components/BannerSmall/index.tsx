import Link from "next/link";
import Container from "../Container";
import Arrow from "@/icons/Arrow";

interface BannerSmallProps {
  title: string;
}

const BannerSmall = ({ title }: BannerSmallProps) => {
  return (
    <Container>
      <div className="mt-24 py-28 bg-left bg-hero-lg bg-no-repeat bg-cover sm:bg-center rounded-2.5xl overflow-hidden p-2">
        <Link
          href="/"
          className="text-secondary-300 font-mullish font-bold text-lg flex items-center justify-center gap-x-2"
        >
          <Arrow variant="small" stroke="#2A2C32" className="rotate-90" />
          Back To Home
        </Link>
        <h1 className="font-fraunces font-semibold text-5xl text-primary-200 text-center mt-6">
          {title}
        </h1>
      </div>
    </Container>
  );
};

export default BannerSmall;
