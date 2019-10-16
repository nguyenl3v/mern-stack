import {
  ADDSLIDESHOW,
  GETSLIDESHOW,
  DELETESLIDESHOW,
  EDITSLIDESHOW,
  UPLOAD
} from "./constants";

export const addSlideShow = (heading, title, button, buttonLink) => ({
  type: ADDSLIDESHOW,
  payload: {
    heading,
    title,
    button,
    buttonLink
  }
});
export const _getSlideShow = data => ({
  type: GETSLIDESHOW,
  payload: {
    data
  }
});
export const deleteSlideShow = (id, file) => ({
  type: DELETESLIDESHOW,
  payload: {
    id,
    file
  }
});
export const _editSlideShow = (
  heading,
  title,
  button,
  buttonLink,
  urlFile,
  id
) => ({
  type: EDITSLIDESHOW,
  payload: {
    heading,
    title,
    button,
    buttonLink,
    urlFile,
    id
  }
});

export const upload = image => ({
  type: UPLOAD,
  payload: {
    image
  }
});
