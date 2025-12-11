import {
  AwsIcon,
  CssIcon,
  DockerIcon,
  DynatraceIcon,
  GitIcon,
  GithubIcon,
  HtmlIcon,
  ItilIcon,
  JavaScriptIcon,
  JenkinsIcon,
  LinuxIcon,
  PythonIcon,
  ServiceNowIcon,
  ShellScriptIcon,
  SqlIcon,
  CiCdIcon
} from "@/components/icons/TechIcons";

export const personalInfo = {
  name: "Naman Jain",
  role: "DevOps Engineer",
  tagline: "Bridging Development and Operations with Code and Cloud.",
  location: "Sagar",
  email: "naman7564@gmail.com",
  phone: "8719939020",
  linkedin: "https://www.linkedin.com/in/naman-jain-7a410b253",
};

export const profileSummary = "I am a motivated and enthusiastic DevOps fresher with practical understanding of cloud technologies and Linux environment. I am familiar with tools such as Git, Docker, and Jenkins, and have a strong interest in learning and applying modern DevOps practices. My passion for improving system reliability drives me to tackle challenges with effective solutions while collaborating within teams.";

export const experience = [
  {
    role: "Junior DevOps Intern",
    company: "WithAspire Netexis Private Limited, Sagar",
    period: "2023–2024",
    responsibilities: [
      { text: "Version Control: Git, GitHub – used for project code management", icon: GithubIcon },
      { text: "Cloud & Deployment: AWS EC2 – deployed applications and managed instances", icon: AwsIcon },
      { text: "CI/CD Tools: Jenkins, GitHub Actions – set up automated workflows", icon: JenkinsIcon },
      { text: "Containerization: Docker – created and managed containers", icon: DockerIcon },
      { text: "Scripting & Programming: Python, SQL – developed scripts and database projects", icon: PythonIcon },
      { text: "Web Development: HTML, CSS, JavaScript – built personal portfolio website", icon: HtmlIcon },
      { text: "Monitoring Tools: Dynatrace – monitored application performance", icon: DynatraceIcon },
      { text: "Operating Systems: Linux – worked with Linux commands and environment", icon: LinuxIcon },
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  university: "Manipal University Jaipur",
  period: "2023 – 2026",
};

export const skills = [
  {
    category: "DevOps & Cloud",
    items: [
      { name: "AWS", icon: AwsIcon },
      { name: "Git", icon: GitIcon },
      { name: "GitHub", icon: GithubIcon },
      { name: "Jenkins", icon: JenkinsIcon },
      { name: "Docker", icon: DockerIcon },
      { name: "CI/CD", icon: CiCdIcon },
      { name: "ServiceNow ITMS", icon: ServiceNowIcon },
      { name: "ITIL", icon: ItilIcon },
    ],
  },
  {
    category: "Programming & Scripting",
    items: [
      { name: "Python", icon: PythonIcon },
      { name: "Shell Scripting", icon: ShellScriptIcon },
      { name: "SQL", icon: SqlIcon },
    ],
  },
  {
    category: "Web Technologies",
    items: [
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
      { name: "JavaScript", icon: JavaScriptIcon },
    ],
  },
  {
    category: "Monitoring",
    items: [{ name: "Dynatrace", icon: DynatraceIcon }],
  },
  {
    category: "Operating Systems",
    items: [{ name: "Linux", icon: LinuxIcon }],
  },
];

export const strengths = [
  "Problem-solving",
  "Adaptability",
  "Collaboration",
  "Quick Learner",
];

export const languages = [
  { name: "English", proficiency: "Professional" },
  { name: "Hindi", proficiency: "Native" },
];

export const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
]
