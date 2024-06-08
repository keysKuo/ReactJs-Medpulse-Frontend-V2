import HeroBanner from './HeroBanner';
import Services from './Services';
import ProjectProcess from './ProjectProcess';
import AboutUs from '../../components/Sections/AboutUs';
import Register from '../../components/Sections/Register';
import Statistic from './Statistic';
import CaseStudy from '../../components/Sections/CaseStudy';
import Achievement from '../../components/Sections/Achievement';
import Partner from '../../components/Sections/Partner';
import Feedback from './Feedback';
import Blog from '../../components/Sections/Blog';

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
            <Feedback />
            <Blog />
        </>
    );
}

export default Home;
