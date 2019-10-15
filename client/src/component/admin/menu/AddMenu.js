import React from "react";
import { MenuRow } from "./style";
import { connect } from "react-redux";
import { addListDataSuccess } from "../../../resources/adminMenu/action";
import { ToastContainer } from "react-toastify";

function AddMenu({ addListDataSuccess }) {
  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");
  const saveAddMenu = e => {
    e.preventDefault();
    addListDataSuccess(title, link);
  };
  return (
    <div className="container">
      <ToastContainer autoClose={2000} />
      <MenuRow>
        <h2>Add Menu</h2>
        <a href="/admin/menu" className="btn btn-primary">
          Back To Menu
        </a>
      </MenuRow>
      <form method="post" onSubmit={e => saveAddMenu(e)}>
        <div className="form-group">
          <label>title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the title you want to add"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>link</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the link you want to add"
            onChange={e => setLink(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          save add
        </button>
      </form>
    </div>
  );
}
const mapStateToProps = state => ({
  data: state.adminMenu.dataMenuName
});
export default connect(
  mapStateToProps,
  { addListDataSuccess }
)(AddMenu);
