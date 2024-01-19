export interface User {
  name: string;
  phone: string;
  email: string;
  experience: Experience[];
  education: Education[];
  skill: Skill[];
  certificate: null;
  portofolio: Portofolio[];
}

export interface Education {
  startDate: Date;
  endDate: Date;
  schoolName: string;
  major: string;
}

export interface Experience {
  startDate: Date;
  endDate: Date;
  role: string;
  company: string;
  description: string;
  listJobDetail: string[];
}

export interface Portofolio {
  startDate: Date;
  endDate: Date | null;
  name: string;
  description: string;
  imageUrl: string[];
  imageHash: string;
  link: string;
}

export interface Skill {
  name: string;
  description: string;
}
