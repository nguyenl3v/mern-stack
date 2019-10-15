import { ADDSLIDESHOW, GETSLIDESHOW, DELETESLIDESHOW } from "./constants";

export const addSlideShow = (heading, title, button, buttonLink, image) => ({
  type: ADDSLIDESHOW,
  payload: {
    heading,
    title,
    button,
    buttonLink,
    image
  }
});
export const _getSlideShow = data => ({
  type: GETSLIDESHOW,
  payload: {
    data
  }
});
export const deleteSlideShow = id => ({
  type: DELETESLIDESHOW,
  payload: {
    id
  }
});
