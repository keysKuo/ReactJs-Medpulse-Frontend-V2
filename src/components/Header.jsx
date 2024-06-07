import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown, IoMdMenu } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import icons from '../assets/icons';

function Header(props) {
    const [showMenu, setShowMenu] = useState(false);
    const [showMenuItem, setShowMenuItem] = useState(-1);

    return (
        <header className="w-full flex flex-col justify-center items-center bg-black sticky top-0 z-[999]">
            <div className="xl:w-[1180px] w-full xl:py-[15px] py-[8px] px-[16px] flex justify-between items-center">
                <Link to={'/'}>
                    <img src={icons.logo} alt="logoHeader" />
                </Link>
                <div className="flex lg:hidden gap-[12px] items-center">
                    <FiSearch className="text-[20px] m-[10px]" />
                    <IoMdMenu onClick={() => setShowMenu(!showMenu)} className="text-[20px] m-[10px]" />
                </div>
                <div className={`hidden lg:flex justify-center items-center gap-2 text-[16px] font-medium `}>
                    <div className="px-[15px] py-[10px] group cursor-pointer relative flex gap-2 justify-center items-center">
                        <p>Dịch vụ</p>
                        <IoMdArrowDropdown className="group-hover:rotate-180 transition ease-in-out" />
                        <div className="absolute top-10 left-5 w-[315px] bg-white shadow-lg p-2 rounded-xl hidden group-hover:block">
                            <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">
                                Marketing tổng thể
                            </div>
                            <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">
                                Dịch vụ / giải pháp thương hiệu
                            </div>
                            <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">
                                Dịch vụ / giải pháp tiếp thị bán hàng
                            </div>
                        </div>
                    </div>
                    <div className="px-[15px] py-[10px] group cursor-pointer relative flex gap-2 justify-center items-center">
                        <p>Gói Combo</p>
                        <IoMdArrowDropdown className="group-hover:rotate-180 transition ease-in-out" />
                        <div className="absolute top-10 left-5 w-[315px] bg-white shadow-lg p-2 rounded-xl hidden group-hover:block">
                            <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">
                                Gói Fanpage{' '}
                            </div>
                            <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">Gói Website</div>
                            <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">
                                Gói Quay dựng
                            </div>
                            <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">Gói Tiktok</div>
                        </div>
                    </div>
                    <div className="px-[15px] py-[10px] group cursor-pointer relative flex gap-2 justify-center items-center">
                        <p>Blog</p>
                        <IoMdArrowDropdown className="group-hover:rotate-180 transition ease-in-out" />
                        <div className="absolute top-10 left-5 w-[315px] bg-white shadow-lg p-2 rounded-xl hidden group-hover:block">
                            <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">Case study</div>
                            <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">
                                Kiến thức Marketing Y Tế
                            </div>
                            <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">Tin tức</div>
                            <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">
                                Sự kiện - ưu đãi
                            </div>
                        </div>
                    </div>
                    <div
                        to={'/ve-medpulse-marketing'}
                        className="px-[15px] py-[10px] group cursor-pointer relative flex gap-2 justify-center items-center"
                    >
                        <p>Về Medpulse Marketing</p>
                        <IoMdArrowDropdown className="group-hover:rotate-180 transition ease-in-out" />
                        <div className="absolute top-10 left-5 w-[315px] bg-white shadow-lg p-2 rounded-xl hidden group-hover:block">
                            <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">
                                Giới thiệu MPM
                            </div>
                            <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">Liên hệ MPM</div>
                        </div>
                    </div>
                </div>
                <Link
                    to={'/lien-he'}
                    className="hidden lg:block px-[25px] py-[15px] rounded-[50px] text-button-text bg-button"
                >
                    Tư vấn và báo giá
                </Link>
            </div>
            <div
                className={`flex-col self-start w-full lg:hidden gap-2 text-[16px] absolute top-14 bg-white font-medium ${
                    showMenu ? 'flex' : 'hidden'
                }`}
            >
                <div
                    className="px-[15px] py-[10px] cursor-pointer"
                    onClick={() => (showMenuItem === 1 ? setShowMenuItem(-1) : setShowMenuItem(1))}
                >
                    <div className="flex items-center justify-between">
                        <p>Dịch vụ</p>
                        <IoMdArrowDropdown
                            className={`${showMenuItem === 1 ? 'rotate-180' : 'rotate-0'} transition ease-in-out`}
                        />
                    </div>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`p-2 rounded-xl ${showMenuItem === 1 ? 'block' : 'hidden'}`}
                    >
                        <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">
                            Marketing tổng thể
                        </div>
                        <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">
                            Dịch vụ / giải pháp thương hiệu
                        </div>
                        <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">
                            Dịch vụ / giải pháp tiếp thị bán hàng
                        </div>
                    </div>
                </div>
                <div
                    className="px-[15px] py-[10px] group cursor-pointer"
                    onClick={() => (showMenuItem === 2 ? setShowMenuItem(-1) : setShowMenuItem(2))}
                >
                    <div className="flex items-center justify-between">
                        <p>Gói Combo</p>
                        <IoMdArrowDropdown
                            className={`${showMenuItem === 2 ? 'rotate-180' : 'rotate-0'} transition ease-in-out`}
                        />
                    </div>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`p-2 rounded-xl ${showMenuItem === 2 ? 'block' : 'hidden'}`}
                    >
                        <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">Gói Fanpage </div>
                        <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">Gói Website</div>
                        <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">Gói Quay dựng</div>
                        <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">Gói Tiktok</div>
                    </div>
                </div>
                <div
                    className="px-[15px] py-[10px] group cursor-pointer"
                    onClick={() => (showMenuItem === 3 ? setShowMenuItem(-1) : setShowMenuItem(3))}
                >
                    <div className="flex items-center justify-between">
                        <p>Blog</p>
                        <IoMdArrowDropdown
                            className={`${showMenuItem === 3 ? 'rotate-180' : 'rotate-0'} transition ease-in-out`}
                        />
                    </div>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`p-2 rounded-xl ${showMenuItem === 3 ? 'block' : 'hidden'}`}
                    >
                        <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">Case study</div>
                        <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">
                            Kiến thức Marketing Y Tế
                        </div>
                        <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">Tin tức</div>
                        <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">
                            Sự kiện - ưu đãi
                        </div>
                    </div>
                </div>
                <div
                    className="px-[15px] py-[10px] group cursor-pointer"
                    onClick={() => (showMenuItem === 4 ? setShowMenuItem(-1) : setShowMenuItem(4))}
                >
                    <div className="flex items-center justify-between">
                        <p>Về Medpulse Marketing</p>
                        <IoMdArrowDropdown
                            className={`${showMenuItem === 4 ? 'rotate-180' : 'rotate-0'} transition ease-in-out`}
                        />
                    </div>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`p-2 rounded-xl ${showMenuItem === 4 ? 'block' : 'hidden'}`}
                    >
                        <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">Giới thiệu MPM</div>
                        <div className="p-[6px] font-[400] hover:bg-violet hover:text-button-text">Liên hệ MPM</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
