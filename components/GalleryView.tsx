import React, { useState, useEffect } from 'react';
import { ICONS } from '../constants';

interface GalleryViewProps {
  message: string;
  images: string[];
  onNext: () => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ message, images, onNext }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Auto-slide logic: 5 seconds interval
  useEffect(() => {
    if (images.length <= 1) return;

    const slideInterval = setInterval(() => {
      setCurrentIdx(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-rose-100 text-center animate-in fade-in zoom-in duration-700">
      <div className="mb-6 relative group overflow-hidden rounded-2xl bg-rose-50/50">
        <div className="w-full h-80 flex items-center justify-center">
          <img 
            src={images[currentIdx]} 
            alt="Sweet Moment" 
            className="max-w-full max-h-full object-contain shadow-inner transition-all duration-500"
          />
        </div>
        
        {/* Navigation Dots for Auto-slide awareness */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, idx) => (
              <div 
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIdx ? 'bg-rose-500 w-4' : 'bg-rose-300'}`}
              />
            ))}
          </div>
        )}

        {images.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <button 
                  onClick={() => setCurrentIdx(prev => (prev - 1 + images.length) % images.length)} 
                  className="p-3 bg-white/80 rounded-full shadow-md text-rose-500 hover:bg-white transition-colors pointer-events-auto"
                >
                  ←
                </button>
                <button 
                  onClick={() => setCurrentIdx(prev => (prev + 1) % images.length)} 
                  className="p-3 bg-white/80 rounded-full shadow-md text-rose-500 hover:bg-white transition-colors pointer-events-auto"
                >
                  →
                </button>
            </div>
        )}
      </div>

      <div className="bg-pink-50/50 p-6 rounded-2xl border border-pink-100 mb-8 italic text-rose-700 font-romantic text-xl leading-relaxed">
        "{message}"
      </div>

      <button 
        onClick={onNext}
        className="w-full py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-rose-200 transition-all transform hover:-translate-y-1"
      >
        Continue Our Journey
      </button>
    </div>
  );
};
