'use client';

import React from 'react';

const GoalsSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="relative mb-8">
          <img 
            src="/images/our-goals-placeholder.png" 
            alt="Our Goals" 
            className="mx-auto w-full max-w-4xl rounded-2xl shadow-2xl" 
          />
        </div>
        
        <div className="bg-slate-900 bg-opacity-80 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto border border-slate-700">
          <h3 className="text-2xl lg:text-3xl font-semibold text-yellow-400 mb-4">
            Forum OSIS Kabupaten Bandung Barat
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Kami berkomitmen untuk membentuk generasi yang berakhlak mulia, cerdas, dan mandiri. 
            Melalui kegiatan pendidikan dan pembinaan karakter, kami ingin menciptakan lingkungan 
            belajar yang inspiratif dan produktif bagi seluruh siswa.
          </p>
        </div>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Goal 1 */}
        <div className="group relative">
          <div className="bg-slate-900 bg-opacity-80 backdrop-blur-md rounded-xl p-8 h-full border border-slate-700 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mb-6 text-white shadow-lg">
              <span className="text-2xl">🎓</span>
            </div>
            <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
              Prestasi Akademik
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Meningkatkan prestasi akademik siswa melalui program bimbingan dan kompetisi
            </p>
            <div className="mt-6 h-1 bg-blue-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Goal 2 */}
        <div className="group relative">
          <div className="bg-slate-900 bg-opacity-80 backdrop-blur-md rounded-xl p-8 h-full border border-slate-700 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-2xl mb-6 text-white shadow-lg">
              <span className="text-2xl">❤️</span>
            </div>
            <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
              Karakter Islami
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Membentuk karakter siswa yang berakhlak mulia berdasarkan nilai-nilai Islam
            </p>
            <div className="mt-6 h-1 bg-green-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Goal 3 */}
        <div className="group relative">
          <div className="bg-slate-900 bg-opacity-80 backdrop-blur-md rounded-xl p-8 h-full border border-slate-700 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-2xl mb-6 text-white shadow-lg">
              <span className="text-2xl">👥</span>
            </div>
            <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
              Kepemimpinan
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Mengembangkan jiwa kepemimpinan dan kerjasama dalam organisasi
            </p>
            <div className="mt-6 h-1 bg-purple-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Goal 4 */}
        <div className="group relative">
          <div className="bg-slate-900 bg-opacity-80 backdrop-blur-md rounded-xl p-8 h-full border border-slate-700 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-2xl mb-6 text-white shadow-lg">
              <span className="text-2xl">💡</span>
            </div>
            <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
              Inovasi & Kreativitas
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Mendorong inovasi dan kreativitas dalam setiap kegiatan dan program
            </p>
            <div className="mt-6 h-1 bg-yellow-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Goal 5 */}
        <div className="group relative">
          <div className="bg-slate-900 bg-opacity-80 backdrop-blur-md rounded-xl p-8 h-full border border-slate-700 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-2xl mb-6 text-white shadow-lg">
              <span className="text-2xl">⭐</span>
            </div>
            <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
              Keunggulan Sekolah
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Menjadikan SMAIT Fithrah Insani sebagai sekolah unggulan di Kabupaten Bandung Barat
            </p>
            <div className="mt-6 h-1 bg-red-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Goal 6 */}
        <div className="group relative">
          <div className="bg-slate-900 bg-opacity-80 backdrop-blur-md rounded-xl p-8 h-full border border-slate-700 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-500 rounded-2xl mb-6 text-white shadow-lg">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
              Visi 2030
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Mewujudkan visi sekolah menjadi lembaga pendidikan Islam terdepan
            </p>
            <div className="mt-6 h-1 bg-indigo-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-slate-900 bg-opacity-80 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto border border-slate-700">
          <h4 className="text-2xl font-semibold text-yellow-400 mb-4">
            Mari Bergabung Bersama Kami
          </h4>
          <p className="text-gray-300 mb-6">
            Wujudkan impian dan cita-cita bersama OSIS SMAIT Fithrah Insani
          </p>
          <button 
            type="button"
            className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-900 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoalsSection;