import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ project, thumbnail, projectUrl }) => {
  const [showReadMore, setShowReadMore] = useState(false);

  return (
    <div
      className="project relative"
      onMouseOver={() => setShowReadMore(true)}
      onMouseOut={() => setShowReadMore(false)}
    >
      <div
        className={`project-item justify-center items-center flex max-w-full h-full ${
          showReadMore ? "opacity-50" : ""
        }`}
      >
        <Image
          src={thumbnail}
          alt={project.name}
          className="rounded-xl object-cover md:max-w-[240px] h-full opacity-90"
        />
      </div>
      <div className={`px-4 w-full h-full ${showReadMore ? "opacity-50" : ""}`}>
        <h3 className="mb-4 text-[20px] text-[#0e7490] items-start">
          {project.name}
        </h3>
        <p className="">{project.shortDesc}</p>
      </div>
      {showReadMore && (
        <div
          hidden
          className="cursor-pointer w-full py-2 px-4 absolute justify-center items-center flex"
        >
          <Link
            className="rounded-full px-4 py-3 shadow-xl shadow-gray-400 font-bold bg-white text-black border-2 border-[#0e7490]"
            href={projectUrl}
          >
            Read More
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
