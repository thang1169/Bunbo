import axiosClient from "./AxiosDB";
const RestaurantsApi = {
    getAll: (params) => {
        const url = "/Restaurants";
        return axiosClient.get(url, {
            params,
            paramsSerializer: {
                indexes: null, // by default: false
            },
        });
    },
};
export default RestaurantsApi;