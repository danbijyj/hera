import './style.scss';

const Section4 = () => {
    const product = [
        {
            id: 1,
            name: '블랙 쿠션 파운데이션 SPF34/PA++',
            img: '/images/s4_01.png',
            bg: '/images/s4_01_back.png',
            bgHover: '/images/s4_01_hover.png',
            desc: '감도 높은 피부의 시작.\n얇고 매끈한 커버로 완성하는 소프트 새틴 스킨',
            en: 'BLACK CUSHION FOUNDATION SPF34/PA++',
        },
        {
            id: 2,
            name: '센슈얼 누드 글로스',
            img: '/images/s4_02.png',
            bg: '/images/s4_02_back.png',
            bgHover: '/images/s4_02_hover.png',
            desc: '부드럽게 밀착되는 광택으로\n분위기 있는 입술을 연출하는 볼륨메이크업 립글로스',
            en: 'SENSUAL NUDE GLOSS',
        },
        {
            id: 3,
            name: 'UV프로텍터 톤업 SPF50+/PA++++',
            img: '/images/s4_03.png',
            bg: '/images/s4_03_back.png',
            bgHover: '/images/s4_03_hover.png',
            desc: '빛나는 피부 표현의 시작\n확실한 피부 보호 기능의 생기 톤업 선크림',
            en: 'UV PROTECTOR TONE-UP SPF50+/PA++++',
        },
    ];

    return (
        <section id="section4" className="section4">
            <div className="inner">
                <p className="title">Timeless Classics</p>
                <div className="product_wrap">
                    {product.map((item) => (
                        <div
                            key={item.id}
                            className="box"
                            style={{
                                background: `url(${item.bg}) no-repeat 0 235px / contain`,
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.background = `url(${item.bgHover}) no-repeat 0 0 / contain`)
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.background = `url(${item.bg}) no-repeat 0 235px / contain`)
                            }
                        >
                            <p className="p_name">{item.name}</p>
                            <img src={item.img} alt={item.name} />
                            <div>
                                <p className="p_desc">{item.desc}</p>
                                <p className="p_en">{item.en}</p>
                                <button>BUY NOW</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section4;
