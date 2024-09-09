import axios from 'axios';

const SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL;

export const getBlogByPagination = async (page, size) => {
    const options = {
        url: `${SERVER_API_URL}/blogs?pagination[page]=${page}&pagination[pageSize]=${size}&populate[0]=seo.metaImage`,
        method: 'GET',
    };
    try {
        const response = await axios.request(options);
        const result = response.data;        
        return result.data;
    } catch (error) {
        throw error;
    }
};

export const getBlogBySlug = async (slug) => {
    const options = {
        url: `${SERVER_API_URL}/blogs?filters[slug][$eq]=${slug}&populate[0]=seo`,
        method: 'GET',
    };
    try {
        const response = await axios.request(options);
        const result = response.data;
        return result;
    } catch (error) {
        throw error;
    }
};
