'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function OneDayOneJuzPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const benefits = [
        {
            icon: "fas fa-heart",
            title: "Meningkatkan Iman",
            description: "Membaca Al-Qur'an secara rutin akan meningkatkan keimanan dan ketakwaan kepada Allah SWT."
        },
        {
            icon: "fas fa-brain",
            title: "Memperdalam Pemahaman",
            description: "Dengan membaca Al-Qur'an setiap hari, pemahaman terhadap ajaran Islam akan semakin mendalam."
        },
        {
            icon: "fas fa-users",
            title: "Kebersamaan Spiritual",
            description: "Menjalin kebersamaan spiritual dengan sesama siswa dalam mengisi bulan Ramadan dengan kebaikan."
        }
    ];

    const technicalPoints = [
        "Dilaksanakan secara mandiri oleh masing-masing siswa",
        "Monitoring dilakukan melalui grup kelas atau platform digital",
        "Pencatatan progress membaca harian"
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1542816417-0983675a5c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                ></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center items-center mb-6"
                    >
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-book-quran text-4xl text-yellow-400"></i>
                            <i className="fas fa-calendar-day text-3xl text-green-200 -ml-2"></i>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent"
                    >
                        One Day One Juz
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl mb-8 text-green-100"
                    >
                        Membiasakan membaca Al-Qur'an setiap hari di bulan Ramadan
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        onClick={() => scrollToSection('tujuan')}
                        className="bg-white text-green-700 hover:bg-green-50 font-bold py-4 px-8 rounded-full inline-flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <span>Pelajari Lebih Lanjut</span>
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
                        <Link href="/" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                            Home
                        </Link>
                        <i className="fas fa-chevron-right text-xs"></i>
                        <Link href="/sekbid/sekbid-1" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                            Sekbid 1
                        </Link>
                        <i className="fas fa-chevron-right text-xs"></i>
                        <span className="text-green-600 dark:text-green-400 font-medium">One Day One Juz</span>
                    </div>
                </motion.nav>

                {/* Tujuan Section */}
                <motion.section
                    id="tujuan"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400 mb-4">
                            Tujuan Program
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <div className="md:flex">
                            <div className="md:w-1/3 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-700 flex items-center justify-center p-8">
                                <div className="text-center">
                                    <i className="fas fa-book-open text-6xl text-green-700 dark:text-green-300 mb-4"></i>
                                    <div className="flex justify-center space-x-2">
                                        <i className="fas fa-star text-yellow-500"></i>
                                        <i className="fas fa-star text-yellow-500"></i>
                                        <i className="fas fa-star text-yellow-500"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-2/3 p-8">
                                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                    Membuat siswa/i SMAIT Fitrah Insani bisa membaca Al Qur'an minimal satu juz dalam satu hari di bulan Ramadan khususnya. Program ini bertujuan untuk meningkatkan kebiasaan membaca Al-Qur'an dan mendekatkan diri kepada Allah SWT selama bulan yang penuh berkah ini.
                                </p>
                                <div className="mt-6 flex items-center space-x-4">
                                    <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                                        <i className="fas fa-calendar-alt"></i>
                                        <span className="text-sm font-medium">Bulan Ramadan</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                                        <i className="fas fa-users"></i>
                                        <span className="text-sm font-medium">Seluruh Siswa</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Teknis Section */}
                <motion.section
                    id="teknis"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400 mb-4">
                            Teknis Pelaksanaan
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <div className="md:flex flex-row-reverse">
                            <div className="md:w-1/3 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-700 flex items-center justify-center p-8">
                                <div className="text-center">
                                    <i className="fas fa-calendar-alt text-6xl text-green-700 dark:text-green-300 mb-4"></i>
                                    <div className="text-green-700 dark:text-green-300 font-semibold">30 Hari</div>
                                </div>
                            </div>
                            <div className="md:w-2/3 p-8">
                                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                                    Kegiatan One Day One Juz dilaksanakan setiap hari pada bulan Ramadan. Setiap siswa diharapkan dapat menyelesaikan membaca satu juz Al-Qur'an setiap harinya.
                                </p>
                                <div className="space-y-4">
                                    {technicalPoints.map((point, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-start group"
                                        >
                                            <div className="flex-shrink-0 bg-green-100 dark:bg-green-800 rounded-full p-2 mr-4 group-hover:bg-green-200 dark:group-hover:bg-green-700 transition-colors">
                                                <i className="fas fa-check text-green-700 dark:text-green-300"></i>
                                            </div>
                                            <p className="text-gray-700 dark:text-gray-300 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
                                                {point}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Benefits Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400 mb-4">
                            Manfaat Program
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <i className={`${benefit.icon} text-3xl text-green-700 dark:text-green-300`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {benefit.description}
                                </p>
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
                    className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Mari Bergabung dalam Program One Day One Juz
                    </h3>
                    <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                        Jadilah bagian dari komunitas yang berkomitmen untuk mendekatkan diri kepada Allah SWT melalui tilawah Al-Qur'an setiap hari.
                    </p>
                    <Link
                        href="/sekbid/sekbid-1"
                        className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-full inline-flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <i className="fas fa-arrow-left"></i>
                        <span>Kembali ke Sekbid 1</span>
                    </Link>
                </motion.section>
            </main>
        </div>
    );
}