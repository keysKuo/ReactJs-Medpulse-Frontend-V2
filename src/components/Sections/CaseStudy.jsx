import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { caseStudyImages } from '../../assets/home';

function CaseStudy(props) {
    const [showDropDown, setShowDropDown] = useState(1);

    return (
        <section className="w-full flex flex-col sm:py-[56px] py-[25px] justify-center items-center">
            <div className="xl:w-[1180px] w-full xl:px-0 px-4">
                <h1 className="sm:text-[36px] text-[24px] sm:font-bold font-medium xl:mb-[36px] mb-[24px] text-center">Case Study</h1>
                <div className="xl:w-[1180px] w-full flex flex-row xl:justify-between justify-center items-start">
                    <div className="w-[423px] xl:block hidden self-center">
                        <img
                            src={caseStudyImages[showDropDown === -1 ? 0 : showDropDown - 1]}
                            alt="registerSectionImage"
                        />
                    </div>
                    <div className="xl:w-[650px] sm:w-[90%] w-full flex flex-col gap-[12px]">
                        <div
                            className="flex gap-[12px] items-center cursor-pointer"
                            onClick={() => (showDropDown === 1 ? setShowDropDown(-1) : setShowDropDown(1))}
                        >
                            <div
                                className={`rounded-full self-start h-fit ${
                                    showDropDown === 1 ? 'border border-violet' : ''
                                } p-[4px] my-[8px]`}
                            >
                                <p
                                    className={`text-[20px] px-[10px] font-medium rounded-full ${
                                        showDropDown === 1 ? 'bg-violet text-button-text' : 'text-black bg-light-gray'
                                    }`}
                                >
                                    1
                                </p>
                            </div>
                            <div className="flex flex-col w-full leading-normal">
                                <div className="flex justify-between items-center py-[8px] font-medium">
                                    <p
                                        className={`${
                                            showDropDown === 1 ? 'text-violet' : 'text-black'
                                        } sm:text-[25px] text-[20px]`}
                                    >
                                        Mục tiêu
                                    </p>
                                    <IoIosArrowDown
                                        className={`text-black text-[25px] ${
                                            showDropDown === 1 ? 'rotate-180' : 'rotate-0'
                                        } transition ease-in-out`}
                                    />
                                </div>
                                <div
                                    className={`sm:text-[20px] text-[16px] font-normal ${
                                        showDropDown === 1 ? 'block' : 'hidden'
                                    }`}
                                >
                                    <p>
                                        Giới thiệu phòng khám chuyên khoa Tai Mũi Họng - BS Tôn Thất Tùng cho người dân
                                        tại khu vực chợ mới Thành Phố Vũng Tàu
                                    </p>
                                    <p>
                                        Giới thiệu phòng khám chuyên khoa Tai Mũi Họng - BS Tôn Thất Tùng cho người dân
                                        tại khu vực chợ mới Thành Phố Vũng Tàu
                                    </p>
                                    <p>Truyền thông online - offline đa nền tảng</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex gap-[12px] items-center cursor-pointer"
                            onClick={() => (showDropDown === 2 ? setShowDropDown(-1) : setShowDropDown(2))}
                        >
                            <div
                                className={`rounded-full self-start h-fit ${
                                    showDropDown === 2 ? 'border border-violet' : ''
                                } p-[4px] my-[8px]`}
                            >
                                <p
                                    className={`text-[20px] px-[10px] font-medium rounded-full ${
                                        showDropDown === 2 ? 'bg-violet text-button-text' : 'text-black bg-light-gray'
                                    }`}
                                >
                                    2
                                </p>
                            </div>
                            <div className="flex flex-col w-full leading-normal">
                                <div className="flex justify-between items-center py-[8px] font-medium">
                                    <p
                                        className={`${
                                            showDropDown === 2 ? 'text-violet' : 'text-black'
                                        } sm:text-[25px] text-[20px]`}
                                    >
                                        Bối cảnh
                                    </p>
                                    <IoIosArrowDown
                                        className={`text-black text-[25px] ${
                                            showDropDown === 2 ? 'rotate-180' : 'rotate-0'
                                        } transition ease-in-out`}
                                    />
                                </div>
                                <div
                                    className={`sm:text-[20px] text-[16px] font-normal ${
                                        showDropDown === 2 ? 'block' : 'hidden'
                                    }`}
                                >
                                    <p>
                                        Cần tư vấn Marketing tổng thể, tinh gọn cho phòng khám chuyên khoa Tai Mũi Họng
                                        - BS Tôn Thất Tùng với chi phí tối ưu nhưng hiệu quả
                                    </p>
                                    <p>
                                        Tầm nhìn: Nhận thấy khu vực gần sát với nhà thuốc Long Châu phù hợp với triển
                                        khai nhận diện offline. Đồng thời quanh khu vực Vũng Tàu chưa có nhiều phòng
                                        khám chuyên khoa tai mũi họng triển khai online
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex gap-[12px] items-center cursor-pointer"
                            onClick={() => (showDropDown === 3 ? setShowDropDown(-1) : setShowDropDown(3))}
                        >
                            <div
                                className={`rounded-full self-start h-fit ${
                                    showDropDown === 3 ? 'border border-violet' : ''
                                } p-[4px] my-[8px]`}
                            >
                                <p
                                    className={`text-[20px] px-[10px] font-medium rounded-full ${
                                        showDropDown === 3 ? 'bg-violet text-button-text' : 'text-black bg-light-gray'
                                    }`}
                                >
                                    3
                                </p>
                            </div>
                            <div className="flex flex-col w-full leading-normal">
                                <div className="flex justify-between items-center py-[8px] font-medium">
                                    <p
                                        className={`${
                                            showDropDown === 3 ? 'text-violet' : 'text-black'
                                        } sm:text-[25px] text-[20px]`}
                                    >
                                        Triển khai từ Medpulse
                                    </p>
                                    <IoIosArrowDown
                                        className={`text-black text-[25px] ${
                                            showDropDown === 3 ? 'rotate-180' : 'rotate-0'
                                        } transition ease-in-out`}
                                    />
                                </div>
                                <div
                                    className={`sm:text-[20px] text-[16px] font-normal ${
                                        showDropDown === 3 ? 'block' : 'hidden'
                                    }`}
                                >
                                    <p>Lập fanpage phòng khám Tai Mũi Họng - BS. Tôn Thất Tùng:</p>
                                    <p>
                                        Khu vực chợ mới Thành Phố Vũng Tàu, nằm mặt tiền, bãi sau Thành phố Vũng Tàu,
                                        phòng khám sát bên nhà thuốc Long Châu
                                    </p>
                                    <p>
                                        Lập định vị Google Maps và chiến lược tăng review 5 sao thật trên Google Maps Tư
                                        vấn bảng biển, mái che, namecard.
                                    </p>
                                    <p>
                                        Tư vấn các chương trình giới thiệu khách hàng offline khu vực chung cư, cư
                                        dân...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex gap-[12px] items-center cursor-pointer"
                            onClick={() => (showDropDown === 4 ? setShowDropDown(-1) : setShowDropDown(4))}
                        >
                            <div
                                className={`rounded-full self-start h-fit ${
                                    showDropDown === 4 ? 'border border-violet' : ''
                                } p-[4px] my-[8px]`}
                            >
                                <p
                                    className={`text-[20px] px-[10px] font-medium rounded-full ${
                                        showDropDown === 4 ? 'bg-violet text-button-text' : 'text-black bg-light-gray'
                                    }`}
                                >
                                    4
                                </p>
                            </div>
                            <div className="flex flex-col w-full leading-normal">
                                <div className="flex justify-between items-center py-[8px] font-medium">
                                    <p
                                        className={`${
                                            showDropDown === 4 ? 'text-violet' : 'text-black'
                                        } sm:text-[25px] text-[20px]`}
                                    >
                                        Kết quả
                                    </p>
                                    <IoIosArrowDown
                                        className={`text-black text-[25px] ${
                                            showDropDown === 4 ? 'rotate-180' : 'rotate-0'
                                        } transition ease-in-out`}
                                    />
                                </div>
                                <div
                                    className={`sm:text-[20px] text-[16px] font-normal ${
                                        showDropDown === 4 ? 'block' : 'hidden'
                                    }`}
                                >
                                    <p>Kế hoạch trên thực hiện với chi phí thấp nhưng hiệu quả</p>
                                    <ul className="list-disc pl-[40px]">
                                        <li>Fanpage: 1,000+ Follow thật từ bệnh nhân thật, chia sẻ seeding</li>
                                        <li>
                                            Google Maps: 50 đánh giá 5* (vượt trội hoàn toàn với các đối thủ khu vực)
                                        </li>
                                        <li>
                                            Kết hợp offline, trung bình đạt mốc 10 bệnh nhân/ngày (vượt xa so với đối
                                            thủ cùng chuyên khoa mở 02 năm trung bình 2 - 4 bệnh/ ngày)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default CaseStudy;
