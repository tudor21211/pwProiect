import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDliOGEyMGU4NDk5Mzc0YmQxOWYwNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjEwMTM0NSwiZXhwIjoxNjY2MzYwNTQ1fQ.hq366yRqMz5E9PDy_CF4St2KojFsMek6PjZ18ViObpo";

export const publicRequest = axios.create({
    baseURL:BASE_URL,

});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});
