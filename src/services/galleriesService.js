import { API } from "./api";

export const getGalleries = (params) => {
  return API.get(`/galleries`, { params });
};
export const postGallery = (name, description, urls, user_id) => {
  return API.post("/galleries", {
    name,
    description,
    urls,
    user_id,
  });
};
export const getGalleryById = (id) => {
  return API.get(`/galleries/${id}`);
};
