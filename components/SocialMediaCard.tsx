'use client';

import React, { useState } from 'react';

interface SocialMediaCardProps {
  name: string;
  icon: string;
  description: string;
  url: string;
  gradient: string;
  buttonColor: string;
  followers: number;
  delay?: number;
}

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({
  name,
  icon,
  description,
  url,
  gradient,
  buttonColor,
  followers,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Add click animation
    const card = document.getElementById(`social-card-${name.toLowerCase()}`);
    if (card) {
      card.classList.add('animate-pulse');
      setTimeout(() => {
        card.classList.remove('animate-pulse');
        window.open(url, '_blank', 'noopener,noreferrer');
      }, 200);
    }
  };

  return (
    <div 
      id={`social-card-${name.toLowerCase()}`}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Header with Gradient */}
      <div className={`bg-gradient-to-r ${gradient} p-8 text-center text-white relative overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-1000 ${
            isHovered ? 'translate-x-[-200%]' : 'translate-x-full'
          }`} />
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white/30 rounded-full transition-all duration-1000 ${
                isHovered ? 'animate-float' : ''
              }`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
        
        <i className={`${icon} text-6xl mb-4 animate-float relative z-10 transition-transform duration-300 ${
          isHovered ? 'scale-110' : ''
        }`}></i>
        <h3 className="text-2xl font-bold relative z-10">{name}</h3>
        
        {/* Follower Count Badge */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold">
          {followers.toLocaleString()}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Stats Preview */}
        <div className="flex justify-between items-center mb-6 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center">
            <i className="fas fa-users mr-1"></i>
            {followers.toLocaleString()} followers
          </span>
          <span className="flex items-center">
            <i className="fas fa-heart mr-1"></i>
            Active
          </span>
        </div>

        <button
          onClick={handleClick}
          className={`inline-flex items-center justify-center w-full px-6 py-3 ${buttonColor} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 relative overflow-hidden group`}
        >
          {/* Button Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          
          <i className={`${icon} mr-2 relative z-10`}></i>
          <span className="relative z-10">Follow {name}</span>
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-active:scale-100 transition-transform duration-300" />
        </button>
      </div>

      {/* Hover Glow Effect */}
      {isHovered && (
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-20 blur-xl -z-10 transition-opacity duration-300`} />
      )}
    </div>
  );
};

export default SocialMediaCard;