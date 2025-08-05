"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLink, FaArrowDown, FaArrowUp } from "react-icons/fa";

const portfolioData = [
    {
        title: 'Website Sekolah Ceria',
        category: 'Website',
        description: 'Website profil sekolah modern dengan fitur galeri, berita, dan informasi pendaftaran untuk meningkatkan engagement dengan orang tua dan siswa.',
        image: '', 
        tags: ['Next.js', 'Tailwind CSS', 'UI/UX', 'CMS'],
        url: '#', // Ganti dengan link live proyek
    },
    {
        title: 'Kopi Senja - Branding & Medsos',
        category: 'Social Media',
        description: 'Manajemen konten media sosial untuk brand kopi lokal, berhasil meningkatkan followers sebesar 300% dalam 3 bulan.',
        image: '',
        tags: ['Content Strategy', 'Instagram', 'Copywriting'],
        url: '#',
    },
    {
        title: 'Profil Perusahaan TechCorp',
        category: 'Website',
        description: 'Pengembangan company profile untuk perusahaan teknologi, menonjolkan profesionalisme dan inovasi produk.',
        image: '',
        tags: ['React', 'Desain Korporat', 'SEO'],
        url: '#',
    },
    {
        title: 'UMKM Makanan "Dapur Bunda"',
        category: 'Website',
        description: 'Landing page sederhana dan menarik untuk UMKM kuliner yang memudahkan pelanggan untuk memesan secara online.',
        image: '',
        tags: ['HTML/CSS', 'Landing Page', 'UMKM'],
        url: '#',
    },
    {
        title: 'Event Campaign "Digital Fest 2025"',
        category: 'Social Media',
        description: 'Promosi event festival digital melalui berbagai platform media sosial, menjangkau ribuan peserta potensial.',
        image: '',
        tags: ['Event Promotion', 'Facebook Ads', 'Design'],
        url: '#',
    },
];

const FilterButton = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
            active
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
    >
        {label}
    </button>
);

const PortfolioCard = ({ project }) => (
    <div className="group flex flex-col h-full bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden shadow-lg hover:border-blue-500 transition-all duration-300">
        <div className="relative w-full aspect-video overflow-hidden">
            <Image
                src={project.image}
                alt={`Gambar proyek ${project.title}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={(e) => { e.target.src = 'https://placehold.co/600x400/1f2937/9ca3af?text=Image+Not+Found'; }}
            />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <span className="inline-block text-xs font-semibold text-blue-400 uppercase mb-2">
                {project.category}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            <Link 
                href={project.url}
                target="_blank"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
                Lihat Proyek <FaLink />
            </Link>
        </div>
    </div>
);

export default function Portfolio() {
    const [filter, setFilter] = useState('Semua');
    const [showAll, setShowAll] = useState(false);

    const categories = ['Semua', ...new Set(portfolioData.map(p => p.category))];

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setShowAll(false); // Reset showAll state when filter changes
    };

    const allFilteredProjects = filter === 'Semua' 
        ? portfolioData 
        : portfolioData.filter(p => p.category === filter);

    const visibleProjects = showAll ? allFilteredProjects : allFilteredProjects.slice(0, 3);

    return (
        <section className='py-16' id="portfolio">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="mx-auto max-w-xl text-center">
                    <span className="bg-blue-500/10 text-blue-400 text-sm font-medium px-3 py-1.5 rounded-full">
                        Portofolio Kami
                    </span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                        Karya yang Kami Banggakan
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Lihat bagaimana kami membantu klien mencapai tujuan mereka melalui desain yang fungsional dan promosi yang efektif.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="mt-12 flex justify-center flex-wrap gap-3">
                    {categories.map(category => (
                        <FilterButton
                            key={category}
                            label={category}
                            active={filter === category}
                            onClick={() => handleFilterChange(category)}
                        />
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {visibleProjects.map((project, index) => (
                        <PortfolioCard key={index} project={project} />
                    ))}
                </div>

                {/* Tombol Lihat Lebih Banyak / Sedikit */}
                {allFilteredProjects.length > 3 && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 rounded-lg bg-gray-700 px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            {showAll ? 'Tampilkan Lebih Sedikit' : 'Lihat Lebih Banyak'}
                            {showAll ? <FaArrowUp /> : <FaArrowDown />}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
