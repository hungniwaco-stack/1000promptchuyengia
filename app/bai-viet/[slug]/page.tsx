import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "../../blogPosts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Hữu Hùng AI`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/bai-viet/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      url: `/bai-viet/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const now = new Date();
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && new Date(p.publishedAt) <= now)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    keywords: post.keywords.join(", "),
    url: `https://www.1000promptchuyengia.shop/bai-viet/${post.slug}`,
    author: {
      "@type": "Person",
      name: "Nguyen Huu Hung",
      url: "https://www.1000promptchuyengia.shop",
    },
    publisher: {
      "@type": "Organization",
      name: "Hữu Hùng AI",
      url: "https://www.1000promptchuyengia.shop",
    },
  };

  return (
    <main className="bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-slate-200/90 bg-white">
        <div className="mx-auto flex w-[92%] max-w-6xl flex-wrap items-center justify-between gap-4 py-4">
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Logo Hữu Hùng AI" className="h-20 w-auto max-w-[210px] object-contain" />
          </Link>
          <nav>
            <ul className="flex flex-wrap gap-4 text-base font-extrabold md:gap-7">
              <li><Link href="/#gioi-thieu">Giới thiệu</Link></li>
              <li><Link href="/bai-viet">Bài viết</Link></li>
              <li><Link href="/#thu-vien">Thư viện Prompt</Link></li>
              <li><Link href="/#bang-gia">Bảng giá</Link></li>
              <li><Link href="/#mien-phi">Miễn phí</Link></li>
              <li><Link href="/tra-cuu-don-hang">Tra cứu đơn</Link></li>
              <li><Link href="/#lien-he">Liên hệ</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <article className="mx-auto w-[92%] max-w-4xl py-12">
        <Link href="/bai-viet" className="text-sm font-bold text-blue-700">← Tất cả bài viết</Link>
        <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-bold uppercase tracking-wide text-blue-700">
          <span>{post.category}</span>
          <span className="text-slate-300">/</span>
          <time dateTime={post.publishedAt}>{post.publishedAt.slice(0, 10)}</time>
          <span className="text-slate-300">/</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{post.intro}</p>

        <div className="mt-10 grid gap-8">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-extrabold text-slate-950">{section.heading}</h2>
              <div className="mt-4 grid gap-4 text-base leading-8 text-slate-700">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {post.giftLink && (
          <div className="mt-12 rounded-lg border border-green-200 bg-green-50 p-6">
            <h2 className="text-xl font-extrabold text-slate-950">🎁 Quà tặng miễn phí dành cho bạn</h2>
            <p className="mt-2 text-slate-700">
              Tải ngay <strong>{post.giftLinkLabel}</strong> hoàn toàn miễn phí — áp dụng được ngay hôm nay.
            </p>
            <a
              href={post.giftLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent mt-5 inline-block"
            >
              Tải bộ prompt miễn phí →
            </a>
          </div>
        )}

        <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-xl font-extrabold text-slate-950">Muốn dùng prompt nhanh hơn?</h2>
          <p className="mt-2 text-slate-700">
            Bộ 1000 Prompt Hữu Hùng AI đã phân loại sẵn theo kinh doanh, marketing, bán hàng, tài chính,
            năng suất và nhiều lĩnh vực khác để bạn áp dụng ngay.
          </p>
          <Link href="/#thu-vien" className="btn btn-accent mt-5 inline-block">
            Xem thư viện Prompt
          </Link>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="border-t border-slate-100 py-14">
          <div className="mx-auto w-[92%] max-w-4xl">
            <h2 className="text-2xl font-extrabold text-slate-950">Bài viết liên quan</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <article key={related.slug} className="card p-5">
                  <div className="mb-2 text-xs font-bold uppercase tracking-wide text-blue-700">
                    {related.category}
                  </div>
                  <h3 className="text-base font-extrabold leading-snug text-slate-950">
                    <Link href={`/bai-viet/${related.slug}`}>{related.title}</Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 line-clamp-3">{related.description}</p>
                  <Link
                    href={`/bai-viet/${related.slug}`}
                    className="mt-4 inline-block text-sm font-bold text-blue-700 hover:underline"
                  >
                    Đọc bài →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
