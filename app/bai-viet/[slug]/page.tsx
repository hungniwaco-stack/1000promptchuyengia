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

  return (
    <main className="bg-white text-slate-800">
      <header className="border-b border-slate-200/90 bg-white">
        <div className="mx-auto flex w-[92%] max-w-4xl flex-wrap items-center justify-between gap-4 py-4">
          <Link href="/" className="font-extrabold text-slate-950">Hữu Hùng AI</Link>
          <Link href="/bai-viet" className="font-bold text-blue-700">Bài viết</Link>
        </div>
      </header>

      <article className="mx-auto w-[92%] max-w-4xl py-12">
        <Link href="/bai-viet" className="text-sm font-bold text-blue-700">← Tất cả bài viết</Link>
        <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-bold uppercase tracking-wide text-blue-700">
          <span>{post.category}</span>
          <span className="text-slate-300">/</span>
          <time dateTime={post.publishedAt}>{post.publishedAt}</time>
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

        <div className="mt-12 rounded-lg border border-amber-200 bg-amber-50 p-6">
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
    </main>
  );
}
