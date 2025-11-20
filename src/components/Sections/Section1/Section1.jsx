import './style.scss';

const Section1 = () => {
    return (
        <section id="section1" className="section1">
            <video
                className="bg_video"
                autoPlay
                loop
                muted
                src="/videos/section1.mp4"
            />
            <div className="inner">
                <video
                    className="inner_video"
                    autoPlay
                    loop
                    muted
                    src="/videos/section1.mp4"
                />
                <div className="content">
                    <p className="new">NEW</p>
                    <p className="desc">
                        속부터 투명하게 차올라 유연하게 빛나는 피부
                    </p>
                    <p className="title_1">REFLECTION SKIN GLOW</p>
                    <p className="title_2">CUSHION FOUNDATION</p>
                    <button>shop now</button>
                </div>
            </div>
        </section>
    );
};

export default Section1;
