import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";

import experience1 from "../assets/experience/experience1.png"
import experience2 from "../assets/experience/experience2.png"
import firm1 from "../assets/education/NIT.avif"
export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "SmartJourney",
    image: project1,
    link:"https://github.com/Sunilsahoo100/Travel-planner",
    description:
      "A travel planner application designed to help users organize and customize their trips with ease. It provides tools to create itineraries, manage bookings, and discover destinations for a seamless travel experience.",
    technologies: ["HTML", "CSS", "React.js", "Firebase","Shadcn","Google MAP API", "Tailwind CSS"],
  },
  {
    title: "Chat App",
    image: project2,
    link:"https://github.com/Sunilsahoo100/Chat-Application",
    description:
      "A real-time chat application that enables seamless communication through instant messaging, supporting features like group chats and multimedia sharing. Designed for fast, secure, and user-friendly interactions across various devices.",
    technologies: ["React.js", "Node.js","Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
  },
  {
    title: "Bill Management",
    image: project3,
    link:"https://github.com/Sunilsahoo100/Bill-Management",
    description:
      "A React and Redux-based application to manage monthly bills, allowing manual addition, editing, removal, and filtering of bills by category. The app includes a bill dashboard, a time-series chart of the monthly billing cycle.",
    technologies: ["React.js", "Redux","HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Company charts",
    image: project4,
    link:"https://github.com/Sunilsahoo100/company-charts",
    description:
      "An effective medium for weather monitoring and management. Our system provides users with real-time weather updates and detailed forecasts, allowing them to plan their activities accordingly.",
    technologies: ["HTML", "CSS", "React.js", "chart.js"],
  },
  {
    title: "Sukoon",
    image: project5,
    link:"https://github.com/Sunilsahoo100/Sukoon",
    description:"Sukoon is a stress-relief website offering tools like playlists, podcasts, and articles to help manage and reduce daily stress. Whether you need a quick break or a relaxing nightly routine, Sukoon provides resources tailored to your stress-relief needs.",
    technologies: ["HTML", "CSS", "Javascript"],
  }
];

export const CONTACT = {
  address: "Raid Bazar, Nimapada, Puri, Odisha, india, 752114",
  phoneNo: "+91 7978994311 ",
  email: "sunilksahoo100@gmail.com",
};

export const EDUCATION = [
  {
    image:firm1,
    year: "2021-2025",
    field: "B.Tech in Electrical Engineering",
    firm: "National Institute of Technology, Rourkela",
   grade : "CGPA : 7.59",
    
  }
  
];
export const EXPERIENCE = [
  {
    image:experience1,
    year: "May 2024 - July 2024",
    company: "Qualibar",
    role: "Trainee Engineer",
    description: "Backend Engineer with expertise in Node.js, Express.js, and MongoDB, experienced in developing and optimizing APIs, enhancing backend performance, and managing scalable database operations to deliver efficient and robust solutions.",
    
  },
  {
    image:experience2,
    year: "March 2024 - May 2024",
    company: "Write Sonic",
    role: "Software Developer Intern",
    description: "Expertise in React.js, focused on creating responsive interfaces, integrating components, and enhancing user experience in collaborative development environments.",
  }
  
];