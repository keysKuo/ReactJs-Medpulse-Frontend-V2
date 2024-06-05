import Header from './Header';
import Footer from './Footer';

function Layout({ children, ...props }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
