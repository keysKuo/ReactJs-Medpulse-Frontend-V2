import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import icons from '../../assets/icons';
import { aboutSectionImage } from '../../assets/home';
import { comboIntroImage } from '../../assets';

import constantsIntroductionSection from '../../constants/constantsIntroductionSection';

function Introduction(props) {
    const location = useLocation();
    const [constantsIntroduction, setConstantsIntroduction] = useState('');

    useEffect(() => {
        setConstantsIntroduction(constantsIntroductionSection[location.pathname.split('/').pop()]);
    }, [location.pathname]);

    console.log();
    return (
        <section className="w-full flex flex-col mt-[30px] justify-center items-center">
            <div className="xl:w-[1180px] w-full flex lg:gap-[50px] gap-[24px] lg:flex-row flex-col-reverse items-center justify-center xl:px-0 px-4">
                <div className="flex-1 rounded-[30px] bg-light-violet flex justify-center">
                    <img
                        src={location.pathname.includes('combo') ? comboIntroImage : aboutSectionImage}
                        alt="registerSectionImage"
                        className={
                            location.pathname.includes('combo')
                                ? 'sm:w-[525px] w-[343px] lg:h-[408px] h-[310px]'
                                : 'sm:w-[439px] w-[343px] lg:h-[439px] h-[310px]'
                        }
                    />
                </div>
                <div className="flex-1 flex-grow self-center flex flex-col sm:gap-[30px] gap-[16px]">
                    <div className="flex flex-col sm:gap-[12px] gap-0">
                        <div className="flex sm:gap-[12px] gap-[8px] sm:items-center items-start">
                            <img src={icons.star} alt="icon" className="sm:w-[40px] w-[24px] sm:mt-0 mt-1" />
                            <h1 className="sm:font-bold font-medium sm:text-[30px] text-[20px]">
                                {constantsIntroduction.title}
                            </h1>
                        </div>
                        <p className="text-[16px] font-normal leading-normal sm:block hidden">
                            {constantsIntroduction?.desc?.desktop}
                        </p>
                        <p className="text-[16px] font-normal ml-[32px] leading-normal sm:hidden block">
                            {constantsIntroduction?.desc?.mobile}
                        </p>
                    </div>
                    <div className="flex flex-col sm:gap-[12px] gap-[4px]">
                        <div className="flex sm:gap-[12px] gap-[8px] sm:items-center items-start">
                            <img src={icons.podium} alt="icon" className="sm:w-[40px] w-[24px] sm:mt-0 mt-1" />
                            <h1 className="sm:font-bold font-medium sm:text-[30px] text-[20px]">
                                Giải pháp này phù hợp với bạn <span className="sm:inline-block hidden">nếu</span>?
                            </h1>
                        </div>
                        <ul className="text-[16px] font-normal list-disc sm:ml-[20px] ml-[55px] leading-normal">
                            <li>
                                Thương hiệu bạn đang cần đội ngũ Marketing outsource am hiểu{' '}
                                <span className="sm:inline-block hidden">
                                    như in-house triển khai chiến lược hiệu quả
                                </span>
                            </li>
                            <li>
                                Thương hiệu bạn mới kinh doanh, cần truyền thông đến khách hàng mục tiêu
                                <span className="sm:inline-block hidden">hiệu quả</span>
                            </li>
                            <li>
                                Thương hiệu bạn <span className="sm:inline-block hidden">ấn tượng và</span> chuyên
                                nghiệp cần chăm sóc và đẩy mạnh vị thế dẫn đầu về truyền thông - quảng cáo - sự kiện
                            </li>
                            <li>Thương hiệu bạn cần tái định vị thương hiệu sau thời gian duy trì</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Introduction;
