import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { IoMdArrowDropdown, IoMdMenu } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import icons from '../assets/icons';
import Breadcrumb from './Breadcrumb';
import Overlay from './Overlay';
import RegisterForm from './RegisterForm';

function Header(props) {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [showMenuItem, setShowMenuItem] = useState(-1);
    const [showModal, setShowModal] = useState(false);

    const handleNaviagate = (url) => {
        setShowMenu(false);
        navigate(url);
    };

    return (
        <>
            <header className="w-full flex flex-col justify-center items-center bg-white sticky top-0 z-[999]">
                <div className="xl:w-[1180px] w-full xl:py-[15px] py-[8px] px-[16px] flex justify-between items-center">
                    <Link to={'/'} onClick={() => setShowMenu(false)}>
                        <img src={icons.logo} alt="logoHeader" />
                    </Link>
                    <div className="flex lg:hidden gap-[12px] items-center">
                        <FiSearch className="text-[20px] m-[10px]" />
                        <IoMdMenu onClick={() => setShowMenu(!showMenu)} className="text-[20px] m-[10px]" />
                    </div>
                    <div className={`hidden lg:flex justify-center items-center gap-2 text-[16px] font-medium `}>
                        <Link
                            to={'/dich-vu'}
                            className="px-[15px] py-[10px] group cursor-pointer relative flex gap-2 justify-center items-center"
                        >
                            <p>Dịch vụ</p>
                        </Link>
                        <div className="px-[15px] py-[10px] group cursor-pointer relative flex gap-2 justify-center items-center">
                            <p>Gói Combo</p>
                            <IoMdArrowDropdown className="group-hover:rotate-180 transition ease-in-out" />
                            <div className="absolute top-10 left-5 w-[315px] bg-white shadow-lg p-2 rounded-xl hidden group-hover:block">
                                <Link
                                    to={'/combo-fanpage'}
                                    className="block p-[6px] font-[400] hover:bg-violet hover:text-button-text"
                                >
                                    Gói Fanpage{' '}
                                </Link>
                                <Link
                                    to={'/combo-website'}
                                    className="block p-[6px] font-[400] hover:bg-violet hover:text-button-text"
                                >
                                    Gói Website
                                </Link>
                                <Link
                                    to={'/combo-quay-dung'}
                                    className="block p-[6px] font-[400] hover:bg-violet hover:text-button-text"
                                >
                                    Gói Quay dựng
                                </Link>
                            </div>
                        </div>
                        <Link
                            to={'/blogs'}
                            className="px-[15px] py-[10px] group cursor-pointer relative flex gap-2 justify-center items-center"
                        >
                            <p>Blog</p>
                        </Link>
                        <Link
                            to={'/ve-medpulse-marketing'}
                            className="px-[15px] py-[10px] group cursor-pointer relative flex gap-2 justify-center items-center"
                        >
                            <p>Về Medpulse Marketing</p>
                        </Link>
                    </div>
                    <div
                        onClick={() => setShowModal(true)}
                        className="hidden cursor-pointer lg:block px-[25px] py-[15px] rounded-[50px] text-button-text bg-button"
                    >
                        Tư vấn và báo giá
                    </div>
                </div>
                {location.pathname.includes('/blogs/') && <Breadcrumb />}
                <div
                    className={`flex-col self-start w-full lg:hidden gap-2 text-[16px] absolute top-14 bg-white font-medium ${
                        showMenu ? 'flex' : 'hidden'
                    }`}
                >
                    <div className="px-[15px] py-[10px] cursor-pointer" onClick={() => handleNaviagate('/dich-vu')}>
                        <div className="flex items-center justify-between">
                            <p>Dịch vụ</p>
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
                            <div
                                onClick={() => handleNaviagate('/combo-fanpage')}
                                className="block p-[6px] font-[400] hover:bg-violet hover:text-button-text"
                            >
                                Gói Fanpage{' '}
                            </div>
                            <div
                                onClick={() => handleNaviagate('/combo-website')}
                                className="block p-[6px] font-[400] hover:bg-violet hover:text-button-text"
                            >
                                Gói Website
                            </div>
                            <div
                                onClick={() => handleNaviagate('/combo-quay-dung')}
                                className="block p-[6px] font-[400] hover:bg-violet hover:text-button-text"
                            >
                                Gói Quay dựng
                            </div>
                        </div>
                    </div>
                    <div className="px-[15px] py-[10px] group cursor-pointer" onClick={() => handleNaviagate('/blogs')}>
                        <div className="flex items-center justify-between">
                            <p>Blog</p>
                        </div>
                    </div>
                    <div
                        className="px-[15px] py-[10px] group cursor-pointer"
                        onClick={() => handleNaviagate('/ve-medpulse-marketing')}
                    >
                        <div className="flex items-center justify-between">
                            <p>Về Medpulse Marketing</p>
                        </div>
                    </div>
                </div>
            </header>
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

export default Header;
