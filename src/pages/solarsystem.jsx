import React from "react";
import Image from "next/image";
import Link from "next/link";
import solarSystemImg from "../../public/assets/projects/solar/thumbnail.png";
import GameProjectsInfo from "@/components/projectsComponent/GameProjectsInfo";

const solarsystem = () => {
  const solarSystemProject = GameProjectsInfo.Details.SolarSystem;

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={solarSystemImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{solarSystemProject.name}</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid gap-8 py-8">
        <div>
          <Link href="/#projects" className="flex pb-4">
            <span>&lt;</span>
            <p className="underline cursor-pointer px-1"> Back</p>
          </Link>
          <h2>Overview</h2>
          <p className="py-4 text-xl">{solarSystemProject.shortDesc}</p>

          <div className="text-md text-gray-600 project-desc">
            <p>
              In my role as the primary programmer for SolAR, an innovative AR
              educational game, I spearheaded the integration of Vuforia plugins
              with Unity, enabling a seamless augmented reality experience. My
              responsibilities included:
            </p>
            <li>
              Crafting and optimizing the app's control mechanics for a
              user-friendly interface.
            </li>
            <li>
              Seamless integration of Unity In-App Purchases to enhance the
              game's functionality.
            </li>
            <li>
              Leveraging APIs from official sources to dynamically showcase
              comprehensive solar system data.
            </li>
            <li>
              Collaborating closely with the design team to implement
              meticulously crafted 3D models and user interfaces into the Unity
              environment.
            </li>
            <p>
              This project not only underscored my technical proficiency in
              Unity programming but also showcased my ability to enhance
              educational experiences through innovative AR solutions. As a game
              programmer dedicated to merging technology with learning, SolAR
              stands as a testament to my commitment to creating immersive and
              educational gaming experiences.
            </p>
          </div>
          <div className="py-4">
            <a
              href="https://github.com/fireclint/property-finder"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8 bg-[#0e7490] hover:scale-110 hover:bg-[#0e7490] ease-in duration-300">
                Code
              </button>
            </a>
            <a
              href="https://property-finder-development.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 bg-[#0e7490] hover:scale-110 hover:bg-[#0e7490] ease-in duration-300">
                Demo
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <Link href="/phobiavoyage">
            <p className="underline cursor-pointe">Previous Project</p>
          </Link>
          <Link href="#" className="pointer-events-none">
            <p className="underline cursor-pointer  text-gray-400">
              Next Project
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default solarsystem;