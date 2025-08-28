"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaBuilding,
  FaCalendarAlt,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";

const portfolios = [
  {
    id: 1,
    title: "RunHotel.io (Cropsly)",
    description:
      "A comprehensive hotel management platform built with Next.js and React. Features real-time booking management, guest communication via Socket.IO, secure JWT authentication, and responsive design with Tailwind CSS. Integrated with Redux for state management.",
    tech: "Next.js, React, Tailwind, Redux, Node.js, Socket.IO, JWT Auth",
    demoLink: "https://runhotel.io",
    liveLink: "https://runhotel.io",
  },
  {
    id: 2,
    title: "RunHotel App (Cropsly)",
    description:
      "Mobile companion app for RunHotel platform built with Flutter. Provides on-the-go hotel management capabilities with cross-platform compatibility, REST API integration, and secure authentication system.",
    tech: "Flutter, Node.js, Express.js, REST APIs, JWT Auth",
    demoLink: "https://play.google.com/store/apps/details?id=io.runhotel",
    liveLink: "https://play.google.com/store/apps/details?id=io.runhotel",
  },
  {
    id: 3,
    title: "Replay Institute (Cropsly)",
    description:
      "Educational platform featuring interactive learning modules and course management. Built with React.js and Ant Design for a polished UI, Redux for state management, and AWS S3 for secure file storage and content delivery.",
    tech: "React.js, Ant Design, Redux, AWS S3",
    demoLink: "https://replayinstitute.com/",
    liveLink: "https://replayinstitute.com/",
  },
  {
    id: 4,
    title: "Chips&Crypt (Cropsly)",
    description:
      "Real-time cryptocurrency trading platform with live market data and trading capabilities. Features GraphQL for efficient data fetching, WebSocket connections for real-time updates, and responsive design for optimal trading experience.",
    tech: "React.js, GraphQL, WebSocket",
    demoLink: "https://f1exch.com/",
    liveLink: "https://f1exch.com/",
  },
  {
    id: 5,
    title: "Drive One (Cropsly)",
    description:
      "Car rental and fleet management system with booking functionality and vehicle tracking. Built with React.js and Node.js backend, featuring Ant Design components for professional UI and comprehensive admin dashboard.",
    tech: "React.js, Node.js, Ant Design",
    demoLink: "https://driveone.eu/",
    liveLink: "https://driveone.eu/",
  },
  {
    id: 6,
    title: "Park One (Cropsly)",
    description:
      "Smart parking management solution with real-time availability tracking and booking system. Features responsive design with Tailwind CSS, Redux for state management, and intuitive user interface for seamless parking experience.",
    tech: "React.js, Tailwind, Redux",
    demoLink: "https://parkone.dk/",
    liveLink: "https://parkone.dk/",
  },
  {
    id: 7,
    title: "Traffic Alarm (Cropsly)",
    description:
      "Traffic monitoring and alert system providing real-time traffic updates and route optimization. Built with React.js frontend and Node.js backend, featuring automated notifications and user-friendly dashboard interface.",
    tech: "React.js, Node.js",
    demoLink: "https://trafikalarm.dk/",
    liveLink: "https://trafikalarm.dk/",
  },
];

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "C", "C++", "Java"],
  },
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "TailwindCSS",
      "React.js",
      "Next.js",
      "Redux",
      "Redux-saga",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "GraphQL"],
  },
  {
    title: "DevOps/Hosting",
    skills: ["AWS", "Netlify", "Vercel", "Jenkins (CI/CD)"],
  },
  {
    title: "UI Libraries",
    skills: ["Ant Design", "Material UI", "Chakra UI", "Shadcn UI"],
  },
  {
    title: "Mobile & Tools",
    skills: ["Flutter", "Git", "GitHub", "JWT Auth", "Socket.IO"],
  },
];

