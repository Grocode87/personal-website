import Head from "next/head";
import Image from "next/image";
import { ProjectDisplay } from "../components/ProjectDisplay";
import { Header } from "../components/Header";
import { useRef } from "react";

export default function Home() {
  const projectsRef = useRef(null);

  return (
    <div>
      <Head>
        <title>Colin Grob&apos;s Porfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/** CONTENT */}
      <Header projectsRef={projectsRef} />
      <div className="w-full bg-background text-white">
        {/** INTRO */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-10/12 md:w-8/12 min-h-screen pt-48 flex flex-row">
            <div className="space-y-6">
              <p className="text-xl text-teal-400 font-semibold">
                Hi, my name is
              </p>
              <p className="text-5xl md:text-6xl font-semibold">Colin Grob.</p>
              <p className=" text-slate-300 md:w-3/4 pb-12">
                I&apos;m a passionate third-year Computer Science student at
                UBC. I excel at making full stack applications and have a deep
                interest in AI/ML and creating software that can make a
                difference.
              </p>

              <div className="hidden md:inline">
                <p className="text-teal-400 text-xl pb-1">Tech Stack</p>
                <p>
                  <span className="font-bold">Programming:</span> Proficient in
                  Python, Java, Javascript, Typscript, React, C, C++
                </p>
                <p>
                  <span className="font-bold">Machine Learning:</span>{" "}
                  Scikit-learn, LLMs, Tensorflow, HuggingFace, and NLP
                </p>
                <p>
                  <span className="font-bold">Database and API:</span> SQL
                  (MySQL, PostgresSQL), MongoDB, Restful APIs
                </p>
                <p>
                  <span className="font-bold">Project Management:</span> Agile
                  development, JIRA, Git
                </p>
              </div>
              <div className="inline-block pt-6">
                <p
                  className="p-3 border hover:cursor-pointer hover:bg-gray-800"
                  onClick={() => {
                    window.scrollTo({
                      top: projectsRef.current.offsetTop,
                      behavior: "smooth",
                    });
                  }}
                >
                  See My Projects
                </p>
              </div>
            </div>
            <div className="w-4/12">
              {/**
              <div className="rounded-full border border-white overflow-hidden px-8 float-right">
                <img
                  src="./images/portrait.png"
                  className="shadow-inner overflow-hidden"
                  width={150}
                  height={150}
  ></img>}
              </div>
  */}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="w-10/12 md:w-8/12">
            {/**
             *
            <div>
              <p className="text-2xl pb-4">Education</p>
              <div className="flex flex-row items-stretch">
                <div className="relative flex flex-col items-center mr-4">
                  <div className="w-1 bg-white h-full"></div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full"></div>
                </div>
                <div>
                  <p>University of British Columbia</p>
                  <p>B.Sc Major in Computer Science, Minor in Psychology</p>
                </div>
              </div>
            </div>

            <div className="pt-12">
              <p className="text-2xl pb-4">Work Experience</p>
              <div className="flex flex-row items-stretch">
                <div className="relative flex flex-col items-center mr-4">
                  <div className="w-1 bg-white h-full"></div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full"></div>
                </div>
                <div>
                  <p>QA Engineer @ Bread & Butter IO</p>
                </div>
              </div>
            </div>
             */}
            <div className="pt-12" ref={projectsRef}>
              <p className="text-2xl font-semibold text-teal-400">Projects</p>
              <p className="">Check out my creations</p>
              <p className="pb-4"></p>
              <ProjectDisplay />
            </div>

            <div className="pt-20 text-center pb-12">
              <p>
                🛠️ Created with blood, sweat, tears, and Nextjs by Colin Grob
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
