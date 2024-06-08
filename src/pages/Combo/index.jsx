import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

import HeroBanner from '../../components/Sections/HeroBanner';
import Introduction from '../../components/Sections/Introduction';
import Benefits from '../../components/Sections/Benefits';
import Details from '../../components/Sections/Details';
import ProjectProcess from '../Home/ProjectProcess';
import CaseStudy from '../../components/Sections/CaseStudy';
import Achievement from '../../components/Sections/Achievement';
import Register from '../../components/Sections/Register';
import Blog from '../../components/Sections/Blog';
import ComboDetails from '../../components/Sections/ComboDetails';

function Combos(props) {
    return (
        <>
            <HeroBanner />
            <Introduction />
            <Benefits />
            <section className="w-full flex flex-col my-[30px] justify-center items-center bg-violet text-button-text">
                <div className="xl:w-[1180px] w-full flex justify-between items-center gap-[5px] py-[31px] xl:px-0 px-[16px]">
                    <p className="text-[20px] font-medium">Hãy để đội ngũ chuyên gia MedPulse tư vấn cho bạn</p>
                    <Link className="flex items-center justify-center w-fit px-[28px] py-[12px] rounded-[50px] border-2 border-white text-button-text bg-violet gap-[10px]">
                        <p className="text-[20px] font-medium whitespace-nowrap sm:block hidden">Đăng ký tư vấn</p>
                        <p className="text-[20px] font-medium whitespace-nowrap sm:hidden block">Đăng ký</p>
                        <FaArrowRightLong className="text-[20px]" />
                    </Link>
                </div>
            </section>
            <Details />
            <ProjectProcess />
            <CaseStudy />
            <Achievement />
            <ComboDetails />
            <Register />
            <Blog />
        </>
    );
}

export default Combos;
