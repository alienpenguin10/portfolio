import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Varnie Ketheeswaran",
  initials: "VK",
  url: "https://varnie.me",
  location: "Bath, UK",
  locationLink: "https://www.google.com/maps/place/bath",
  description:
    "Computer Science & AI @ University of Bath | Building Startups | Prev. AI Engineer @ Airbus & Shell",
  summary:
    "I specialise in applying advanced AI to the physical world. Currently focused on building a stealth startup on Robotics, AI and Physiology to revolutionise health and fitness. This is not just another app; we are engineering systems for physical performance.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Go",
    "Postgres",
    "C",
    "Java",
    "JavaScript",
    "Ruby on Rails",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "Kali Linux",
    "Wireshark",
    "Metasploit",
    "Burp Suite",
    "Docker",
    "Kubernetes",
    "C++",
    "Git",
    "Oracle Cloud",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hi@varnie.me",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/alienpenguin10",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/varnie",
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
        url: "mailto:hi@varnie.me",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Airbus",
      href: "https://airbus.com",
      badges: [],
      location: "Filton, England, United Kingdom",
      title: "AI Engineer",
      logoUrl: "/airbus.png",
      start: "Aug 2024",
      end: "Sep 2025",
      description:
        "Engineered XRL metrics for multi-agent combat simulation environment (ReLeGSim) using RLlib, culminating in a research paper presented at the XAI Conference.",
    },
    {
      company: "BagBudy",
      href: "http://bagbudy.com",
      badges: [],
      location: "UK",
      title: "Chief Technology Officer",
      logoUrl: "/bagbudy.png",
      start: "Jul 2024",
      end: "Sep 2024",
      description:
        "Led the development and architecture of the BagBudy web application, a comprehensive luggage transfer service platform for Heathrow Airport. Built a seamless booking system that allows customers to schedule luggage pickup from their doorstep and delivery to the airport terminal. Implemented secure payment processing, real-time tracking, and customer management systems. Developed the complete user experience from order placement to airport meet-and-greet coordination, ensuring tamper-proof packing.",
    },
    {
      company: "Shell",
      href: "https://shell.com",
      badges: [],
      location: "London, England, United Kingdom",
      title: "Data Scientist",
      logoUrl: "/shell.png",
      start: "Aug 2023",
      end: "Sep 2024",
      description:
        "Developed predictive charging models using Time Series Transformers and built EV traffic simulation tool, while leveraging OCPP protocol and clustering vehicles based on their charge curves.",
    },
    {
      company: "Ditchcarbon",
      badges: [],
      href: "https://ditchcarbon.com",
      location: "Remote",
      title: "Summer Intern",
      logoUrl: "/ditchcarbon.png",
      start: "May 2023",
      end: "Aug 2023",
      description:
        "Excelled in modern REST API development (Ruby on Rails, B2B), managed, processed, and transformed client data using Python. Created a Carbon Emissions Calculator (React, Typescript, B2C). Developed precise automated PDF data extraction tool (GPT-4) with 95% accuracy, showcasing prompt engineering proficiency. Managed supplier research pipeline and scoped client requirements adeptly.",
    },
    {
      company: "Rontec Retail",
      href: "#",
      badges: [],
      location: "Reading, UK",
      title: "Store Assistant",
      logoUrl: "/rontec.png",
      start: "Aug 2022",
      end: "Jun 2023",
      description:
        "Worked as a store assistant at a petrol station, collaborating within a proficient team to deliver top-notch customer service. Managed store organization, handled cash transactions meticulously, and ensured inventory restocking. I actively assisted customers, offered product insights, and efficiently resolved any arising concerns.",
    },
  ],
  education: [
    {
      school: "University of Bath",
      href: "https://bath.ac.uk",
      degree: "Computer Science and Artificial Intelligence BSc (Hons)",
      logoUrl: "/university-of-bath.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Reading School",
      href: "https://reading-school.co.uk",
      degree: "A-Levels: Computer Science (A*), Mathematics (A*), Further Mathematics (A)",
      logoUrl: "/reading-school.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "Maiden Erlegh School",
      href: "https://maidenerleghschool.co.uk",
      degree: "GCSEs: 9 Grade 9s including Biology, Chemistry, ICT, Maths, Physics",
      logoUrl: "/maiden-erlegh-school.png",
      start: "2015",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "ISO 15118 Certificate Fetcher for EV Charging",
      href: "https://github.com/alienpenguin10/certfetcher_15118",
      dates: "Aug 2024 - Aug 2025",
      active: true,
      description:
        "Developed a comprehensive ISO 15118 certificate fetcher system for electric vehicle charging infrastructure during my internship at Shell. This project handles the complex certificate provisioning workflow required for secure EV charging communications, implementing the full certificate installation and management process according to ISO 15118 standards.",
      technologies: [
        "Python",
        "ISO 15118",
        "Certificate Management",
        "EV Charging Infrastructure",
        "Cryptography",
        "PKI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/alienpenguin10/certfetcher_15118",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Intrusion Detection System",
      // href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "I used Logistic Regression on KDD Cup 99 data set to develop a model that can accurately detect and classify network attacks into DoS, Probe, R2L or U2R categories. This cybersecurity project demonstrates machine learning applications in network security.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Machine Learning",
        "Cybersecurity",
        "Data Analysis",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    // {
    //   title: "Self Driving Car",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Using NVIDIA's research paper on self driving car trained an end-to-end deep learning model that would let a car drive by itself around the track in Udacity driving simulator. It is a supervised regression problem between the car steering angles and the road images in real-time from the cameras of a car.",
    //   technologies: [
    //     "Python",
    //     "TensorFlow",
    //     "Keras",
    //     "Deep Learning",
    //     "Computer Vision",
    //     "Neural Networks",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
    {
      title: "Ditchcarbon Auto Extraction",
      href: "https://ditchcarbon.com",
      dates: "Jun 2023 - Sep 2023",
      active: true,
      description:
        "Leveraged prompt engineering extensively in developing sophisticated software using Ruby on Rails and ChatGPT for efficient data extraction from diverse documents. Automated PDF extraction, processing 200,000 reports. Enhanced accuracy via user-driven prompt and data point refinement. Streamlined data extraction, conversion, and analysis.",
      technologies: [
        "Ruby on Rails",
        "ChatGPT",
        "Python",
        "PDF Processing",
        "Prompt Engineering",
        "Data Extraction",
      ],
      links: [
        {
          type: "Website",
          href: "https://ditchcarbon.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Time Tracker for Local Business",
      href: "#",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed distinctive time tracking software with advanced features, such as QR code employee clock-in and optimized staff scheduling algorithms. Resulted in heightened productivity and reduced costs, receiving positive client feedback as an alternative to established solutions like TSheets.",
      technologies: [
        "JavaScript",
        "QR Code",
        "Database Design",
        "Scheduling Algorithms",
        "Business Solutions",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Bath Hackathon 2024",
      dates: "March 2024",
      location: "Bath, UK",
      description:
        "Participated in Bath Hackathon 2024, developing innovative solutions and collaborating with fellow students on challenging technical problems.",
      image:
        "/bathhack-2024.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/penguoir/morphic",
        },
      ],
    },
    {
      title: "Bath Hackathon 2023 - 'Honest Emissions'",
      dates: "March 2023",
      location: "Bath, UK",
      description:
        "A Chrome extension displays carbon emissions and tree impact for viewed products. It ranks similar products by low CO2 emissions, offers price, rating, and reviews. Empowers informed, eco-conscious shopping. 'Honest Emissions' received recognition as the winner of the 'Best Use of Ditch Carbon API' prize track.",
      image:
        "/bathhack-2023.png",
      win: "Best Use of Ditch Carbon API",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/orgs/Bath-Hack-2023/repositories",
        },
      ],
    },
  ],
} as const;
