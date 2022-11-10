/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  Bars2Icon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

const Skills = () => {
  return (
    <div className="min-h-screen pt-10 pb-10 bg-gray-100 text-gray-900 flex justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl flex justify-center cursive">My IT Skills</h1>
          <h2 className="text-lg text-gray-600 flex justify-center mb-12">
            Welcome to my IT Skills page!
          </h2>
          <section className="container mx-auto">
            <div>
              React Native | React | Next.js
              <div className="w-full bg-gray-200 h-1 mb-6">
                <div className="w-4/6 h-full bg-green-500"></div>
              </div>
            </div>
            <div>
              JavaScript
              <div className="w-full bg-gray-200 h-1 mb-6">
                <div className="w-3/4 h-full bg-blue-500"></div>
              </div>
            </div>
            <div>
              Tailwind CSS | Bootstrap | Material UI | SCSS
              <div className="w-full bg-gray-200 h-1 mb-6">
                <div className="w-3/4 h-full bg-yellow-500"></div>
              </div>
            </div>
            <div>
              NodeJS | PHP
              <div className="w-full bg-gray-200 h-1 mb-6">
                <div className="w-3/5 h-full bg-green-500"></div>
              </div>
            </div>
            <div>
              MongoDB | MySQL | Firebase | Sanity
              <div className="w-full bg-gray-200 h-1 mb-6">
                <div className="w-3/4 h-full bg-red-500"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Skills;
