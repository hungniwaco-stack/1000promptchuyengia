export type Product = {
  title: string;
  price: string;
  amount: number;
  desc: string;
  image: string;
};

export const products: Product[] = [
  {
    title: "PACK 1: 100 PROMPT KINH DOANH & STARTUP",
    price: "99,000 VNĐ",
    amount: 99000,
    desc: "Bộ lệnh tối ưu để lên ý tưởng khởi nghiệp, lập kế hoạch kinh doanh chi tiết, phân tích đối thủ cạnh tranh và thiết kế mô hình doanh thu. Dành cho Founder và người kinh doanh.",
    image: "/images/packs/pack-01.png",
  },
  {
    title: "PACK 2: 100 PROMPT QUẢN LÝ TÀI CHÍNH CÁ NHÂN",
    price: "99,000 VNĐ",
    amount: 99000,
    desc: "Công cụ đắc lực giúp bạn lập ngân sách thông minh, tối ưu chi tiêu hàng tháng, xây dựng chiến lược đầu tư sinh lời và phương pháp quản lý nợ hiệu quả.",
    image: "/images/packs/pack-02.png",
  },
  {
    title: "PACK 3: 100 PROMPT MARKETING & XÂY DỰNG THƯƠNG HIỆU",
    price: "99,000 VNĐ",
    amount: 99000,
    desc: "Tạo ra các chiến dịch quảng cáo bùng nổ, viết bài PR sắc bén, kịch bản video viral trên TikTok/Reels và chiến lược định vị thương hiệu đi vào lòng người.",
    image: "/images/packs/pack-03.png",
  },
  {
    title: "PACK 4: 100 PROMPT BÁN HÀNG & ĐÀM PHÁN",
    price: "99,000 VNĐ",
    amount: 99000,
    desc: "Nắm vững tâm lý khách hàng với kịch bản chốt sale đỉnh cao, bộ câu hỏi xử lý từ chối khéo léo và nghệ thuật đàm phán giành lợi thế trong mọi giao dịch B2B/B2C.",
    image: "/images/packs/pack-04.png",
  },
  {
    title: "PACK 5: 100 PROMPT PHÁT TRIỂN BẢN THÂN & NĂNG SUẤT",
    price: "99,000 VNĐ",
    amount: 99000,
    desc: "Chuyên gia AI cá nhân giúp bạn lập kế hoạch ngày/tuần, xây dựng phương pháp học tập siêu tốc và áp dụng quản lý thời gian để x3 hiệu suất làm việc.",
    image: "/images/packs/pack-05.png",
  },
  {
    title: "PACK 6: 100 PROMPT LÃNH ĐẠO & QUẢN LÝ ĐỘI NHÓM",
    price: "99,000 VNĐ",
    amount: 99000,
    desc: "Bí quyết giao việc hiệu quả, truyền cảm hứng và tạo động lực cho nhân sự, giải quyết xung đột nội bộ và xây dựng văn hóa công ty vững mạnh.",
    image: "/images/packs/pack-06.png",
  },
  {
    title: "PACK 7: 100 PROMPT KIẾM TIỀN ONLINE & THU NHẬP THỤ ĐỘNG",
    price: "99,000 VNĐ",
    amount: 99000,
    desc: "Mở khóa các ý tưởng Affiliate Marketing, kịch bản xây kênh Youtube/TikTok kiếm tiền, hướng dẫn viết blog và các nguồn thu nhập thụ động bền vững trên Internet.",
    image: "/images/packs/pack-07.png",
  },
  {
    title: "PACK 8: 100 PROMPT AI & CÔNG NGHỆ TRONG KINH DOANH",
    price: "99,000 VNĐ",
    amount: 99000,
    desc: "Tiên phong ứng dụng công nghệ. Các lệnh giúp tự động hóa quy trình làm việc, ứng dụng AI vào phân tích dữ liệu, chăm sóc khách hàng và tối ưu vận hành doanh nghiệp.",
    image: "/images/packs/pack-08.png",
  },
  {
    title: "PACK 9: 100 PROMPT CUỘC SỐNG & HẠNH PHÚC",
    price: "99,000 VNĐ",
    amount: 99000,
    desc: "Tìm lại sự cân bằng. Cung cấp các bài tập chánh niệm, hướng dẫn quản lý stress, cải thiện các mối quan hệ và xây dựng những thói quen sống tích cực mỗi ngày.",
    image: "/images/packs/pack-09.png",
  },
  {
    title: "PACK 10: 100 PROMPT FUSION (ĐA LĨNH VỰC)",
    price: "99,000 VNĐ",
    amount: 99000,
    desc: "Bộ sưu tập các câu lệnh đột phá kết hợp đa tư duy. Giải quyết các vấn đề phức tạp đòi hỏi góc nhìn chéo từ kinh tế, tâm lý học, và kỹ thuật công nghệ.",
    image: "/images/packs/pack-10.png",
  },
];

export const comboProduct = {
  title: "Combo Toàn Diện: 1000 Prompt Hữu Hùng AI",
  price: "499,000 VNĐ",
  amount: 499000,
};

export function getCatalogItemByTitle(title: string) {
  if (title === comboProduct.title) {
    return comboProduct;
  }

  return products.find((product) => product.title === title);
}
