import React from "react";
import { MenuRow } from "./style";
import { connect } from "react-redux";
import {deleteListDataSuccess} from "../../../resources/adminMenu/action";
import { ToastContainer } from "react-toastify";

function ListMenu({ dataMenu, deleteListDataSuccess}) {
  const { data } = dataMenu.dataListMenu;
  const deleteData = (e,id) =>{
    e.preventDefault();
    deleteListDataSuccess(id);
  }
  return (
    <div>
      <MenuRow>
        <h2>Builder</h2>
        <a className="btn btn-primary" href="/admin/menu/add">
          Add Menu
        </a>
      </MenuRow>
      <ToastContainer autoClose={2000}/>
      <div className="table-menu">
        <table className="table table-striped">
          <thead className="thead-inverse">
            <tr>
              <th>title</th>
              <th>path</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.link}</td>
                  <td>
                    <a href={"/admin/menu/edit/" + item._id}>
                      <i className="fa fa-pencil-square-o pr-1" />
                      edit
                    </a>
                  </td>
                  <td>
                    <a href="/admin/menu/" onClick={(e)=> deleteData(e,item._id)}>
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
  dataMenu: state.adminMenu
});
export default connect(
  mapStateToProps,
  {deleteListDataSuccess}
)(ListMenu);
