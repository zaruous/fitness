import {useRef, useState} from 'react'
import Header from "./Header.jsx";
import './App.css'
import Hero from "./Hero.jsx";
import Programs from "./Programs.jsx";
import Trainers from "./Trainers.jsx";
import Testimonials from "./Testimonials.jsx";
import CTA from "./CTA.jsx";
import Footer from "./Footer.jsx";
import MyEditor from "./MyEditor.jsx";

// 메인 App 컴포넌트
export default function App() {

    const [currentView, setCurrentView] = useState('home')
    const sectionRefs = {
        hero: useRef(null),
        programs: useRef(null),
        trainers: useRef(null),
        testimonials: useRef(null),
        contact: useRef(null),
    };

    const scrollToSection = (sectionId) => {
        if(currentView === 'home') {
            setCurrentView('home');
            setTimeout(()=>{
                sectionRefs[sectionId].current?.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 100);
        }else
        {
            sectionRefs[sectionId].current?.scrollIntoView({
                behavior: 'smooth'
            });
        }


    };

    return (
        <div className='mx-auto w-screen overflow-y-hidden'>
            <Header scrollToSection={scrollToSection}  setView={setCurrentView}/>
            <main id="main-content" className="main-bg">
                {/* 4. currentView state에 따라 다른 컴포넌트를 렌더링 */}
                {currentView === 'home' ? (
                    <>
                        <div ref={sectionRefs.hero}>
                            <Hero scrollToSection={scrollToSection} />
                        </div>
                        <div ref={sectionRefs.programs}>
                            <Programs />
                        </div>
                        <div ref={sectionRefs.trainers}>
                            <Trainers />
                        </div>
                        <div ref={sectionRefs.testimonials}>
                            <Testimonials />
                        </div>
                        <div ref={sectionRefs.contact}>
                            <CTA scrollToSection={scrollToSection} />
                        </div>
                    </>
                    ) : (
                    <div className="pt-20">
                        <MyEditor/>
                    </div>

                    )}
            </main>
            <Footer />
        </div>
    );
}
