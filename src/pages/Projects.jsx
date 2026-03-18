import { Link } from "react-router-dom";
import { useState } from "react";

import { CTA } from "../components";
import { projects, projectCategories } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (categoryId) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        Over the past years, I have worked on several academic and personal projects that reflect my interests and learning progress. The projects presented here are those I consider most representative of my development. Some of them are open-source and can be explored to better understand my approach and technical choices.
      </p>

      {projectCategories.map((category) => {
        const categoryProjects = projects.filter(project => project.categoryId === category.id);
        const isOpen = openCategories[category.id];
        
        if (categoryProjects.length === 0) return null;

        return (
          <div key={category.id} className='mt-12'>
            <button 
              onClick={() => toggleCategory(category.id)}
              className='w-full flex items-center justify-between py-4 border-b border-slate-200 group'
            >
              <div className='flex items-center gap-4'>
                <img
                  src={arrow}
                  alt='arrow'
                  className={`w-6 h-6 object-contain transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                />
                <h2 className='text-3xl font-poppins font-bold group-hover:text-blue-500 transition-colors'>
                  {category.name}
                </h2>
                <span className='bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm font-semibold'>
                  {categoryProjects.length}
                </span>
              </div>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px] opacity-100 mt-10' : 'max-h-0 opacity-0'}`}>
              <div className='flex flex-wrap gap-16'>
                {categoryProjects.map((project) => (
                  <div className='lg:w-[400px] w-full' key={project.name}>
                    {project.previewImage && (
                      <div className='w-full h-48 mb-4 rounded-xl overflow-hidden shadow-lg group'>
                        <img
                          src={project.previewImage}
                          alt={project.name}
                          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                        />
                      </div>
                    )}
                    <div className='flex items-center gap-4'>
                      <div className='block-container w-12 h-12'>
                        <div className={`btn-back rounded-xl ${project.theme}`} />
                        <div className='btn-front rounded-xl flex justify-center items-center'>
                          <img
                            src={project.iconUrl}
                            alt={project.name}
                            className='w-1/2 h-1/2 object-contain'
                          />
                        </div>
                      </div>
                      <h4 className='text-2xl font-poppins font-semibold flex items-center gap-2'>
                        {project.name}
                        {project.favorite && <span className='text-red-500 text-2xl'>❤️</span>}
                      </h4>
                    </div>

                    <div className='mt-5 flex flex-col'>
                      <p className='mt-2 text-slate-500 leading-relaxed'>{project.description}</p>
                      <div className='mt-5 flex items-center gap-2 font-poppins'>
                        {project.type === 'external' ? (
                          <a
                            href={project.liveDemo}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-semibold text-blue-600'
                          >
                            Live Link
                          </a>
                        ) : (
                          <Link
                            to={project.type === 'website' ? `/view-project/${project.id}` : `/project/${project.id}`}
                            className='font-semibold text-blue-600'
                          >
                            {project.type === 'website' ? 'View Project' : project.type === '3d_model' ? 'View 3D Model' : 'Documentation'}
                          </Link>
                        )}
                        <img
                          src={arrow}
                          alt='arrow'
                          className='w-4 h-4 object-contain'
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      <hr className='border-slate-200 mt-20' />

      <CTA />
    </section>
  );
};

export default Projects;
