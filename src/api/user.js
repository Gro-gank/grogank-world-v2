import axiosApi from ".";

export const getUserApi = (email) => {
  return axiosApi.get(`/users?email=${email}`);
};
export const registerApi = (data) => {
  return axiosApi.post("/users", data);
};
export const getPersonalApi = (email) => {
  return axiosApi.get(`/userItem?email=${email}`);
};
export const createPersionalApi = (dataPersional) => {
  return axiosApi.post("/userItem", dataPersional);
};
export const paymentApi = (data) => {
  const userId = data.userId;
  return axiosApi.put(`/userItem/${userId}`, data);
};
export const updateCartApi = (data) => {
  const userId = data.userId;

  return axiosApi.put(`/userItem/${userId}`, data);
};
export const updateProfileApi = (data) => {
  console.log(data);
  const userId = data.userId;
  return axiosApi.put(`/users/${userId}`, data);
};
export const deleteCartApi = (data) => {
  const userId = data.userId;
  return axiosApi.put(`/userItem/${userId}`, data);
};
