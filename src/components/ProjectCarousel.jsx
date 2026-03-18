import { useNavigate } from 'react-router-dom';
import { arrow } from '../assets/icons';

const ProjectCarousel = ({ projects, currentProjectId }) => {
  const navigate = useNavigate();
  const currentIndex = projects.findIndex((p) => p.id === currentProjectId);
  const prevProject = projects[currentIndex === 0 ? projects.length - 1 : currentIndex - 1];
  const nextProject = projects[currentIndex === projects.length - 1 ? 0 : currentIndex + 1];

  const handlePrevClick = () => {
    const path = prevProject.type === 'website' ? `/view-project/${prevProject.id}` : `/project/${prevProject.id}`;
    navigate(path);
  };

  const handleNextClick = () => {
    const path = nextProject.type === 'website' ? `/view-project/${nextProject.id}` : `/project/${nextProject.id}`;
    navigate(path);
  };

  return (
    <div className='w-full mt-16 pt-12 border-t border-slate-700'>
      <div className='flex items-center justify-between'>
        <div className='flex-1'>
          <button
            onClick={handlePrevClick}
            className='flex items-center gap-3 hover:text-blue-500 transition'
          >
            <img src={arrow} alt='prev' className='w-5 h-5 rotate-180' />
            <div className='text-left'>
              <p className='text-xs text-slate-500 uppercase'>Previous</p>
              <p className='text-sm font-semibold text-slate-100'>
                {prevProject.name}
              </p>
            </div>
          </button>
        </div>

        <div className='flex-1 flex justify-center'>
          <p className='text-slate-500 text-sm'>
            {currentIndex + 1} / {projects.length}
          </p>
        </div>

        <div className='flex-1 flex justify-end'>
          <button
            onClick={handleNextClick}
            className='flex items-center gap-3 hover:text-blue-500 transition text-right'
          >
            <div>
              <p className='text-xs text-slate-500 uppercase'>Next</p>
              <p className='text-sm font-semibold text-slate-100'>
                {nextProject.name}
              </p>
            </div>
            <img src={arrow} alt='next' className='w-5 h-5' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
