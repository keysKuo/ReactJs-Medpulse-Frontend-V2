import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

import Overlay from '../../components/Overlay';
import RegisterForm from '../../components/RegisterForm';

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

import ProjectProcessReverse from '../../components/Sections/ProjectProcessReverse';

function Combos(props) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <HeroBanner />
            <Introduction />
            <Benefits />
            <section className="w-full flex flex-col my-[31px] justify-center items-center bg-violet text-button-text">
                <div className="xl:w-[1180px] w-full flex justify-between items-center sm:gap-[5px] gap-[10px] py-[31px] xl:px-0 px-[16px]">
                    <p className="sm:text-[25px] text-[14px] font-medium leading-[1.2]">
                        Hãy để đội ngũ chuyên gia MedPulse tư vấn cho bạn
                    </p>
                    <div
                        onClick={() => setShowModal(true)}
                        className="flex cursor-pointer items-center justify-center w-fit sm:px-[30px] px-[16px] sm:py-[16px] py-[12px] rounded-[50px] border-2 border-white text-button-text bg-violet gap-[10px]"
                    >
                        <p className="text-[16px] font-medium whitespace-nowrap">Đăng ký tư vấn</p>
                        <FaArrowRightLong className="text-[20px] sm:block hidden" />
                    </div>
                </div>
            </section>
            <Details />
            {/* <ProjectProcess /> */}
            <ProjectProcessReverse />
            <CaseStudy />
            <Achievement />
            <ComboDetails />
            <Register />
            <Blog />
            {showModal && (
                <Overlay className={'flex flex-col justify-center items-center'} onClick={() => setShowModal(false)}>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="xl:w-[600px] w-[80%] sm:p-[40px] p-[20px] bg-white rounded-[20px] text-center"
                    >
                        <RegisterForm isModal={true} onCloseModal={() => setShowModal(false)} />
                    </div>
                </Overlay>
            )}
        </>
    );
}

export default Combos;
