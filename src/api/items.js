import axiosApi from ".";

export const getAllItemApi = () => {
  return axiosApi.get("/item");
};
export const getItemDetailApi = (itemId) => {
  return axiosApi.get(`/item?itemId=${itemId}`);
};
export const getItembySearchApi = (value) => {
  return axiosApi.get(`/item?name=${value}`);
};
export const getItembyCategoryApi = (value) => {
  return axiosApi.get(`/item?categoryId=${value}`);
};

export const getSaleItemApi = () => {
  return axiosApi.get("/item?isSale=true");
};
export const getItemCommentApi = (itemId) => {
  return axiosApi.get(`/rate?itemId=${itemId}`);
};
export const addReviewApi = (data) => {
  return axiosApi.post("/rate", data);
};

export const addReviewtoItem = (data) => {
  const id = data.itemId;
  const lastRate = data.rate;
  const newReview = {
    rate: lastRate,
  };
  return axiosApi.put(`/item/${id}`, newReview);
};
export const viewCountApi = (item) => {
  item.view = parseInt(item.view) + 1;
  return axiosApi.put(`/item/${item.itemId}`, item);
};
