import HeroBanner from '../../components/Sections/HeroBanner';
import AboutUs from '../../components/Sections/AboutUs';
import Introduction from './Introduction';
import Doctor from './Doctor';
import Partner from '../../components/Sections/Partner';

function AboutUsPage(props) {
    return (
        <>
            <HeroBanner />
            <Introduction />
            <AboutUs />
            <Doctor />
            <Partner />
        </>
    );
}

export default AboutUsPage;
