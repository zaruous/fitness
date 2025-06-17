// Hero.jsx

import heroBgImage from '/public/015.jpeg'; // 1. 이미지를 직접 import 합니다.

const Hero = ({ scrollToSection }) => {
    // 2. 배경 이미지와 관련 스타일을 포함하는 객체를 만듭니다.
    const heroStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        // 3. className 대신 style 속성을 사용해 배경을 적용합니다.
        <section style={heroStyle} className="h-screen flex items-center justify-center pt-16">
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
    );
};
export default Hero;