"use client";

import { useState } from "react";

type Product = {
  title: string;
  price: string;
  desc: string;
  image: string;
};

const products: Product[] = [
  {
    title: "PACK 1: 100 PROMPT KINH DOANH & STARTUP",
    price: "99,000 VNĐ",
    desc: "Bộ lệnh tối ưu để lên ý tưởng khởi nghiệp, lập kế hoạch kinh doanh chi tiết, phân tích đối thủ cạnh tranh và thiết kế mô hình doanh thu. Dành cho Founder và người kinh doanh.",
    image: "/images/packs/pack-01.png",
  },
  {
    title: "PACK 2: 100 PROMPT QUẢN LÝ TÀI CHÍNH CÁ NHÂN",
    price: "99,000 VNĐ",
    desc: "Công cụ đắc lực giúp bạn lập ngân sách thông minh, tối ưu chi tiêu hàng tháng, xây dựng chiến lược đầu tư sinh lời và phương pháp quản lý nợ hiệu quả.",
    image: "/images/packs/pack-02.png",
  },
  {
    title: "PACK 3: 100 PROMPT MARKETING & XÂY DỰNG THƯƠNG HIỆU",
    price: "99,000 VNĐ",
    desc: "Tạo ra các chiến dịch quảng cáo bùng nổ, viết bài PR sắc bén, kịch bản video viral trên TikTok/Reels và chiến lược định vị thương hiệu đi vào lòng người.",
    image: "/images/packs/pack-03.png",
  },
  {
    title: "PACK 4: 100 PROMPT BÁN HÀNG & ĐÀM PHÁN",
    price: "99,000 VNĐ",
    desc: "Nắm vững tâm lý khách hàng với kịch bản chốt sale đỉnh cao, bộ câu hỏi xử lý từ chối khéo léo và nghệ thuật đàm phán giành lợi thế trong mọi giao dịch B2B/B2C.",
    image: "/images/packs/pack-04.png",
  },
  {
    title: "PACK 5: 100 PROMPT PHÁT TRIỂN BẢN THÂN & NĂNG SUẤT",
    price: "99,000 VNĐ",
    desc: "Chuyên gia AI cá nhân giúp bạn lập kế hoạch ngày/tuần, xây dựng phương pháp học tập siêu tốc và áp dụng quản lý thời gian để x3 hiệu suất làm việc.",
    image: "/images/packs/pack-05.png",
  },
  {
    title: "PACK 6: 100 PROMPT LÃNH ĐẠO & QUẢN LÝ ĐỘI NHÓM",
    price: "99,000 VNĐ",
    desc: "Bí quyết giao việc hiệu quả, truyền cảm hứng và tạo động lực cho nhân sự, giải quyết xung đột nội bộ và xây dựng văn hóa công ty vững mạnh.",
    image: "/images/packs/pack-06.png",
  },
  {
    title: "PACK 7: 100 PROMPT KIẾM TIỀN ONLINE & THU NHẬP THỤ ĐỘNG",
    price: "99,000 VNĐ",
    desc: "Mở khóa các ý tưởng Affiliate Marketing, kịch bản xây kênh Youtube/TikTok kiếm tiền, hướng dẫn viết blog và các nguồn thu nhập thụ động bền vững trên Internet.",
    image: "/images/packs/pack-07.png",
  },
  {
    title: "PACK 8: 100 PROMPT AI & CÔNG NGHỆ TRONG KINH DOANH",
    price: "99,000 VNĐ",
    desc: "Tiên phong ứng dụng công nghệ. Các lệnh giúp tự động hóa quy trình làm việc, ứng dụng AI vào phân tích dữ liệu, chăm sóc khách hàng và tối ưu vận hành doanh nghiệp.",
    image: "/images/packs/pack-08.png",
  },
  {
    title: "PACK 9: 100 PROMPT CUỘC SỐNG & HẠNH PHÚC",
    price: "99,000 VNĐ",
    desc: "Tìm lại sự cân bằng. Cung cấp các bài tập chánh niệm, hướng dẫn quản lý stress, cải thiện các mối quan hệ và xây dựng những thói quen sống tích cực mỗi ngày.",
    image: "/images/packs/pack-09.png",
  },
  {
    title: "PACK 10: 100 PROMPT FUSION (ĐA LĨNH VỰC)",
    price: "99,000 VNĐ",
    desc: "Bộ sưu tập các câu lệnh đột phá kết hợp đa tư duy. Giải quyết các vấn đề phức tạp đòi hỏi góc nhìn chéo từ kinh tế, tâm lý học, và kỹ thuật công nghệ.",
    image: "/images/packs/pack-10.png",
  },
];

const comboName = "Combo Toàn Diện: 1000 Prompt Hữu Hùng AI";

