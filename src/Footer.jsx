// Footer 컴포넌트
import {IonIcon} from "./IonIcon.jsx";

const Footer = () => (
    <footer className="bg-gray-900">
        <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <a href="#" className="text-2xl font-bold text-white">
                        <span className="text-sky-400">YJ</span>피트니스
                    </a>
                    <p className="text-sm text-gray-500 mt-2">© 2025 Created by Kim. Ported to React by Gemini.</p>
                </div>
                <div className="text-center text-gray-400 mb-4 md:mb-0">
                    <p>서울 강서구 화곡로 </p>
                    <p>전화: 02-XXXX-XXXX</p>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white"><IonIcon name="logo-instagram" className="text-2xl" /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><IonIcon name="logo-facebook" className="text-2xl" /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><IonIcon name="chatbubble-ellipses-outline" className="text-2xl" /></a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;