import React, { useState } from "react";
import { MenuRow } from "../menu/style";
import { ToastContainer } from "react-toastify";
import { addSlideShow, upload } from "../../../resources/slideshow/action";
import { connect } from "react-redux";

function AddSLideShow({ addSlideShow, upload }) {
  const [heading, setHeading] = useState("");
  const [title, setTitle] = useState("");
  const [button, setbutton] = useState("");
  const [buttonLink, setButtonLink] = useState("");
  const uploadSlide = files => {
    let data = new FormData();
    data.append("file", files[0]);
    upload(data);
  };
  const saveAddSlideShow = async e => {
    e.preventDefault();
    addSlideShow(heading, title, button, buttonLink);
  };
  return (
    <div className="container">
      <MenuRow>
        <h2>Add SlideShow</h2>
        <a href="/admin/slideshows" className="btn btn-primary">
          Back To Slideshow
        </a>
      </MenuRow>
      <ToastContainer autoClose={2000} />
      <form method="post" onSubmit={e => saveAddSlideShow(e)}>
        <div className="form-group">
          <label>heading</label>
          <input
            type="text"
            className="form-control"
            placeholder="heading"
            onChange={e => setHeading(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>title</label>
          <input
            type="text"
            className="form-control"
            placeholder="title"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>button name</label>
          <input
            type="text"
            className="form-control"
            placeholder="button"
            onChange={e => setbutton(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>buttonLink</label>
          <input
            type="text"
            className="form-control"
            placeholder="buttonLink"
            onChange={e => setButtonLink(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>image or video</label>
          <input
            type="file"
            className="form-control"
            placeholder="image or video"
            onChange={e => uploadSlide(e.target.files)}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Save Add SlideShow
        </button>
      </form>
    </div>
  );
}
export default connect(
  null,
  { addSlideShow, upload }
)(AddSLideShow);
