// CTA 컴포넌트
const CTA = ({ scrollToSection }) => (
    <section className="py-20 text-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(18, 18, 18, 0.85), rgba(18, 18, 18, 0.85)), url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop')" }}>
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-white mb-4">오늘, 변화를 시작하세요</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">더 이상 망설이지 마세요. 지금 바로 무료 상담을 신청하고 당신의 건강한 변화를 위한 첫 걸음을 내딛으세요.</p>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="btn-primary text-xl">
                무료 상담 신청하기
            </a>
        </div>
    </section>
);

export default CTA;