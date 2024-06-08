import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import icons from '../../assets/icons';
import { aboutSectionImage } from '../../assets/home';

import titlesIntroductionSection from '../../constants/titlesIntroductionSection';

function Introduction(props) {
    const location = useLocation();
    const [introductionTitle, setIntroductionTitle] = useState('');

    useEffect(() => {
        setIntroductionTitle(titlesIntroductionSection[location.pathname.split('/').pop()]);
    }, [location.pathname]);

    return (
        <section className="w-full flex flex-col mt-[30px] justify-center items-center">
            <div className="xl:w-[1180px] w-full flex lg:gap-[50px] gap-[24px] lg:flex-row flex-col-reverse items-center justify-center xl:px-0 px-4">
                <div className="flex-1 rounded-[30px] bg-light-violet flex justify-center">
                    <img
                        src={aboutSectionImage}
                        alt="registerSectionImage"
                        className="sm:w-[525px] w-[343px] lg:h-[408px] h-[343px]"
                    />
                </div>
                <div className="flex-1 flex-grow self-center flex flex-col sm:gap-[30px] gap-[16px]">
                    <div className="flex flex-col gap-[12px]">
                        <div className="flex sm:gap-[12px] gap-[8px] sm:items-center items-start">
                            <img src={icons.star} alt="icon" className="sm:w-[40px] w-[24px] sm:mt-0 mt-1" />
                            <h1 className="font-bold sm:text-[30px] text-[20px]">{introductionTitle}</h1>
                        </div>
                        <p className="text-[16px] font-normal sm:ml-0 ml-[32px]">
                            Giải pháp Marketing tổng thể là sự kết hợp toàn diện của các giải pháp Marketing dành cho
                            doanh nghiệp và phòng khám y tế, từ phân tích thị trường, nhu cầu khách hàng, tư vấn lựa
                            chọn sản phẩm dịch vụ, chương trình khuyến mãi đến triển khai nhận diện thương hiệu kết hợp
                            thương mại thông qua đa kênh kết hợp (omnichannel)
                        </p>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <div className="flex sm:gap-[12px] gap-[8px] sm:items-center items-start">
                            <img src={icons.podium} alt="icon" className="sm:w-[40px] w-[24px] sm:mt-0 mt-1" />
                            <h1 className="font-bold sm:text-[30px] text-[20px]">Giải pháp này phù hợp với bạn nếu?</h1>
                        </div>
                        <ul className="text-[16px] font-normal list-disc sm:ml-[20px] ml-[55px]">
                            <li>
                                Thương hiệu bạn đang cần đội ngũ Marketing outsource am hiểu như in-house triển khai
                                chiến lược hiệu quả
                            </li>
                            <li>
                                Thương hiệu bạn bắt đầu kinh doanh, cần truyền thông đến khách hàng mục tiêu hiệu quả
                            </li>
                            <li>
                                Thương hiệu bạn ấn tượng và chuyên nghiệp cần chăm sóc và đẩy mạnh vị thế dẫn đầu về
                                truyền thông - quảng cáo - sự kiện
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
