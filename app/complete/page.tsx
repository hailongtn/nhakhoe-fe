import Link from "next/link";

export default function CompletePage() {
  return (
    <main className="complete-page">
      <section className="complete-card" aria-labelledby="complete-title">
        <a className="brand complete-brand" href="/" aria-label="Nhà Khỏe - Trang chủ">
          <span className="brand-dots"><i /><i /><i /></span><span>Nhà Khỏe</span>
        </a>
        <div className="success-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="m6 12.5 4 4 8-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
        <span className="complete-kicker">YÊU CẦU ĐÃ ĐƯỢC GHI NHẬN</span>
        <h1 id="complete-title">Cảm ơn bạn<br />đã đặt lịch!</h1>
        <p className="complete-copy">Đội ngũ Nhà Khỏe sẽ liên hệ xác nhận lịch hẹn với bạn trong vòng <strong>2 giờ làm việc.</strong></p>
        <div className="next-step"><span className="next-icon">◷</span><div><strong>Tiếp theo sẽ như thế nào?</strong><p>Kỹ sư của chúng tôi sẽ gọi để trao đổi thêm về tình trạng ngôi nhà và xác nhận thời gian phù hợp.</p></div></div>
        <Link href="/" className="back-button">Về trang chủ <span aria-hidden="true">→</span></Link>
        <a className="help-link" href="tel:0900000000">Cần hỗ trợ ngay? <strong>0900 000 000</strong></a>
      </section>
      <p className="complete-footer">© 2026 Nhà Khỏe <span>·</span> Chăm nhà đúng cách, bắt đầu bằng việc hiểu ngôi nhà.</p>
    </main>
  );
}
