// app/sitemap.xml/route.ts

import { NextResponse } from 'next/server';

const SITE_URL = 'https://blue-line-pearl.vercel.app';

const staticPages = [
  '', // homepage
  'layanan',
  'alat/nano-tech',
  'alat/sonax',
  'alat/meguiars',
  'alat/shine-mate',
];

function generateSiteMap(): string {
  const urls = staticPages.map((page) => {
    const path = page ? `/${page}` : '';
    return `
      <url>
        <loc>${SITE_URL}${path}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join('')}
    </urlset>`;
}

export async function GET() {
  const body = generateSiteMap();

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
