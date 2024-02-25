import Image from "next/image";
import React from "react";
import { FaUnity, FaBitbucket, FaJira } from "react-icons/fa";
import {
  SiBlender,
  SiOculus,
  SiCsharp,
  SiPython,
  SiFirebase,
  SiAmazonaws,
  SiMeta,
  SiAdobephotoshop,
  SiWebgl,
  SiFacebook,
  SiGoogleadmob,
  SiMongodb,
} from "react-icons/si";
import { BsGit, BsGithub, BsTrello } from "react-icons/bs";

const Skills = () => {
  const skills = [
    { name: "Unity", icon: <FaUnity className="skill-icon" /> },
    { name: "Blender", icon: <SiBlender className="skill-icon" /> },
    { name: "Git", icon: <BsGit className="skill-icon" /> },
    { name: "Github", icon: <BsGithub className="skill-icon" /> },
    {
      name: "Bitbucket",
      icon: <FaBitbucket className="w-[35px] h-[35px] text-gray-600" />,
    },
    { name: "Photon Plugins", img: "/assets/skills/photon.jpeg" },
    { name: "Unity Net-Cide", icon: <FaUnity className="skill-icon" /> },
    { name: "Jira", icon: <FaJira className="skill-icon" /> },
    {
      name: "Trello",
      icon: <BsTrello className="w-[35px] h-[35px] text-gray-600" />,
    },
    { name: "Vuforia Plugins", img: "/assets/skills/vuforia.png" },
    { name: "Oculus Plugins", icon: <SiOculus className="skill-icon" /> },
    { name: "C#", icon: <SiCsharp className="skill-icon" /> },
    { name: "Python", icon: <SiPython className="skill-icon" /> },
    { name: "Firebase", icon: <SiFirebase className="skill-icon" /> },
    { name: "Playfab", img: "/assets/skills/playfab.png" },
    { name: "Amazon S3", icon: <SiAmazonaws className="skill-icon" /> },
    { name: "Meta Quest2 ", icon: <SiMeta className="skill-icon" /> },
    {
      name: "Photoshop",
      icon: <SiAdobephotoshop className="w-[35px] h-[35px] text-gray-600" />,
    },
    {
      name: "WebGL",
      icon: <SiWebgl className="w-[45px] h-[45px] text-gray-600" />,
    },
    {
      name: "Facebook Ads",
      icon: <SiFacebook className="w-[35px] h-[35px] text-gray-600" />,
    },
    {
      name: "Google Admob",
      icon: <SiGoogleadmob className="w-[35px] h-[35px] text-gray-600" />,
    },
    { name: "Mongo DB", icon: <SiMongodb className="skill-icon" /> },
    { name: "Davinci Resolve", img: "/assets/skills/davinci.jpeg" },
    {
      name: "Facebook APIs",
      icon: <SiFacebook className="w-[35px] h-[35px] text-gray-600" />,
    },
  ];

  const renderSkill = (skill, index) => {
    return (
      <div
        key={index}
        className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 "
      >
        <div className="grid grid-cols-3 gap-2">
          <div className="m-auto">
            {skill?.img ? (
              <Image src={skill.img} width="40" height="40" alt="/" />
            ) : (
              skill.icon
            )}
          </div>
          <div className="flex flex-col col-span-2 justify-center">
            <h3 className="text-lg tracking-tight">{skill.name}</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="skills" className="w-full h-auto px-2 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="text-xl uppercase py-4">Skills</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {skills.map((skill, index) => renderSkill(skill, index))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
