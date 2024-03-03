import React from "react";
import Image from "next/image";
import Link from "next/link";
import superHeroRunImg from "../../public/assets/projects/super-hero-run/thumbnail.png";
import GameProjectsInfo from "@/components/projectsComponent/GameProjectsInfo";

const superherorun = () => {
  const superHeroRun = GameProjectsInfo.Details.SuperHeroRun;

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={superHeroRunImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{superHeroRun.name}</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid gap-8 py-8">
        <div>
          <Link href="/#projects" className="flex pb-4">
            <span>&lt;</span>
            <p className="underline cursor-pointer px-1"> Back</p>
          </Link>
          <h2>Overview</h2>
          <p className="py-4 text-xl">{superHeroRun.shortDesc}</p>

          <div className="text-md text-gray-600 project-desc">
            <p>
              In the creation of Super Hero Run, a hyper-casual 3D runner game
              prototype, I took charge of all programming aspects, ensuring a
              dynamic and engaging gaming experience. My contributions included:
            </p>
            <li>
              <b>AI Bot Diversity:</b>
              Engineered AI bots with diverse strengths, enhancing the
              competitiveness and unpredictability of gameplay.
            </li>
            <li>
              <b>Multi-Mechanic Dynamics:</b>
              Programmed seamless mechanics for flying, walking, and running,
              allowing players to effortlessly switch between characters based
              on obstacles encountered.
            </li>
            <li>
              <b>Real-Time Competition: </b>
              Implemented simultaneous competition with AI players, challenging
              users to prove their skills and adaptability in a dynamic gaming
              environment.
            </li>
            <p>
              This project, completed within a week, showcases not only my
              technical prowess in Unity programming but also my ability to
              rapidly prototype and deliver compelling gameplay mechanics. Super
              Hero Run is a testament to my commitment to crafting hyper-casual
              games that captivate players through innovation and excitement.
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
          <Link href="/pingpong">
            <p className="underline cursor-pointer">Previous Project</p>
          </Link>
          <Link href="/phobiavoyage">
            <p className="underline cursor-pointer">Next Project</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default superherorun;