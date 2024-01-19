import Logo from "@/icons/Logo";
import Container from "../Container";
import Link from "next/link";
import Arrow from "@/icons/Arrow";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 bg-white w-full">
      <Container className="flex items-center justify-between w-full mx-auto py-7">
        <Logo />
        <Link
          href="/experience"
          className="flex items-center gap-x-4 font-mullish text-xl font-semibold"
        >
          Experience
          <Arrow variant="small" stroke="#2A2C32" className="-rotate-90" />
        </Link>
      </Container>
    </nav>
  );
};

export default Navbar;
