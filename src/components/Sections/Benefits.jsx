import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import benefitIcons from '../../assets/benefitIcons';
import titlesBenefitSection from '../../constants/titlesBenefitSection';

function Benefits(props) {
    const location = useLocation();
    const [detailTitle, setDetailTitle] = useState('');
    useEffect(() => {
        setDetailTitle(titlesBenefitSection[location.pathname.split('/').pop()]);
    }, [location.pathname]);
    return (
        <section className="w-full flex flex-col mt-[30px] justify-center items-center">
            <div className="xl:w-[1180px] w-full flex lg:gap-[32px] gap-[20px] flex-col items-center justify-center xl:px-0 px-4">
                <h1 className="sm:text-[36px] text-[24px] font-bold text-center">{detailTitle}</h1>
                <div className="w-full grid grid-cols-2 grid-rows-2 md:gap-[30px] gap-[12px]">
                    <div className="sm:p-[30px] p-[20px_12px] flex flex-col gap-[16px] items-center justify-center bg-button bg-opacity-20 rounded-[20px]">
                        <div className="bg-white p-[12px] rounded-[16px]">
                            <img src={benefitIcons[0]} alt="icons" />
                        </div>
                        <div className="flex flex-col gap-[8px] items-center text-center">
                            <h1 className="text-[25px] font-medium">Tinh gọn</h1>
                            <p className="text-[16px] font-normal">Tập trung vào hoạt động tinh gọn đạt mục tiêu</p>
                        </div>
                    </div>
                    <div className="sm:p-[30px] p-[20px_12px] flex flex-col gap-[16px] items-center justify-center bg-button bg-opacity-20 rounded-[20px]">
                        <div className="bg-white p-[12px] rounded-[16px]">
                            <img src={benefitIcons[1]} alt="icons" />
                        </div>
                        <div className="flex flex-col gap-[8px] items-center text-center">
                            <h1 className="text-[25px] font-medium">Chuẩn xác</h1>
                            <p className="text-[16px] font-normal">
                                Lựa chọn và truyền thông đến tệp đối tượng mục tiêu
                            </p>
                        </div>
                    </div>
                    <div className="sm:p-[30px] p-[20px_12px] flex flex-col gap-[16px] items-center justify-center bg-button bg-opacity-20 rounded-[20px]">
                        <div className="bg-white p-[12px] rounded-[16px]">
                            <img src={benefitIcons[2]} alt="icons" />
                        </div>
                        <div className="flex flex-col gap-[8px] items-center text-center">
                            <h1 className="text-[25px] font-medium">Tối Ưu</h1>
                            <p className="text-[16px] font-normal">
                                Truyền thông tích hợp đa kênh, tối ưu chi phí liên tục đạt mục tiêu
                            </p>
                        </div>
                    </div>
                    <div className="sm:p-[30px] p-[20px_12px] flex flex-col gap-[16px] items-center justify-center bg-button bg-opacity-20 rounded-[20px]">
                        <div className="bg-white p-[12px] rounded-[16px]">
                            <img src={benefitIcons[3]} alt="icons" />
                        </div>
                        <div className="flex flex-col gap-[8px] items-center text-center">
                            <h1 className="text-[25px] font-medium">Hiệu quả</h1>
                            <p className="text-[16px] font-normal">
                                Luôn hướng đến hiệu quả bằng cơ sở dữ liệu trực quan
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Benefits;
