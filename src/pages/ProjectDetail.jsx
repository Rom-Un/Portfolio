import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../constants';
import { Footer } from '../components';
import ImageGallery from '../components/ImageGallery';
import Model3DViewer from '../components/Model3DViewer';
import ProjectCarousel from '../components/ProjectCarousel';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return (
      <div className='max-container mt-20'>
        <button
          onClick={() => navigate('/projects')}
          className='text-blue-500 hover:text-blue-400 mb-8'
        >
          ← Back to Projects
        </button>
        <p className='text-slate-400'>Project not found.</p>
      </div>
    );
  }

  if (project.type === '3d_model') {
    return (
      <section className='fixed inset-0 z-[100] bg-black text-white overflow-hidden'>
        <div className='w-full h-full flex flex-col lg:flex-row'>
          {/* Left Side - Full Screen 3D Viewer */}
          <div className='lg:w-[75%] h-[60%] lg:h-full relative bg-[#050505] flex flex-col'>
            <button
              onClick={() => navigate('/projects')}
              className='absolute top-8 left-8 z-[110] bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full backdrop-blur-md transition-all flex items-center gap-2 border border-white/10 group'
            >
              <span className='group-hover:-translate-x-1 transition-transform'>←</span> Back to Projects
            </button>
            
            <div className='flex-1 w-full min-h-0'>
              {project.models3d && project.models3d.length > 0 ? (
                <div className='w-full h-full'>
                   <Model3DViewer models={project.models3d} showDetails={false} />
                </div>
              ) : (
                <div className='w-full h-full flex items-center justify-center'>
                  <p className='text-slate-500 font-poppins'>3D Model Assets Missing</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Sleek Description Panel */}
          <div className='lg:w-[25%] h-[40%] lg:h-full overflow-y-auto bg-[#0a0a0a] border-l border-white/5 p-10 lg:p-12 flex flex-col gap-12 scrollbar-hide'>
            <div>
              <div className='flex items-center gap-5 mb-10'>
                <div className='block-container w-14 h-14 flex-shrink-0'>
                  <div className={`btn-back rounded-2xl ${project.theme}`} />
                  <div className='btn-front rounded-2xl flex justify-center items-center'>
                    <img
                      src={project.iconUrl}
                      alt={project.name}
                      className='w-1/2 h-1/2 object-contain'
                    />
                  </div>
                </div>
                <div>
                  <h1 className='text-3xl font-bold font-poppins text-white tracking-tight'>{project.name}</h1>
                  <p className='text-blue-500 mt-1 uppercase tracking-[0.3em] text-[10px] font-bold'>3D Modelisation</p>
                </div>
              </div>
              <p className='text-lg text-slate-400 leading-relaxed font-light'>{project.description}</p>
            </div>

            <div className='space-y-12 flex-1'>
              <div>
                <h3 className='text-[10px] font-bold mb-6 text-white/40 uppercase tracking-[0.3em]'>Concept & Details</h3>
                <div
                  className='prose prose-invert max-w-none text-slate-400 text-sm leading-relaxed space-y-4 font-light'
                  dangerouslySetInnerHTML={{ __html: project.documentation }}
                />
              </div>

              {project.techStack && project.techStack.length > 0 && (
                <div>
                  <h3 className='text-[10px] font-bold mb-6 text-white/40 uppercase tracking-[0.3em]'>Technology</h3>
                  <div className='flex flex-wrap gap-2'>
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className='px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-xs font-medium'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className='bg-white/5 p-8 rounded-3xl border border-white/5 space-y-6'>
                 <div>
                    <p className='text-white/30 text-[9px] uppercase tracking-[0.2em] mb-2'>Production Timeline</p>
                    <p className='text-white font-medium text-sm'>{project.timeline?.start} — {project.timeline?.end}</p>
                  </div>
                  <div>
                    <p className='text-white/30 text-[9px] uppercase tracking-[0.2em] mb-2'>Lead Artist</p>
                    <p className='text-white font-medium text-sm'>{project.team?.[0]?.name}</p>
                  </div>
              </div>
            </div>

            <div className='pt-12 border-t border-white/5'>
              <ProjectCarousel projects={projects} currentProjectId={project.id} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='min-h-screen bg-slate-300/20'>
      <div className='max-container py-20'>
        <button
          onClick={() => navigate('/projects')}
          className='text-blue-500 hover:text-blue-400 mb-8 flex items-center gap-2'
        >
          ← Back to Projects
        </button>

        <div className='mb-12'>
          <div className='flex items-start gap-6 mb-8'>
            <div className='block-container w-16 h-16 flex-shrink-0'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
            <div>
              <h1 className='head-text'>{project.name}</h1>
              <p className='text-slate-400 mt-2'>{project.description}</p>
            </div>
          </div>

          <div className='flex flex-wrap gap-4 mb-8'>
            <a
              href={project.liveDemo}
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition'
            >
              Live Demo
            </a>
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition'
            >
              GitHub Repository
            </a>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16'>
          <div className='lg:col-span-2'>
            <ImageGallery images={project.gallery} title='Project Gallery' />
          </div>

          <div className='space-y-8'>
            <div>
              <h3 className='text-2xl font-bold mb-4'>Tech Stack</h3>
              <div className='flex flex-wrap gap-2'>
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className='px-4 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg text-blue-300 text-sm'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className='text-2xl font-bold mb-4'>Timeline</h3>
              <p className='text-slate-400'>
                <span className='text-slate-300 font-semibold'>Start:</span>{' '}
                {project.timeline.start}
              </p>
              <p className='text-slate-400'>
                <span className='text-slate-300 font-semibold'>End:</span>{' '}
                {project.timeline.end}
              </p>
            </div>

            <div>
              <h3 className='text-2xl font-bold mb-4'>Team</h3>
              <div className='space-y-3'>
                {project.team.map((member, index) => (
                  <div key={index} className='text-slate-400'>
                    <p className='font-semibold text-slate-300'>{member.name}</p>
                    <p className='text-sm text-slate-500'>{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {project.models3d && project.models3d.length > 0 && (
          <Model3DViewer models={project.models3d} />
        )}

        <div className='mb-16'>
          <div
            className='prose prose-invert max-w-none text-slate-300'
            dangerouslySetInnerHTML={{ __html: project.documentation }}
          />
        </div>

        <ProjectCarousel projects={projects} currentProjectId={project.id} />
      </div>

      <Footer />
    </section>
  );
};

export default ProjectDetail;
