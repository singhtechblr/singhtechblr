/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect } from 'react';
import {
  Bars2Icon,
  CalendarIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import sanityClient from '../sanity';
import { urlFor } from '../sanity';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "projects"]{
      ...,
    } | order(date desc)`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen pt-10 pb-10 bg-gray-100 text-gray-900 flex justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
          <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />

          <p className="text-lg text-gray-600 flex justify-center mb-12 p-10 space-x-4 w-4/6">
            Welcome to my projects page!
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              className="relative rounded-lg shadow-xl bg-white p-10"
              key={project.title}
            >
              <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                <a
                  href={project.link}
                  alt={project.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>
              <div className="text-gray-500 text-xs space-x-4 space-y-2">
                <img
                  src={urlFor(project.image).url()}
                  alt={project.title}
                  className="w-full h-64 rounded-t object-cover"
                />
                <p className="my-6 text-md text-gray-700 leading-relaxed text-justify">
                  {project.description}
                </p>
                {project.link ? (
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    Live Demo{' '}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                ) : (
                  ''
                )}
                {project.github ? (
                  <a
                    href={project.github}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    View Code{' '}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                ) : (
                  ''
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
