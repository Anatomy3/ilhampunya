'use client';

import React from 'react';

const JoinSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-20 py-10">
      {/* Gambar */}
      <div className="flex-1 mb-8 md:mb-0">
        <img
          src="/sertifikat/hero1.png" // Ganti path ini dengan lokasi gambar Anda
          alt="Bergabung bersama Tasri"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Konten Teks */}
      <div className="flex-1 text-center md:text-left md:pl-10">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Ayo!! <br /> Bergabunglah Bersama <span className="text-blue-600">Tasri</span>
        </h1>
        <p className="mt-4 text-gray-700 text-lg md:text-xl text-justify">
          Bangun harimu dengan langkah baru bersama Tasri! Kami hadir untuk membantu mewujudkan impianmu,
          baik dalam bisnis maupun kehidupan sehari-hari. Dengan produk berkualitas dan layanan yang terpercaya,
          Tasri akan selalu menjadi mitra terbaik dalam perjalanan suksesmu.
        </p>
        <button
          className="mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-medium shadow-lg transition"
          onClick={() => {
            // Ganti URL sesuai dengan kebutuhan Anda
            window.location.href = '/MenuUtama/Colab';
          }}
        >
          Gabung Sekarang
        </button>
      </div>
    </section>
  );
};

export default JoinSection;
