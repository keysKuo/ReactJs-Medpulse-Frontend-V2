import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

function Button(props) {
    return (
        <Link className="flex items-center justify-center w-fit px-[28px] py-[12px] rounded-[50px] text-button-text bg-button gap-[20px]">
            <p className="text-[20px] font-medium whitespace-nowrap sm:block hidden">Đăng ký tư vấn</p>
            <p className="text-[20px] font-medium whitespace-nowrap sm:hidden block">Đăng ký</p>
            <IoIosArrowForward className="text-[20px]" />
        </Link>
    );
}

export default Button;
