"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";

interface AlatDetail {
  title: string;
  description: string;
  image: string;
}

interface AlatPageProps {
  params: {
    slug: string;
  };
}

const alatData: Record<string, AlatDetail> = {
  "nano-tech": {
    title: "nanoTECH",
    description:
      "nanoTECH adalah teknologi pelapis modern yang menggunakan partikel berukuran nano untuk membentuk lapisan tipis di permukaan kendaraan. Teknologi ini dirancang dengan struktur molekul yang sangat kecil, sehingga mampu menyatu lebih baik dengan permukaan cat dan menciptakan perlindungan menyeluruh secara mikroskopis.",
    image: "/bahan1.jpg",
  },
  sonax: {
    title: "Sonax",
    description:
      "Sonax adalah merek perawatan kendaraan asal Jerman yang dikenal luas karena kualitas dan keandalannya. Produk-produk Sonax telah digunakan secara internasional, baik oleh pengguna pribadi maupun profesional dalam industri otomotif.",
    image: "/bahan2.jpg",
  },
  meguiars: {
    title: "Meguiars",
    description:
      "Meguiars adalah merek perawatan kendaraan asal Amerika Serikat yang telah berdiri sejak 1901. Dikenal dengan kualitas premium, Meguiars menawarkan berbagai produk perawatan mobil, terutama dalam hal polishing dan waxing.",
    image: "/bahan3.jpg",
  },
  "shine-mate": {
    title: "Mesin Poles ShineMate",
    description:
      "ShineMate adalah merek mesin poles profesional yang dikenal karena kualitas dan ketahanannya. Mesin ini dirancang khusus untuk keperluan detailing, memberikan hasil poles yang halus dan merata. Dengan desain ergonomis dan getaran minimal, ShineMate banyak digunakan oleh detailer untuk meningkatkan hasil akhir pada permukaan cat kendaraan.",
    image: "/bahan4.jpg",
  },
};

export default function AlatPage({ params }: AlatPageProps) {
  const data = alatData[params.slug];
  if (!data) return notFound();

  return (
    <main className="min-h-screen bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Tombol Kembali */}
        <motion.button
          onClick={() => history.back()}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.08,
            backgroundColor: "rgba(14, 165, 233, 0.2)",
          }}
          className="flex items-center gap-2 text-sky-500 font-semibold px-5 py-2 rounded-xl border border-sky-500 hover:text-white hover:bg-sky-500 transition-all duration-300 mb-8"
        >
          <span className="text-xl">←</span> Kembali
        </motion.button>

        {/* Gambar dan Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Gambar */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Detail */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{data.title}</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed text-balance">
              {data.description}
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
