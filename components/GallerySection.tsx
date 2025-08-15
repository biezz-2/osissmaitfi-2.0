'use client';

import React, { useState, useEffect, useCallback } from 'react';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);

  const images = [
    {
      src: '/images/gallery-1.jpg',
      title: 'Kegiatan MPLS 2025',
      description: 'Masa Pengenalan Lingkungan Sekolah untuk siswa baru'
    },
    {
      src: '/images/gallery-2.jpg',
      title: 'Rapat Koordinasi OSIS',
      description: 'Persiapan program kerja semester baru'
    },
    {
      src: '/images/gallery-3.jpg',
      title: 'Event Sekolah',
      description: 'Berbagai kegiatan ekstrakurikuler dan kompetisi'
    },
    {
      src: '/images/gallery-4.jpg',
      title: 'Kegiatan Sosial',
      description: 'Program bakti sosial dan pengabdian masyarakat'
    },
    {
      src: '/images/gallery-5.jpg',
      title: 'Penghargaan Siswa',
      description: 'Penghargaan yang diraih para siswa/i'
    },
    {
      src: '/images/gallery-6.JPG',
      title: 'Festival Pendidikan',
      description: 'Festival pendidikan dengan mengundang bintang tamu ternama'
    }
  ];

  const openModal = useCallback((index: number) => {
    setSelectedImage(index);
    setImageLoading(true);
    setImageError(false);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    setImageLoading(false);
    setImageError(false);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedImage !== null) {
      setImageLoading(true);
      setImageError(false);
      setSelectedImage((selectedImage + 1) % images.length);
    }
  }, [selectedImage, images.length]);

  const prevImage = useCallback(() => {
    if (selectedImage !== null) {
      setImageLoading(true);
      setImageError(false);
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  }, [selectedImage, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    };

    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, closeModal, prevImage, nextImage]);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 active:scale-95"
            onClick={() => openModal(index)}
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 min-h-[200px] sm:min-h-[250px]">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://picsum.photos/800/600?random=${index + 1}`;
                }}
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.opacity = '1';
                }}
                style={{ opacity: '0', transition: 'opacity 0.3s ease' }}
              />
            </div>

            {/* Overlay - Always visible on mobile, hover on desktop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h4 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">{image.title}</h4>
                <p className="text-gray-200 text-xs sm:text-sm line-clamp-2">{image.description}</p>
              </div>

              {/* Expand icon */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Border glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Close button - Larger on mobile */}
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-full flex items-center justify-center text-white transition-all duration-300 z-[10000] shadow-lg hover:scale-110 active:scale-95"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button - Better positioning on mobile */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 active:bg-white/40 rounded-full flex items-center justify-center text-white transition-all duration-300 z-[10000] shadow-lg hover:scale-110 active:scale-95"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button - Better positioning on mobile */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 active:bg-white/40 rounded-full flex items-center justify-center text-white transition-all duration-300 z-[10000] shadow-lg hover:scale-110 active:scale-95"
            aria-label="Next image"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Loading spinner */}
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            )}

            {/* Error state */}
            {imageError && (
              <div className="flex flex-col items-center justify-center text-white p-8">
                <svg className="w-16 h-16 mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-lg font-semibold mb-2">Gambar tidak dapat dimuat</p>
                <p className="text-gray-300 text-center">Maaf, gambar tidak tersedia saat ini</p>
              </div>
            )}

            {/* Main image */}
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].title}
              className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'
                }`}
              onLoad={() => {
                setImageLoading(false);
                setImageError(false);
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                setImageLoading(false);
                // Try fallback image first
                if (!target.src.includes('picsum.photos')) {
                  target.src = `https://picsum.photos/800/600?random=${selectedImage + 1}`;
                } else {
                  // If even fallback fails, show error state
                  setImageError(true);
                }
              }}
            />

            {/* Image info - only show when image is loaded and no error */}
            {!imageLoading && !imageError && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-6 rounded-b-lg">
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                  {images[selectedImage].title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {images[selectedImage].description}
                </p>
              </div>
            )}
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2">
            <span className="text-white text-xs sm:text-sm font-medium">
              {selectedImage + 1} / {images.length}
            </span>
          </div>

          {/* ESC hint - Hide on mobile */}
          <div className="hidden sm:block absolute top-6 left-6 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
            <span className="text-white text-sm">Press ESC to close</span>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;