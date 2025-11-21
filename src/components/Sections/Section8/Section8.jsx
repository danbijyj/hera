import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const Section8 = () => {
    const influencer = [
        {
            id: 1,
            img: '/images/s8_01.jpg',
            name: '유진(@jouojxx)님',
            lip: '#498 엔젤스키스',
        },
        {
            id: 2,
            img: '/images/s8_02.jpg',
            name: '큐투한(@q2han)님',
            lip: '#130 스터닝핑크',
        },
        {
            id: 3,
            img: '/images/s8_03.jpg',
            name: '진솔(@jinsolllllllshin)님',
            lip: '#430 투베이지',
        },
        {
            id: 4,
            img: '/images/s8_04.jpg',
            name: '주리(@ririri.xx)님',
            lip: '#105 보이시',
        },
        {
            id: 5,
            img: '/images/s8_05.jpg',
            name: '지수(@jissuuseo)님',
            lip: '#498 엔젤스키스',
        },
        {
            id: 6,
            img: '/images/s8_06.jpg',
            name: '큐투한(@q2han)님',
            lip: '#430 투베이지',
        },
        {
            id: 7,
            img: '/images/s8_07.jpg',
            name: '진솔(@jinsolllllllshin)님',
            lip: '#297 오렌지스카치',
        },
        {
            id: 8,
            img: '/images/s8_08.jpg',
            name: '지수(@jissuuseo)님',
            lip: '#130 스터닝핑크',
        },
    ];

    return (
        <section id="section8" className="section8">
            <div className="inner">
                <p className="title">#SENSUAL #TINTED #SHINE #STICK</p>
            </div>
            <div className="visual">
                <video autoPlay loop muted src="/videos/section8.mp4" />
            </div>
            <div className="inner">
                <Swiper
                    slidesPerView={4.5}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {influencer.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="box">
                                <img src={item.img} alt={item.lip} />
                            </div>
                            <div className="info">
                                <p>{item.name}</p>
                                <p>{item.lip}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Section8;
