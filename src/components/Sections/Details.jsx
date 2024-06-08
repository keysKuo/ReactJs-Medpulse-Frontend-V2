import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { detailSectionImage } from '../../assets';
import titlesDetailSection from '../../constants/titlesDetailSection';

function Details(props) {
    const location = useLocation();
    const [detailTitle, setDetailTitle] = useState('');
    useEffect(() => {
        setDetailTitle(titlesDetailSection[location.pathname.split('/').pop()]);
    }, [location.pathname]);
    return (
        <section className="w-full flex flex-col mt-[30px] justify-center items-center">
            <div className="xl:w-[1180px] w-full flex lg:gap-[32px] gap-[20px] flex-col items-center justify-center xl:px-0 px-4">
                <h1 className="sm:text-[36px] text-[24px] font-bold text-center">{detailTitle}</h1>
                <div className="flex lg:gap-[50px] gap-[24px] lg:flex-row flex-col items-center justify-center">
                    <div className="flex-1 w-full flex items-center justify-center">
                        <img src={detailSectionImage} alt="detailSectionImage" className="sm:w-full" />
                    </div>
                    <div className="flex-1 self-start w-full flex flex-col gap-[20px]">
                        <div className="flex lg:gap-[20px] gap-[12px] items-start">
                            <div className="sm:px-[12.5px] px-[9.37px] sm:text-[25px] text-[18.75px] bg-violet text-white rounded-full">
                                1
                            </div>
                            <div className="flex flex-col items-start lg:gap-[12px] gap-[6px]">
                                <h1 className="sm:text-[25px] text-[20px] font-medium">Thấu hiểu đặc thù ngành</h1>
                                <p className="text-[16px] font-normal">
                                    Kiến thức - Kinh nghiệm - Trải nghiệm đủ để "bắt mạch" được những trăn trở của khách
                                    hàng, từ đó đưa giải pháp "đo ni đóng giày" cho từng khách hàng nhằm hướng tới hiệu
                                    quả
                                </p>
                            </div>
                        </div>
                        <div className="flex lg:gap-[20px] gap-[12px] items-start">
                            <div className="sm:px-[12.5px] px-[9.37px] sm:text-[25px] text-[18.75px] bg-violet text-white rounded-full">
                                2
                            </div>
                            <div className="flex flex-col items-start lg:gap-[12px] gap-[6px]">
                                <h1 className="sm:text-[25px] text-[20px] font-medium">Dịch vụ toàn diện</h1>
                                <p className="text-[16px] font-normal">
                                    Cam kết dịch vụ marketing y tế đáp ứng toàn diện nhằm giúp khách hàng/bác sĩ tiết
                                    kiệm thời gian, đồng nhất tiêu chuẩn và hiệu quả chiến dịch marketing. Hạn chế sử
                                    dụng nhiều đơn vị khác nhau cho các hạng mục nhỏ lẻ, rời rạc.
                                </p>
                            </div>
                        </div>
                        <div className="flex lg:gap-[20px] gap-[12px] items-start">
                            <div className="sm:px-[12.5px] px-[9.37px] sm:text-[25px] text-[18.75px] bg-violet text-white rounded-full">
                                3
                            </div>
                            <div className="flex flex-col items-start lg:gap-[12px] gap-[6px]">
                                <h1 className="sm:text-[25px] text-[20px] font-medium">Rõ ràng & minh bạch</h1>
                                <p className="text-[16px] font-normal">
                                    Kiến thức - Kinh nghiệm - Trải nghiệm đủ để "bắt mạch" được những trăn trở của khách
                                    hàng, từ đó đưa giải pháp "đo ni đóng giày" cho từng khách hàng nhằm hướng tới hiệu
                                    quả
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Details;
