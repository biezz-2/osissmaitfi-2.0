'use client';

import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import PageEnterAnimation from '@/components/PageEnterAnimation';
import SocialMediaCard from '@/components/SocialMediaCard';
import SocialStats from '@/components/SocialStats';

const OurSocialMediaPage: React.FC = () => {

  const socialPlatforms = [
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      description: 'Ikuti kami untuk update harian, foto, dan cerita dari kegiatan sekolah.',
      url: 'https://www.instagram.com/osissmaitfi/',
      gradient: 'from-purple-600 via-pink-600 to-red-500',
      buttonColor: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
      followers: 1203
    },
    {
      name: 'YouTube',
      icon: 'fab fa-youtube',
      description: 'Subscribe channel kami untuk rekaman acara, tutorial, dan pengumuman sekolah.',
      url: 'https://www.youtube.com/@osissmaitfithrahinsani9481',
      gradient: 'from-red-600 to-red-500',
      buttonColor: 'bg-red-500 hover:bg-red-600',
      followers: 267
    },
    {
      name: 'TikTok',
      icon: 'fab fa-tiktok',
      description: 'Lihat video pendek yang menyenangkan dan kreatif tentang kehidupan sekolah.',
      url: 'https://www.tiktok.com/@osissmaitfi',
      gradient: 'from-gray-900 via-gray-700 to-pink-500',
      buttonColor: 'bg-gradient-to-r from-gray-800 to-pink-500 hover:from-gray-900 hover:to-pink-600',
      followers: 144
    },
    {
      name: 'Spotify',
      icon: 'fab fa-spotify',
      description: 'Dengarkan podcast dan konten audio dari OSIS SMAIT Fithrah Insani.',
      url: 'https://open.spotify.com/show/0LNgKunTS7KWBCv3JXFnSw',
      gradient: 'from-green-600 to-green-500',
      buttonColor: 'bg-green-500 hover:bg-green-600',
      followers: 436
    }
  ];

  const statsData = [
    {
      platform: 'Instagram',
      count: 0,
      label: 'Followers',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      icon: 'fab fa-instagram',
      target: 1203
    },
    {
      platform: 'YouTube',
      count: 0,
      label: 'Subscribers',
      color: 'text-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900/30',
      icon: 'fab fa-youtube',
      target: 267
    },
    {
      platform: 'TikTok',
      count: 0,
      label: 'Followers',
      color: 'text-pink-600 dark:text-pink-400',
      bgColor: 'bg-gradient-to-r from-gray-100 to-pink-100 dark:from-gray-700 dark:to-pink-900/30',
      icon: 'fab fa-tiktok',
      target: 144
    },
    {
      platform: 'Spotify',
      count: 0,
      label: 'Listeners',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      icon: 'fab fa-spotify',
      target: 436
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <PageEnterAnimation animation="fade">
        <section className="relative bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-white py-20 overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float-reverse" />
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse" />
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Icon */}
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full p-6 mb-8 animate-float">
                <i className="fas fa-share-alt text-6xl"></i>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                Media Sosial Kami
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up delay-200">
                Saluran Media Sosial Resmi OSIS SMAIT Fithrah Insani
              </p>

              {/* Decorative Elements */}
              <div className="flex justify-center space-x-8 mt-12">
                {['fab fa-instagram', 'fab fa-youtube', 'fab fa-tiktok', 'fab fa-spotify'].map((icon, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-bounce"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <i className={`${icon} text-xl`}></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </PageEnterAnimation>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Introduction */}
        <AnimatedSection delay={0.2} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Terhubung Dengan Kami
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ikuti Media Sosial kami untuk mengetahui aktivitas terbaru pengurus OSIS SMAIT Fithrah Insani
          </p>
        </AnimatedSection>

        {/* Social Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {socialPlatforms.map((platform, index) => (
            <AnimatedSection
              key={platform.name}
              delay={0.1 * (index + 1)}
              direction="up"
              className="scroll-reveal"
            >
              <SocialMediaCard
                name={platform.name}
                icon={platform.icon}
                description={platform.description}
                url={platform.url}
                gradient={platform.gradient}
                buttonColor={platform.buttonColor}
                followers={platform.followers}
                delay={index * 100}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Stats Section */}
        <AnimatedSection delay={0.6} className="scroll-reveal">
          <SocialStats stats={statsData} />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default OurSocialMediaPage;