import React, { useState } from "react";
import { connect } from "react-redux";
import { _editCategories } from "../../../resources/adminCategories/action";
import { MenuRow } from "../menu/style";
import { ToastContainer } from "react-toastify";

function EditCategories({ match, cate, _editCategories }) {
  const { id } = match.params;
  const { data } = cate;
  const filterData = data.length > 0 ? data.find(item => item._id === id) : "";
  const [name, setName] = useState("");
  const saveEditCategories = e => {
    e.preventDefault();
    _editCategories(name, id);
  };
  return (
    <div className="container">
      <MenuRow>
        <h2>Edit Categories</h2>
        <a href="/admin/categories" className="btn btn-primary">
          Back To Categories
        </a>
      </MenuRow>
      <ToastContainer autoClose={2000} />
      <form method="posst" onSubmit={e => saveEditCategories(e)}>
        <div className="form-group">
          <label>name</label>
          <input
            type="text"
            className="form-control"
            defaultValue={filterData.name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          save Edit Categories
        </button>
      </form>
    </div>
  );
}
const mapStateToProps = state => ({
  cate: state.adminCategories
});
export default connect(
  mapStateToProps,
  { _editCategories }
)(EditCategories);
