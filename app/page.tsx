"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const packages = [
  { id: "basic", name: "Cơ bản", price: "Từ 1,5 triệu", detail: "Kiểm tra trực quan, đo ẩm" },
  { id: "standard", name: "Tiêu chuẩn", price: "Từ 3 triệu", detail: "Thêm camera nhiệt, đo nứt" },
  { id: "premium", name: "Cao cấp", price: "Từ 6 triệu", detail: "Thêm dự toán, tư vấn đàm phán" },
];
const slots = ["08:00 – 10:00", "10:00 – 12:00", "14:00 – 16:00", "16:00 – 18:00"];

export default function Home() {
  const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState("standard");
  const [selectedSlot, setSelectedSlot] = useState("10:00 – 12:00");
  const [houseType, setHouseType] = useState("Nhà phố");
  const [date, setDate] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60_000);
    setMinDate(localToday.toISOString().slice(0, 10));
  });

  function submitBooking(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!date) return;
    router.push("/complete");
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Nhà Khỏe - Trang chủ">
          <span className="brand-dots"><i /><i /><i /></span><span>Nhà Khỏe</span>
        </a>
        <nav aria-label="Điều hướng chính">
          <a href="#services">Dịch vụ</a><a href="#pricing">Bảng giá</a><a href="#report">Báo cáo mẫu</a><a href="#contact">Liên hệ</a>
        </nav>
        <a className="hotline" href="tel:0900000000">Hotline: <strong>0900 000 000</strong></a>
      </header>

      <div className="page-grid" id="home">
        <section className="intro" id="services">
          <div className="eyebrow"><span className="eyebrow-line" /> KIỂM TRA NHÀ ĐỘC LẬP</div>
          <h1>Hiểu ngôi nhà<br className="desktop-break" /> trước khi<br className="mobile-break" /> bạn quyết định</h1>
          <p className="intro-copy">Kỹ sư đến tận nơi, đo độ ẩm, vết nứt, điểm thấm bằng camera nhiệt và gửi báo cáo dễ hiểu theo ba mức: ổn, cần theo dõi, cần sửa ngay.</p>
          <ul className="legend" id="report">
            <li><span className="legend-dot green" /><span><b>Xanh:</b> hạng mục ổn, chưa cần xử lý</span></li>
            <li><span className="legend-dot amber" /><span><b>Vàng:</b> cần theo dõi, nên sửa trong 6–12 tháng</span></li>
            <li><span className="legend-dot red" /><span><b>Đỏ:</b> cần xử lý sớm, kèm dự toán sửa chữa sơ bộ</span></li>
          </ul>
          <p className="footnote">Sau khi khám, ngôi nhà có hồ sơ sức khỏe riêng bằng mã QR: lưu kết quả, lịch bảo trì và nhắc kiểm tra lại.</p>
          <div className="trust-row"><span>⌂</span> Kỹ sư độc lập <span className="trust-separator">·</span> Báo cáo trong 24 giờ</div>
        </section>

        <section className="booking-card" id="contact">
          <div className="card-heading"><div><span className="card-kicker">BẮT ĐẦU TẠI ĐÂY</span><h2>Đặt lịch khám nhà</h2></div><span className="step-pill">01 <span>/ 01</span></span></div>
          <p className="card-subtitle">Để lại thông tin, đội ngũ kỹ sư sẽ liên hệ xác nhận lịch với bạn.</p>
          <form onSubmit={submitBooking}>
            <div className="field-grid">
              <label className="field">Họ và tên<input name="name" placeholder="Nguyễn Văn A" autoComplete="name" required /></label>
              <label className="field">Số điện thoại<input name="phone" placeholder="09xx xxx xxx" type="tel" autoComplete="tel" pattern="[0-9+() .-]{9,15}" title="Vui lòng nhập số điện thoại hợp lệ" required /></label>
            </div>
            <label className="field address-field">Địa chỉ ngôi nhà cần khám<input name="address" placeholder="Số nhà, đường, quận/huyện, thành phố" autoComplete="street-address" required /></label>

            <fieldset className="package-field" id="pricing">
              <legend>Chọn gói khám</legend>
              <div className="package-grid">
                {packages.map((item) => <label className={`package-option ${selectedPackage === item.id ? "selected" : ""}`} key={item.id}>
                  <input type="radio" name="package" value={item.id} checked={selectedPackage === item.id} onChange={() => setSelectedPackage(item.id)} />
                  <span className="package-name">{item.name}</span><span className="package-price">{item.price}</span><span className="package-detail">{item.detail}</span>
                </label>)}
              </div>
            </fieldset>

            <div className="field-grid select-row">
              <label className="field">Loại nhà<select value={houseType} onChange={(event) => setHouseType(event.target.value)}><option>Nhà phố</option><option>Căn hộ chung cư</option><option>Biệt thự</option><option>Nhà cấp 4</option><option>Khác</option></select></label>
              <label className="field">Ngày khám<input aria-label="Ngày khám" type="date" value={date} onChange={(event) => setDate(event.target.value)} min={minDate} required /></label>
            </div>

            <fieldset className="time-field"><legend>Khung giờ</legend><div className="time-grid">
              {slots.map((slot) => <label className={`time-option ${selectedSlot === slot ? "selected" : ""}`} key={slot}><input type="radio" name="time" value={slot} checked={selectedSlot === slot} onChange={() => setSelectedSlot(slot)} />{slot}</label>)}
            </div></fieldset>

            <label className="field note-field">Ghi chú <span>(nếu có)</span><textarea name="note" placeholder="Ví dụ: tường phòng ngủ bị ố, muốn kiểm tra trước khi mua" rows={3} /></label>
            <button className="submit-button" type="submit">Xác nhận đặt lịch <span aria-hidden="true">→</span></button>
            <p className="privacy-note"><span>◷</span> Chúng tôi sẽ gọi xác nhận trong vòng 2 giờ làm việc.</p>
            <p className="secure-note">Thông tin của bạn được bảo mật và chỉ dùng để xác nhận lịch hẹn.</p>
          </form>
        </section>
      </div>
      <footer className="site-footer"><span>© 2026 Nhà Khỏe</span><span>Chăm nhà đúng cách, bắt đầu bằng việc hiểu ngôi nhà.</span><a href="tel:0900000000">Cần hỗ trợ? Gọi chúng tôi ↗</a></footer>
    </main>
  );
}
