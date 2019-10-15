import React from "react";
import { MenuRow } from "../menu/style";
import { connect } from "react-redux";
import Plyr from "react-plyr";
import { API } from "../../../config/Axios";
import { deleteSlideShow } from "../../../resources/slideshow/action";
import { ToastContainer } from "react-toastify";

function SlideShow({ dataSlideShow, deleteSlideShow }) {
  const { data } = dataSlideShow;
  const _deleteSlideShow = (e, id) => {
    e.preventDefault();
    deleteSlideShow(id);
  };
  return (
    <div className="adm-Slideshow">
      <MenuRow>
        <h2>Admin SlideShow</h2>
        <a href="/admin/slideshow/add" className="btn btn-primary">
          Add To Slideshow
        </a>
      </MenuRow>
      <ToastContainer autoClose={2000} />
      <table className="table table-striped">
        <thead className="thead-inverse">
          <tr>
            <th>heading</th>
            <th>title</th>
            <th>image</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.heading}</td>
              <td>{item.title}</td>
              <td>
                {item.image.match(/\.(mp4)$/) ? (
                  <div style={{ width: 150 }}>
                    <Plyr
                      type="video"
                      sources={[
                        {
                          src: ` ${API}/slideshow/${item._id}/${item.image}`,
                          type: "video/mp4",
                          size: "1440",
                          kind: "captions",
                          label: "English",
                          srclang: "en"
                        }
                      ]}
                    />
                  </div>
                ) : (
                  <img style={{ width: 50 }} src={item.image} alt="imageADM" />
                )}
              </td>
              <td>
                <a href="/admin/menu/edit/">
                  <i className="fa fa-pencil-square-o pr-1" />
                  edit
                </a>
              </td>
              <td>
                <a
                  href={"/admin/menu/" + item._id}
                  onClick={e => _deleteSlideShow(e, item._id)}
                >
                  <i className="fa fa-trash-o pr-1" />
                  delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const mapStateToProps = state => ({
  dataSlideShow: state.slideShow
});
export default connect(
  mapStateToProps,
  { deleteSlideShow }
)(SlideShow);
