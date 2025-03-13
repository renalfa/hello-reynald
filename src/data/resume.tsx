import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Reynald Faidzilah Ahmad",
  initials: "RF",
  url: "https://dillion.io",
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
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
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

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
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
    },
    {
      school: "Dicoding",
      href: "https://www.dicoding.com/",
      degree: "Frontend Developer (E-course)",
      logoUrl: "/dicoding.jpg",
      start: "Aug 2022",
      end: "Oct 2022",
    },
  ],
  projects: [
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
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
