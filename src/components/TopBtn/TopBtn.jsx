import { FiChevronsUp } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './style.scss';

gsap.registerPlugin(ScrollToPlugin);

const TopBtn = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        gsap.to(window, { scrollTo: 0, duration: 0.5, ease: 'power2.out' });
    };
    return (
        <FiChevronsUp
            className={`top ${visible ? 'show' : ''}`}
            onClick={scrollToTop}
        />
    );
};

export default TopBtn;
