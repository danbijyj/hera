import Footer from './components/Footer/Footer';
import Nav from './components/Navi/Nav';
import Section1 from './components/Sections/Section1/Section1';
import Section2 from './components/Sections/Section2/Section2';
import Section3 from './components/Sections/Section3/Section3';
import Section4 from './components/Sections/Section4/Section4';
import Section5 from './components/Sections/Section5/Section5';
import Section6 from './components/Sections/Section6/Section6';
import Section7 from './components/Sections/Section7/Section7';
import Section8 from './components/Sections/Section8/Section8';
import './styles/global.scss';

const App = () => {
    return (
        <>
            <div id="wrap">
                <Nav />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
                <Footer />
            </div>
        </>
    );
};

export default App;
