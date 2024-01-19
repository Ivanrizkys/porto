import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import data from "../../dummy/data";
import BannerSmall from "@/components/BannerSmall";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ivan - Experience",
  description: "Provide list of experience from Ivan Rizky Saputra",
};

export default function Experiences() {
  return (
    <main>
      <Navbar />
      <BannerSmall title="My Experience" />
      <Experience educations={data.education} works={data.experience} />
    </main>
  );
}
