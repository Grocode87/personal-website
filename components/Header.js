import Image from "next/image";
import Link from "next/link";

export const Header = ({ projectsRef }) => {
  return (
    <div className="fixed w-full flex flex-row justify-center bg-background border-b border-gray-800">
      <div className="w-8/12 h-20 flex flex-row justify-between items-center">
        <div>
          <img src="./images/site_logo.png" width={60} height={60} />
        </div>
        <div className="flex-row text-white space-x-12 hidden md:flex">
          <p
            className="hover:text-gray-300 hover:cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <span className="text-teal-400">01.</span> About Me
          </p>
          <p
            className="hover:text-gray-300 hover:cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: projectsRef.current.offsetTop,
                behavior: "smooth",
              });
            }}
          >
            <span className="text-teal-400">02.</span> My Projects
          </p>
          <p className="hover:text-gray-300 hover:cursor-pointer">
            <a href="./assets/resume_colin_grob.pdf" target="_blank">
              <span className="text-teal-400">03.</span> Resume
            </a>
          </p>
        </div>

        <div className="inline md:hidden text-white">
          <div className="border border-teal-400 px-4 py-2 rounded-md">
            <p>Resume</p>
          </div>
        </div>
      </div>
    </div>
  );
};
