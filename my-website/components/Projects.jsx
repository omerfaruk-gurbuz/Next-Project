import React from 'react';
import data from "../src/app/helper/Projectsdata";

const Projects = () => {
  return (
    <div class="flex flex-col justify-center items-center">
      <div class="text-white text-5xl font-semibold mt-44 m-8">Selected Projects</div>
      <div className=" 
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      gap-10 p-5 ">

        {data.map((data) => (
          <div class="p-1 max-w-sm border-4 border-teal-500 rounded-lg shadow " key={data.id}>
            <img class="rounded-t-lg" src={data.image} alt={data.title} />
            <p class="text-2xl font-semibold m-5 text-teal-500">{data.title}</p>
            <p>{data.description}</p>
            <div class="flex justify-start m-4 gap-4">
            <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-50 bg-teal-500 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300">{data.button1}</button>
            <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-50 bg-teal-500 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300">{data.button2}</button>
            <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-50 bg-teal-500 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300">{data.button3}</button>
            </div>
            <div class="flex items-center">
             <a class=" p-4 font-light text-white " href={data.repo}>view to repo</a>
             <svg class=" mt-1 w-3.5 h-3.5 ml-0 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};
export default Projects;
