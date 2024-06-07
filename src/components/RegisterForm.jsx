import { IoIosArrowDown } from 'react-icons/io';
import Button from './Button';

function RegisterForm(props) {
    return (
        <div className="w-full flex flex-col sm:gap-[28px] gap-[16px]">
            <h1 className="sm:text-[36px] text-[24px] font-bold">Đăng ký tư vấn dịch vụ Marketing với MedPulse</h1>
            <form action="" className="flex flex-col gap-[24px] max-w-full">
                <input
                    type="text"
                    placeholder="Họ và tên"
                    className="w-full py-[8px] placeholder-black border-b border-black focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Điện thoại"
                    className="w-full py-[8px] placeholder-black border-b border-black focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Email"
                    className="w-full py-[8px] placeholder-black border-b border-black focus:outline-none"
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
                        <option>Ngành nghề 1</option>
                        <option>Ngành nghề 2</option>
                        <option>Ngành nghề 3</option>
                        <option>Ngành nghề 4</option>
                    </select>
                </div>
            </form>
            <div className="mt-[4px]">
                <Button />
            </div>
        </div>
    );
}

export default RegisterForm;
