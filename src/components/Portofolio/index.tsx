import Image from "next/image";
import Container from "../Container";
import Divider from "../Divider";
import dayjs from "dayjs";
import Link from "next/link";
import Arrow from "@/icons/Arrow";
import { MotionDiv } from "../Framer";
import { cardVariants } from "./animate";

interface PortofolioProps {
  projects: Array<{
    startDate: Date;
    endDate: Date | null;
    name: string;
    description: string;
    imageUrl: string[];
    imageHash: string;
    link: string;
  }>;
}

const Portofolio = ({ projects }: PortofolioProps) => {
  return (
    <Container className="mt-16 md:mt-36">
      <section id="project-section" className="w-full md:w-4/5 mx-auto">
        <Divider
          icon={<Image src={"/pin.png"} alt="pencil" width={26} height={26} />}
          title="PROJECT"
        />
        <div className="grid grid-cols-1 min-[570px]:grid-cols-2 gap-8 mt-14">
          {projects.map((project, index) => (
            <MotionDiv
              key={index}
              variants={cardVariants}
              initial="offScreen"
              whileInView="onScreen"
              className="font-mullish text-secondary-100 font-medium text-lg md:text-xl"
            >
              <div className="rounded-2.5xl overflow-hidden w-full aspect-[1/0.5] relative group">
                <Image
                  src={project.imageUrl[0]}
                  fill
                  alt={project.name + " image"}
                  className="object-cover duration-500 transition-transform group-hover:scale-110"
                />
              </div>
              <p className="mt-7">
                {project.name === "Kampusin" ? "Teams" : "Ivan"} -{" "}
                {dayjs(project.startDate).format("MMMM DD, YYYY")}
              </p>
              <h4 className="font-fraunces text-primary-200 font-semibold text-2xl md:text-3xl mt-3">
                {project.name}
              </h4>
              <p className="mt-5 mb-11 line-clamp-3">{project.description}</p>
              <Link
                href={project.link}
                className="text-primary-200 font-bold text-base md:text-lg flex gap-[6px] items-center"
              >
                Source Code
                <Arrow
                  variant="small"
                  stroke="#FF774D"
                  className="-rotate-[131deg]"
                />
              </Link>
            </MotionDiv>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Portofolio;
