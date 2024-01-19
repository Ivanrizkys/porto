import dayjs from "dayjs";
import Container from "../Container";
import Point from "@/icons/Point";
import { MotionDiv, MotionSection } from "../Framer";
import { dividerVariats, sectionVariatns } from "./animate";

interface ExperienceProps {
  educations: Array<{
    startDate: Date;
    endDate: Date;
    schoolName: string;
    major: string;
  }>;
  works: Array<{
    startDate: Date;
    endDate: Date;
    role: string;
    company: string;
    description: string;
    listJobDetail: string[];
  }>;
}

const Experience = ({ educations, works }: ExperienceProps) => {
  return (
    <Container className="mt-16 md:mt-36">
      <MotionSection
        variants={sectionVariatns}
        initial="initial"
        animate="animate"
        className="md:w-4/5 mx-auto"
      >
        <div className="flex flex-col xl:flex-row justify-between gap-8 xl:gap-0 mt-14">
          <div className="xl:w-2/5 flex gap-x-2 justify-center xl:justify-start">
            <h3 className="font-fraunces font-semibold text-3xl text-primary-200">
              Education
            </h3>
          </div>
          <div className="xl:w-3/5">
            {educations.map((education, index) => (
              <div key={index} className="w-full flex gap-5 pb-9">
                <p className="font-mullish font-medium text-lg sm:text-xl text-secondary-100 grow-0 shrink-0 basis-[73px] sm:basis-[190px] text-center">
                  {dayjs(education.startDate).format("MM/YYYY")} to{" "}
                  {dayjs(education.endDate).format("MM/YYYY")}
                </p>
                <div className="py-1 grow-0">
                  <Point />
                  <MotionDiv
                    variants={dividerVariats}
                    initial="offScreen"
                    whileInView="onScreen"
                    viewport={{ once: true }}
                    className={`w-[1px] ${
                      index === 1 ? "bg-white" : "bg-[#CCCCCC]"
                    } mx-auto mt-3`}
                  ></MotionDiv>
                </div>
                <div className="font-mullish text-lg sm:text-xl grid gap-3">
                  <h4 className="font-fraunces text-xl sm:text-2xl text-primary-200i">
                    {education.schoolName}
                  </h4>
                  <p className="text-primary-100">{education.major}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col xl:flex-row justify-between gap-8 xl:gap-0 mt-14">
          <div className="xl:w-2/5 flex gap-x-2 justify-center xl:justify-start">
            <h3 className="font-fraunces font-semibold text-3xl text-primary-200">
              Works
            </h3>
          </div>
          <div className="xl:w-3/5">
            {works.map((work, index) => (
              <div key={index} className="w-full flex gap-5 pb-9">
                <p className="font-mullish font-medium text-lg sm:text-xl text-secondary-100 grow-0 shrink-0 basis-[73px] sm:basis-[190px] text-center">
                  {dayjs(work.startDate).format("MM/YYYY")} to{" "}
                  {dayjs(work.endDate).format("MM/YYYY")}
                </p>
                <div className="py-1">
                  <Point />
                  <MotionDiv
                    variants={dividerVariats}
                    initial="offScreen"
                    whileInView="onScreen"
                    viewport={{ once: true }}
                    className={`w-[1px] ${
                      index === 1 ? "bg-white" : "bg-[#CCCCCC]"
                    } mx-auto mt-3`}
                  ></MotionDiv>
                </div>
                <div className="font-mullish text-lg sm:text-xl grid gap-3">
                  <h4 className="font-fraunces text-xl sm:text-2xl text-primary-200i">
                    {work.role}, {work.company}
                  </h4>
                  <p className="text-primary-100">{work.description}</p>
                  <p className="text-secondary-100">
                    {work.listJobDetail.join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
    </Container>
  );
};

export default Experience;
