// src/pages/ProjectById.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ProjectsData from "./ProjectData";

const ProjectById = () => {
  const { id } = useParams();
  const projectId = parseInt(id, 10); // Convert string to number
  const project = ProjectsData.find((p) => p.id === projectId);

  if (isNaN(projectId)) {
    return (
      <div className="p-6 text-center text-red-600 font-bold">
        Invalid project ID.
      </div>
    );
  }

  if (!project) {
    return (
      <div className="p-6 text-center text-red-600 font-bold">
        Project not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <article className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-64 sm:h-80 md:h-[400px] object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
            {project.title}
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            By <strong>{project.author}</strong>
          </p>
          <div className="text-gray-700 text-base md:text-lg leading-relaxed">
            {project.description}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectById;
