import React, { useState } from "react";
import { projects } from "../data";
import { CodeIcon } from "@heroicons/react/solid";

export default function Carousel(){
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [{},{},{},{},];
    function updateIndex(newIndex){ //just used to keep track of index I think
      if (newIndex < 0) {
        newIndex = 0;
      } else if (newIndex >= items.length) {
        newIndex = items.length - 1;
      }
      setActiveIndex(newIndex);
    };
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Project Portfolio
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here is a summary of what I've been up to in the last 4 years, 
            for more information feel free to click on a project!
          </p>
        </div>
        <div className="carousel mx-auto text-center">
          
          <div
             //carousel px-5 py-10 mx-auto text-center lg:px-40 
          >
          
            {projects.map((project) => (
              <div className="carousel-item" style={{ width: "100%" }}>
                <a
                  href={project.link}
                  key={project.image}
                  className="sm:w-1/2 w-100 p-4">
                  <div className="flex relative">
                    <img
                      alt="gallery"
                      className="absolute inset-0" // w-full h-full object-cover object-center
                      src={project.image}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>


          <div className="carousel-buttons">
            <button
              className="button-arrow"
              onClick={() => {
                updateIndex(activeIndex - 1);
              }}
            >
              <span class="material-symbols-outlined">◁</span>{" "}
            </button>
            <div className="indicators">
              {items.map((item, index) => {
                return (
                  <button
                    className="indicator-buttons"
                    onClick={() => {
                      updateIndex(index);
                    }}
                  >
                    <span
                      className={`material-symbols-outlined ${
                        index === activeIndex
                          ? "indicator-symbol-active"
                          : "indicator-symbol"
                      }`}
                    >
                      ◉
                    </span>
                  </button>
                );
              })}
            </div>
            <button
              className="button-arrow"
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
            >
              <span class="material-symbols-outlined">▷</span>
            </button>
          </div>
        </div>
      </div>
    </section>
    
  );
};