import { useState, useEffect, useRef } from 'react';
// Header 컴포넌트
const Header = ({ scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '프로그램', ref: 'programs' },
        { name: '트레이너', ref: 'trainers' },
        { name: '후기', ref: 'testimonials' },
        { name: '문의', ref: 'contact' },
    ];

    const handleNavClick = (ref) => {
        scrollToSection(ref);
        setIsMenuOpen(false);
    };

    return (
        <header className={`bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="text-2xl font-bold text-white">
                        <span className="text-sky-400">YJ(화곡)</span>피트니스
                    </a>
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.ref} href={`#${link.ref}`} onClick={(e) => { e.preventDefault(); handleNavClick(link.ref); }} className="text-gray-300 hover:text-sky-400 transition">
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-900`}>
                {navLinks.map((link) => (
                    <a key={link.ref} href={`#${link.ref}`} onClick={(e) => { e.preventDefault(); handleNavClick(link.ref); }} className="block py-2 px-6 text-sm text-gray-300 hover:bg-gray-800">
                        {link.name}
                    </a>
                ))}
            </div>
        </header>
    );
};
export default Header;