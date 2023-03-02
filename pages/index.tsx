import styles from "@/styles/Home.module.css";
import { Roboto } from "@next/font/google";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Home() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const toolsUsedImgFileNames = [
    {
      title: "React.js",
      value: "react",
    },
    {
      title: "Redux",
      value: "redux",
    },
    {
      title: "Typescript",
      value: "typescript",
    },
    {
      title: "Material UI",
      value: "material-ui",
    },
    {
      title: "Tailwind",
      value: "tailwind",
    },
    {
      title: "Storybook",
      value: "storybook",
    },
    {
      title: "Styled Components",
      value: "styled-components",
    },
    {
      title: "HTML",
      value: "html",
    },
    {
      title: "CSS",
      value: "css",
    },
    {
      title: "Javascript",
      value: "javascript",
    },
    {
      title: "ES6",
      value: "es6",
    },
    {
      title: "Jest",
      value: "jest",
    },
    {
      title: "React Testing Library",
      value: "react-testing-library",
    },
  ];

  const currentlyUsedToolsFileNames = [
    {
      title: "Next.js",
      value: "next",
    },
    {
      title: "Stripe",
      value: "stripe",
    },
    {
      title: "GrapQL",
      value: "graphql",
    },
    {
      title: "Apollo",
      value: "apollo",
    },
  ];

  const socialIcons = [
    { title: "github", link: "https://github.com/dianallona" },
    { title: "linkedin", link: "https://www.linkedin.com/in/diana-llona/" },
    { title: "twitter", link: "https://twitter.com/426dml" },
    { title: "instagram", link: "https://www.instagram.com/crypto_diane/" },
  ];

  return (
    <div className={clsx(roboto.className, styles.main)}>
      <header className="fixed top-0 z-10 w-[100%] bg-opacity-50 p-3 backdrop-blur-md ease-in ">
        <nav className="flex flex-wrap items-center px-16 max-lg:px-6">
          <Link href="/">
            <p className="text-4xl font-extrabold text-[#FCF951FF]">diana.</p>
          </Link>
          <button
            className=" ml-auto inline-flex rounded p-3 text-white outline-none duration-300 ease-in hover:bg-[#822057ff] hover:text-white lg:hidden"
            onClick={handleClick}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            className={`${
              active ? "" : "hidden"
            }   w-full lg:inline-flex lg:w-auto lg:flex-grow`}
          >
            <div className="flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto lg:w-auto lg:flex-row lg:items-center">
              <div className="my-6 h-[1px] w-full bg-white lg:hidden" />
              <Link
                className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white duration-300 ease-in hover:bg-[#822057ff] hover:text-white lg:inline-flex lg:w-auto "
                href="/"
                onClick={handleClick}
              >
                Home
              </Link>
              <Link
                className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white duration-300 ease-in hover:bg-[#822057ff] hover:text-white lg:inline-flex lg:w-auto "
                href="#experience"
                onClick={handleClick}
              >
                Experience
              </Link>
              <Link
                className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white duration-300 ease-in hover:bg-[#822057ff] hover:text-white lg:inline-flex lg:w-auto "
                href="#technologies"
                onClick={handleClick}
              >
                Technologies
              </Link>
              <Link
                className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white duration-300 ease-in hover:bg-[#822057ff] hover:text-white lg:inline-flex lg:w-auto "
                href="#upskilling"
                onClick={handleClick}
              >
                Upskilling
              </Link>
              <Link
                href="/files/resume.pdf"
                target="_blank"
                download
                className="max-lg:w-[100%]"
              >
                <button className="ml-3 inline-flex items-center rounded bg-[#822057ff] py-2 px-4 font-bold text-white shadow duration-300 ease-in hover:bg-[#922057ff] hover:text-white max-lg:ml-0 max-lg:mt-3 max-lg:w-[100%]">
                  <svg
                    className="mr-2 h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Resume</span>
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div className="fixed bottom-0 ml-12 flex flex-col items-center max-lg:hidden">
        {socialIcons.map(({ title, link }) => (
          <Link key={`social-icon-${title}`} href={link}>
            <Image
              className="mb-6 cursor-pointer duration-300 ease-in hover:scale-150"
              src={`/icons/${title}-white.svg`}
              alt={`${title}-icon`}
              width={30}
              height={30}
            />
          </Link>
        ))}
        <div className="h-[15vh] w-[1px] bg-white" />
      </div>
      <div className="fixed bottom-0 right-0 mr-12 flex flex-col items-center max-lg:hidden">
        <p className="mb-6 [writing-mode:vertical-lr]">
          dev.dianallona@gmail.com
        </p>
        <div className="h-[15vh] w-[1px] bg-white" />
      </div>
      <div className="flex w-[100%] flex-col items-center justify-center">
        <div className="w-[50vw] max-lg:w-[80vw]">
          <div className="mb-10 flex h-screen w-full flex-col justify-center ">
            <p className=" mb-2 text-lg font-light max-lg:text-base">
              Hello there, my name is
            </p>
            <h1 className="mb-2 text-7xl font-extrabold text-[#FCF951FF] max-lg:text-5xl">
              Diana Llona.
            </h1>
            <h1 className="mb-10 text-6xl font-bold max-lg:text-4xl">
              I develop stuff for the web.
            </h1>
            <h1 className="font-base text-3xl max-lg:text-xl">
              I’m a front-end developer that turns ideas into efficient and
              scalable web products.
            </h1>
          </div>
          <div
            className="flex h-auto w-full flex-col justify-center py-[20em]  max-lg:py-[10em]"
            id="experience"
          >
            <div className="mb-12 flex items-center">
              <p className="mr-4 text-3xl font-medium max-lg:text-2xl">
                <span className="text-xl text-[#FCF951FF] max-lg:text-lg">
                  #1.{" "}
                </span>
                Professional experience:
              </p>
              <div className="h-[1px] w-[20vw] bg-gray-400 max-lg:hidden" />
            </div>
            <div className="flex h-auto w-full flex-row justify-evenly overflow-auto">
              <div className="flex grid-cols-9 flex-col text-blue-50 lg:grid">
                <div className="flex lg:contents">
                  <div className="relative col-start-5 col-end-6 mr-10 flex justify-center ">
                    <div className="flex h-full w-3 items-center justify-center">
                      <div className="pointer-events-none h-full w-[1px] bg-white"></div>
                    </div>
                    <div className="absolute top-1/2 mt-3 h-3 w-3 rounded-full bg-white shadow"></div>
                  </div>
                  <div className="col-start-6 col-end-10 mr-auto rounded-xl pl-10 pt-12 lg:px-4">
                    <h3 className="mb-1 text-xl font-medium">Traidify</h3>
                    <p className="font-base text-sm text-gray-50">Freelance</p>
                    <p className="mb-4 text-sm font-thin text-gray-50">
                      2022 - present
                    </p>
                    <ul className="list-disc text-start text-[1em] font-light leading-tight">
                      <li>
                        Develop and create a web application for an educational
                        trading platform.
                      </li>
                      <li>Utilizes React, Redux, Storybook and Material UI</li>
                      <li>
                        Create individual component for the charts using
                        storybook.
                      </li>
                      <li>
                        Integrates API and optimizes the quality of frontend
                        components
                      </li>
                      <li>
                        Works closely with backend-developers as well as
                        designers
                      </li>
                      <li>
                        Navigate and converts figma files into a web
                        application.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row-reverse text-end max-lg:text-start lg:contents">
                  <div className="col-start-1 col-end-5 rounded-xl pl-10 pt-12 lg:px-4">
                    <h3 className="mb-1 text-xl font-medium">
                      Samsung R&D Philippines
                    </h3>
                    <p className="font-base text-sm text-gray-50">
                      Software Engineer
                    </p>
                    <p className="mb-4 text-sm font-thin text-gray-50">
                      2020 - 2022
                    </p>
                    <ul className="list-disc text-start text-[1em] font-light leading-tight">
                      <li>
                        Develops front-end applications using
                        React.js/Typescript using Storybook and Styled
                        Components.
                      </li>
                      <li>
                        Integrates RESTful API data in our frontend
                        applications.
                      </li>
                      <li>
                        Plan and analyzes project requirements needed for the
                        project Perform peer code reviews and unit testing.
                      </li>
                      <li>
                        Cooperates with the design team with regards the UI/UX
                        guides of the project.
                      </li>
                      <li>
                        Usually working on converting Figma to a pixel perfect
                        project.
                      </li>
                    </ul>
                  </div>
                  <div className="relative col-start-5 col-end-6 mr-10 flex justify-center ">
                    <div className="flex h-full w-3 items-center justify-center">
                      <div className="pointer-events-none h-full w-[1px] bg-white"></div>
                    </div>
                    <div className="absolute top-1/2 mt-3 h-3 w-3 rounded-full bg-white shadow"></div>
                  </div>
                </div>
                <div className="flex lg:contents">
                  <div className="relative col-start-5 col-end-6 mr-10 flex justify-center  ">
                    <div className="flex h-full w-3 items-center justify-center">
                      <div className="pointer-events-none h-full w-[1px] bg-white"></div>
                    </div>
                    <div className="absolute top-1/2 mt-3 h-3 w-3 rounded-full bg-white shadow"></div>
                  </div>
                  <div className="col-start-6 col-end-10 mr-auto rounded-xl pl-10 pt-12 lg:px-4">
                    <h3 className="mb-1 text-xl font-medium">
                      Wtech Solutions
                    </h3>
                    <p className="font-base text-sm text-gray-50">
                      Jr. Fullstack Developer
                    </p>
                    <p className="mb-4 text-sm font-thin text-gray-50">
                      2019 - 2020
                    </p>
                    <ul className="list-disc text-start text-[1em] font-light leading-tight">
                      <li>
                        Develops and maintains several online gaming projects.
                      </li>
                      <li>
                        Plan and analyzes project requirements needed for the
                        development and enhancement of online games and
                        promotions using Vue.js and Node.js.
                      </li>
                      <li>
                        Integrated RESTful API data on that are used on online
                        gaming.
                      </li>
                      <li>
                        Support QA team in resolving urgent and minor issues by
                        debugging and troubleshooting
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row-reverse text-end max-lg:text-start lg:contents">
                  <div className="col-start-1 col-end-5 w-[100%] rounded-xl py-12 pl-10 lg:px-4">
                    <h3 className="mb-1 text-xl font-medium">
                      Rakso Computer Technologies
                    </h3>
                    <p className="font-base text-sm text-gray-50">
                      Software Engineer L2
                    </p>
                    <p className="mb-4 text-sm font-thin text-gray-50">
                      2017 - 2019
                    </p>
                    <ul className="list-disc text-start text-[1em] font-light leading-tight">
                      <li>Develops and maintains web-based systems.</li>
                      <li>
                        Analyzes project requirements needed for the development
                        of the system.
                      </li>
                      <li>Creates database design and relationships.</li>
                      <li>
                        Builds back-end and designs front-end functionalities
                        for web-based systems
                      </li>
                      <li>
                        Develops and maintains REST API for an android mobile
                        application
                      </li>
                      <li>Knowledgeable in android mobile development</li>
                    </ul>
                  </div>
                  <div className="relative col-start-5 col-end-6 mr-10 flex justify-center ">
                    <div className="flex h-full w-3 items-center justify-center">
                      <div className="pointer-events-none h-full w-[1px] bg-white"></div>
                    </div>
                    <div className="absolute top-1/2 mt-3 h-3 w-3 rounded-full bg-white shadow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex h-auto  w-full flex-col justify-center py-[20em]  max-lg:py-[10em]"
            id="technologies"
          >
            <div className="mb-12 flex items-center">
              <p className="mr-4 text-3xl font-medium max-lg:text-2xl">
                <span className="text-xl text-[#FCF951FF] max-lg:text-lg">
                  #2.{" "}
                </span>
                Technologies used:
              </p>
              <div className="h-[1px] w-[20vw] bg-gray-400 max-lg:hidden" />
            </div>
            <div className="grid min-h-[150px] w-full grid-cols-4 gap-12 px-4  max-lg:grid-cols-3">
              {toolsUsedImgFileNames.map(({ title, value }) => (
                <div
                  key={`${value}-img`}
                  className="flex cursor-pointer flex-col items-center justify-center duration-300 ease-in hover:scale-125"
                >
                  <div className="relative mb-3 h-[80px] w-[80px]">
                    <Image
                      src={`/images/${value}.png`}
                      alt={`${value}-img`}
                      loading="lazy"
                      fill
                    />
                  </div>
                  <h6 className="color-white text-[1em]">{title}</h6>
                </div>
              ))}
            </div>
          </div>
          <div
            className="flex h-auto w-full flex-col justify-center py-[20em]  max-lg:py-[10em]"
            id="upskilling"
          >
            <div className="mb-12 flex items-center">
              <p className="mr-4 text-3xl font-medium max-lg:text-2xl">
                <span className="text-xl text-[#FCF951FF] max-lg:text-lg">
                  #3.{" "}
                </span>
                Currently upskilling with:
              </p>
              <div className="h-[1px] w-[20vw] bg-gray-400 max-lg:hidden" />
            </div>
            <div className="grid min-h-[150px] w-full grid-cols-4 flex-row justify-evenly gap-12 px-4 max-sm:grid-cols-2">
              {currentlyUsedToolsFileNames.map(({ title, value }) => (
                <div
                  key={`${value}-img`}
                  className="flex cursor-pointer flex-col items-center justify-center duration-300 ease-in hover:scale-125"
                >
                  <div className="relative mb-3 h-[80px] w-[80px]">
                    <Image
                      src={`/images/${value}.png`}
                      alt={`${value}-img`}
                      loading="lazy"
                      fill
                    />
                  </div>
                  <h6 className="color-white text-[1em]">{title}</h6>
                </div>
              ))}
            </div>
          </div>
          <div className=" mb-12 flex h-auto w-full flex-row justify-evenly lg:hidden">
            {socialIcons.map(({ title, link }) => (
              <Link key={`social-icon-${title}`} href={link}>
                <Image
                  className="cursor-pointer duration-300 ease-in hover:scale-150"
                  src={`/icons/${title}-white.svg`}
                  alt={`${title}-icon`}
                  width={30}
                  height={30}
                />
              </Link>
            ))}
          </div>
          <div className="mb-12 flex h-auto w-full flex-col justify-center">
            <p className="text-center font-extralight text-gray-50">
              Powered by Diana Llona
            </p>
            <p className="text-center font-extralight text-gray-50">2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
