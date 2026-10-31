import { useEffect } from "react"

import FloatingWhatsApp from "../components/FloatingWhatsApp"
import { blogPosts, getBlogPost, type BlogPost } from "../data/blogPosts"

const siteUrl = "https://shikhboamrao.qoderlabs.com"
const logo = `${import.meta.env.BASE_URL}assets/logo.png`

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement("meta")
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([name, value]) =>
    element?.setAttribute(name, value),
  )
}

function usePageSeo(post?: BlogPost) {
  useEffect(() => {
    const title = post
      ? `${post.title} | Shikhbo Amrao`
      : "Education Blog: SSC, HSC & Coaching Guides | Shikhbo Amrao"
    const description = post
      ? post.description
      : "Practical SSC, HSC and academic coaching guides for students and guardians in Mirpur, Dhaka from Shikhbo Amrao."
    const path = post ? `/blog/${post.slug}/` : "/blog/"

    document.title = title
    setMeta('meta[name="description"]', { name: "description", content: description })
    setMeta('meta[name="keywords"]', {
      name: "keywords",
      content: (post?.keywords ?? [
        "coaching center in Mirpur",
        "HSC coaching in Dhaka",
        "SSC coaching in Mirpur",
      ]).join(", "),
    })
    setMeta('meta[property="og:title"]', { property: "og:title", content: title })
    setMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    })
    setMeta('meta[property="og:type"]', {
      property: "og:type",
      content: post ? "article" : "website",
    })
    setMeta('meta[property="og:url"]', {
      property: "og:url",
      content: `${siteUrl}${path}`,
    })
    setMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    })
    setMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    })

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.appendChild(canonical)
    }
    canonical.href = `${siteUrl}${path}`
  }, [post])
}

function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2" aria-label="Shikhbo Amrao home">
          <img src={logo} alt="Shikhbo Amrao" className="h-12 w-12 rounded-full object-cover" />
          <span className="font-bold text-[#1b4d3a]">Shikhbo <span className="text-gray-800">Amrao</span></span>
        </a>
        <nav className="flex items-center gap-4 text-sm font-semibold text-gray-700" aria-label="Blog navigation">
          <a href="/" className="hover:text-[#1b4d3a]">Home</a>
          <a href="/blog/" className="text-[#1b4d3a]">Blog</a>
          <a href="https://wa.me/8801707980299" className="hidden rounded-full bg-[#1b4d3a] px-4 py-2 text-white sm:inline-flex">Admission</a>
        </nav>
      </div>
    </header>
  )
}

function BlogFooter() {
  return (
    <footer className="mt-20 bg-[#0d1f16] px-4 py-10 text-center text-sm text-gray-300">
      <p className="font-semibold text-white">Shikhbo Amrao · Mirpur-1, Dhaka, Bangladesh</p>
      <p className="mt-2">Classes 6-10 and HSC academic support</p>
      <div className="mt-5 flex flex-wrap justify-center gap-5">
        <a href="tel:+8801707980299">+880 170 798 0299</a>
        <a href="mailto:shikhboamrao@gmail.com">shikhboamrao@gmail.com</a>
      </div>
    </footer>
  )
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <a href={`/blog/${post.slug}/`} className="block">
        <img src={post.image} alt={post.imageAlt} className="h-52 w-full object-cover" loading="lazy" />
        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-[#1b4d3a]">{post.category}</p>
          <h2 className="mt-3 text-xl font-bold leading-snug text-gray-900">{post.shortTitle}</h2>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1b4d3a]">Read guide <span aria-hidden="true">→</span></span>
        </div>
      </a>
    </article>
  )
}

function BlogIndex() {
  usePageSeo()
  return (
    <>
      <BlogHeader />
      <main>
        <section className="bg-[#f4f8f5] px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#1b4d3a]">Student & Guardian Resources</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-6xl">Coaching and exam guides for Mirpur students</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">Practical guidance for choosing academic coaching and preparing for school, SSC and HSC examinations in Dhaka.</p>
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-7 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {blogPosts.map((post) => <PostCard key={post.slug} post={post} />)}
        </section>
      </main>
      <BlogFooter />
      <FloatingWhatsApp />
    </>
  )
}

