import axiosClient from "./AxiosDB";

const AuthApi = {
    login: (payload) => {
        const url = "/Auth/signin"; // url login
        return axiosClient.post(url, payload);
    },
    register: (payload) => {
        const url = "/Auth/signup"; // url register
        return axiosClient.post(url, payload);
    },
    ///// ==== thieu j them vao`
    logout: (refreshToken) => {
        const url = "/auth/logout"; // url logout
        return axiosClient.post(url, refreshToken);
    },
    validation: () => {
        const url = "/auth/validation"; // url xac thuc
        return axiosClient.post(url);
    },

    update_password: (data) => {
        const url = "/users/profile/update_password"; // url update password
        return axiosClient.put(url, data);
    },

};
export default AuthApi;