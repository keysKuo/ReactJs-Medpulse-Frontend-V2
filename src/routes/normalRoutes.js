import AboutUs from '../pages/AbouUs';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import News from '../pages/News';
import Policy from '../pages/Policy';
import PostDetail from '../pages/PostDetail';
import Layout from '../components/Layout';

const normalRoutes = [
    {
        path: '/',
        component: Home,
        layout: Layout,
    },
    {
        path: '/ve-medpulse-marketing',
        component: AboutUs,
        layout: Layout,
    },
    {
        path: '/lien-he',
        component: Contact,
        layout: Layout,
    },
    {
        path: '/tin-tuc',
        component: News,
        layout: Layout,
    },
    {
        path: '/chinh-sach',
        component: Policy,
        layout: Layout,
    },
    {
        path: '/post',
        component: PostDetail,
        layout: Layout,
    },
];

export default normalRoutes;
