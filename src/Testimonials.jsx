// Testimonials 컴포넌트
const Testimonials = () => {
    const testimonialData = [
        { quote: "혼자서는 항상 작심삼일이었는데, 트레이너님의 전문적인 코칭 덕분에 3개월 만에 10kg 감량에 성공했습니다! 정말 감사해요!", author: "최지아 회원", status: "3개월차 회원", img: "https://placehold.co/48x48/cccccc/1a202c?text=C" },
        { quote: "시설이 정말 깨끗하고 좋아요. 다양한 기구 덕분에 운동하는 재미가 쏠쏠합니다. 그룹 클래스도 활기 넘치고 재밌어요!", author: "박준서 회원", status: "1년차 회원", img: "https://placehold.co/48x48/cccccc/1a202c?text=P" },
        { quote: "만성 허리 통증 때문에 고생했는데, 필라테스를 시작하고 나서 정말 많이 좋아졌어요. 삶의 질이 달라졌습니다.", author: "김수현 회원", status: "6개월차 회원", img: "https://placehold.co/48x48/cccccc/1a202c?text=K" }
    ];

    return (
        <section className="py-20 bg-gray-900/80 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <h2 className="section-title text-white">회원들의 이야기</h2>
                <p className="section-subtitle">피크 피트니스와 함께 놀라운 변화를 경험한 분들의 후기를 직접 확인해보세요.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialData.map((item, index) => (
                        <div key={index} className="bg-gray-800/80 p-8 rounded-lg shadow-lg">
                            <p className="text-gray-300 mb-4">"{item.quote}"</p>
                            <div className="flex items-center">
                                <img src={item.img} alt={item.author} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-bold text-white">{item.author}</h4>
                                    <p className="text-sm text-sky-400">{item.status}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;