import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
    const sectionRef = useRef(null);
    const worksRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const works = worksRef.current;

        gsap.to(works, {
            y: -1000,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: '+=2100',
                scrub: 1,
                pin: true,
                markers: false,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const data = [
        {
            id: 1,
            img: '/images/s6_01.jpg',
            sub: 'DARE',
            imgLip: '/images/s6_01_d.png',
            imgLipH: '/images/s6_01_h.png',
            name: '센슈얼 누드 글로스',
            color: '#390 WET BERRY',
        },
        {
            id: 2,
            img: '/images/s6_02.jpg',
            sub: 'DARE',
            imgLip: '/images/s6_02_d.png',
            imgLipH: '/images/s6_02_h.png',
            name: '센슈얼 파우더 매트',
            color: '#134 PINK HAZE',
        },
        {
            id: 3,
            img: '/images/s6_03.jpg',
            sub: 'DARE',
            imgLip: '/images/s6_03_d.png',
            imgLipH: '/images/s6_03_h.png',
            name: '센슈얼 누드 글로스',
            color: '#470 CHERRY COKE',
        },
        {
            id: 4,
            img: '/images/s6_04.jpg',
            sub: 'BARE',
            imgLip: '/images/s6_04_d.png',
            imgLipH: '/images/s6_04_h.png',
            name: '센슈얼 누드 글로스',
            color: '#422 LINGERIE',
        },
        {
            id: 5,
            img: '/images/s6_05.jpg',
            sub: 'BARE',
            imgLip: '/images/s6_05_d.png',
            imgLipH: '/images/s6_05_h.png',
            name: '센슈얼 누드 글로스',
            color: '#418 HONEYED',
        },
        {
            id: 6,
            img: '/images/s6_06.jpg',
            sub: 'BARE',
            imgLip: '/images/s6_06_d.png',
            imgLipH: '/images/s6_06_h.png',
            name: '센슈얼 누드 글로스',
            color: '#102 FLIRTY',
        },
    ];

    const leftData = data.slice(0, 3);
    const rightData = data.slice(3, 6);

    const [hoverId, setHoverId] = useState(null);

    return (
        <section id="section6" className="section6" ref={sectionRef}>
            <div className="inner">
                <div className="works" ref={worksRef}>
                    <ul className="list left">
                        {leftData.map((item) => (
                            <li key={item.id}>
                                <div className="pic">
                                    <img src={item.img} alt={item.sub} />
                                </div>
                                <div
                                    className="info"
                                    onMouseEnter={() => setHoverId(item.id)}
                                    onMouseLeave={() => setHoverId(null)}
                                >
                                    <p className="sub">{item.sub}</p>
                                    <div className="lip">
                                        <img
                                            className="default"
                                            src={item.imgLip}
                                            alt={item.name}
                                        />
                                        <img
                                            className={`hover ${
                                                hoverId === item.id ? 'on' : ''
                                            }`}
                                            src={item.imgLipH}
                                            alt={item.name}
                                        />
                                    </div>
                                    <p className="name">{item.name}</p>
                                    <p className="color">{item.color}</p>
                                    <button>buy now</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className="list right">
                        {rightData.map((item) => (
                            <li key={item.id}>
                                <div className="pic">
                                    <img src={item.img} alt={item.sub} />
                                </div>
                                <div
                                    className="info"
                                    onMouseEnter={() => setHoverId(item.id)}
                                    onMouseLeave={() => setHoverId(null)}
                                >
                                    <p className="sub">{item.sub}</p>
                                    <div className="lip">
                                        <img
                                            className="default"
                                            src={item.imgLip}
                                            alt={item.name}
                                        />
                                        <img
                                            className={`hover ${
                                                hoverId === item.id ? 'on' : ''
                                            }`}
                                            src={item.imgLipH}
                                            alt={item.name}
                                        />
                                    </div>
                                    <p className="name">{item.name}</p>
                                    <p className="color">{item.color}</p>
                                    <button>buy now</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Section6;
