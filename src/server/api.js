import axios from 'axios'

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';

const api = axios.create({
    baseURL: "http://localhost:8080/",
})

export default api