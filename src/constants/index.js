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
  vue
} from "../assets";

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
    title: "Vue Js",
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

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },


];

const experiences = [


  {
    title: "Vanilla Javascript Vue Js Developer",
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
    title: "Freelance Vanilla JS Developer",
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
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };