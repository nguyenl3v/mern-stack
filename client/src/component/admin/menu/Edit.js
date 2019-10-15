import React, { useState } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import {editListDataSuccess} from "../../../resources/adminMenu/action";

function Edit({ dataMenu, match, editListDataSuccess }) {
  const { data } = dataMenu.dataListMenu;
  const { id } = match.params;
  const filterData =
  data ? data.find(item => item._id === id) : null;
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const saveEdit = e => {
    e.preventDefault();
    editListDataSuccess(title, link, id);
  };
  return (
    <div className="container pt-5">
      <a href="/admin/menu" className="btn btn-primary">Back To Menu</a>
      <ToastContainer autoClose={2000} />
      <form method="post" onSubmit={e => saveEdit(e)}>
        <div className="form-group">
          <label>title</label>
          <input
            type="text"
            className="form-control"
            onChange={e => setTitle(e.target.value)}
            defaultValue={filterData && filterData.title}
          />
        </div>
        <div className="form-group">
          <label>link</label>
          <input
            type="text"
            className="form-control"
            onChange={e => setLink(e.target.value)}
            defaultValue={filterData && filterData.link}
          />
        </div>
        <button type="submit" className="btn btn-success">
          save edit
        </button>
      </form>
    </div>
  );
}
const mapstateToProps = state => ({
  dataMenu: state.adminMenu
});
export default connect(
  mapstateToProps,
  {editListDataSuccess}
)(Edit);
