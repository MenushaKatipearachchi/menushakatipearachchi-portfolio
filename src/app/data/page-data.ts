export type ExperienceItem = {
  icon: string;
  role: string;
  company: string;
  location: string;
  startLabel: string;
  endLabel: string;
  bulletPoints: string[];
};

export type EducationItem = {
  date: string;
  title: string;
  subtitle: string;
};

export type Publication = {
  title: string;
  venue: string;
  doi: string;
  url: string;
};

export type Reference = {
  name: string;
  role: string;
  phone: string;
  email: string;
};

export type ProjectOverviewData = {
  publication: Publication;
  references: Reference[];
};

export const experienceData: ExperienceItem[] = [
  {
    icon: "/images/icon/spark-icon.svg",
    role: "Associate Software Engineer",
    company: "LB Finance PLC Corporate Office",
    location: "Sri Lanka",
    startLabel: "Apr 2025",
    endLabel: "Present",
    bulletPoints: [
      "Systematized 4 core insurance workflows that were previously manual: quotation, application response, policy response, and renewal.",
      "Engineered renewal-notice ingestion from external insurers and reconciled matched versus unmatched records against internal data.",
      "Extended the Deposit Module and helped launch Mudarabah as an additional product.",
      "Partnered with a 6-member team to deliver backend logic, UI/UX components, Dotnet services, and T-SQL stored procedures.",
    ],
  },
  {
    icon: "/images/icon/tailwind-icon.svg",
    role: "Software Engineering Intern",
    company: "Lanka Electricity Company (Pvt) Ltd",
    location: "Sri Lanka",
    startLabel: "Dec 2023",
    endLabel: "Apr 2025",
    bulletPoints: [
      "Built RESTful APIs in Spring Boot and connected RabbitMQ-based SMS processing.",
      "Produced unit tests and API documentation for core service endpoints.",
      "Tuned PL/SQL queries and resolved Java and Spring Boot defects to improve service reliability.",
      "Coordinated API deployments through WSO2 Identity Server.",
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    date: "2021 - 2024",
    title: "BSc (Hons) in Information Technology",
    subtitle:
      "Sri Lanka Institute of Information Technology (SLIIT) - Specializing in Software Engineering",
  },
  {
    date: "2017 - 2020",
    title: "GCE Ordinary Level and Advanced Level",
    subtitle: "Royal Institute International School",
  },
];

export const projectOverviewData: ProjectOverviewData = {
  publication: {
    title: "Intelligent Systems for Comprehensive Dog Management",
    venue: "ICIT '24",
    doi: "10.1145/3718391.3727886",
    url: "https://doi.org/10.1145/3718391.3727886",
  },
  references: [
    {
      name: "Udara Bandara",
      role: "Associate Technical Lead, LB Finance",
      phone: "(+94) 76 906 7246",
      email: "udarab@lbfinance.lk",
    },
    {
      name: "Mahesh Dunuweera",
      role: "Chief Engineer, Lanka Electricity Company (Pvt) Ltd",
      phone: "(+94) 71 016 8151",
      email: "mahesh.dunuweera@leco.lk",
    },
  ],
};
