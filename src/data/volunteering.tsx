import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  volunteering: [
    {
      company: "Future Stories",
      href: "https://futurestories.org",
      badges: [],
      location: "Reading, UK",
      title: "Volunteer",
      logoUrl: "/futurestories.png",
      start: "Sep 2020",
      end: "Feb 2021",
      description:
        "Dedicated my free time to teach math to underprivileged primary school students via the Future Stories initiative, creating engaging lesson plans to promote learning and vital math skills. This volunteer work highlights my commitment to community service and passion for inspiring young minds.",
    },
    {
      company: "University of Bath Cybersecurity Society",
      href: "https://bath.ac.uk",
      badges: [],
      location: "Bath, UK",
      title: "Chair",
      logoUrl: "/university-of-bath.png",
      start: "Sep 2023",
      end: "Present",
      description:
        "Organising events such as CTFs, speakers and workshops for society. I also develop and deliver weekly sessions on Cybersecurity which helps members prepare for the CTF challenges. Lead a team to promote cybersecurity awareness and skills development.",
    },
    {
      company: "University of Bath",
      href: "https://bath.ac.uk",
      badges: [],
      location: "Bath, UK",
      title: "Academic Representative",
      logoUrl: "/university-of-bath.png",
      start: "Oct 2022",
      end: "Present",
      description:
        "Effectively conveyed my peers' viewpoints to staff and faculty, contributing valuable feedback. This role honed my leadership abilities and demonstrated my dedication to academic excellence. Training and support from the university's student union empowered me to enhance the academic experience for all students in the department.",
    },
    {
      company: "Code Ninjas",
      href: "https://codeninjas.com",
      badges: [],
      location: "Reading, UK",
      title: "Coding Tutor",
      logoUrl: "/profile.png",
      start: "Jul 2021",
      end: "Aug 2022",
      description:
        "At Code Ninjas, I instructed coding to children aged 7-14, crafting engaging lesson plans and leading coding classes. This experience not only sharpened my teaching skills but also kindled my enthusiasm for technology education.",
    },
    {
      company: "Reading School",
      href: "http://reading-school.co.uk",
      badges: [],
      location: "Reading, UK",
      title: "Head Computing Prefect",
      logoUrl: "/reading-school.png",
      start: "Aug 2021",
      end: "Jun 2022",
      description:
        "During sixth form, I partnered with teachers to shape the curriculum and organized competitions, mentored peers, and promoted computer science within the school.",
    },
  ],
} as const;
