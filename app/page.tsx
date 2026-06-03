import BuyButton from "./BuyButton";
import CheckoutModal from "./CheckoutModal";
import PricingSection from "./PricingSection";
import { comboProduct, products } from "./products";

const comboName = comboProduct.title;

export default function Page() {
  return (
    <main className="bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-[92%] max-w-6xl flex-wrap items-center justify-between gap-4 py-4">
          <a href="#" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Logo Hữu Hùng AI"
              className="h-24 w-auto max-w-[230px] object-contain"
            />
          </a>
          <nav>
            <ul className="flex flex-wrap gap-4 text-base font-extrabold md:gap-7">
              <li><a href="#gioi-thieu">Giới thiệu</a></li>
              <li><a href="#thu-vien">Thư viện Prompt</a></li>
              <li><a href="#bang-gia">Bảng giá</a></li>
              <li><a href="/bai-viet">Bài viết</a></li>
              <li><a href="#mien-phi">Miễn phí</a></li>
              <li><a href="#lien-he">Liên hệ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="gioi-thieu" className="bg-gradient-to-b from-white to-slate-50 py-16">
        <div className="mx-auto grid w-[92%] max-w-6xl gap-10">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
            <img
              src="/images/banner.png"
              alt="Banner 1000 Prompt Chuyên Gia"
              className="w-full object-cover"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight md:text-5xl">
              <span className="block">Mở Khóa Sức Mạnh AI</span>
              <span className="block">Với 1000 Prompt Chuyên Gia</span>
            </h1>
            <p className="mb-8 max-w-4xl text-base md:text-lg">
              <span className="block">Giải pháp tối ưu x10 hiệu suất làm việc, tiết kiệm thời gian và tạo ra đột phá doanh thu.</span>
              <span className="block">Được tinh lọc bởi Hữu Hùng AI.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#thu-vien" className="btn btn-primary">Khám phá ngay</a>
              <BuyButton packageName={comboName} className="btn btn-accent">Mua Combo Trọn Bộ</BuyButton>
            </div>
          </div>
        </div>
      </section>

      <div id="mien-phi" className="sr-only" aria-hidden="true" />

      <section id="thu-vien" className="bg-slate-50 py-14">
        <div className="mx-auto w-[92%] max-w-6xl">
          <h2 className="mb-7 text-center text-2xl font-bold md:text-3xl">Danh mục 10 Gói Sản Phẩm</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.title} className="card">
                <img
                  className="aspect-video w-full object-cover"
                  src={product.image}
                  alt={`Hình minh họa ${product.title}`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex h-full flex-col p-4">
                  <h3 className="mb-2 text-base font-bold">{product.title}</h3>
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-red-100 bg-red-50 p-3">
                    <div>
                      <div className="text-xs font-semibold uppercase text-slate-500">Giá bán</div>
                      <div className="text-xl font-extrabold text-red-600">{product.price}</div>
                    </div>
                    <BuyButton packageName={product.title} className="btn btn-primary px-4 py-2 text-sm">
                      Thanh toán ngay
                    </BuyButton>
                  </div>
                  <p className="grow text-sm">{product.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      <footer id="lien-he" className="bg-slate-900 py-7 text-slate-100">
        <div className="mx-auto grid w-[92%] max-w-6xl gap-1 text-sm">
          <div>© 2026 Hữu Hùng AI. Đã đăng ký bản quyền.</div>
          <div>Hotline: 0944 851719</div>
          <div>Email: hatmuadem@gmail.com</div>
          <div>Địa chỉ: Phan Rang - Khánh Hòa</div>
        </div>
      </footer>

      <CheckoutModal />
    </main>
  );
}
