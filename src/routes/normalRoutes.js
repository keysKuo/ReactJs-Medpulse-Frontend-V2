import AboutUs from '../pages/AbouUs';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import Services from '../pages/Service';
import Combos from '../pages/Combo';

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
        component: AboutUs,
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
        component: Combos,
        layout: Layout,
    },
];

export default normalRoutes;
