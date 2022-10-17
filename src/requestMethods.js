import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDliOGEyMGU4NDk5Mzc0YmQxOWYwNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjAzMzQ5OSwiZXhwIjoxNjY2MjkyNjk5fQ.SDgaXzJTye--q2x08c4E6BXaUycihCXMffwYV35d1hE";

export const publicRequest = axios.create({
    baseURL:BASE_URL,

});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});
