"use client";

import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { Link as LinkScroll } from "react-scroll";
import Link from 'next/link'; 
import logoImage from './../../public/assets/Logo.png'; 
import { FiMail } from 'react-icons/fi';

export default function Footer() {
    
    return (
        <footer className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Kolom Logo dan Deskripsi */}
                    <div>
                        <div className="flex items-center gap-3">
                            <Image src={logoImage} width={36} height={36} alt="Brandy Logo" className="rounded-lg" />
                            <span className="text-2xl font-bold text-white">Brandy</span>
                        </div>
                        <p className="mt-4 text-gray-400">
                            Solusi digital kreatif untuk membantu UMKM, sekolah, dan perusahaan tumbuh dan bersinar di dunia online.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <Link href="#" target="_blank" className="text-gray-400 hover:text-blue-400 transition">
                                <span className="sr-only">WhatsApp</span>
                                <FaWhatsapp className="h-6 w-6" />
                            </Link>
                            <Link href="#" target="_blank" className="text-gray-400 hover:text-blue-400 transition">
                                <span className="sr-only">Instagram</span>
                                <FaInstagram className="h-6 w-6" />
                            </Link>
                            <Link href="#" target="_blank" className="text-gray-400 hover:text-blue-400 transition">
                                <span className="sr-only">LinkedIn</span>
                                <FaFacebook className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>

                    {/* Kolom Navigasi dan Layanan */}
                    <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-3">
                        <div>
                            <p className="font-semibold text-white">Navigasi</p>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li><LinkScroll 
                                    to="home" 
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    activeClass="text-white active"
                                    className="cursor-pointer text-gray-400 hover:text-white transition">Beranda</LinkScroll></li>
                                <li><LinkScroll 
                                    to="about" 
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    activeClass="text-white active"
                                    className="cursor-pointer text-gray-400 hover:text-white transition">Tentang Kami</LinkScroll></li>
                                <li><LinkScroll 
                                    to="price" 
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    activeClass="text-white active"
                                    className="cursor-pointer text-gray-400 hover:text-white transition">Paket Layanan</LinkScroll></li>
                                <li><LinkScroll 
                                    to="portfolio" 
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    activeClass="text-white active"
                                    className="cursor-pointer text-gray-400 hover:text-white transition">Portofolio</LinkScroll></li>
                                <li><LinkScroll 
                                    to="alurkerja" 
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    activeClass="text-white active"
                                    className="cursor-pointer text-gray-400 hover:text-white transition">Work Flow</LinkScroll></li>
                                <li><LinkScroll 
                                    to="faq" 
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    activeClass="text-white active"
                                    className="cursor-pointer text-gray-400 hover:text-white transition">FAQ</LinkScroll></li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold text-white">Layanan Kami</p>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li><LinkScroll 
                                    to="#price" 
                                    span={true}
                                    smooth={true}
                                    offset={-200}
                                    className="text-gray-400 hover:text-white transition">Website UMKM</LinkScroll></li>
                                <li><LinkScroll 
                                    to="#price" 
                                    span={true}
                                    smooth={true}
                                    offset={-200}
                                    className="text-gray-400 hover:text-white transition">Website Perusahaan</LinkScroll></li>
                                <li><LinkScroll 
                                    to="#price" 
                                    span={true}
                                    smooth={true}
                                    offset={-200}
                                    className="text-gray-400 hover:text-white transition">Website Sekolah</LinkScroll></li>
                                <li><LinkScroll 
                                    to="#price" 
                                    span={true}
                                    smooth={true}
                                    offset={-200}
                                    className="text-gray-400 hover:text-white transition">Manajemen Media Sosial</LinkScroll></li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold text-white">Hubungi Kami</p>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li>
                                    <Link href="mailto:info@brandy.com" className="text-gray-400 hover:text-white transition flex gap-1 items-center">
                                        <FiMail />
                                        info@brandy.com
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://wa.me/6285282932422" className="text-gray-400 hover:text-white transition flex gap-1 items-center">
                                        <FaWhatsapp />
                                        +62 852-8293-2422
                                    </Link>
                                </li>
                                <li className="text-gray-500">Bogor, Indonesia</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 border-t border-gray-800 pt-8">
                    <p className="text-center text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Brandy Digital Creative. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
