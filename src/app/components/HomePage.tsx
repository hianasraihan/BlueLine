"use client";
import Navbar from "./Navbar";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dokumentasiImages = [
    "/dk1.jpg", "/dk2.jpg", "/dk3.jpg", "/dk4.jpg",
    "/dk5.jpg", "/dk6.jpg", "/dk7.jpg", "/dk8.jpg",
  ];

  const transitionProps = {
    duration: 1,
    ease: [0.25, 0.1, 0.25, 1]
  };

  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={transitionProps}
        className="text-white min-h-screen scroll-smooth pt-16 overflow-x-hidden"
      >
        {/* Hero Section */}
        <section
          className="py-20 px-4 text-center overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/bg1.jpg')" }}
        >
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={transitionProps}
            className="text-2xl md:text-5xl font-bold mb-4 text-white"
          >
            Blue Line AutoCare, Profesional Dan Terpercaya
          </motion.h1>

          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...transitionProps, delay: 0.2 }}
            className="text-sm md:text-xl mb-6 max-w-xl mx-auto text-white"
          >
            Profesional dalam Perawatan, Bersih dalam Setiap Detail
          </motion.p>

          <motion.button
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...transitionProps, delay: 0.4 }}
            onClick={() => {
              document.getElementById("layanan")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition inline-block"
          >
            Lihat Layanan
          </motion.button>
        </section>

        {/* Keunggulan Section */}
        <section className="py-16 px-4 text-white bg-black overflow-hidden">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={transitionProps}
            className="text-2xl md:text-4xl font-bold text-center mb-12 text-white"
          >
            Kenapa Memilih Kami?
          </motion.h2>

          <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 overflow-hidden">
            {[{
              img: "/gambar1.png",
              title: "Alat & Bahan",
              desc: "Kami menggunakan alat & produk detailing berstandar internasional yaitu Sonax, dan Meguiar's untuk memastikan hasil terbaik dan perlindungan maksimal bagi kendaraan Kamu.",
            }, {
              img: "/gambar2.png",
              title: "Tenaga Professional",
              desc: "Para detailer yang terlatih secara profesional dan bersertifikat dalam bidang detailing. Mereka telah mengikuti berbagai pelatihan untuk memastikan kualitas pekerjaan yang terbaik.",
            }, {
              img: "/gambar3.png",
              title: "Harga Terjangkau",
              desc: "Nikmati layanan detailing berkualitas tanpa harus merogoh kocek dalam. BlueLine menawarkan harga layanan mulai dari Rp 150.000, sehingga semua orang bisa merawat mobil kesayangannya.",
            }, {
              img: "/sertifikat.jpg",
              title: "Sertifikat Resmi",
              desc: "Blue Line Autocare telah mengikuti pelatihan resmi di SONAX Detailing Academy dan tersertifikasi secara internasional. Sertifikat ini membuktikan komitmen kami terhadap kualitas dan profesionalisme dalam layanan detailing.",
            }].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={transitionProps}
                className="bg-[#00AEEF] p-8 rounded-3xl text-center flex flex-col justify-start h-auto"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className={`mb-4 mx-auto ${item.title === "Pelayanan Cepat" ? "w-24 h-24" : "w-20 h-20"}`}
                />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm md:text-base text-white leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Layanan Section */}
        <section id="layanan" className="py-16 px-4 bg-black overflow-hidden">
          <motion.h2
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={transitionProps}
            className="text-2xl md:text-3xl font-bold text-center mb-10 text-white"
          >
            Layanan Kami
          </motion.h2>

          <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 overflow-hidden">
            {[{
              title: "Cuci Motor",
              desc: "Mulai dari Rp17.000, motor bersih mengkilap dalam waktu yang cepat.",
            }, {
              title: "Cuci Mobil",
              desc: "Mulai dari Rp40.000 mobil kinclong luar dalam, cepat dan teliti.",
            }, {
              title: "Wax & Poles",
              desc: "Perawatan cat mobil agar tetap mengkilap dan terlindungi.",
            }, {
              title: "Detailing",
              desc: "Perawatan menyeluruh untuk hasil bersih maksimal.",
            }].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...transitionProps, delay: i * 0.1 }}
                className="bg-[#00AEEF] text-white p-6 rounded-xl shadow-md hover:shadow-lg transition w-full"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Alat & Bahan Section */}
        <section className="py-16 px-4 bg-black text-white overflow-hidden">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={transitionProps}
            className="text-2xl md:text-4xl font-bold text-center mb-12 text-white"
          >
            Alat & Bahan
          </motion.h2>

          <div className="max-w-6xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center px-4 overflow-hidden">
            {[{
              src: "/bahan1.jpg", label: "nanoTECH"
            }, {
              src: "/bahan2.jpg", label: "Sonax"
            }, {
              src: "/bahan3.jpg", label: "Meguiars"
            }, {
              src: "/bahan4.jpg", label: "Mesin Poles ShineMate"
            }].map(({ src, label }, index) => (
              <motion.div
                key={label}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...transitionProps, delay: index * 0.1 }}
                className="bg-[#00AEEF] rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
              >
                <div className="flex-1">
                  <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-cover aspect-[1/1.1]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">{label}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Dokumentasi Section */}
        <section className="py-16 px-4 bg-black text-white">
          <motion.h2
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={transitionProps}
            className="text-2xl md:text-4xl font-bold text-center mb-12 text-white"
          >
            Dokumentasi
          </motion.h2>

          <div className="max-w-6xl w-full mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-2">
            {dokumentasiImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...transitionProps, delay: i * 0.1 }}
                onClick={() => {
                  setCurrentIndex(i);
                  setIsLightboxOpen(true);
                }}
                className="relative cursor-pointer group"
              >
                <div className="aspect-[4/3] md:aspect-[16/9] rounded-lg shadow-md overflow-hidden transform transition duration-300 group-hover:scale-105 group-hover:ring-4 group-hover:ring-sky-500 group-hover:shadow-xl z-10 relative">
                  <img
                    src={src}
                    alt={`Dokumentasi ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {isLightboxOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 text-white text-3xl"
              >
                &times;
              </button>
              <button
                onClick={() =>
                  setCurrentIndex((currentIndex - 1 + dokumentasiImages.length) % dokumentasiImages.length)
                }
                className="absolute left-2 md:left-4 text-white text-3xl md:text-4xl"
              >
                &#10094;
              </button>
              <img
                src={dokumentasiImages[currentIndex]}
                alt={`Dokumentasi ${currentIndex + 1}`}
                className="max-w-[90vw] max-h-[80vh] object-contain"
              />
              <button
                onClick={() =>
                  setCurrentIndex((currentIndex + 1) % dokumentasiImages.length)
                }
                className="absolute right-2 md:right-4 text-white text-3xl md:text-4xl"
              >
                &#10095;
              </button>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="bg-white text-black text-center py-6 mt-0 text-sm md:text-base">
          <p>&copy; 2025 BlueLine | Jl. Mekar Sari No.80, RT.010/RW.003, Bekasi Jaya, Kec. Bekasi Tim, Kota, Kota Bks, Jawa Barat 17112 | 0877-8528-1817</p>
        </footer>
      </motion.main>
    </>
  );
}
