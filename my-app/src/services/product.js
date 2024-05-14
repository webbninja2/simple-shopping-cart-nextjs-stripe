import APIClient from "./apiClient";

const productApi = {
  getAllProduct: function () {
    return APIClient.get("/products");
  },

  getSingleProduct: function (id) {
    return APIClient.get(`/products/${id}`);
  },
};

export default productApi;
