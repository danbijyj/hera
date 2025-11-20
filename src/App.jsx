import Footer from './components/Footer/Footer';
import Nav from './components/Navi/Nav';
import Section1 from './components/Sections/Section1/Section1';
import Section3 from './components/Sections/Section3/Section3';
import Section7 from './components/Sections/Section7/Section7';
import Section8 from './components/Sections/Section8/Section8';
import './styles/global.scss';

const App = () => {
    return (
        <>
            <div id="wrap">
                <Nav />
                <Section1 />
                <Section3 />
                <Section7 />
                <Section8 />
                <Footer />
            </div>
        </>
    );
};

export default App;
