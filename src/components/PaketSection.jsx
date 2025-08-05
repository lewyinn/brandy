"use client";

import { useState } from "react";
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight, FaSchool, FaBuilding, FaStore } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const pricingPlans = [
    {
        category: 'umkm',
        title: 'Paket Digital UMKM',
        price: 'Rp 1.5jt',
        description: 'Solusi lengkap untuk membawa bisnis UMKM Anda go-digital dan menjangkau lebih banyak pelanggan.',
        features: [
            'Website Company Profile (5 Halaman)',
            'Desain Responsif (Mobile Friendly)',
            'Setup 2 Akun Media Sosial',
            'Template Konten Awal (5 Desain)',
            'Gratis Domain .COM & Hosting (1 Tahun)',
            'Panduan Pengelolaan Dasar',
        ],
        isPopular: true,
    },
    {
        category: 'umkm',
        title: 'Manajemen Medsos',
        price: 'Mulai 800rb/bln',
        description: 'Tingkatkan interaksi dan penjualan melalui manajemen media sosial yang profesional dan terjadwal.',
        features: [
            '12 Desain Feed + 12 Story',
            'Copywriting & Hashtag Research',
            'Jadwal Posting Rutin',
            'Laporan Performa Bulanan',
            'Admin Responsif',
        ],
        isPopular: false,
    },
    // Kategori Perusahaan
    {
        category: 'company',
        title: 'Corporate Website',
        price: 'Rp 5jt',
        description: 'Website profesional dengan fitur kustom untuk meningkatkan kredibilitas dan citra perusahaan Anda.',
        features: [
            'Hingga 10 Halaman Website',
            'Desain Eksklusif Sesuai Brand',
            'Sistem Manajemen Konten (CMS)',
            'Integrasi Google Analytics',
            'Optimasi SEO On-Page',
            'Email Bisnis Profesional',
            'Dukungan Teknis Prioritas',
        ],
        isPopular: true,
    },
    {
        category: 'company',
        title: 'Paket Branding Korporat',
        price: 'Hubungi Kami',
        description: 'Solusi branding menyeluruh mulai dari logo, identitas visual, hingga panduan brand (brand guidelines).',
        features: [
            'Desain Logo Profesional (3 Opsi)',
            'Desain Kartu Nama & Kop Surat',
            'Template Presentasi PowerPoint',
            'Panduan Penggunaan Brand',
            'File Master (AI, EPS, PDF)',
        ],
        isPopular: false,
    },
    // Kategori Sekolah
    {
        category: 'school',
        title: 'Website Sekolah Modern',
        price: 'Rp 3jt',
        description: 'Platform digital informatif untuk profil sekolah, berita, galeri, dan pendaftaran siswa baru (PPDB).',
        features: [
            'Profil Sekolah & Visi Misi',
            'Halaman Berita & Artikel',
            'Galeri Foto & Video',
            'Formulir PPDB Online',
            'Integrasi Peta Lokasi',
            'Panel Admin Mudah Digunakan',
        ],
        isPopular: true,
    },
];

const CategoryButton = ({ label, icon, active, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300 cursor-pointer ${
            active 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
    >
        {icon}
        {label}
    </button>
);

const PricingCard = ({ plan }) => (
    <div 
        className={`relative flex flex-col h-full rounded-2xl border p-6 shadow-lg transition-all duration-300
            ${plan.isPopular 
                ? 'border-blue-500 bg-gray-800' 
                : 'border-gray-700 bg-gray-800/70 backdrop-blur-sm'
            }`
        }
    >
        {/* Badge "Paling Populer" */}
        {plan.isPopular && (
            <div className="absolute top-0 -translate-y-1/2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                Paling Populer
            </div>
        )}
        
        {/* Judul dan Deskripsi Paket */}
        <div className="mb-4">
            <h3 className="text-xl font-bold text-white">{plan.title}</h3>
            <p className="mt-1 text-gray-400">{plan.description}</p>
        </div>

        {/* Harga Paket */}
        <div className="my-4">
            <p className="text-4xl font-extrabold text-white">{plan.price}</p>
        </div>

        {/* Daftar Fitur */}
        <ul className="mt-4 space-y-3 text-gray-300 flex-grow">
            {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="h-5 w-5 flex-shrink-0 text-blue-500" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>

        {/* Tombol Aksi */}
        <Link 
            href="https://wa.me/6285282932422?text=Halo%20Brandy,%20saya%20tertarik%20dengan%20paket%20layanan%20Anda."
            target="_blank"
            className="mt-8 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-center text-base font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
            Pilih Paket
            <FaArrowRight />
        </Link>
    </div>
);

export default function PaketLayanan() {
    const [category, setCategory] = useState("umkm");

    const filteredPlans = pricingPlans.filter(plan => plan.category === category);

    return (
        <section className="py-16" id="price">
            <div className="container mx-auto">
                {/* Header - Animates from the top */}
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="mx-auto max-w-xl text-center"
                >
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-full">
                        Harga Terbaik
                    </span>
                    <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                        Paket Layanan <span className="text-blue-600">Fleksibel</span> untuk <span className="text-blue-600">Semua Kebutuhan</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Pilih paket yang paling sesuai dengan target dan anggaran Anda. Kami siap membantu Anda bertumbuh.
                    </p>
                </motion.div>

                {/* Content (Buttons & Cards) - Animates from the bottom */}
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                >
                    {/* Tombol Kategori */}
                    <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <CategoryButton 
                            label="Untuk UMKM" 
                            icon={<FaStore />}
                            active={category === 'umkm'} 
                            onClick={() => setCategory('umkm')} 
                        />
                        <CategoryButton 
                            label="Untuk Perusahaan" 
                            icon={<FaBuilding />}
                            active={category === 'company'} 
                            onClick={() => setCategory('company')} 
                        />
                        <CategoryButton 
                            label="Untuk Sekolah" 
                            icon={<FaSchool />}
                            active={category === 'school'} 
                            onClick={() => setCategory('school')} 
                        />
                    </div>

                    {/* Daftar Harga */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
                        className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                        {filteredPlans.map((plan, index) => (
                            <PricingCard key={index} plan={plan} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}