import { useState } from 'react';
import { arrow } from '../assets/icons';

const ImageGallery = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='w-full mb-12'>
      <h3 className='text-2xl font-bold mb-6'>{title}</h3>
      
      <div className='flex flex-col lg:flex-row gap-8'>
        <div className='flex-1 flex flex-col'>
          <div className='relative w-full h-96 bg-slate-900 rounded-xl overflow-hidden'>
            <img
              src={currentImage.url}
              alt={currentImage.alt}
              className='w-full h-full object-cover'
            />
          </div>

          <p className='mt-4 text-slate-400 text-sm'>{currentImage.alt}</p>

          {images.length > 1 && (
            <div className='flex gap-4 mt-6'>
              <button
                onClick={prevImage}
                className='flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full transition'
              >
                <img
                  src={arrow}
                  alt='prev'
                  className='w-4 h-4 rotate-180'
                />
              </button>
              <button
                onClick={nextImage}
                className='flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full transition'
              >
                <img src={arrow} alt='next' className='w-4 h-4' />
              </button>
            </div>
          )}
        </div>

        {images.length > 1 && (
          <div className='flex-1 flex flex-col gap-4'>
            <p className='text-slate-400 text-sm mb-2'>
              {currentIndex + 1} / {images.length}
            </p>
            <div className='grid grid-cols-2 gap-3'>
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-24 rounded-lg cursor-pointer overflow-hidden border-2 transition ${
                    index === currentIndex
                      ? 'border-blue-500'
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className='w-full h-full object-cover'
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
