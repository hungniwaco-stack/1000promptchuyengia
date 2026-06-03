import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "../blogPosts";

export const metadata: Metadata = {
  title: "Bài viết AI - Tin tức và mẹo sử dụng AI | Hữu Hùng AI",
  description:
    "Cập nhật kiến thức, mẹo sử dụng AI, prompt hiệu quả và ứng dụng AI trong kinh doanh, marketing, bán hàng và năng suất cá nhân.",
  alternates: {
    canonical: "/bai-viet",
  },
};

export default function BlogPage() {
  return (
    <main className="bg-white text-slate-800">
      <header className="border-b border-slate-200/90 bg-white">
        <div className="mx-auto flex w-[92%] max-w-6xl flex-wrap items-center justify-between gap-4 py-4">
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Logo Hữu Hùng AI" className="h-20 w-auto max-w-[210px] object-contain" />
          </Link>
          <nav>
            <ul className="flex flex-wrap gap-4 text-base font-extrabold md:gap-7">
              <li><Link href="/#gioi-thieu">Giới thiệu</Link></li>
              <li><Link href="/#thu-vien">Thư viện Prompt</Link></li>
              <li><Link href="/#bang-gia">Bảng giá</Link></li>
              <li><Link href="/bai-viet">Bài viết</Link></li>
              <li><Link href="/#lien-he">Liên hệ</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto w-[92%] max-w-6xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-700">Kiến thức AI thực chiến</p>
          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">
            Bài viết về AI, prompt và ứng dụng AI trong công việc
          </h1>
          <p className="mt-5 max-w-3xl text-base text-slate-600 md:text-lg">
            Cập nhật mẹo dùng AI, cách viết prompt hiệu quả và các gợi ý ứng dụng AI để tăng năng suất, bán hàng,
            marketing và quản lý công việc.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid w-[92%] max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="card flex h-full flex-col p-5">
              <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-blue-700">
                <span>{post.category}</span>
                <span className="text-slate-300">/</span>
                <time dateTime={post.publishedAt}>{post.publishedAt}</time>
              </div>
              <h2 className="text-xl font-extrabold leading-snug text-slate-950">
                <Link href={`/bai-viet/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-3 grow text-sm leading-6 text-slate-600">{post.description}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-slate-500">{post.readingTime}</span>
                <Link href={`/bai-viet/${post.slug}`} className="btn btn-primary px-4 py-2 text-sm">
                  Đọc bài
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
