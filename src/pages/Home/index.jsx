import HeroBanner from './HeroBanner';
import Services from './Services';
import ProjectProcess from './ProjectProcess';
import AboutUs from './AboutUs';
import Register from './Register';
import Statistic from './Statistic';
import CaseStudy from './CaseStudy';
import Achievement from './Achievement';
import Partner from './Partner';

function Home(props) {
    return (
        <>
            <HeroBanner />
            <Services />
            <ProjectProcess />
            <AboutUs />
            <Register />
            <Statistic />
            <CaseStudy />
            <Achievement />
            <Partner />
        </>
    );
}

export default Home;
