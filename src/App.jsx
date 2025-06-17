import {useRef} from 'react'
import Header from "./Header.jsx";
import './App.css'
import Hero from "./Hero.jsx";
import Programs from "./Programs.jsx";
import Trainers from "./Trainers.jsx";
import Testimonials from "./Testimonials.jsx";
import CTA from "./CTA.jsx";
import Footer from "./Footer.jsx";

// 메인 App 컴포넌트
export default function App() {
    const sectionRefs = {
        hero: useRef(null),
        programs: useRef(null),
        trainers: useRef(null),
        testimonials: useRef(null),
        contact: useRef(null),
    };

    const scrollToSection = (sectionId) => {
        sectionRefs[sectionId].current?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <>
            <Header scrollToSection={scrollToSection} />
            <main id="main-content" className="main-bg">
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
            </main>
            <Footer />
        </>
    );
}
