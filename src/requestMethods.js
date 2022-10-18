import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDliOGEyMGU4NDk5Mzc0YmQxOWYwNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjA5NTc2MSwiZXhwIjoxNjY2MzU0OTYxfQ.3nDBMswLQOc8wYvmbHD6q371JoJwqCghz7V4Crg07jw";

export const publicRequest = axios.create({
    baseURL:BASE_URL,

});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});
