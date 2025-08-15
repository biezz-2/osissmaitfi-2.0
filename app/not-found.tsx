'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ParticleBackground from '@/components/ParticleBackground';

const NotFound: React.FC = () => {
    const router = useRouter();
    const [countdown, setCountdown] = useState(10);
    const [particles, setParticles] = useState<Array<{ left: number, top: number, delay: number, duration: number }>>([]);

    // Generate particles only on client side to avoid hydration mismatch
    useEffect(() => {
        const particleData = [...Array(20)].map(() => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 3,
            duration: 2 + Math.random() * 2
        }));
        setParticles(particleData);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Separate effect for navigation to avoid setState during render
    useEffect(() => {
        if (countdown === 0) {
            router.push('/');
        }
    }, [countdown, router]);

    return (
        <div className="page-404 full-height-404 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
                {/* Floating Orbs */}
                <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl animate-float-reverse" />
                <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/15 to-pink-500/15 rounded-full blur-2xl animate-pulse" />
                <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-gradient-to-r from-green-400/15 to-emerald-500/15 rounded-full blur-xl animate-bounce" />

                {/* Floating Numbers */}
                <div className="absolute top-1/4 left-1/3 text-yellow-400/30 text-9xl font-bold animate-bounce delay-300 select-none">4</div>
                <div className="absolute top-3/4 right-1/4 text-blue-400/30 text-9xl font-bold animate-bounce delay-700 select-none">0</div>
                <div className="absolute bottom-1/3 left-1/5 text-purple-400/30 text-9xl font-bold animate-bounce delay-1000 select-none">4</div>

                {/* Geometric Shapes */}
                <div className="absolute top-16 right-16 w-12 h-12 border-4 border-yellow-400/40 rotate-45 animate-spin" style={{ animationDuration: '15s' }} />
                <div className="absolute bottom-16 left-16 w-8 h-8 border-4 border-blue-400/40 rounded-full animate-ping delay-500" />
                <div className="absolute top-1/3 left-16 w-6 h-6 bg-purple-400/40 rotate-45 animate-pulse delay-1000" />
                <div className="absolute bottom-1/3 right-16 w-10 h-10 border-4 border-green-400/40 animate-spin delay-300" style={{ animationDuration: '20s' }} />

                {/* Floating Particles */}
                {particles.map((particle, i) => (
                    <div
                        key={i}
                        className={`absolute w-2 h-2 bg-yellow-400/60 rounded-full animate-bounce`}
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${particle.duration}s`
                        }}
                    />
                ))}

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                        {[...Array(144)].map((_, i) => (
                            <div key={i} className="border border-white/10" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="error-404-container content-404 text-center px-6 max-w-7xl mx-auto w-full">
                {/* Enhanced 404 Display */}
                <div className="mb-12 relative group">
                    {/* Main 404 Text */}
                    <h1 className="text-404 text-[10rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-bold leading-none select-none relative z-10 animate-pulse-glow">
                        404
                    </h1>

                    {/* Multiple Glitch Layers */}
                    <div className="absolute inset-0 text-[10rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-bold text-red-500/15 leading-none select-none animate-glitch" style={{ animationDelay: '0.1s' }}>
                        404
                    </div>
                    <div className="absolute inset-0 text-[10rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-bold text-blue-500/15 leading-none select-none animate-glitch" style={{ animationDelay: '0.2s' }}>
                        404
                    </div>
                    <div className="absolute inset-0 text-[10rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-bold text-purple-500/10 leading-none select-none animate-glitch" style={{ animationDelay: '0.3s' }}>
                        404
                    </div>

                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 holographic rounded-3xl group-hover:opacity-100 opacity-50 transition-opacity duration-500" />

                    {/* Sparkle Effects */}
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-sparkle" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-purple-400 rounded-full animate-sparkle" style={{ animationDelay: '1.5s' }} />
                </div>

                {/* Error Message */}
                <div className="mb-16">
                    <h2 className="error-title text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-fade-in-up">
                        Halaman Tidak Ditemukan
                    </h2>
                    <p className="error-subtitle text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-6 animate-fade-in-up delay-200">
                        Maaf, halaman yang Anda cari tidak dapat ditemukan.
                    </p>
                    <p className="error-description text-xl md:text-2xl text-gray-400 animate-fade-in-up delay-300">
                        Mungkin halaman telah dipindahkan atau URL yang dimasukkan salah.
                    </p>
                </div>

                {/* OSIS Branding */}
                <div className="mb-16 animate-fade-in-up delay-400">
                    <div className="flex items-center justify-center space-x-6 mb-8">
                        <img
                            src="/images/logo.png"
                            alt="Logo OSIS"
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full shadow-2xl"
                        />
                        <div className="text-left">
                            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                                OSIS SMAIT FITHRAH INSANI
                            </h3>
                            <p className="text-yellow-400 font-medium text-lg md:text-xl">Bhaskara 2025</p>
                        </div>
                    </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16 animate-fade-in-up delay-500">
                    <Link
                        href="/"
                        className="btn-404-primary btn-404-responsive group text-slate-900 font-semibold rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center relative overflow-hidden"
                    >
                        <span className="mr-4 group-hover:translate-x-1 transition-transform duration-300 text-3xl">🏠</span>
                        <span className="relative z-10">Kembali ke Beranda</span>
                    </Link>

                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="btn-404-responsive group relative border-2 border-white/30 hover:border-yellow-400 text-white hover:text-yellow-400 font-medium rounded-2xl backdrop-blur-sm transition-all duration-300 inline-flex items-center overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        <span className="mr-4 group-hover:-translate-x-1 transition-transform duration-300 text-2xl">←</span>
                        <span className="relative z-10">Halaman Sebelumnya</span>
                    </button>
                </div>

                {/* Enhanced Auto Redirect Counter */}
                <div className="animate-fade-in-up delay-600">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 relative overflow-hidden group">
                        {/* Background Animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-blue-400/5 animate-drift" />

                        <p className="text-gray-300 mb-3 relative z-10">
                            Otomatis kembali ke beranda dalam:
                        </p>
                        <div className="text-5xl font-bold text-yellow-400 mb-4 relative z-10 animate-pulse-glow">
                            {countdown}
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-3 relative overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 h-3 rounded-full transition-all duration-1000 relative"
                                style={{ width: `${((10 - countdown) / 10) * 100}%` }}
                            >
                                {/* Shimmer effect on progress bar */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" />
                        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-500" />
                    </div>
                </div>

                {/* Quick Links */}
                <div className="mt-12 animate-fade-in-up delay-700">
                    <p className="text-gray-400 mb-6">Atau kunjungi halaman lainnya:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { href: '/about', label: 'Tentang Kami', icon: '👥' },
                            { href: '/bidang', label: 'Program Kerja', icon: '📋' },
                            { href: '/people', label: 'Anggota', icon: '👨‍👩‍👧‍👦' },
                            { href: '/our-social-media', label: 'Social Media', icon: '📱' }
                        ].map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="group bg-white/5 hover:bg-white/10 border border-white/20 hover:border-yellow-400/50 text-gray-300 hover:text-yellow-400 px-4 py-2 rounded-xl transition-all duration-300 inline-flex items-center text-sm backdrop-blur-sm"
                            >
                                <span className="mr-2 group-hover:scale-110 transition-transform duration-300">
                                    {link.icon}
                                </span>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Enhanced Floating Action Elements */}
            <div className="absolute bottom-8 right-8 animate-float-404 delay-1000" style={{ zIndex: 15 }}>
                <div className="relative group">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-all duration-300 animate-pulse-glow">
                        <span className="text-2xl group-hover:scale-125 transition-transform duration-300">🚀</span>
                    </div>

                    {/* Orbit rings */}
                    <div className="absolute inset-0 border-2 border-yellow-400/30 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
                    <div className="absolute inset-[-8px] border border-blue-400/20 rounded-full animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Kembali ke atas
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                    </div>
                </div>
            </div>

            {/* Additional floating elements */}
            <div className="absolute top-8 left-8 animate-drift" style={{ zIndex: 5 }}>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-lg">✨</span>
                </div>
            </div>

            <div className="absolute top-1/4 right-8 animate-float delay-700" style={{ zIndex: 5 }}>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-sm">💫</span>
                </div>
            </div>
        </div>
    );
};

export default NotFound;