
import { axiosAuth } from "../lib/axios";
// import { toast } from "react-toastify";

const axiosClient = axiosAuth.create({
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

axiosClient.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("access_token"); // ("access_token") thay doi ten trong localStorage.
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    async (response) => {
        if (response && response.data) return response.data;
        return response;
    },
    async (error) => {
        if (error.response.status === 401) {
            localStorage.clear();
            // toast.warning("access token expires !");
            window.location.href = "/login-page"; //"/login-page" day sang trang login
        }

        return Promise.reject(error);
    }
);

export default axiosClient;