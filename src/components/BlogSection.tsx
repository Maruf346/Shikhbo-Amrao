import { blogPosts } from "../data/blogPosts"

export default function BlogSection() {
  return (
    <section id="blog" className="bg-[#f7f9fc] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="section-badge">Student resources</span>
            <h2 className="text-3xl font-bold leading-tight text-gray-950 sm:text-5xl">
              Practical coaching and exam guides
            </h2>
            <p className="mt-4 max-w-2xl text-gray-600">
              Helpful guidance for students and guardians choosing school, SSC
              and HSC coaching in Mirpur, Dhaka.
            </p>
          </div>
          <a href="/blog/" className="theme-btn self-start md:self-auto">
            View all articles
          </a>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <a href={`/blog/${post.slug}/`} className="block h-full">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  loading="lazy"
                  className="h-52 w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1b4d3a]">
                    {post.category}
                  </p>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-gray-950">
                    {post.shortTitle}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1b4d3a]">
                    Read guide <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
