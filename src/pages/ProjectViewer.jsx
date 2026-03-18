import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProjectViewer = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projectMap = {
    1: '/projects/science/project_1/physics_ep01.html',
    3: '/projects/science/project_3/math_ep01.html',
    5: '/projects/science/project_5/nsi_ep01.html',
  };

  const projectPath = projectMap[projectId];

  useEffect(() => {
    if (!projectPath) {
      navigate('/projects');
    }
  }, [projectPath, navigate]);

  if (!projectPath) {
    return null;
  }

  return (
    <div className='w-full h-screen overflow-hidden'>
      <button
        onClick={() => navigate('/projects')}
        className='absolute top-4 left-4 z-50 text-blue-500 hover:text-blue-400 flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-lg'
      >
        ← Back to Projects
      </button>
      <iframe
        src={projectPath}
        className='w-full h-full border-none'
        title={`Project ${projectId}`}
      />
    </div>
  );
};

export default ProjectViewer;
