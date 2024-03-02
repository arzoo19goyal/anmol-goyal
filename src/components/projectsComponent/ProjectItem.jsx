import React from "react";
import Image from "next/image";

const ProjectItem = ({
  project,
  index,
  getThumbnail,
  showButton,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const renderPorjectDetail = () => {
    return (
      <div className="">
        <div></div>
      </div>
    );
  };

  return (
    <div
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
          src={getThumbnail(project)}
          alt={project.name}
          className="rounded-xl object-cover md:max-w-[240px] h-full opacity-90"
        />
      </div>
      <div
        className={`px-4 w-full h-full ${
          showButton === index ? "opacity-50" : ""
        }`}
      >
        <h3 className="mb-4 text-[20px] text-[#0e7490] items-start">
          {project.name}
        </h3>
        <p className="">{project.shortDesc}</p>
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
  );
};

export default ProjectItem;
