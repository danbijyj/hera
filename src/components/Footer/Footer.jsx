import './style.scss';

const Footer = () => {
    return (
        <section id="footer" className="footer">
            <div className="inner">
                <div className="contents">
                    <div className="left">
                        <div>
                            <p className="con1">고객상담팀</p>
                            <p className="con2">080-023-5454</p>
                            <p className="con3">월~금 09:00~18:00</p>
                        </div>
                        <ul>
                            <li>
                                <span>서비스이용약관</span>
                            </li>
                            <li>
                                <span>개인정보처리방침</span>
                            </li>
                            <li>
                                <span>영상정보처리방침뷰티포인트</span>
                            </li>
                            <li>
                                <span>사이트맵</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>헤라스토리</span>
                            </li>
                            <li>
                                <span>페이스 메이크업</span>
                            </li>
                            <li>
                                <span>립 메이크업</span>
                            </li>
                            <li>
                                <span>아이 메이크업</span>
                            </li>
                            <li>
                                <span>스킨케어</span>
                            </li>
                            <li>
                                <span>프래그런스</span>
                            </li>
                        </ul>
                    </div>
                    <div className="sns">
                        <p>AMOREPACIFIC CORPORATION. All rights reserved.</p>
                        <ul>
                            <li>
                                <img
                                    src="./images/sns_01.png"
                                    alt="헤라인스타그램"
                                />
                            </li>
                            <li>
                                <img
                                    src="./images/sns_02.png"
                                    alt="헤라유튜브"
                                />
                            </li>
                            <li>
                                <img src="./images/sns_03.png" alt="헤라틱톡" />
                            </li>
                            <li>
                                <img
                                    src="./images/sns_04.png"
                                    alt="헤라페이스북"
                                />
                            </li>
                            <li>
                                <img
                                    src="./images/sns_05.png"
                                    alt="헤라핀터레스트"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <h3>SEOULISTA. HERA.</h3>
            </div>
        </section>
    );
};

export default Footer;
