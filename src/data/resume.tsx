import { Icons } from "@/components/icons";
import { HomeIcon, InstagramIcon } from "lucide-react";

export const DATA = {
  name: "Reynald Faidzilah Ahmad",
  initials: "RF",
  url: "https://hello-reynald.vercel.app/",
  location: "Magetan, Indonesia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Frontend Developer passionate about crafting sleek, high-performance UIs with React, Next.js, and React Native—obsessed with clean code, smooth animations, and modern design. 🚀",
  summary:
    "At the end of 2022, I decided to switch careers into tech, [diving into frontend development through e-courses and bootcamps](/#education). After six months of intense learning, [I picked up tons of skills and knowledge](/#skills). By 2023, I started my career as a professional Frontend Developer, [working with multiple companies](/#experience). Now, with 2 years of experience, [I’ve built various apps and websites—ranging](/#work) from personal projects and portfolio pieces to full-scale production apps.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Vite",
    "Typescript",
    "Node.js",
    "Express.js",
    "TailwindCSS",
    "Framer Motion",
    "React Native",
    "PostgreSQL",
    "Firebase",
    "GSAP",
    "Three.js",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/reynald-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/reynald-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,

        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
      instagram: {
        name: "Instagram",
        url: "https://dub.sh/reynald-instagram",
        icon: InstagramIcon,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "HaluApp",
      badges: [],
      href: "https://halu.app/",
      location: "Voza Tower 16D, Jl HR. Muhammad No. 31, Surabaya",
      title: "Frontend Developer",
      logoUrl: "/haluapp.png",
      start: "Feb 2024",
      end: "Now",
      description:
        "Focus on integrating RESTful APIs, optimizing performance, and ensuring code maintainability. Proficient in debugging critical issues, implementing unit tests with Jest, and enhancing UI/UX using Tailwind CSS. Successfully integrated Xendit payment gateway for secure transactions, contributing to seamless user interactions and application stability.",
    },
    {
      company: "PT Viapulsa Global Indonesia",
      href: "https://viapulsa.co.id/",
      badges: [],
      location:
        "Jl. Rejosari II No 64, Ngalalangan, Sardonoharjo, Ngaglik, Sleman, DI Yogyakarta 55581",
      title: "Frontend Developer",
      logoUrl: "/viapulsa.png",
      start: "Mar 2023",
      end: "Feb 2024",
      description:
        "Building responsive web applications with React.js and Material-UI, integrating RESTful APIs and real-time data communication using WebSocket. Skilled in creating interactive data visualizations with Chart.js and contributing to mobile app development with React Native and Expo. Adept at debugging critical issues, enhancing application stability, and collaborating in Agile teams to deliver high-quality features efficiently.",
    },
    {
      company: "Machine Vision Indonesia",
      href: "https://www.machinevision.global/",
      badges: [],
      location:
        "The Samator Office Building Lt. 2 Unit 02-12, Jl. Raya Kedung Baruk No. 26-28, Rungkut, Surabaya",
      title: "Frotend Developer (Freelance)",
      logoUrl: "/machine.png",
      start: "Dec 2023",
      end: "Sep 2024",
      description:
        "Integrating RESTful APIs, developing reusable component libraries in Storybook, and ensuring application stability through efficient bug resolution. Adept at collaborating in Agile environments with cross-functional teams to deliver high-quality features and improvements efficiently.",
    },
  ],
  education: [
    {
      school: "Binar Academy",
      href: "https://www.binar.co.id/",
      degree: "Full Stack Web Developer (Bootcamp)",
      logoUrl: "/binar.jpg",
      start: "Sep 2022",
      end: "Mar 2023",
      description:
        "A dedicated Fullstack Web Developer with hands-on experience in frontend and backend technologies, gained through an intensive bootcamp. Proficient in building responsive and high-performing web applications, from UI/UX design to database management. Passionate about problem-solving and continuously refining skills to contribute to innovative tech solutions.",
    },
    {
      school: "Dicoding",
      href: "https://www.dicoding.com/",
      degree: "Frontend Developer (E-course)",
      logoUrl: "/dicoding.jpg",
      start: "Aug 2022",
      end: "Oct 2022",
      description:
        "Completed an intensive online education program at Dicoding, specializing in frontend and backend web development. Gained expertise in React.js for crafting interactive user interfaces and managing application state, along with a strong understanding of backend technologies, including servers and databases. Applied knowledge through diverse projects, building a solid foundation in fullstack development. Passionate about continuous learning and contributing to innovative tech solutions.",
    },
  ],
  projects: [
    {
      title: "CarePulse",
      href: "https://care-pulse-wheat.vercel.app/",
      dates: "Apr 2025",
      active: true,
      description:
        "A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Appwrite",
        "Shadcn UI",
        "Twilio",
      ],
      links: [
        {
          type: "Website",
          href: "https://care-pulse-wheat.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/renalfa/care-pulse",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://firebasestorage.googleapis.com/v0/b/mock-test-b4d31.appspot.com/o/Cover.png?alt=media&token=7ce8594c-0ef8-4ae9-a582-07acca1cdb9b",
      video: "",
    },
    {
      title: "Ethereal",
      href: "https://ethereal-sigma.vercel.app/",
      dates: "Jan 2025",
      active: true,
      description:
        "Ethereal is a sleek, futuristic Web3 platform with seamless wallet connectivity, stunning design landing page.",
      technologies: [
        "React.js",
        "Typescript",
        "Wagmi",
        "TailwindCSS",
        "Aceternity UI",
        "Shadcn UI",
        "Magic UI",
        "Three.js",
        "Framer Motion",
        "GSAP",
      ],
      links: [
        {
          type: "Website",
          href: "https://ethereal-sigma.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/renalfa/ethereal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://firebasestorage.googleapis.com/v0/b/np-v1-b94f5.appspot.com/o/video%2FScreen%20Recording%202025-03-13%20at%2009.56.16.mov?alt=media&token=3068ff20-921d-4cea-8ad5-96006bce6635",
    },
    {
      title: "Apple Website Clone",
      href: "https://apple-web-gray.vercel.app/",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Cloned the Apple website using React, TailwindCSS, and Three.js.",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
        "GSAP",
        "Three.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://apple-web-gray.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/renalfa/apple-web",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://firebasestorage.googleapis.com/v0/b/np-v1-b94f5.appspot.com/o/video%2FScreen%20Recording%202025-03-13%20at%2009.44.17.mov?alt=media&token=41013eae-0dcf-4fa4-969d-49cd25bbb90c",
    },
    {
      title: "Game Store",
      href: "https://vocatest.vercel.app/",
      dates: "Nov 2024",
      active: true,
      description:
        "Top up gaming website, with payment flow and track your orders features.",
      technologies: [
        "Next.js",
        "Typescript",
        "Zustand",
        "TailwindCSS",
        "React Hook Form",
        "Zod",
      ],
      links: [
        {
          type: "Website",
          href: "https://vocatest.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/renalfa/vocatest",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://firebasestorage.googleapis.com/v0/b/np-v1-b94f5.appspot.com/o/video%2FScreen%20Recording%202025-03-13%20at%2010.12.32.mov?alt=media&token=4569b15b-37c4-4837-a812-147252e64c39",
    },
    {
      title: "NW Laptop Madiun",
      href: "https://www.nwlaptopmadiun.com",
      dates: "Apr 2024 - May 2024",
      active: true,
      description:
        "NW Laptop Madiun is an catalog website for laptops and accessories. Includes the CMS for managing products and orders.",
      technologies: [
        "Next.js",
        "Typescript",
        "Firebase",
        "Zustand",
        "TailwindCSS",
        "Daisy UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.nwlaptopmadiun.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://firebasestorage.googleapis.com/v0/b/np-v1-b94f5.appspot.com/o/video%2FScreen%20Recording%202025-03-13%20at%2010.03.24.mov?alt=media&token=754e7128-878d-454e-90c8-9d77a5fd6685",
    },
  ],
  certificates: [
    {
      title: "Problem Solving (Basic) Certificate",
      dates: "18 Mar 2025",
      location: "from Hackerrank",
      description:
        "It covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching).",
      image: "/hackerrank.png",
      links: [
        {
          title: "See Certificate",
          icon: <Icons.link className="h-4 w-4" />,
          href: "https://www.hackerrank.com/certificates/f189033f25a8",
        },
      ],
    },
    {
      title: "Frontend Developer (React) Certificate",
      dates: "29 Oct 2024",
      location: "from Hackerrank",
      description: "It covers topics like React, CSS, and JavaScript.",
      image: "/hackerrank.png",
      links: [
        {
          title: "See Certificate",
          icon: <Icons.link className="h-4 w-4" />,
          href: "https://www.hackerrank.com/certificates/83f72a86f6e7",
        },
      ],
    },
    {
      title: "React (Basic) Certificate",
      dates: "29 Oct 2024",
      location: "from Hackerrank",
      description:
        "React (Basic) It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.",
      image: "/hackerrank.png",
      links: [
        {
          title: "See Certificate",
          icon: <Icons.link className="h-4 w-4" />,
          href: "https://www.hackerrank.com/certificates/b9df7b3321b1",
        },
      ],
    },
    {
      title: "Fullstack Developer Certificate",
      dates: "5 Apr 2023",
      location: "from Binar Academy",
      description:
        "Has Successfully Completed Binar Academy Bootcamp Fullstack Developer Program.",
      image: "/binar.jpg",
      links: [
        {
          title: "See Certificate",
          icon: <Icons.link className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1LYPRdRNuR2mdRAXmANWVcw9jhEEiCecp/view",
        },
      ],
    },
    {
      title: "Bootcamp Final Report",
      dates: "5 Apr 2023",
      location: "from Binar Academy",
      description:
        "My final report from Binar Academy Bootcamp Fullstack Developer Program.",
      image: "/binar.jpg",
      links: [
        {
          title: "See Certificate",
          icon: <Icons.link className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1BnNquzl56yXxXn7mXe616Q-xO3XmAzib/view",
        },
      ],
    },
    {
      title: "Beginner Back-End Certificate",
      dates: "27 Mar 2023",
      location: "from Dicoding",
      description:
        "This course introduces back-end development with Javascript, covering Node.js fundamentals, RESTful API creation, deployment on Amazon EC2, and API testing with Postman.",
      image: "/dicoding.jpg",
      links: [
        {
          title: "See Certificate",
          icon: <Icons.link className="h-4 w-4" />,
          href: "https://www.dicoding.com/certificates/6RPNW3K25P2M",
        },
      ],
    },
    {
      title: "Front-End Web Beginners Certificate",
      dates: "12 Sep 2022",
      location: "from Dicoding",
      description:
        "This course covers the Browser Object Model (BOM) and Document Object Model (DOM), focusing on JavaScript manipulation. It also explores event handling for interactivity and web storage APIs for data persistence.",
      image: "/dicoding.jpg",
      links: [
        {
          title: "See Certificate",
          icon: <Icons.link className="h-4 w-4" />,
          href: "https://www.dicoding.com/certificates/QLZ9KMLGEZ5D",
        },
      ],
    },
    {
      title: "Web Programming Basics Certificate",
      dates: "6 Sep 2022",
      location: "from Dicoding",
      description:
        "This course introduces website development, covering client-server concepts, HTML for structuring content, and CSS for styling. It delves into advanced HTML elements, semantic structuring, and in-depth CSS techniques like selectors, box model, positioning, and media queries. Responsive design using Flexbox is also explored, culminating in a hands-on website project.",
      image: "/dicoding.jpg",
      links: [
        {
          title: "See Certificate",
          icon: <Icons.link className="h-4 w-4" />,
          href: "https://www.dicoding.com/certificates/NVP7K2JDOZR0",
        },
      ],
    },
    {
      title: "Web Application (Basics) with React Certificate",
      dates: "6 Des 2022",
      location: "from Dicoding",
      description:
        "This course introduces React, its ecosystem, and core concepts like composition, declarative code, and unidirectional data flow. It covers building reusable UI components, component properties, and managing state using class components and controlled components.",
      image: "/dicoding.jpg",
      links: [
        {
          title: "See Certificate",
          icon: <Icons.link className="h-4 w-4" />,
          href: "https://www.dicoding.com/certificates/1RXYO158QPVM",
        },
      ],
    },
    {
      title: "Web Application (Fundamentals) with React Certificate",
      dates: "15 Des 2022",
      location: "from Dicoding",
      description:
        "This course covers essential React concepts, including prop validation with PropTypes, client-side routing with React Router, and lifecycle methods for handling asynchronous processes. It also explores global state management with React Context and writing cleaner functional components using React Hooks.",
      image: "/dicoding.jpg",
      links: [
        {
          title: "See Certificate",
          icon: <Icons.link className="h-4 w-4" />,
          href: "https://www.dicoding.com/certificates/EYX49VM1JPDL",
        },
      ],
    },
    {
      title: "JavaScript Programming Basics Certificate",
      dates: "15 Des 2022",
      location: "from Dicoding",
      description:
        "This course introduces JavaScript fundamentals, covering variables, data structures, functions, and programming paradigms like OOP and functional programming. It explores modules, error handling, concurrency, and setting up a development environment with Node.js. Additional topics include managing dependencies with NPM and JavaScript testing for code reliability.",
      image: "/dicoding.jpg",
      links: [
        {
          title: "See Certificate",
          icon: <Icons.link className="h-4 w-4" />,
          href: "https://www.dicoding.com/certificates/81P28NDWYPOY",
        },
      ],
    },
    {
      title: "Programming Logic 101 Certificate",
      dates: "18 Jan 2023",
      location: "from Dicoding",
      description:
        "This course introduces basic programming logic, logic gates, and computational thinking techniques like decomposition, pattern recognition, abstraction, and algorithm writing. It concludes with real-world applications of programming logic.",
      image: "/dicoding.jpg",
      links: [
        {
          title: "See Certificate",
          icon: <Icons.link className="h-4 w-4" />,
          href: "https://www.dicoding.com/certificates/JLX1L5926X72",
        },
      ],
    },
    {
      title: "Git with GitHub Certificate",
      dates: "18 Jan 2023",
      location: "from Dicoding",
      description:
        "This course covers Git and GitHub fundamentals, including repository management, branching, merging, and resolving conflicts. It also explores team collaboration, handling pull requests, and using GitHub as a portfolio to showcase projects.",
      image: "/dicoding.jpg",
      links: [
        {
          title: "See Certificate",
          icon: <Icons.link className="h-4 w-4" />,
          href: "https://www.dicoding.com/certificates/MEPJK2Q56X3V",
        },
      ],
    },
    {
      title: "Fundamental Front-End WebCertificate",
      dates: "16 Feb 2023",
      location: "from Dicoding",
      description:
        "This course covers ECMAScript 6 features, reusable web components, and managing dependencies with NPM. It also explores module bundlers for optimizing web apps and handling asynchronous data requests using Fetch API.",
      image: "/dicoding.jpg",
      links: [
        {
          title: "See Certificate",
          icon: <Icons.link className="h-4 w-4" />,
          href: "https://www.dicoding.com/certificates/4EXG9JORQZRL",
        },
      ],
    },
  ],
} as const;
