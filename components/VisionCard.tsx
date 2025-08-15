'use client';

import React from 'react';

const VisionCard: React.FC = () => {
  return (
    <div className="relative max-w-5xl mx-auto group">
      {/* Enhanced background decorations */}
      <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-full blur-2xl animate-float" />
      <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-2xl animate-float-reverse" />
      <div className="absolute top-1/2 -left-4 w-24 h-24 bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-1/4 -right-6 w-20 h-20 bg-gradient-to-br from-green-400/15 to-emerald-500/15 rounded-full blur-lg animate-pulse delay-1000" />
      
      <div className="relative card-gradient dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl p-8 md:p-16 card-hover border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden">
        
        {/* Floating background elements */}
        <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-yellow-400/10 to-amber-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000" />
        <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full blur-lg group-hover:scale-125 transition-transform duration-700 delay-300" />
        
        {/* Enhanced quote icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 p-6 rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <span className="text-white text-3xl">💬</span>
            </div>
            
            {/* Glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 scale-150" />
            
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400/30 group-hover:scale-125 group-hover:border-yellow-400/50 transition-all duration-500" />
          </div>
        </div>

        {/* Enhanced vision text */}
        <blockquote className="text-center relative z-10">
          <p className="text-xl md:text-2xl lg:text-4xl font-medium text-gray-800 dark:text-gray-100 leading-relaxed mb-8 group-hover:scale-105 transition-transform duration-500">
            <span className="text-yellow-600 dark:text-yellow-400 font-bold text-4xl md:text-5xl">"</span>
            <span className="inline-block group-hover:text-yellow-700 dark:group-hover:text-yellow-300 transition-colors duration-300">
              Menjadikan OSIS SMA IT Fithrah Insani sebagai organisasi yang 
            </span>
            <span className="text-yellow-600 dark:text-yellow-400 font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent hover:from-yellow-500 hover:to-amber-600 transition-all duration-300"> disiplin dan teladan </span>
            <span className="inline-block group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
              dalam menjalankan program kerja guna menunjang pengembangan kemampuan 
            </span>
            <span className="text-blue-600 dark:text-blue-400 font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent hover:from-blue-500 hover:to-indigo-600 transition-all duration-300"> akademik maupun non akademik </span>
            <span className="inline-block group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
              siswa/i yang berlandaskan 
            </span>
            <span className="text-green-600 dark:text-green-400 font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent hover:from-green-500 hover:to-emerald-600 transition-all duration-300"> Al-Qur'an dan hadits</span>
            <span className="text-yellow-600 dark:text-yellow-400 font-bold text-4xl md:text-5xl">"</span>
          </p>
        </blockquote>

        {/* Enhanced decorative elements */}
        <div className="flex justify-center items-center mt-12 space-x-6 relative z-10">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full group-hover:scale-125 transition-transform duration-300" />
            <div className="w-3 h-3 bg-amber-500 rounded-full group-hover:scale-125 transition-transform duration-300 delay-100" />
            <div className="w-3 h-3 bg-yellow-600 rounded-full group-hover:scale-125 transition-transform duration-300 delay-200" />
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent group-hover:w-20 transition-all duration-500" />
          <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full group-hover:scale-125 group-hover:rotate-180 transition-all duration-500" />
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent group-hover:w-20 transition-all duration-500" />
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full group-hover:scale-125 transition-transform duration-300 delay-200" />
            <div className="w-3 h-3 bg-indigo-500 rounded-full group-hover:scale-125 transition-transform duration-300 delay-100" />
            <div className="w-3 h-3 bg-blue-600 rounded-full group-hover:scale-125 transition-transform duration-300" />
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
      </div>
    </div>
  );
};

export default VisionCard;