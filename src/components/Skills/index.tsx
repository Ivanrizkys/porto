import Container from "../Container";
import Divider from "../Divider";
import Image from "next/image";
import { MotionDiv } from "../Framer";

interface SkillsProps {
  skils: Array<{
    name: string;
    description: string;
  }>;
}

const Skills = ({ skils }: SkillsProps) => {
  return (
    <Container className="mt-16 md:mt-36">
      <section className="w-full md:w-4/5 mx-auto">
        <Divider
          icon={
            <Image src={"/pencil.png"} alt="pencil" width={26} height={26} />
          }
          title="SKILS"
        />
        <div className="grid min-[578px]:grid-cols-2 gap-4 md:gap-6 justify-items-center mt-14">
          {skils.map((skill, id) => (
            <MotionDiv
              key={id}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: id === 0 ? 0 : 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3, delay: 0 } }}
              className="bg-white rounded-2.5xl py-14 px-8 border border-solid border-bord-100 text-center min-[578px]:text-left"
            >
              <div className="flex justify-center min-[578px]:justify-start">
                <Image
                  src={
                    skill.name === "Website Design"
                      ? "/design.png"
                      : "/coding.png"
                  }
                  alt={skill.name + " image"}
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="mt-5 font-fraunces font-semibold text-2xl md:text-3xl text-primary-200">
                {skill.name}
              </h3>
              <p className="font-mullish font-medium text-secondary-100 text-lg md:text-xl mt-2">
                {skill.description}
              </p>
            </MotionDiv>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Skills;
