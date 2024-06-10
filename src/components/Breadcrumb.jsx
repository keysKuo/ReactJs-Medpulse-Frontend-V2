import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Breadcrumb = () => {
    const [breadcrumbItems, setBreadcrumbItem] = useState({
        'tin-tuc': 'Tin tức',
        'gioi-thieu': 'Giới Thiệu',
        'chi-dan': 'Chỉ Dẫn',
        'lien-he': 'Liên hệ',
        'chuyen-muc': '',
    });
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div className="xl:w-[1180px] w-full overflow-x-scroll hideScrollbar sm:py-[30px] py-[20px] px-[16px] pl-0 bg-white text-[16px] font-normal">
            <div className="sm:w-full w-max flex gap-[8px]">
                <Link to="/" className="flex items-center gap-[8px] text-gray">
                    <p>Trang chủ</p>
                    <p>/</p>
                </Link>
                <Link to="/" className="flex items-center gap-[8px]">
                    <p>Case Study</p>
                    <p>/</p>
                </Link>
                <Link to="/" className="flex items-center gap-[8px]">
                    <p>Phòng khám Nam Khoa - BS Lê Vũ Tân</p>
                </Link>
            </div>
        </div>
    );
};

export default Breadcrumb;