export default function Portfolio() {
  const [nav, setNav] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "App Developer",
    "Full Stack Developer",
  ];

  useEffect(() => {
    const currentFullTitle = titles[titleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex < currentFullTitle.length) {
          setCurrentTitle(currentFullTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else if (isDeleting && charIndex > 0) {
          setCurrentTitle(currentFullTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else if (!isDeleting && charIndex === currentFullTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex, titles]);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experience" },
    { id: 4, link: "skills" },
    { id: 5, link: "portfolio" },
    { id: 6, link: "achievements" },
    { id: 7, link: "recommendations" },
    { id: 8, link: "contact" },
  ];

  const experiences = [
    {
      company: "Cropsly Solutions Private Limited",
      roles: [
        {
          title: "Software Engineer",
          type: "Full-time",
          duration: "Feb 2024 – Present · 1 yr 7 mos",
          location: "Zirakpur (Remote)",
          skills: "Next.js, TypeScript and +12 skills",
        },
        {
          title: "Junior Software Engineer",
          duration: "Jul 2023 – Feb 2024 · 8 mos",
          location: "Punjab, India",
          skills: "React.js, CSS and +3 skills",
        },
      ],
    },
    {
      company: "Redsky Atech",
      roles: [
        {
          title: "Full Stack Developer Intern",
          type: "Full-time",
          duration: "May 2023 – Jul 2023 · 3 mos",
          location: "Sahibzada Ajit Singh Nagar, Punjab, India",
          skills: "React.js, HTML5 and +4 skills",
        },
      ],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setNav(false);
  };

  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-800">
      {/* Animated social links sidebar */}
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
        <ul>
          {[
            {
              id: 1,
              child: (
                <>
                  LinkedIn
                  <FaLinkedin size={30} />
                </>
              ),
              href: "https://www.linkedin.com/in/gursimranjit-singh-bb3a98234",
              style: "rounded-tr-md",
            },
            {
              id: 2,
              child: (
                <>
                  GitHub
                  <FaGithub size={30} />
                </>
              ),
              href: "https://www.github.com/gursimran2150",
            },
            {
              id: 3,
              child: (
                <>
                  Mail
                  <HiOutlineMail size={30} />
                </>
              ),
              href: "mailto:thegursimranjit@gmail.com",
            },
            {
              id: 4,
              child: (
                <>
                  Resume
                  <BsFillPersonLinesFill size={30} />
                </>
              ),
              href: "/resume.pdf",
              style: "rounded-br-md",
              download: true,
            },
          ].map(({ id, child, href, style, download }) => (
            <motion.li
              key={id}
              whileHover={{ x: 90 }}
              transition={{ duration: 0.3 }}
              className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 ${
                style || ""
              }`}
            >
              <a
                href={href}
                target="_blank"
                download={download}
                className="flex justify-between items-center w-full text-white"
                rel="noreferrer"
              >
                {child}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center w-full h-20 text-white bg-black sticky top-0 px-4 z-50"
      >
        <div className="flex items-center cursor-pointer"  onClick={() => scrollToSection('home')}>
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-xl">GS</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Gursimranjit Singh</h1>
            <p className="text-xs text-gray-400">Full Stack Developer</p>
          </div>
        </div>

        <ul className="hidden lg:flex">
          {links.map((link) => (
            <motion.li
              key={link.id}
              whileHover={{ scale: 1.05 }}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <button
                className="capitalize"
                onClick={() => scrollToSection(link.link)}
              >
                {link.link}
              </button>
            </motion.li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 lg:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
          >
            {links.map((link) => (
              <motion.li
                key={link.id}
                whileHover={{ scale: 1.1 }}
                className="px-4 cursor-pointer capitalize py-6 text-3xl"
              >
                <button
                  className="capitalize"
                  onClick={() => scrollToSection(link.link)}
                >
                  {link.link}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </motion.nav>

      {/* Home Section */}
      <section
        id="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
          <div className="flex flex-col justify-center items-center h-full text-center">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-8xl font-bold text-white mb-4"
            >
              Hi, I'm <span className="text-cyan-500">Gursimranjit</span>
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-5xl font-bold text-gray-300 mb-6 h-16"
            >
              {currentTitle}
              <span className="animate-pulse">|</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-400 py-4 max-w-2xl text-lg sm:text-xl leading-relaxed"
            >
              2+ years of experience building high-performance web apps using
              React, Next.js, Node.js, and Flutter. Skilled in creating secure,
              scalable applications with modern technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex gap-4 mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="group text-white px-8 py-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-300 text-lg font-semibold"
              >
                Download Resume
                <span className="group-hover:rotate-90 duration-300 md:flex hidden">
                  <MdOutlineKeyboardArrowRight className="ml-2" size={25} />
                </span>
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="text-cyan-500 border-2 border-cyan-500 px-8 py-4 rounded-md hover:bg-cyan-500 hover:text-white duration-300 text-lg font-semibold"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-12"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="pb-8"
          >
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mt-12 leading-relaxed"
          >
            Full Stack Developer with 2+ years of experience building
            high-performance web apps using React, Next.js, Node.js, and
            Flutter. Skilled in frontend, backend, and mobile app development
            with expertise in AWS, CI/CD, Netlify, and Vercel.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl mt-6 leading-relaxed"
          >
            Experienced in creating secure, scalable applications with JWT
            authentication and real-time technologies like Socket.IO. Recognized
            as{" "}
            <span className="text-cyan-500 font-semibold">
              'Standout Performer of the Year 2025'
            </span>{" "}
            for exceptional contributions and innovative solutions.
          </motion.p>
        </div>
      </section>

      <section
        id="experience"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-12"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="pb-8"
          >
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Experience
            </p>
            <p className="py-6">My professional journey</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>

            {experiences.map((exp, expIndex) => (
              <motion.div
                key={expIndex}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: expIndex * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12"
              >
                {/* Company marker */}
                <div className="absolute left-6 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-800"></div>

                <div className="ml-20">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <FaBuilding className="text-cyan-500 mr-3" size={20} />
                      <h3 className="text-xl font-bold text-cyan-400">
                        {exp.company}
                      </h3>
                    </div>

                    {exp.roles.map((role, roleIndex) => (
                      <div
                        key={roleIndex}
                        className={`${
                          roleIndex > 0
                            ? "mt-6 pt-6 border-t border-gray-700"
                            : ""
                        }`}
                      >
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {role.title}
                        </h4>
                        {role.type && (
                          <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm mb-2">
                            {role.type}
                          </span>
                        )}
                        <div className="flex items-center text-gray-300 mb-2">
                          <FaCalendarAlt className="mr-2" size={14} />
                          <span className="text-sm">{role.duration}</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-2">
                          📍 {role.location}
                        </p>
                        <p className="text-gray-300 text-sm">
                          <span className="font-semibold">Skills:</span>{" "}
                          {role.skills}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="bg-gradient-to-b from-gray-800 to-black w-full text-white py-12"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="pb-8"
          >
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Skills
            </p>
            <p className="py-6">Technologies and tools I work with</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-cyan-500 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.1 }}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-600 transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-12"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="pb-8"
          >
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my recent projects</p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {portfolios.map(
              ({ id, title, description, tech, demoLink, liveLink }, index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-cyan-500 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-300 mb-3 leading-relaxed">
                    {description}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 font-mono">{tech}</p>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-md duration-200 text-center"
                    >
                      Live Demo
                    </motion.a>
                    {demoLink !== liveLink && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-cyan-500 text-cyan-500 px-4 py-2 rounded-md hover:bg-cyan-500 hover:text-white duration-200 text-center"
                      >
                        Demo
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className="bg-gradient-to-b from-gray-800 to-black w-full text-white py-12"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="pb-8"
          >
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Achievements
            </p>
            <p className="py-6">Recognition and milestones</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="w-64 h-64 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-60 h-60 bg-gray-800 rounded-full flex items-center justify-center border-4 border-white overflow-hidden">
                  <img
                    src="/myimg.jpeg"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Achievement Content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-8 rounded-lg shadow-xl border border-cyan-500/30"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 3,
                  }}
                  className="text-6xl mb-4 text-center lg:text-left"
                >
                  🏆
                </motion.div>
                <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                  Standout Performer of the Year
                </h3>
                <p className="text-xl text-gray-300 mb-4">2025</p>
                <p className="text-gray-200 leading-relaxed">
                  Recognized for exceptional contributions, innovative
                  solutions, and outstanding performance in software
                  development. This achievement reflects dedication to
                  delivering high-quality code, mentoring team members, and
                  consistently exceeding project expectations.
                </p>

                {/* Additional Achievement Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">16+</div>
                    <div className="text-gray-400 text-sm">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">2+</div>
                    <div className="text-gray-400 text-sm">
                      Years Experience
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section
        id="recommendations"
        className="bg-gradient-to-b from-gray-800 to-black w-full text-white py-12 overflow-hidden"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="pb-8"
          >
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Recommendations
            </p>
            <p className="py-6">What people say about my work</p>
          </motion.div>

          <div className="relative">
            <motion.div
              animate={{ x: [0, -100 * 4] }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="flex gap-8"
              style={{ width: "200%" }}
            >
              {/* First set of recommendations */}
              {[
                {
                  quote:
                    "Gursimranjit is an exceptional developer who consistently delivers high-quality solutions. His expertise in full-stack development and attention to detail make him a valuable team member.",
                  name: "Gautam Gupta",
                  title: "Software Engineer",
                  company: "Cropsly Solutions Private Limited",
                },
                {
                  quote:
                    "Working with Gursimranjit was a great experience. His technical skills and problem-solving abilities helped us deliver our project on time and exceed client expectations.",
                  name: "Saurabh Mishra",
                  title: "Backend Developer",
                  company: "Cropsly Solutions Private Limited",
                },
                {
                  quote:
                    "Gursimranjit's dedication to clean code and best practices is remarkable. He brings innovative solutions to complex problems and is always willing to help team members.",
                  name: "Prateek Bhandula",
                  title: "SDE 2",
                  company: "Idea Clan",
                },
                {
                  quote:
                    "His ability to work across the full stack while maintaining code quality is impressive. Gursimranjit is a reliable developer who delivers on promises.",
                  name: "Gauri Chauhan",
                  title: "IT Manager",
                  company: "Care Health Insurance",
                },
              ]
                .concat([
                  {
                    quote:
                      "Gursimranjit is an exceptional developer who consistently delivers high-quality solutions. His expertise in full-stack development and attention to detail make him a valuable team member.",
                    name: "Gautam Gupta",
                    title: "Software Engineer",
                    company: "Cropsly Solutions Private Limited",
                  },
                  {
                    quote:
                      "Working with Gursimranjit was a great experience. His technical skills and problem-solving abilities helped us deliver our project on time and exceed client expectations.",
                    name: "Saurabh Mishra",
                    title: "Backend Developer",
                    company: "Cropsly Solutions Private Limited",
                  },
                  {
                    quote:
                      "Gursimranjit's dedication to clean code and best practices is remarkable. He brings innovative solutions to complex problems and is always willing to help team members.",
                    name: "Prateek Bhandula",
                    title: "SDE 2",
                    company: "Idea Clan",
                  },
                  {
                    quote:
                      "His ability to work across the full stack while maintaining code quality is impressive. Gursimranjit is a reliable developer who delivers on promises.",
                    name: "Gauri Chauhan",
                    title: "IT Manager",
                    company: "Care Health Insurance",
                  },
                ])
                .map((rec, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, zIndex: 10 }}
                    className="bg-gray-900 p-6 rounded-lg shadow-lg flex-shrink-0 w-80 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="text-cyan-500 text-4xl mb-4">"</div>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {rec.quote}
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {rec.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-sm">{rec.name}</p>
                        <p className="text-gray-400 text-xs">{rec.title}</p>
                        <p className="text-cyan-400 text-xs">{rec.company}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-b from-gray-800 to-black w-full text-white py-12"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="pb-8"
          >
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Contact
            </p>
            <p className="py-6">
              Submit the form below to get in touch with me
            </p>
          </motion.div>

          <div className="flex justify-center items-center">
            <motion.form
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              action="https://getform.io/f/e4962ba4-72a0-4361-a365-084494c6d2b9"
              className="flex flex-col w-full md:w-1/2"
              method="POST"
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                required
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                required
              />
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                rows={10}
                placeholder="Enter your message here"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Let's talk
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 border-t border-gray-800">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-4 md:mb-0"
            >
              <h3 className="text-2xl font-bold text-cyan-500">
                Gursimranjit Singh
              </h3>
              <p className="text-gray-400 text-sm">Full Stack Developer</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6 mb-4 md:mb-0"
            >
              <motion.a
                whileHover={{ scale: 1.2, color: "#06b6d4" }}
                href="https://www.linkedin.com/in/gursimranjit-singh-bb3a98234"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#06b6d4" }}
                href="https://www.github.com/gursimran2150"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#06b6d4" }}
                href="mailto:thegursimranjit@gmail.com"
                className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
              >
                <HiOutlineMail size={24} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Gursimranjit Singh. All rights
                reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Build by Gursimranjit Singh
              </p>
            </motion.div>
          </div>

          {/* Scroll to top button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-6 pt-6 border-t border-gray-800"
          >
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToSection("home")}
              className="text-cyan-500 hover:text-cyan-400 transition-colors duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 border-2 border-cyan-500 rounded-full flex items-center justify-center mb-1">
                  <MdOutlineKeyboardArrowRight
                    className="rotate-[-90deg]"
                    size={20}
                  />
                </div>
                <span className="text-xs">Back to Top</span>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
