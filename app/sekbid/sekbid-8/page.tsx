import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { FaCameraRetro, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function Sekbid8Page() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section
                className="text-white py-20 mt-16"
                style={{ background: 'linear-gradient(45deg, #20c997, #0dcaf0)' }}
            >
                <div className="container mx-auto px-4 text-center">
                    <FaCameraRetro className="text-6xl mb-4 mx-auto" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Seksi Bidang 8</h1>
                    <p className="text-xl">Komunikasi dan Informasi</p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <AnimatedSection>
                    <div className="mb-8">
                        <Link
                            href="/bidang"
                            className="inline-flex items-center text-cyan-600 hover:text-cyan-800 transition-colors"
                        >
                            <FaArrowLeft className="mr-2" />
                            Kembali ke Program Kerja
                        </Link>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang Seksi Bidang 8</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Seksi Bidang 8 mengelola komunikasi dan informasi OSIS.
                            Kami bertanggung jawab atas dokumentasi kegiatan, publikasi, dan penyebaran informasi kepada seluruh warga sekolah.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Kerja</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                            <li>Dokumentasi kegiatan sekolah</li>
                            <li>Pengelolaan media sosial OSIS</li>
                            <li>Pembuatan konten kreatif</li>
                            <li>Siaran radio sekolah</li>
                            <li>Publikasi newsletter dan bulletin</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Tujuan</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Memastikan informasi OSIS tersebar dengan baik, mendokumentasikan setiap kegiatan sekolah,
                            dan mengembangkan kemampuan komunikasi dan media di kalangan siswa.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}