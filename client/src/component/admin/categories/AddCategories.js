import React, { useState } from "react";
import { MenuRow } from "../menu/style";
import { addCategories } from "../../../resources/adminCategories/action";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";

function AddCategories({ addCategories }) {
  const [name, setName] = useState("");
  const saveAddCategories = e => {
    e.preventDefault();
    addCategories(name);
  };
  return (
    <div className="container">
      <ToastContainer autoClose={2000}/>
      <MenuRow>
        <h2>Add Categories</h2>
        <a href="/admin/categories" className="btn btn-primary">
          Back To Categories
        </a>
      </MenuRow>
      <form method="post" onSubmit={e => saveAddCategories(e)}>
        <div className="form-group">
          <label>name</label>
          <input
            type="text"
            className="form-control"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Add Categories
        </button>
      </form>
    </div>
  );
}
export default connect(
  null,
  { addCategories }
)(AddCategories);
