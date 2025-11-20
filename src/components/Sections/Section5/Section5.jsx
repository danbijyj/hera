import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
    const [active, setActive] = useState(null);
    const riseRef = useRef(null);

    useEffect(() => {
        const el = riseRef.current;
        if (!el) return;
        gsap.fromTo(
            el,
            { y: 90, opacity: 0 },
            {
                y: 0,
                opacity: 0.7,
                duration: 1.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#section5',
                    start: 'top 70%',
                    toggleActions: 'restart none none reverse',
                },
            }
        );
    }, []);

    const firstProduct = [
        {
            id: 1,
            img: '/images/s5_01.png',
            hoverImg: '/images/s5_01_on.jpg',
            product: 'UV 프로텍터 액티브 선 밤 SPF 50+/PA++++ 10g',
            price: '38,000원',
        },
    ];
    const lastProducts = [
        {
            id: 2,
            img: '/images/s5_02.png',
            hoverImg: '/images/s5_02_on.jpg',
            product: 'UV프로텍터 톤업 SPF50+/PA++++ 50ml',
            price: '45,000원',
        },
        {
            id: 3,
            img: '/images/s5_03.png',
            hoverImg: '/images/s5_03_on.jpg',
            product: 'UV프로텍터 익스트림포스 레포츠 SPF50+/PA++++ 70ml',
            price: '45,000원',
        },
    ];

    return (
        <section id="section5" className="section5">
            <p ref={riseRef} className="rise">
                LET YOUR GLOW SPEAK! LET YOUR GLOW SPEAK!
            </p>
            <div className="inner">
                <p className="title">Glow Under the Sun</p>
                <div className="sun_wrap">
                    <ul>
                        {firstProduct.map((item) => (
                            <li
                                key={item.id}
                                onMouseEnter={() => setActive(item.id)}
                                onMouseLeave={() => setActive(null)}
                            >
                                <img src={item.img} alt="" />
                                <div
                                    className={`sun ${
                                        active === item.id ? 'show' : ''
                                    }`}
                                >
                                    <img src={item.hoverImg} alt="" />
                                    <div className="detail">
                                        <p className="product">
                                            {item.product}
                                        </p>
                                        <p className="price">{item.price}</p>
                                        <button>buy now</button>
                                    </div>
                                </div>
                            </li>
                        ))}

                        <li>
                            <video
                                src="/videos/section5.mp4"
                                autoPlay
                                loop
                                muted
                            />
                        </li>
                        {lastProducts.map((item) => (
                            <li
                                key={item.id}
                                onMouseEnter={() => setActive(item.id)}
                                onMouseLeave={() => setActive(null)}
                            >
                                <img src={item.img} alt="" />
                                <div
                                    className={`sun ${
                                        active === item.id ? 'show' : ''
                                    }`}
                                >
                                    <img src={item.hoverImg} alt="" />
                                    <div className="detail">
                                        <p className="product">
                                            {item.product}
                                        </p>
                                        <p className="price">{item.price}</p>
                                        <button>buy now</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Section5;
