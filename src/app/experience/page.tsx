import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import BannerSmall from "@/components/BannerSmall";
import { Metadata } from "next";
import { getUser } from "@/service/index";

export const metadata: Metadata = {
  title: "Ivan - Experience",
  description: "Provide list of experience from Ivan Rizky Saputra",
};

export default async function Experiences() {
  const data = await getUser()
  
  return (
    <main>
      <Navbar />
      <BannerSmall title="My Experience" />
      <Experience educations={data.education} works={data.experience} />
    </main>
  );
}
