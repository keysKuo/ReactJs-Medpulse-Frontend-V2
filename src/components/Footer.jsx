import { TbMapPin, TbPhoneCall, TbMail } from 'react-icons/tb';
import { AiOutlineGlobal } from 'react-icons/ai';

import icons from '../assets/icons';

function Footer(props) {
    return (
        <footer className="w-full flex flex-col items-center justify-center select-none">
            <div className="xl:w-[1120px] w-full xl:pt-[27px] pt-[28px] xl:pb-[27px] pb-[33px] xl:px-0 px-[16px] flex lg:flex-row flex-col justify-between items-start lg:gap-0 gap-[24px] text-[16px] font-[400]">
                <div className="flex flex-col gap-[20px]">
                    <div className="w-[100px]">
                        <img src={icons.logoFooter} alt="footerLogo" />
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <div className="flex gap-[10px] items-center">
                            <div className="w-6 h-6 rounded-md border-2 border-black text-[9px] flex items-center justify-center font-bold">
                                MST
                            </div>
                            <p>GPKD/MST: 0318209645</p>
                        </div>
                        <div className="flex gap-[10px] items-start justify-between">
                            <TbMapPin className="text-[24px] font-black min-w-[24px]" />
                            <p>Số 1 Đặng Văn Sâm, phường 9, quận Phú Nhuận, TPHCM</p>
                        </div>
                        <div className="flex gap-[10px] items-center">
                            <TbPhoneCall className="text-[24px] font-black min-w-[24px]" />
                            <p>Số điện thoại: 0906.303.493</p>
                        </div>
                        <div className="flex gap-[10px] items-center">
                            <TbMail className="text-[24px] font-black min-w-[24px]" />
                            <p>Mail: info@medpulse.vn</p>
                        </div>
                        <div className="flex gap-[10px] items-center">
                            <AiOutlineGlobal className="text-[24px] font-black min-w-[24px]" />
                            <p>Website: www.medpulse.vn</p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex hidden flex-col gap-[20px]">
                    <h1 className="font-[500]">Giới Thiệu</h1>
                    <div className="flex flex-col gap-[12px]">
                        <p>Giới thiệu MPM</p>
                        <p>Case study</p>
                        <p>Kiến thức Marketing</p>
                        <p>Tin tức</p>
                        <p>Sự kiện - ưu đãi</p>
                        <p>Chính sách</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[30px] self-center">
                    <div className="lg:flex hidden flex-col gap-[20px]">
                        <h1 className="font-[500]">Dịch vụ</h1>
                        <div className="flex flex-col gap-[12px]">
                            <p>Marketing tổng thể</p>
                            <p>Gói Fanpage</p>
                            <p>Gói Website</p>
                            <p>Gói Quay dựng</p>
                        </div>
                    </div>
                    <div className="flex gap-[16px] items-center lg:justify-start justify-center">
                        <div>
                            <img src={icons.youtube} alt="socialIcon" />
                        </div>
                        <div>
                            <img src={icons.facebook} alt="socialIcon" />
                        </div>
                        <div>
                            <img src={icons.zalo} alt="socialIcon" />
                        </div>
                        <div>
                            <img src={icons.tiktok} alt="socialIcon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-violet w-full text-center xl:pt-[17px] pt-[18px] xl:pb-[17px] pb-[31px] text-[14px] font-[400]">
                <p className="text-button-text">© 2023 Copyright by MedPulse Marketing</p>
            </div>
        </footer>
    );
}

export default Footer;
