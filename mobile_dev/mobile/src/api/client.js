import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'https://supa-menu-backend.onrender.com/api',
    timeout: 1000000,
});

export default apiClient;
