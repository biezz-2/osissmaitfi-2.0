'use client';

import React from 'react';

const EventSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="card-gradient rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 card-hover">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Video Section */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-l-2xl lg:rounded-l-2xl lg:rounded-r-none overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/c6PPkZs-pbs?si=JhpFTuImX8MaMr6I&rel=0&modestbranding=1"
                title="Event Video MPLS 2025"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full object-cover"
                style={{ border: 'none' }}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 lg:p-12 flex flex-col justify-center bg-white dark:bg-gray-800">
            {/* Event Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit">
              <span className="mr-2">📅</span>
              Event Terbaru
            </div>

            {/* Title */}
            <h3 className="heading-primary text-3xl lg:text-4xl text-gray-900 dark:text-gray-100 mb-4">
              MPLS <span className="text-yellow-600 dark:text-yellow-400">2025</span>
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-lg">
              Masa Pengenalan Lingkungan Sekolah yang diselenggarakan OSIS SMAIT Fithrah Insani
              untuk memperkenalkan siswa baru dengan lingkungan sekolah.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Kegiatan ini mencakup pengenalan peraturan sekolah, pengenalan guru, berbagai materi
              penting, dan pembentukan karakter kedisiplinan.
            </p>

            {/* Event Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="text-yellow-500 dark:text-yellow-400 mr-3 text-lg">📅</span>
                <span className="font-medium">19-21 Maret 2025</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="text-yellow-500 dark:text-yellow-400 mr-3 text-lg">📍</span>
                <span className="font-medium">SMAIT Fithrah Insani</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="text-yellow-500 dark:text-yellow-400 mr-3 text-lg">👥</span>
                <span className="font-medium">Seluruh Siswa Baru</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full border border-blue-200 dark:border-blue-700">
                Pengenalan
              </span>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium px-4 py-2 rounded-full border border-green-200 dark:border-green-700">
                Materi
              </span>
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium px-4 py-2 rounded-full border border-purple-200 dark:border-purple-700">
                Sosialisasi
              </span>
              <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-sm font-medium px-4 py-2 rounded-full border border-yellow-200 dark:border-yellow-700">
                Karakter
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;