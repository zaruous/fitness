// Hero 컴포넌트
const Hero = ({ scrollToSection }) => {

    const imgData ={
                img: "015.jpeg",
                name: "클로이",
                specialty: "근력 강화 전문가",
                description: "NSCA-CPT, 스포츠 영양학 코치. 10년 이상의 경력으로 회원님의 근력 목표를 책임집니다."
    };

    return (
    <section className="hero-bg h-screen flex items-center justify-center pt-16">
        <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-4 tracking-wider animate-fade-in-down">
                당신의 <span className="text-gradient">잠재력</span>을 깨우세요
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300 animate-fade-in-up">
                최고의 시설과 전문 트레이너와 함께 건강한 변화를 시작하세요. 피크 피트니스가 당신의 목표 달성을 위한 최고의 파트너가 되어 드립니다.
            </p>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="btn-primary text-lg animate-bounce">
                무료 체험 신청하기
            </a>
        </div>
    </section>
)};

export default Hero;