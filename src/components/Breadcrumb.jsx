import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BlogAPIs } from '../APIs';

const Breadcrumb = () => {
    const [breadcrumbItems, setBreadcrumbItem] = useState({
        'tin-tuc': 'Tin tức',
        'gioi-thieu': 'Giới Thiệu',
        'chi-dan': 'Chỉ Dẫn',
        'lien-he': 'Liên hệ',
        'chuyen-muc': '',
    });
    const [blogDetail, setBlogDetail] = useState({});
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const loadBlog = async () => {
        const slug = location.pathname.split('/').pop();
        try {
            const result = await BlogAPIs.getBlogBySlug(slug);
            if (result?.data.length > 0) {
                setBlogDetail(...result?.data);
            }
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        loadBlog();
    }, []);
    return (
        <div className="xl:w-[1180px] w-full overflow-x-scroll hideScrollbar sm:py-[30px] py-[20px] px-[16px] xl:pl-0 bg-white text-[16px] font-normal">
            <div className="sm:w-full w-max flex gap-[8px]">
                <Link to="/" className="flex items-center gap-[8px] text-gray">
                    <p>Trang chủ</p>
                    <p>/</p>
                </Link>
                <Link to="/blogs" className="flex items-center gap-[8px]">
                    <p>{blogDetail?.attributes?.tag || 'Case Study'}</p>
                    <p>/</p>
                </Link>
                <p className="flex items-center gap-[8px]">
                    <p>{blogDetail?.attributes?.title || 'Phòng khám Nam Khoa - BS Lê Vũ Tân'}</p>
                </p>
            </div>
        </div>
    );
};

export default Breadcrumb;
