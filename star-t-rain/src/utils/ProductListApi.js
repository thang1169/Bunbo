import axiosClient from "./AxiosDB";
const ProductListApi = {
    getAll: (params) => {
        const url = "/Products";
        return axiosClient.get(url, {
            params,
            paramsSerializer: {
                indexes: null, // by default: false
            },
        });
    },
    getProductDetail: (id) => {
        const url = `/Products/${id}`;
        return axiosClient.get(url);
    },
};
export default ProductListApi;