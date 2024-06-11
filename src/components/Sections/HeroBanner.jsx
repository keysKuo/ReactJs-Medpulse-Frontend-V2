import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { IoIosArrowDown } from 'react-icons/io';
import { SlMouse } from 'react-icons/sl';

import heroBannerSections from '../../constants/heroBannerSection';

function HeroBanner(props) {
    const location = useLocation();
    const [heroBannerDetail, setHeroBannerDetail] = useState({});
    useEffect(() => {
        setHeroBannerDetail(heroBannerSections[location.pathname.split('/').pop()]);
    }, [location.pathname]);
    return (
        <section className="w-full max-h-[550px] flex flex-col relative justify-center items-center">
            <img src={heroBannerDetail.thumbnail} alt="bannerImage" className="absolute w-full h-full z-[-1]" />
            <div
                className={`xl:w-[1180px] w-full ${
                    location.pathname.split('/').pop() === 'blogs' ? 'sm:py-[56.5px]' : 'sm:py-[133px]'
                } py-0 flex flex-col justify-center items-center `}
            >
                <div className="flex flex-col gap-[16px] text-white text-center max-w-[900px] p-[30px]">
                    <div className="flex flex-col items-center gap-[12px]">
                        <h1 className="sm:text-[36px] text-[25px] font-bold">{heroBannerDetail.title}</h1>
                        <hr className="h-px w-[60px] bg-white border-0 " />
                    </div>
                    <p className="sm:text-[16px] text-[14px] sm:line-clamp-none line-clamp-2">
                        {heroBannerDetail.desc}
                    </p>
                </div>
                <div
                    className={`${
                        location.pathname.split('/').pop() === 'blogs' ? 'hidden' : 'sm:flex hidden'
                    } flex-col text-white items-center gap-[4px]`}
                >
                    <SlMouse className="text-[29px]" />
                    <div>
                        <IoIosArrowDown className="text-[16px]" />
                        <IoIosArrowDown className="text-[16px] opacity-60" />
                        <IoIosArrowDown className="text-[16px] opacity-30" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroBanner;
