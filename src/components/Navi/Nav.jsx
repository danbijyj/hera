import { useState } from 'react';
import './style.scss';
import {
    FiMenu,
    FiUser,
    FiShoppingCart,
    FiMapPin,
    FiGlobe,
    FiX,
} from 'react-icons/fi';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navData = [
        {
            title: 'ABOUT',
            menus: [
                {
                    subtitle: '헤라스토리',
                    items: ['브랜드소개', '헤라크루', '캠페인 라이브러리'],
                },
            ],
        },
        {
            title: 'SHOP',
            menus: [
                {
                    subtitle: '페이스 메이크업',
                    items: [
                        '제품전체',
                        '파운데이션',
                        '쿠션',
                        '베이스/프라이머',
                        '파우더/픽서',
                        '블러셔/하이라이터',
                        '컨실러',
                    ],
                },
                {
                    subtitle: '립 메이크업',
                    items: [
                        '제품전체',
                        '립스틱',
                        '틴트',
                        '립밤/글로스',
                        '립앤치크',
                    ],
                },
                {
                    subtitle: '아이 메이크업',
                    items: [
                        '제품전체',
                        '아이섀도',
                        '마스카라',
                        '아이브로우',
                        '아이라이너',
                    ],
                },
                {
                    subtitle: '스킨케어',
                    items: [
                        '제품전체',
                        '마스크/스페셜케어',
                        '클렌저',
                        '토너/워터',
                        '에멀젼',
                        '세럼/앰플',
                        '아이케어',
                        '크림',
                        'UV프로텍션',
                    ],
                },
                {
                    subtitle: '프래그런스',
                    items: ['제품전체', '향수', '바디'],
                },
            ],
        },
    ];

    return (
        <nav className="nav">
            <div className="inner">
                <div className="menu" onClick={() => setIsOpen(true)}>
                    <FiMenu />
                </div>
                <h1>
                    <a href="#">
                        <img src="./images/logo.png" alt="logo" />
                    </a>
                </h1>
                <div className="icons">
                    <ul>
                        <li>
                            <FiUser />
                        </li>
                        <li>
                            <FiMapPin />
                        </li>
                        <li>
                            <FiShoppingCart />
                        </li>
                        <li>
                            <FiGlobe />
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`menu_over ${isOpen ? 'open' : ''}`}>
                <div className="over_top">
                    <div className="over_top_inner">
                        <p>
                            <FiX onClick={() => setIsOpen(false)} />
                        </p>
                        <img src="./images/logo.png" alt="logo" />
                    </div>
                </div>
                <div className="over_inner">
                    {navData.map((section, i) => (
                        <div key={i}>
                            <h2>{section.title}</h2>
                            {section.title === 'SHOP' ? (
                                <div className="shop">
                                    {section.menus.map((menu, j) => (
                                        <ul key={j}>
                                            <h3>{menu.subtitle}</h3>
                                            {menu.items.map((item, k) => (
                                                <li key={k}>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </div>
                            ) : (
                                section.menus.map((menu, j) => (
                                    <ul key={j}>
                                        <h3>{menu.subtitle}</h3>
                                        {menu.items.map((item, k) => (
                                            <li key={k}>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ))
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
