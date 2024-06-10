import AboutUsPage from '../pages/AbouUs';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import Services from '../pages/Service';
import Combos from '../pages/Combo';
import Blogs from '../pages/Blogs';
import BlogDetail from '../pages/BlogDetail';

const normalRoutes = [
    {
        path: '/',
        component: Home,
        layout: Layout,
    },
    {
        path: '/dich-vu',
        component: Services,
        layout: Layout,
    },
    {
        path: '/ve-medpulse-marketing',
        component: AboutUsPage,
        layout: Layout,
    },
    {
        path: '/combo-fanpage',
        component: Combos,
        layout: Layout,
    },
    {
        path: '/combo-website',
        component: Combos,
        layout: Layout,
    },
    {
        path: '/combo-quay-dung',
        component: Combos,
        layout: Layout,
    },
    {
        path: '/combo-tiktok',
        component: Combos,
        layout: Layout,
    },
    {
        path: '/blogs',
        component: Blogs,
        layout: Layout,
    },
    {
        path: '/blogs/:blogDetail',
        component: BlogDetail,
        layout: Layout,
    },
];

export default normalRoutes;
