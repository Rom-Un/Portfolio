import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

const GLTFModel = ({ url, onError }) => {
  try {
    const gltf = useGLTF(url);
    return <primitive object={gltf.scene} />;
  } catch (error) {
    onError();
    return null;
  }
};

const ModelPlaceholder = ({ name }) => (
  <div className='w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900'>
    <div className='text-center'>
      <div className='w-20 h-20 mx-auto mb-4 bg-slate-700 rounded-lg flex items-center justify-center'>
        <svg
          className='w-10 h-10 text-slate-400'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </div>
      <p className='text-slate-400 mb-2'>Model file not available</p>
      <p className='text-slate-500 text-sm'>{name}</p>
    </div>
  </div>
);

const Model3DViewer = ({ models, showDetails = true }) => {
  const [selectedModel, setSelectedModel] = useState(0);
  const [modelErrors, setModelErrors] = useState({});

  if (!models || models.length === 0) {
    return null;
  }

  const currentModel = models[selectedModel];
  const hasError = modelErrors[selectedModel];

  const handleModelError = () => {
    setModelErrors((prev) => ({
      ...prev,
      [selectedModel]: true,
    }));
  };

  return (
    <div className={`w-full h-full flex flex-col ${showDetails ? 'mb-12' : ''}`}>
      {showDetails && <h3 className='text-2xl font-bold mb-6'>3D Models</h3>}

      <div className='flex-1 flex flex-col lg:flex-row gap-8 min-h-0'>
        <div className='flex-1 flex flex-col h-full min-h-0'>
          <div className={`w-full h-full overflow-hidden min-h-0 ${showDetails ? 'bg-slate-900 rounded-xl border border-slate-700' : 'bg-transparent'}`}>
            {hasError ? (
              <ModelPlaceholder name={currentModel.name} />
            ) : (
              <Suspense
                fallback={
                  <div className={`w-full h-full flex items-center justify-center ${showDetails ? 'bg-slate-900' : 'bg-transparent'}`}>
                    <p className='text-slate-400'>Loading model...</p>
                  </div>
                }
              >
                <Canvas camera={{ position: [0, 2, 5], fov: 45 }} shadows gl={{ preserveDrawingBuffer: true, antialias: true }}>
                  <color attach="background" args={['#050505']} />
                  <ambientLight intensity={1.5} />
                  <hemisphereLight skyColor="#ffffff" groundColor="#000000" intensity={1} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
                  <pointLight position={[0, 5, -5]} intensity={1.5} />
                  <directionalLight position={[0, 5, 5]} intensity={2} castShadow />
                  <GLTFModel url={currentModel.url} onError={handleModelError} />
                  <OrbitControls 
                    enableZoom={true} 
                    enablePan={true} 
                    autoRotate 
                    autoRotateSpeed={0.5}
                    minDistance={1}
                    maxDistance={15}
                    target={[0, 1, 0]}
                  />
                </Canvas>
              </Suspense>
            )}
          </div>
          {showDetails && <p className='mt-4 text-slate-400 text-sm'>{currentModel.name}</p>}
        </div>

        {showDetails && models.length > 1 && (
          <div className='flex-1 flex flex-col gap-4'>
            <p className='text-slate-400 text-sm mb-2'>
              {selectedModel + 1} / {models.length}
            </p>
            <div className='space-y-2'>
              {models.map((model, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedModel(index)}
                  className={`w-full p-4 rounded-lg text-left transition ${
                    index === selectedModel
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <div className='flex items-center justify-between'>
                    <span>{model.name}</span>
                    {modelErrors[index] && (
                      <span className='text-xs px-2 py-1 bg-red-900/40 text-red-300 rounded'>
                        Not available
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Model3DViewer;
