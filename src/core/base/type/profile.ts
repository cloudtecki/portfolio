export interface ICertification {
  id: string;
  name: string;
  issuer: string;
  dateIssued: Date;
  validUntil?: Date | null;
}

export interface ICertificationFormValues
  extends Omit<ICertification, 'id' | 'dateIssued' | 'validUntil'> {
  dateIssued: string;
  validUntil?: string | null;
}

export interface IProject {
  id: string;
  isFeatured: boolean;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  teamSize: number;
  image?: string;
  role: string;
  domain: string;
  responsibilities: string[];
  tools: string[];
  technologies: string[];
  demo?: string;
  github?: string;
}

export interface IProjectFormValues
  extends Omit<IProject, 'id' | 'startDate' | 'endDate'> {
  startDate: string;
  endDate: string;
}

export interface IExperience {
  id: string;
  jobTitle: string;
  company: string;
  designation: string;
  location: string;
  startDate: Date;
  endDate: Date;
  responsibilities: string;
  achievements: [];
}

export interface IExperienceFormValues
  extends Omit<IExperience, 'id' | 'startDate' | 'endDate'> {
  startDate: string;
  endDate: string;
}

export interface IEducation {
  id: string;
  degree: string;
  institution: string;
  startDate: Date;
  endDate: Date;
  fieldOfStudy: string;
}

export interface IEducationFormValues
  extends Omit<IEducation, 'id' | 'startDate' | 'endDate'> {
  startDate: string;
  endDate: string;
}

export interface ISummaryFormValues {
  roleTitle: string;
  email: string;
  phone: string;
  location: string;
  address: string;
  firstName: string;
  lastName: string;
  objective: string;
  summary: string;
}

export interface IProfile {
  id: string;
  summary: ISummaryFormValues;
  skillCategories: {
    title: string;
    skills: { name: string; level: number }[];
  }[];
  certifications: ICertification[];
  projects: IProject[];
  experience: IExperience[];
  education: IEducation[];
}
