
// Program 컴포넌트
import {Component} from "react";
import {IonIcon} from "./IonIcon.jsx";

const Programs = () => {
    const programData = [
        { icon: "barbell-outline", title: "개인 트레이닝", description: "1:1 맞춤형 지도를 통해 가장 빠르고 효과적으로 목표를 달성하세요." },
        { icon: "people-outline", title: "그룹 클래스", description: "에너지 넘치는 분위기에서 함께 운동하며 동기부여를 얻으세요." },
        { icon: "leaf-outline", title: "요가 & 필라테스", description: "몸과 마음의 균형을 찾고 유연성과 코어 근력을 강화하세요." },
        { icon: "speedometer-outline", title: "체중 감량", description: "체계적인 식단과 운동 프로그램으로 건강하게 목표를 달성합니다." }
    ];

    return (
        <section className="py-20 bg-gray-900/80 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <h2 className="section-title text-white">우리의 프로그램</h2>
                <p className="section-subtitle">당신의 목표에 맞는 완벽한 프로그램을 찾아보세요. 초보자부터 전문가까지 모두를 위한 클래스가 준비되어 있습니다.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programData.map((program, index) => (
                        <div key={index} className="bg-gray-800/80 rounded-xl p-8 text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-sky-500/20">
                            <IonIcon name={program.icon} className="text-sky-400 text-6xl mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-2 text-white">{program.title}</h3>
                            <p className="text-gray-400">{program.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;