function ArticlePage({ post }: { post: BlogPost }) {
  usePageSeo(post)
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3)

  return (
    <>
      <BlogHeader />
      <main>
        <article>
          <header className="bg-[#f4f8f5] px-4 py-12 sm:py-20">
            <div className="mx-auto max-w-4xl">
              <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500"><a href="/" className="hover:text-[#1b4d3a]">Home</a> <span aria-hidden="true">/</span> <a href="/blog/" className="hover:text-[#1b4d3a]">Blog</a> <span aria-hidden="true">/</span> {post.category}</nav>
              <p className="text-sm font-bold uppercase tracking-wider text-[#1b4d3a]">{post.category}</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-6xl">{post.title}</h1>
              <p className="mt-6 text-sm text-gray-500">Published <time dateTime={post.published}>October 31, 2026</time> · {post.readingTime}</p>
            </div>
          </header>
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
            <img src={post.image} alt={post.imageAlt} className="aspect-[16/8] w-full rounded-3xl object-cover shadow-lg" />
            <div className="mx-auto mt-12 max-w-3xl text-[17px] leading-8 text-gray-700">
              {post.intro.map((paragraph) => <p key={paragraph} className="mb-5">{paragraph}</p>)}
              {post.sections.map((section) => (
                <section key={section.heading} className="mt-10">
                  <h2 className="text-2xl font-bold leading-snug text-gray-950 sm:text-3xl">{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4">{paragraph}</p>)}
                  {section.points && <ul className="mt-5 space-y-3 pl-6">{section.points.map((point) => <li key={point} className="list-disc marker:text-[#1b4d3a]">{point}</li>)}</ul>}
                </section>
              ))}
              <aside className="mt-12 rounded-3xl bg-[#1b4d3a] p-7 text-white sm:p-9">
                <h2 className="text-2xl font-bold">Ask about a suitable batch</h2>
                <p className="mt-3 text-white/80">Tell us the student's class, subjects and preferred schedule. We’ll share the current options for Mirpur-1.</p>
                <a href="https://wa.me/8801707980299?text=Assalamu%20alaikum%2C%20I%20want%20to%20know%20about%20a%20suitable%20batch." className="mt-6 inline-flex rounded-full bg-[#f5a623] px-6 py-3 font-bold text-[#16392d]">Chat on WhatsApp</a>
              </aside>
              <section className="mt-14" aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="text-3xl font-bold text-gray-950">Frequently asked questions</h2>
                <div className="mt-6 space-y-4">{post.faq.map((item) => <details key={item.question} className="group rounded-2xl border border-gray-200 p-5"><summary className="cursor-pointer list-none font-bold text-gray-900">{item.question}</summary><p className="mt-3 text-base leading-7">{item.answer}</p></details>)}</div>
              </section>
            </div>
          </div>
        </article>
        <section className="border-t border-gray-100 bg-gray-50 px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-950">More student guides</h2>
            <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <PostCard key={item.slug} post={item} />)}</div>
          </div>
        </section>
      </main>
      <BlogFooter />
      <FloatingWhatsApp />
    </>
  )
}

export default function BlogPage({ slug }: { slug?: string }) {
  const post = slug ? getBlogPost(slug) : undefined

  if (slug && !post) {
    return <><BlogHeader /><main className="grid min-h-[60vh] place-items-center px-4 text-center"><div><p className="text-sm font-bold text-[#1b4d3a]">404</p><h1 className="mt-2 text-4xl font-bold">Article not found</h1><a href="/blog/" className="mt-6 inline-flex text-[#1b4d3a] underline">Browse all guides</a></div></main><BlogFooter /></>
  }

  return post ? <ArticlePage post={post} /> : <BlogIndex />
}
