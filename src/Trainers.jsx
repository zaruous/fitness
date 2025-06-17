// Trainers 컴포넌트
const Trainers = () => {
    const trainerData = [
        { img: "019.png", name: "클로이", specialty: "근력 강화 전문가", description: "NSCA-CPT, 스포츠 영양학 코치. 10년 이상의 경력으로 회원님의 근력 목표를 책임집니다." },
        { img: "020.png", name: "박서연", specialty: "요가 & 재활 필라테스", description: "국제 요가 얼라이언스 RYT500. 몸의 정렬을 바로잡고 마음의 평화를 찾아드립니다." },
        { img: "https://placehold.co/400x400/1a202c/ffffff?text=이진우", name: "이진우", specialty: "다이어트 & 기능성 운동", description: "FISAF 국제 퍼스널 트레이너. 과학적인 방법으로 건강한 다이어트를 도와드립니다." }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="section-title text-white">전문 트레이너</h2>
                <p className="section-subtitle">최고의 실력과 경험을 갖춘 트레이너들이 당신의 여정을 함께합니다.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {trainerData.map((trainer, index) => (
                        <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-sky-500/20">
                            <img src={trainer.img} alt={`트레이너 ${trainer.name}`} className="w-full h-80 object-contain bg-gray-700/50" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>
                                <p className="text-sky-400 mb-2">{trainer.specialty}</p>
                                <p className="text-gray-400 text-sm">{trainer.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trainers;