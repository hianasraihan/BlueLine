export default function Head() {
  return (
    <>
      <title>Blue Line AutoCare</title>
      <meta
        name="description"
        content="Profesional dalam Perawatan, Bersih dalam Setiap Detail. Blue Line AutoCare siap melayani kebutuhan detailing kendaraan Anda dengan harga terjangkau dan kualitas internasional."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://blue-line-pearl.vercel.app/" />

      <link rel="icon" href="/blue.png?v=2" type="image/png" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Blue Line AutoCare" />
      <meta
        property="og:description"
        content="Profesional dalam Perawatan, Bersih dalam Setiap Detail. Blue Line AutoCare siap melayani kebutuhan detailing kendaraan Anda dengan harga terjangkau dan kualitas internasional."
      />
      <meta property="og:url" content="https://blue-line-pearl.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://blue-line-pearl.vercel.app/og-image.jpg"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Blue Line AutoCare - Profesional dan Terpercaya"
      />
      <meta
        name="twitter:description"
        content="Profesional dalam Perawatan, Bersih dalam Setiap Detail. Blue Line AutoCare siap melayani kebutuhan detailing kendaraan Anda dengan harga terjangkau dan kualitas internasional."
      />
      <meta
        name="twitter:image"
        content="https://blue-line-pearl.vercel.app/og-image.jpg"
      />

      {/* Structured Data for Logo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Blue Line AutoCare",
            url: "https://blue-line-pearl.vercel.app",
            logo: "https://blue-line-pearl.vercel.app/blue.png",
          }),
        }}
      />
    </>
  );
}
