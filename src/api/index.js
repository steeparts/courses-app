import axios from 'axios';

const axiosRequester = axios.create({
    baseURL: 'http://krapipl.imumk.ru:8082/api/mobilev1/',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export const coursesAPI = {
    getCourses() {
        return axiosRequester.post('update').then(response => response.data.items);
    }
};
