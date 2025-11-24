import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Section2 = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const data = [
        {
            id: 1,
            img: '/images/s2_01.png',
            imgOn: '/images/s2_01_on.png',
            name: '00N1 다이아',
            bgColor: 'rgba(223, 177, 182, 0.3)',
        },
        {
            id: 2,
            img: '/images/s2_02.png',
            imgOn: '/images/s2_02_on.png',
            name: '13N1 포슬린',
            bgColor: 'rgba(233, 193, 163, 0.3)',
        },
        {
            id: 3,
            img: '/images/s2_03.png',
            imgOn: '/images/s2_03_on.png',
            name: '17N1 아이보리',
            bgColor: 'rgba(197, 149, 121, 0.3)',
        },
        {
            id: 4,
            img: '/images/s2_04.png',
            imgOn: '/images/s2_04_on.png',
            name: '21C1 로제 바닐라',
            bgColor: 'rgba(190, 133, 112, 0.3)',
        },
        {
            id: 5,
            img: '/images/s2_05.png',
            imgOn: '/images/s2_05_on.png',
            name: '21N1 바닐라',
            bgColor: 'rgba(204, 139, 92, 0.3)',
        },
        {
            id: 6,
            img: '/images/s2_06.png',
            imgOn: '/images/s2_06_on.png',
            name: '23N1 베이지',
            bgColor: 'rgba(179, 128, 95, 0.3)',
        },
        {
            id: 7,
            img: '/images/s2_07.png',
            imgOn: '/images/s2_07_on.png',
            name: '25N1 엠버',
            bgColor: 'rgba(126, 72, 28, 0.3)',
        },
    ];

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '70px',
                    height: '70px',
                    zIndex: 10,
                }}
                onClick={onClick}
            >
                <FiChevronLeft size={70} color="#000" />
            </div>
        );
    };

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '70px',
                    height: '70px',
                    zIndex: 10,
                }}
                onClick={onClick}
            >
                <FiChevronRight size={70} color="#000" />
            </div>
        );
    };

    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '0px',
        slidesToShow: 5,
        speed: 500,
        focusOnSelect: true,
        beforeChange: (current, next) => setActiveSlide(next),
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <section id="section2" className="section2">
            <div
                className="bg-overlay"
                style={{ backgroundColor: data[activeSlide].bgColor }}
            />
            <div className="inner">
                <p className="title">리플렉션 스킨 글로우 쿠션 파운데이션</p>
                <div className="items">
                    <div className="slider-container">
                        <Slider {...settings}>
                            {data.map((item) => (
                                <div className="item" key={item.id}>
                                    <div className="pic">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="img-default"
                                        />
                                        <img
                                            src={item.imgOn}
                                            alt={item.name}
                                            className="img-hover"
                                        />
                                    </div>
                                    <p>{item.name}</p>
                                    <button>Add to Cart</button>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;
