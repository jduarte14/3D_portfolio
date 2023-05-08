import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  flow,
  fenicio,
  carrent,
  jobit,
  tripguide,
  threejs,
  jd,
  vue,

} from "../assets";


import ignacio from './../assets/testimonials/ignacio.jpg';
import emma from './../assets/testimonials/emmanuel.jpg';
import santiago from './../assets/testimonials/santiago.jpg';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Js ",
    icon: web,
  },
  {
    title: "Vue Js",
    icon: mobile,
  },
  {
    title: "Node.js",
    icon: backend,
  },
  {
    title: "Tailwind",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },

  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  }, {
    name: "Vue JS",
    icon: vue,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

];

const experiences = [


  {
    title: "Javascript, Vue Js Developer",
    company_name: "Fenicio",
    icon: fenicio,
    iconBg: "#383E56",
    date: "May 2021 - May 2023",
    points: [
      "I used to create templates for new e-commerce websites, and I was also responsible for maintaining and providing site support.",
      "At that time, I specialized in two departments: Kick-off, where the projects began, and Customer Support, where we ensured the aesthetics and operation of the site, as well as addressing all of the clients' needs and requests.",
      "I also worked on creating new features for the sites, evaluating if they were feasible within the platform and determining how to optimize the code.",
    ],
  },
  {
    title: "Laravel, Vue Js Developer",
    company_name: "Flow Labs",
    icon: flow,
    iconBg: "#E6DEDD",
    date: "Dec 2020 - May 2021",
    points: [
      "I used to specialize in setting up templates for e-commerce websites, utilizing technologies such as Vue.js for front-end development and Laravel for back-end development.", "In addition, I have experience working with SQL databases to manage data.", "Once the websites were launched, I would transition into maintaining and managing them.",
    ],
  },
  {
    title: "Javascript Developer",
    company_name: "Freelance experience",
    icon: jd,
    iconBg: "#383E56",
    date: "May 2020",
    points: [
      "I worked as a freelance web developer, creating websites for e-commerce businesses specializing in home furniture and roof construction.",
      "In addition, I was involved in developing a website for a makeup academy, where I not only created the site but also provided ongoing support for it."
    ],
  },
];

const testimonials = [
  {
    testimonial: " Joaquín is a talented and dependable programmer with a broad range of technical skills that are essential for any web development project.",
    name: "Ignacio Liori",
    designation: "Front-end developer",
    company: "Fenicio",
    image: ignacio
  },
  
  {
    testimonial:"He consistently provided timely solutions and was a tremendous help throughout creating our sites.",
    name: "Santiago Gorga",
    designation: "Project Manager",
    company: "Fenicio",
    image: santiago,
  },
  {
    testimonial:"Joaquin is a meticulous worker and versatile in their programming approach, always striving to innovate with the latest technologies.",
    name: "Emmanuel Quintana",
    designation: "Lead Fullstack Developer",
    company: "Fenicio",
    image: emma,
  },
];



export { services, technologies, experiences, testimonials };