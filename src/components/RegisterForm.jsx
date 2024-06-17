import { IoIosArrowDown, IoIosArrowForward, IoMdClose } from 'react-icons/io';

function RegisterForm(props) {
    const { isSidebar = false, isModal = false, onCloseModal } = props;

    return (
        <div className={`w-full leading-normal relative flex flex-col sm:${isSidebar ? 'gap-[14.5px]' : 'gap-[28px]'} gap-[16px]`}>
            <h1 className={`${isSidebar ? 'text-[20px] text-center font-medium' : 'sm:text-[36px] text-[24px] sm:font-bold font-medium'}`}>
                {isSidebar ? 'Đăng ký tư vấn dịch vụ Marketing' : 'Đăng ký tư vấn dịch vụ Marketing với MedPulse'}
            </h1>
            <div
                onClick={onCloseModal}
                className={`${isModal ? 'block' : 'hidden'} cursor-pointer absolute top-0 right-0 -translate-y-1/2`}
            >
                <IoMdClose className="text-[25px]" />
            </div>
            <form action="" className="flex flex-col gap-[24px] max-w-full">
                <input
                    type="text"
                    placeholder="Họ và tên"
                    className="w-full bg-transparent py-[8px] placeholder-black border-b border-black focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Điện thoại"
                    className="w-full bg-transparent py-[8px] placeholder-black border-b border-black focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Email"
                    className="w-full bg-transparent py-[8px] placeholder-black border-b border-black focus:outline-none"
                />
                <div className="relative w-full group">
                    <IoIosArrowDown className="absolute right-0 bottom-0 -translate-y-1/2 group-focus-within:rotate-180 transition ease-in-out" />
                    <select
                        defaultValue={'Ngành nghề'}
                        className="block py-[8px] w-full text-[16px] bg-transparent border-0 border-b border-black appearance-none focus:outline-none focus:ring-0 peer"
                    >
                        <option disabled hidden>
                            Ngành nghề
                        </option>
                        <option>Quản lý Phòng khám</option>
                        <option>Quản lý bệnh viện</option>
                        <option>Quản lý Marketing</option>
                        <option>Chủ doanh nghiệp</option>
                        <option>Khác</option>
                    </select>
                </div>
                <div className={`cursor-pointer ${isSidebar ? 'self-center' : ''}`}>
                    <div
                        className={`flex items-center justify-center w-fit ${
                            isSidebar ? 'px-[20px] py-[8px]' : 'px-[28px] py-[12px]'
                        } rounded-[50px] text-button-text bg-button gap-[20px]`}
                    >
                        <p className={`${isSidebar ? 'text-[16px]' : 'sm:text-[20px] text-[16px]'} font-medium whitespace-nowrap`}>
                            {isSidebar || isModal ? 'Đăng ký ngay' : 'Đăng ký tư vấn trực tiếp'}
                        </p>
                        {!isSidebar && <IoIosArrowForward className="text-[20px]" />}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
