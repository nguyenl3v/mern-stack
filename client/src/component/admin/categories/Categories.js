import React from "react";
import { MenuRow } from "../menu/style";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import {_deleteCategories} from "../../../resources/adminCategories/action";

function Categories({ cate, _deleteCategories }) {
  const { data } = cate;
  const deleteData = (e, id) =>{
    e.preventDefault();
    _deleteCategories(id)
  }
  return (
    <div className="adm-categories">
      <MenuRow>
        <h2>Categories</h2>
        <a className="btn btn-primary" href="/admin/categories/add">
          Add Categories
        </a>
      </MenuRow>
      <ToastContainer autoClose={2000} />
      <div className="table-menu">
        <table className="table table-striped">
          <thead className="thead-inverse">
            <tr>
              <th>name</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <a href={"/admin/categories/edit/" + item._id}>
                      <i className="fa fa-pencil-square-o pr-1" />
                      edit
                    </a>
                  </td>
                  <td>
                    <a
                      href="/admin/categories/"
                      onClick={e => deleteData(e, item._id)}
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
    </div>
  );
}
const mapStateToProps = state => ({
  cate: state.adminCategories
});
export default connect(
  mapStateToProps,
  {_deleteCategories}
)(Categories);
