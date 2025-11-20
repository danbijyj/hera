import Footer from './components/Footer/Footer';
import Nav from './components/Navi/Nav';
import Section1 from './components/Sections/Section1/Section1';
import './styles/global.scss';

const App = () => {
    return (
        <>
            <div id="wrap">
                <Nav />
                <Section1 />
                <Footer />
            </div>
        </>
    );
};

export default App;
