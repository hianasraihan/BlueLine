import { NextResponse } from 'next/server';

const SITE_URL = 'https://blue-line-pearl.vercel.app';

const staticPages = [
  '',
  'layanan',
  'alat/nano-tech',
  'alat/sonax',
  'alat/meguiars',
  'alat/shine-mate',
];

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  >
    ${staticPages
      .map((page) => {
        return `
      <url>
        <loc>${SITE_URL}/${page}</loc>
      </url>
    `;
      })
      .join('')}
  </urlset>
  `;
}

export async function GET() {
  const sitemap = generateSiteMap();

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
