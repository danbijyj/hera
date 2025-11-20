import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
    const hereRef = useRef(null);
    const justRef = useRef(null);

    useEffect(() => {
        const here = hereRef.current;
        const just = justRef.current;

        if (!here || !just) return;

        const hereStart = -here.scrollWidth;
        const hereEnd = 0;
        gsap.fromTo(
            here,
            { x: hereStart },
            {
                x: hereEnd,
                scrollTrigger: {
                    trigger: '#section3',
                    scrub: 0.5,
                },
            }
        );

        const justStart = 0;
        const justEnd = -(just.scrollWidth - innerWidth);
        gsap.fromTo(
            just,
            { x: justStart },
            {
                x: justEnd,
                scrollTrigger: {
                    trigger: '#section3',
                    scrub: 0.5,
                },
            }
        );
    }, []);

    return (
        <section id="section3" className="section3">
            <p ref={justRef} className="just">
                Just me undefined Just me undefined Just me undefined Just me
                undefined
            </p>
            <p ref={hereRef} className="here">
                here. now. myself. here. now. here. now. myself. here. now.
            </p>
            <div className="seoul-wrapper">
                <p className="seoul">
                    CONTEMPORARY SEOUL CONTEMPORARY SEOUL CONTEMPORARY SEOUL
                    CONTEMPORARY SEOUL CONTEMPORARY SEOUL
                </p>
                <p className="seoul">
                    CONTEMPORARY SEOUL CONTEMPORARY SEOUL CONTEMPORARY SEOUL
                    CONTEMPORARY SEOUL CONTEMPORARY SEOUL
                </p>
            </div>
        </section>
    );
};

export default Section3;