export default function Page() {
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const openModal = (pkgName: string) => {
    setSelectedPackage(pkgName);
    setFormError("");
    setFormSuccess("");
    setOpen(true);
  };

  const getAmount = (pkgName: string) => (pkgName === comboName ? 499000 : 99000);
  const normalizePhone = (input: string) => input.replace(/\s+/g, "").replace(/^\+84/, "0");
  const isValidPhone = (input: string) => /^(0[3|5|7|8|9])[0-9]{8}$/.test(input);
  const isValidEmail = (input: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

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
          <button type="button" className="btn btn-primary" onClick={() => openModal(comboName)}>Mua Combo 1000 Prompt</button>
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
            <button type="button" className="btn btn-accent" onClick={() => openModal(comboName)}>Mua Combo Trọn Bộ</button>
          </div>
        </div>
      </section>

      <section id="thu-vien" className="bg-slate-50 py-14">
        <div className="mx-auto w-[92%] max-w-6xl">
          <h2 className="mb-7 text-center text-2xl font-bold md:text-3xl">Danh mục 10 Gói Sản Phẩm</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article key={p.title} className="card">
                <img
                  className="aspect-video w-full object-cover"
                  src={p.image}
                  alt={`Hình minh họa ${p.title}`}
                />
                <div className="flex h-full flex-col p-4">
                  <h3 className="mb-2 text-base font-bold">{p.title}</h3>
                  <p className="mb-3 grow text-sm">{p.desc}</p>
                  <div className="mb-3 text-xl font-extrabold text-red-600">{p.price}</div>
                  <button type="button" className="btn btn-primary" onClick={() => openModal(p.title)}>Mua Gói Này</button>
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
            <p className="mb-5 text-2xl font-extrabold text-red-600">Chỉ 499,000 VNĐ (Tiết kiệm 50%)</p>
            <button type="button" className="btn btn-accent px-8 py-4 text-base" onClick={() => openModal(comboName)}>
              SỞ HỮU TRỌN BỘ NGAY HÔM NAY
            </button>
          </div>
        </div>
      </section>

      <section id="lien-he" className="bg-slate-50 py-14">
        <div className="mx-auto w-[92%] max-w-6xl">
          <h2 className="mb-7 text-center text-2xl font-bold md:text-3xl">Liên Hệ Hữu Hùng AI</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="contact-item"><strong>Hotline:</strong><br />0944 851719</div>
            <div className="contact-item"><strong>Email:</strong><br />hatmuadem@gmail.com</div>
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

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/55 p-4" onClick={() => setOpen(false)}>
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-lg bg-white p-5 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="absolute right-4 top-2 text-3xl text-slate-500" onClick={() => setOpen(false)}>×</button>
            <h3 className="text-xl font-extrabold">Form Thanh Toán</h3>
            <p className="mt-1 font-bold text-blue-900">Gói đã chọn: {selectedPackage}</p>
            <form
              className="mt-4 grid gap-5 md:grid-cols-[1fr_280px]"
              onSubmit={async (e) => {
                e.preventDefault();
                setFormError("");
                setFormSuccess("");
                const normalizedPhone = normalizePhone(phone);
                if (name.trim().length < 2) {
                  setFormError("Vui lòng nhập họ tên hợp lệ (tối thiểu 2 ký tự).");
                  return;
                }
                if (!isValidPhone(normalizedPhone)) {
                  setFormError("Số điện thoại không hợp lệ. Ví dụ: 09xxxxxxxx.");
                  return;
                }
                if (!isValidEmail(email.trim().toLowerCase())) {
                  setFormError("Email không hợp lệ.");
                  return;
                }
                setSubmitting(true);
                try {
                  const res = await fetch("/api/order", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      name: name.trim(),
                      phone: normalizedPhone,
                      email: email.trim().toLowerCase(),
                      packageName: selectedPackage,
                      amount: getAmount(selectedPackage),
                    }),
                  });
                  const data = await res.json();
                  if (!res.ok || !data.ok) {
                    setFormError(data.message || "Gửi đơn thất bại. Vui lòng thử lại.");
                    return;
                  }
                  setFormSuccess(
                    `Cảm ơn bạn! Đơn ${data.orderId} đã được ghi nhận. Chúng tôi sẽ liên hệ sớm.`,
                  );
                  setName("");
                  setPhone("");
                  setEmail("");
                } catch {
                  setFormError("Có lỗi kết nối. Vui lòng thử lại sau.");
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              <div>
                <label className="label">Họ và Tên</label>
                <input className="input" required value={name} onChange={(e) => setName(e.target.value)} />
                <label className="label">Số điện thoại</label>
                <input className="input" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                <label className="label">Email nhận file</label>
                <input className="input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className="mt-3 rounded-lg border border-dashed border-slate-400 bg-slate-50 p-3 text-sm">
                  Vui lòng chuyển khoản vào STK 201482319 - Ngân hàng ACB (NGUYEN HUU HUNG) với nội dung: [Số Điện Thoại] + Tên Gói
                </div>
                {formError && (
                  <p className="mt-3 rounded-md border border-red-200 bg-red-50 p-2 text-sm text-red-700">
                    {formError}
                  </p>
                )}
                {formSuccess && (
                  <p className="mt-3 rounded-md border border-emerald-200 bg-emerald-50 p-2 text-sm text-emerald-700">
                    {formSuccess}
                  </p>
                )}
                <button type="submit" disabled={submitting} className="btn btn-primary mt-4 w-full disabled:opacity-60">
                  {submitting ? "Đang gửi..." : "Xác Nhận Đã Chuyển Khoản"}
                </button>
              </div>
              <img
                src="/images/qr-acb.png"
                alt="Mã QR thanh toán"
                className="h-auto w-full rounded-lg border border-slate-300 object-contain"
              />
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
