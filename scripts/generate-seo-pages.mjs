import { mkdir, readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { fileURLToPath } from "node:url"

const siteUrl = "https://shikhboamrao.qoderlabs.com"
const distDirectory = new URL("../dist/", import.meta.url)
const distPath = fileURLToPath(distDirectory)

const pages = [
  {
    path: "blog",
    title: "Education Blog: SSC, HSC & Coaching Guides | Shikhbo Amrao",
    description:
      "Practical SSC, HSC and academic coaching guides for students and guardians in Mirpur, Dhaka from Shikhbo Amrao.",
    keywords:
      "coaching center in Mirpur, HSC coaching in Dhaka, SSC coaching in Mirpur, school coaching Mirpur",
    type: "website",
  },
  {
    path: "blog/best-coaching-centre-mirpur-dhaka",
    title:
      "Best Coaching Centre in Mirpur, Dhaka: A Checklist | Shikhbo Amrao",
    description:
      "Looking for the best coaching centre in Mirpur, Dhaka? Compare teachers, class size, exams, feedback and location before choosing a coaching center.",
    keywords:
      "best coaching centre in Mirpur, coaching center in Mirpur, coaching centre in Dhaka, academic coaching Mirpur 1",
    type: "article",
  },
  {
    path: "blog/hsc-coaching-mirpur-dhaka",
    title: "HSC Coaching in Mirpur, Dhaka: Study Plan | Shikhbo Amrao",
    description:
      "A practical guide to choosing HSC coaching in Mirpur, Dhaka, planning Bangla, English and ICT study, and preparing with regular tests.",
    keywords:
      "HSC coaching in Mirpur, HSC coaching center in Dhaka, HSC ICT coaching Mirpur, HSC English coaching Mirpur",
    type: "article",
  },
  {
    path: "blog/ssc-science-coaching-mirpur",
    title: "SSC Science Coaching in Mirpur for Class 9-10 | Shikhbo Amrao",
    description:
      "Plan SSC Science coaching in Mirpur for Class 9-10 Physics, Chemistry, Biology, Mathematics, English, Bangla and ICT.",
    keywords:
      "SSC coaching center in Mirpur, SSC Science coaching Mirpur, Class 9 coaching in Mirpur, Class 10 coaching in Mirpur",
    type: "article",
  },
  {
    path: "blog/academic-coaching-classes-6-8-mirpur",
    title: "Academic Coaching for Classes 6-8 in Mirpur | Shikhbo Amrao",
    description:
      "A guide to academic coaching for Classes 6-8 in Mirpur, covering Mathematics, English, Science, Bangla, BGS, ICT and study habits.",
    keywords:
      "academic coaching in Mirpur, Class 6 coaching Mirpur, Class 7 coaching Mirpur, Class 8 coaching Mirpur",
    type: "article",
  },
]

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
}

function replaceMeta(html, selector, replacement) {
  const expression = new RegExp(`<meta\\s+[^>]*${selector}[^>]*>`, "i")
  return expression.test(html)
    ? html.replace(expression, replacement)
    : html.replace("</head>", `    ${replacement}\n  </head>`)
}

function pageHtml(template, page) {
  const canonical = `${siteUrl}/${page.path}/`
  let html = template.replace(
    /<title>.*?<\/title>/i,
    `<title>${escapeHtml(page.title)}</title>`,
  )

  html = replaceMeta(
    html,
    'name=["\']description["\']',
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
  )
  html = replaceMeta(
    html,
    'name=["\']keywords["\']',
    `<meta name="keywords" content="${escapeHtml(page.keywords)}" />`,
  )
  html = replaceMeta(
    html,
    'property=["\']og:title["\']',
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
  )
  html = replaceMeta(
    html,
    'property=["\']og:description["\']',
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
  )
  html = replaceMeta(
    html,
    'property=["\']og:type["\']',
    `<meta property="og:type" content="${page.type}" />`,
  )
  html = replaceMeta(
    html,
    'property=["\']og:url["\']',
    `<meta property="og:url" content="${canonical}" />`,
  )
  html = replaceMeta(
    html,
    'name=["\']twitter:title["\']',
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
  )
  html = replaceMeta(
    html,
    'name=["\']twitter:description["\']',
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
  )
  html = html.replace(
    /<link\s+[^>]*rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${canonical}" />`,
  )

  const schema = {
    "@context": "https://schema.org",
    "@type": page.type === "article" ? "Article" : "Blog",
    headline: page.title,
    description: page.description,
    url: canonical,
    datePublished: page.type === "article" ? "2026-10-31" : undefined,
    dateModified: "2026-10-31",
    author: { "@type": "Organization", name: "Shikhbo Amrao" },
    publisher: {
      "@type": "EducationalOrganization",
      name: "Shikhbo Amrao",
      logo: { "@type": "ImageObject", url: `${siteUrl}/assets/logo.png` },
    },
  }

  return html.replace(
    "</head>",
    `    <script type="application/ld+json">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>\n  </head>`,
  )
}

const template = await readFile(new URL("index.html", distDirectory), "utf8")

for (const page of pages) {
  const outputDirectory = join(distPath, page.path)
  await mkdir(outputDirectory, { recursive: true })
  await writeFile(join(outputDirectory, "index.html"), pageHtml(template, page))
}

const sitemapEntries = [
  { path: "", priority: "1.0", changefreq: "weekly" },
  { path: "blog/", priority: "0.9", changefreq: "weekly" },
  ...pages.slice(1).map((page) => ({
    path: `${page.path}/`,
    priority: "0.8",
    changefreq: "monthly",
  })),
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    (entry) => `  <url>
    <loc>${siteUrl}/${entry.path}</loc>
    <lastmod>2026-10-31</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`

await writeFile(new URL("sitemap.xml", distDirectory), sitemap)
await writeFile(
  new URL("robots.txt", distDirectory),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
)
