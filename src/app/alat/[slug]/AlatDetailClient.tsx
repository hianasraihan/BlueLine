// File: app/alat/[slug]/AlatDetailClient.tsx
"use client";

import { motion } from "framer-motion";

interface AlatDetail {
  title: string;
  description: string;
  image: string;
}

export default function AlatDetailClient({ data }: { data: AlatDetail }) {
  return (
    <main className="min-h-screen bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
