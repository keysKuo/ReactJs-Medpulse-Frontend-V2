import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';

function Layout({ children, ...props }) {
    const location = useLocation();

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    useEffect(() => {
        handleScrollToTop();
    }, [location.pathname]);
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
