"use client";

import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function CTA() {
    return (
        <section className="py-16">
            <div className="mx-auto container">
                <div className="rounded-2xl bg-blue-800 p-8 shadow-lg sm:p-12 lg:p-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Siap Membawa Bisnismu ke Level Selanjutnya?
                            </h2>

                            <p className="mt-4 text-blue-100">
                                Brandy siap membantu UMKM, sekolah, dan perusahaan tampil lebih profesional di dunia digital.
                            </p>
                        </div>

                        <div className="text-center lg:text-right">
                            <Link
                                href="https://wa.me/6285282932422?text=Halo%20Brandy,%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20layanan%20Anda."
                                target="_blank"
                                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-blue-600 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                                <FaWhatsapp className="h-6 w-6" />
                                Konsultasi Gratis via WhatsApp
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
