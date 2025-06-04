"use client";

import { usePathname } from "next/navigation";

export default function BackgroundImage() {
  const pathname = usePathname();

  const bg1 = "/b1.jpg";
  const bg2 = pathname === "/" ? "/images.jpg" : "/images2.jpg";

  return (
    <div className="absolute top-0 left-0 w-full z-[-1]">
      {/* Container untuk gambar background */}
      <div className="flex flex-col">
        {/* Gambar pertama: bagian atas */}
        <img
          src={bg1}
          alt="Background 1"
          className="w-full h-[500px] object-cover"
        />

        {/* Gambar kedua: langsung di bawahnya */}
        <img
          src={bg2}
          alt="Background 2"
          className="w-full h-[500px] object-cover"
        />
      </div>
    </div>
  );
}
