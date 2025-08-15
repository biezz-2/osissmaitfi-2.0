'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function KultumPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const objectives = [
        {
            icon: "fas fa-book-open",
            title: "Memperdalam pengetahuan keagamaan siswa",
            description: "Memberikan wawasan keislaman yang komprehensif"
        },
        {
            icon: "fas fa-microphone",
            title: "Melatih kemampuan public speaking",
            description: "Mengembangkan kepercayaan diri dalam berbicara di depan umum"
        },
        {
            icon: "fas fa-users",
            title: "Membangun kebersamaan melalui kegiatan keagamaan",
            description: "Memperkuat ukhuwah islamiyah antar siswa"
        }
    ];

    const technicalSteps = [
        {
            icon: "fas fa-list-ol",
            title: "Penentuan Topik",
            description: "Panitia menyiapkan daftar topik kultum yang akan dibagikan kepada peserta",
            color: "blue"
        },
        {
            icon: "fas fa-user-check",
            title: "Persiapan Peserta",
            description: "Peserta mempersiapkan materi sesuai dengan topik yang telah ditentukan",
            color: "green"
        },
        {
            icon: "fas fa-chalkboard-teacher",
            title: "Pelaksanaan",
            description: "Peserta menyampaikan kultum di hadapan audiens sesuai jadwal yang telah ditetapkan",
            color: "purple"
        }
    ];

    const galleryImages = [
        {
            src: "/images/kultum/22-jan-2025.png",
            alt: "Siswa menyampaikan materi kultum di hadapan teman-teman",
            title: "Penyampaian Kultum",
            fallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            src: "/images/kultum/10-feb-2025.png",
            alt: "Suasana khidmat saat penyampaian kultum",
            title: "Suasana Khidmat",
            fallback: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            src: "/images/kultum/20-jan-2025.png",
            alt: "Interaksi antara pembicara dan peserta kultum",
            title: "Interaksi Peserta",
            fallback: "https://images.unsplash.com/photo-1542816417-0983675a5c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        }
    ];

    const getColorClasses = (color: string) => {
        const colors = {
            blue: {
                bg: 'bg-blue-50 dark:bg-blue-900/30',
                iconBg: 'bg-blue-100 dark:bg-blue-800',
                text: 'text-blue-600 dark:text-blue-400',
                border: 'border-blue-200 dark:border-blue-700'
            },
            green: {
                bg: 'bg-green-50 dark:bg-green-900/30',
                iconBg: 'bg-green-100 dark:bg-green-800',
                text: 'text-green-600 dark:text-green-400',
                border: 'border-green-200 dark:border-green-700'
            },
            purple: {
                bg: 'bg-purple-50 dark:bg-purple-900/30',
                iconBg: 'bg-purple-100 dark:bg-purple-800',
                text: 'text-purple-600 dark:text-purple-400',
                border: 'border-purple-200 dark:border-purple-700'
            }
        };
        return colors[color as keyof typeof colors] || colors.blue;
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] bg-[length:60px_60px]" />
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center items-center mb-6"
                    >
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                            <i className="fas fa-microphone text-5xl text-yellow-400"></i>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                    >
                        Kultum
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
                    >
                        Memperluas pengetahuan keagamaan dan melatih rasa percaya diri siswa
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        onClick={() => document.getElementById('tujuan')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-full inline-flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <span>Pelajari Program</span>
                        <i className="fas fa-arrow-down"></i>
                    </motion.button>
                </div>

                {/* Decorative wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-gray-50 dark:fill-gray-900">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
                    </svg>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                {/* Navigation Breadcrumb */}
                <motion.nav
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Home
                        </Link>
                        <i className="fas fa-chevron-right text-xs"></i>
                        <Link href="/sekbid/sekbid-1" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Sekbid 1
                        </Link>
                        <i className="fas fa-chevron-right text-xs"></i>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">Kultum</span>
                    </div>
                </motion.nav>

                {/* Tujuan Program Section */}
                <motion.section
                    id="tujuan"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-blue-400 mb-6">
                                Tujuan Program
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                                Program Kultum bertujuan untuk memberikan wawasan keagamaan yang lebih luas kepada siswa/i SMA IT Fithrah Insani, sekaligus menjadi wadah untuk melatih rasa percaya diri dalam menyampaikan materi keagamaan di depan umum.
                            </p>

                            <div className="space-y-4">
                                {objectives.map((objective, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start group"
                                    >
                                        <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full mr-4 flex-shrink-0 group-hover:bg-blue-200 dark:group-hover:bg-blue-700 transition-colors">
                                            <i className={`${objective.icon} text-blue-600 dark:text-blue-300`}></i>
                                        </div>
                                        <div>
                                            <p className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                                                {objective.title}
                                            </p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                                                {objective.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Islamic study"
                                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3">
                                        <p className="text-sm font-medium text-gray-800 dark:text-white">
                                            Kultum - Kuliah Tujuh Menit
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Teknis Pelaksanaan Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16 bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-blue-400 mb-8 text-center">
                        Teknis Pelaksanaan
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {technicalSteps.map((step, index) => {
                            const colorClasses = getColorClasses(step.color);
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className={`${colorClasses.bg} p-6 rounded-2xl border ${colorClasses.border} hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                                >
                                    <div className={`${colorClasses.iconBg} w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 relative`}>
                                        <i className={`${step.icon} ${colorClasses.text} text-xl`}></i>
                                        <div className="absolute -top-2 -right-2 bg-white dark:bg-gray-800 text-xs font-bold px-2 py-1 rounded-full shadow-md">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-center mb-3 text-gray-800 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.section>

                {/* Dokumentasi Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-blue-400 mb-8 text-center">
                        Dokumentasi Kegiatan
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.03 }}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                                onClick={() => setSelectedImage(image.fallback)}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={image.fallback}
                                        alt={image.alt}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <i className="fas fa-search-plus text-white text-2xl"></i>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                                        {index + 1}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {image.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        {image.alt}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Benefits Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Manfaat Program Kultum
                        </h2>
                        <p className="text-blue-100 max-w-2xl mx-auto">
                            Program ini memberikan berbagai manfaat bagi pengembangan diri siswa dalam aspek spiritual dan komunikasi
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: "fas fa-brain", title: "Pengembangan Intelektual", desc: "Meningkatkan pemahaman keagamaan" },
                            { icon: "fas fa-comments", title: "Kemampuan Komunikasi", desc: "Melatih public speaking" },
                            { icon: "fas fa-heart", title: "Spiritual Growth", desc: "Memperdalam keimanan" },
                            { icon: "fas fa-users", title: "Social Skills", desc: "Membangun kebersamaan" }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300"
                            >
                                <i className={`${benefit.icon} text-3xl text-yellow-400 mb-4`}></i>
                                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-blue-100 text-sm">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Call to Action */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                        Mari Bergabung dalam Program Kultum
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        Kembangkan kemampuan public speaking dan perluas wawasan keagamaan Anda melalui program Kultum yang inspiratif.
                    </p>
                    <Link
                        href="/sekbid/sekbid-1"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <i className="fas fa-arrow-left"></i>
                        <span>Kembali ke Sekbid 1</span>
                    </Link>
                </motion.section>
            </main>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh] w-full">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl z-10"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                        <img
                            src={selectedImage}
                            alt="Gallery Image"
                            className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}

            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
                aria-label="Kembali ke atas"
            >
                <i className="fas fa-arrow-up"></i>
            </button>
        </div>
    );
}