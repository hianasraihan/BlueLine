import { notFound } from "next/navigation";
import AlatDetailClient from "./AlatDetailClient";

interface AlatDetail {
  title: string;
  description: string;
  image: string;
}

const alatData: Record<string, AlatDetail> = {
  "nano-tech": {
    title: "nanoTECH",
    description: "nanoTECH adalah teknologi pelapis modern berbasis partikel nano yang membentuk lapisan transparan di permukaan kendaraan. Lapisan ini memberikan perlindungan maksimal, efek daun talas, serta kilap mendalam yang tahan lama.",
    image: "/bahan1.jpg",
  },
  sonax: {
    title: "Sonax",
    description: "Sonax adalah merek perawatan kendaraan asal Jerman yang telah berdiri sejak 1950-an. Merek ini dikenal di seluruh dunia karena kualitas produk yang tinggi dan keandalannya dalam perawatan mobil dan motor baik oleh pengguna rumahan maupun profesional detailing.",
    image: "/bahan2.jpg",
  },
  meguiars: {
    title: "Meguiars",
    description: "Meguiars adalah merek perawatan kendaraan asal Amerika Serikat yang telah berdiri sejak 1901. Dikenal dengan kualitas premium, Meguiars menyediakan berbagai produk untuk perawatan cat, interior, dan eksterior kendaraan seperti polish, wax, dan detailer.",
    image: "/bahan3.jpg",
  },
  "shine-mate": {
    title: "Mesin Poles ShineMate",
    description: "ShineMate adalah merek mesin poles profesional yang terkenal karena kualitas, ketahanan, dan performanya. Mesin ini dirancang khusus untuk keperluan detailing, memberikan hasil poles yang halus, merata, dan aman untuk cat kendaraan.",
    image: "/bahan4.jpg",
  },
};

interface AlatPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function AlatPage({ params }: AlatPageProps) {
  const { slug } = await params; 

  const data = alatData[slug];
  if (!data) return notFound();

  return <AlatDetailClient data={data} />;
}
