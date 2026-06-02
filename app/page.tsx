import BuyButton from "./BuyButton";
import CheckoutModal from "./CheckoutModal";
import { comboProduct, products } from "./products";

const comboName = comboProduct.title;

export default function Page() {
  return (
    <main className="bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-[92%] max-w-6xl flex-wrap items-center justify-between gap-4 py-4">
          <a href="#" className="text-2xl font-extrabold text-blue-600">
            Hữu Hùng AI
          </a>
          <nav>
            <ul className="flex flex-wrap gap-4 text-sm font-semibold md:gap-6">
              <li><a href="#gioi-thieu">Giới thiệu</a></li>
              <li><a href="#thu-vien">Thư viện Prompt</a></li>
              <li><a href="#bang-gia">Bảng giá</a></li>
              <li><a href="#lien-he">Liên hệ</a></li>
            </ul>
          </nav>
          <BuyButton packageName={comboName} className="btn btn-primary">Mua Combo 1000 Prompt</BuyButton>
        </div>
      </header>

      <section id="gioi-thieu" className="bg-gradient-to-b from-white to-slate-50 py-16">
        <div className="mx-auto w-[92%] max-w-6xl">
          <h1 className="mb-4 text-3xl font-extrabold leading-tight md:text-5xl">
            Mở Khóa Sức Mạnh AI Với 1000 Prompt Chuyên Gia
          </h1>
          <p className="mb-8 max-w-4xl text-base md:text-lg">
            Giải pháp tối ưu x10 hiệu suất làm việc, tiết kiệm thời gian và tạo ra đột phá doanh thu. Được tinh lọc bởi Hữu Hùng AI.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#thu-vien" className="btn btn-primary">Khám phá ngay</a>
            <BuyButton packageName={comboName} className="btn btn-accent">Mua Combo Trọn Bộ</BuyButton>
          </div>
        </div>
      </section>

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
                  <p className="mb-3 grow text-sm">{product.desc}</p>
                  <div className="mb-3 text-xl font-extrabold text-red-600">{product.price}</div>
                  <BuyButton packageName={product.title} className="btn btn-primary">Mua Gói Này</BuyButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="bang-gia" className="py-14">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="rounded-lg border-2 border-amber-500 bg-amber-50 p-7 text-center shadow-md">
            <h3 className="mb-3 text-2xl font-extrabold md:text-3xl">{comboName}</h3>
            <p className="mb-5 text-2xl font-extrabold text-red-600">Chỉ {comboProduct.price} (Tiết kiệm 50%)</p>
            <BuyButton packageName={comboName} className="btn btn-accent px-8 py-4 text-base">
              SỞ HỮU TRỌN BỘ NGAY HÔM NAY
            </BuyButton>
          </div>
        </div>
      </section>

      <section id="lien-he" className="bg-slate-50 py-14">
        <div className="mx-auto w-[92%] max-w-6xl">
          <h2 className="mb-7 text-center text-2xl font-bold md:text-3xl">Liên Hệ Hữu Hùng AI</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="contact-item"><strong>Hotline:</strong><br /><a href="tel:0944851719">0944 851719</a></div>
            <div className="contact-item"><strong>Email:</strong><br /><a href="mailto:hatmuadem@gmail.com">hatmuadem@gmail.com</a></div>
            <div className="contact-item"><strong>Địa chỉ:</strong><br />Phan Rang - Khánh Hòa</div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-7 text-slate-100">
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
