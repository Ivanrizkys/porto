import { User } from "../dto";

const data: User = {
  name: "Ivan",
  phone: "085702330305",
  email: "ivnriizky@gmail.com",
  experience: [
    {
      startDate: "2022-11-19" as unknown as Date,
      endDate: "2023-02-19" as unknown as Date,
      role: "Frontend Engineer Intern",
      company: "Maven Digital Asia",
      description: "Develop and maintain website in frontend side",
      listJobDetail: [
        "Create and maintain a company profile landing page",
        "Develop dashboard applications for hotel and bar needs in Tan Group",
        "Develop a website for buying and selling medicines at pharmacies",
      ],
    },
    {
      startDate: "2022-02-02" as unknown as Date,
      endDate: "2023-09-02" as unknown as Date,
      role: "Frontend Engineer Intern",
      company: "KodingWorks",
      description: "Develop and maintain website in frontend side",
      listJobDetail: [
        "Build a web KIOSK",
        "Build open source websites dedicated to charitable causes, such as Kitabisa.com",
        "Assist the senior developer to refactor the project from the old codebase",
      ],
    },
  ],
  education: [
    {
      startDate: "2020-08-03" as unknown as Date,
      endDate: "2024-02-07" as unknown as Date,
      schoolName: "Universitas Islam Negeri Walisongo Semarang",
      major: "Information Technology",
    },
    {
      startDate: "2017-07-03" as unknown as Date,
      endDate: "2026-06-03" as unknown as Date,
      schoolName: "Sekolah Menengan Atas Negeri 1 Sukorejo",
      major: "Science and Mathematic",
    },
  ],
  skill: [
    {
      name: "Website Development",
      description:
        "In the realm of Website Development, I bring forth a comprehensive skill set honed through years of experience. Proficient in both front-end and back-end technologies, I specialize in crafting visually compelling and responsive user interfaces using HTML5, CSS3, and JavaScript",
    },
    {
      name: "Website Design",
      description:
        "In the dynamic realm of website design, my skill set is a fusion of creativity, user-centricity, and technical proficiency. Armed with a keen eye for aesthetics, I specialize in crafting visually compelling and intuitive user interfaces that elevate the overall user experience.",
    },
  ],
  certificate: null,
  portofolio: [
    {
      startDate: "2023-03-10" as unknown as Date,
      endDate: null,
      name: "Nuegash",
      description:
        "This is a portfolio dashboard website designed to implement the Pickolab Studio's visual style. The website is built using React and Supabase, with additional support from libraries such as Redux Toolkit, Apollo GraphQL, TailwindCSS, Framer Motion, and others. Currently, the website is in the development stage, and additional features, such as chat, themes, and internationalization, will be added in the future.",
      imageUrl: ["/nuegash.png"],
      imageHash: "",
      link: "https://github.com/Ivanrizkys/nuegash-dashboard",
    },
    {
      startDate: "2023-12-22" as unknown as Date,
      endDate: null,
      name: "Movies",
      description:
        "This is a website that show list movies that Ivan Rizky Saputra has watched to date. This website build using NextJs App dir and Framer Motion",
      imageUrl: ["/movies.png"],
      imageHash: "",
      link: "https://github.com/Ivanrizkys/movies",
    },
    {
      startDate: "2022-03-22" as unknown as Date,
      endDate: "2023-04-05" as unknown as Date,
      name: "Nuntium Blog",
      description:
        "This is a website blog template made with NextJs and TailwindCss. Contain multiple page that can make reading become more fun",
      imageUrl: ["/nuntium.png"],
      imageHash: "",
      link: "https://github.com/Ivanrizkys/nuegash-dashboard",
    },
    {
      startDate: "2022-03-22" as unknown as Date,
      endDate: null,
      name: "Kampusin",
      description:
        "This website provides a list of universities in Indonesia for high school students. You can see the name of the university and its address. Click on the name to go to the campus official website",
      imageUrl: ["/kampusin.png"],
      imageHash: "",
      link: "https://github.com/ninedotslabs/kampusin",
    },
  ],
};

export default data;
