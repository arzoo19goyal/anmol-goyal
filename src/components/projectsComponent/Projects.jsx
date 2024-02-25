"use client";
import React, { useState } from "react";
import Image from "next/image";
import GameProjectsInfo from "./GameProjectsInfo";

import cyberWars from "../../../public/assets/projects/cyber-war/thumbnail.png";
import learnfest from "../../../public/assets/projects/learnfest/Learnfest-Thumbnail.png";
import pingPongMania from "../../../public/assets/projects/ping-pong-mania/thumbnail.png";
import phobiaVoyage from "../../../public/assets/projects/phobia-voyage/PV-Thumbnail.png";
import superHeroRun from "../../../public/assets/projects/super-hero-run/thumbnail.png";
import solarSystem from "../../../public/assets/projects/solar/thumbnail.png";

const Projects = () => {
  const getThumbnail = (p) => {
    switch (p.name) {
      case "Cyber War":
        return cyberWars;
      case "Kompanions Learnfest":
        return learnfest;
      case "Ping Pong Mania":
        return pingPongMania;
      case "Super Hero Run":
        return superHeroRun;
      case "VR Phobia Voyage":
        return phobiaVoyage;
      case "solAR - AR Solar System":
        return solarSystem;
    }
  };

  const rankedProjects = [
    GameProjectsInfo.Details.CyberWar,
    GameProjectsInfo.Details.Learnfest,
    GameProjectsInfo.Details.PingPongMania,
    GameProjectsInfo.Details.SuperHeroRun,
    GameProjectsInfo.Details.PhobiaVoyage,
    GameProjectsInfo.Details.SolarSystem,
  ];

  const [showButton, setShowButton] = useState(null);
  const handleMouseEnter = (index) => {
    setShowButton(index);
  };
  const handleMouseLeave = () => {
    setShowButton(null);
  };

  const renderPorjectDetail = () => {
    return (
      <div className="">
        <div></div>
      </div>
    );
  };

  return (
    <div
      id="projects"
      className="w-full md:h-auto px-2 flex items-center py-16 m-2"
    >
      <div className="max-w-[1240px] mx-auto">
        <h2 className="uppercase text-xl">Projects</h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 mt-4">
          {/* Projects */}
          {rankedProjects.map((p, index) => (
            <div
              key={index}
              className="project relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`justify-center items-center flex max-w-full h-full ${
                  showButton === index ? "opacity-50" : ""
                }`}
              >
                <Image
                  src={getThumbnail(p)}
                  alt={p.name}
                  className="rounded-xl object-cover md:max-w-[240px] h-full opacity-90"
                />
              </div>
              <div
                className={`px-4 w-full h-full ${
                  showButton === index ? "opacity-50" : ""
                }`}
              >
                <h3 className="mb-4 text-[20px] text-[#0e7490] items-start">
                  {p.name}
                </h3>
                <p className="">{p.shortDesc}</p>
              </div>
              {showButton === index && (
                <div className="cursor-pointer w-full py-2 px-4 absolute justify-center items-center flex">
                  <button
                    className="bg-white text-black border-2 border-[#0e7490]"
                    onClick={renderPorjectDetail}
                  >
                    Read More
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
