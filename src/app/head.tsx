export default function Head() {
  return (
    <>
      {/* Judul Tab dan SEO */}
      <title>Blue Line AutoCare</title>
      <meta
        name="description"
        content="Profesional dalam Perawatan, Bersih dalam Setiap Detail. Blue Line AutoCare siap melayani kebutuhan detailing kendaraan Anda dengan harga terjangkau dan kualitas internasional."
      />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/blue.png" />

      {/* Open Graph (untuk WhatsApp, Facebook, dll) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://blue-line-pearl.vercel.app/" />
      <meta property="og:title" content="Blue Line AutoCare" />
      <meta
        property="og:description"
        content="Profesional dalam Perawatan, Bersih dalam Setiap Detail. Blue Line AutoCare siap melayani kebutuhan detailing kendaraan Anda dengan harga terjangkau dan kualitas internasional."
      />
      <meta property="og:site_name" content="Blue Line AutoCare" />
      <meta
        property="og:image"
        content="https://blue-line-pearl.vercel.app/og-image.jpg"
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Blue Line AutoCare" />
      <meta
        name="twitter:description"
        content="Profesional dalam Perawatan, Bersih dalam Setiap Detail. Blue Line AutoCare siap melayani kebutuhan detailing kendaraan Anda dengan harga terjangkau dan kualitas internasional."
      />
      <meta
        name="twitter:image"
        content="https://blue-line-pearl.vercel.app/og-image.jpg"
      />
    </>
  );
}
