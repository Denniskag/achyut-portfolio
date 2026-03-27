export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "northeastern",
    degree: "Master of Science in Computer Science",
    institution: "Makerere University",
    location: "Kampala, Uganda",
    startDate: "September 2023",
    endDate: "Decemeber 2025",
  },
  {
    id: "srm",
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    institution: "National Institute of Technology Meghalaya",
    location: "Meghalaya, India",
    startDate: "July 2017",
    endDate: "May 2021",
    //gpa: "8.3/10.00",
  },
];
