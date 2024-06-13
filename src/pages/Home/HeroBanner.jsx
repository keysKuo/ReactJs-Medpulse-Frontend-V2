import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import Overlay from '../../components/Overlay';
import RegisterForm from '../../components/RegisterForm';

import { heroBannerImage } from '../../assets/home';
import transparentImages from '../../assets/transparentImages';

function HeroBanner(props) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <section
                className={`w-full xl:px-0 px-[16px] flex flex-col relative justify-center items-center bg-transparent bg-cover bg-no-repeat sm:bg-[url(/transparentImages/HeroHomeBg.jpg)] bg-[url(/transparentImages/HeroHomeMobileBg.jpg)]`}
            >
                <div className="xl:w-[1180px] w-full flex xl:flex-row flex-col xl:gap-[42px] gap-[20px] py-[51px] xl:px-0 px-[16px]">
                    <div className="flex-grow xl:seft-start flex flex-col gap-[20px] xl:items-start items-center xl:mt-[59px] xl:px-0 px-[12px]">
                        <div className="xl:text-start text-center">
                            <h1 className="lg:text-[36px] text-[25px] font-bold text-dark-violet">
                                Dịch Vụ Marketing Y Tế Trọn Gói
                            </h1>
                            <p className="lg:text-[20px] text-[16px] font-normal">
                                Giải pháp tinh gọn, hiệu quả, tiết kiệm chi phí và tăng tỷ lệ chuyển đổi trong lĩnh vực
                                y tế
                            </p>
                        </div>
                        <div
                            onClick={() => setShowModal(true)}
                            className="flex cursor-pointer items-center justify-center w-fit px-[28px] py-[12px] rounded-[50px] text-button-text bg-button gap-[20px]"
                        >
                            <p className="text-[20px] font-medium whitespace-nowrap">Đăng ký tư vấn</p>
                            <IoIosArrowForward className="text-[20px]" />
                        </div>
                    </div>
                    <div className="xl:seft-start self-center max-w-[580px] min-h-max grid sm:grid-cols-[145px_165px_136px_126px] grid-cols-[80px_91px_75px_75px] sm:grid-rows-[140.5px_140.5px_102px_102px] grid-rows-[77px_77px_56px_56px] lg:gap-x-[21px] gap-x-[11.5px]">
                        <div className="col-start-1 row-span-2 self-end w-min flex flex-col sm:mb-[12px] mb-[7px]">
                            <div className=" sm:w-[88px] w-[48.3px] sm:h-[85px] h-[47px] self-end bg-button rounded-full sm:mb-[17.02px] mb-[9.34px]"></div>
                            <div className=" sm:w-[145px] w-[80px] sm:h-[94px] h-[52px] sm:rounded-tl-[68.027px] rounded-tl-[37.333px] sm:rounded-br-[68.027px] rounded-br-[37.333px] bg-violet "></div>
                        </div>
                        <div className="col-start-2 row-span-2 sm:mb-[12px] mb-[7px]">
                            <img src={heroBannerImage.banner3} alt="heroBannerImage" className="w-full h-full" />
                        </div>
                        <div className="col-start-3 col-span-2 row-span-4">
                            <img src={heroBannerImage.banner1} alt="heroBannerImage" className="w-full h-full" />
                        </div>
                        <div className="row-start-3 row-span-2 col-span-2">
                            <img src={heroBannerImage.banner2} alt="heroBannerImage" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </section>
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

export default HeroBanner;
