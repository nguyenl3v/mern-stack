import React from "react";
import Menu from "./menu/Menu";
import Vertical from "./verticalMenu/Vertical";
import { Route, Switch } from "react-router-dom";
import Edit from "./menu/Edit";
import Categories from "./categories/Categories";
import AddMenu from "./menu/AddMenu";
import AddCategories from "./categories/AddCategories";
import EditCategories from "./categories/EditCategories";
import SlideShow from "./slideshow/SlideShow";
import AddSLideShow from "./slideshow/AddSLideShow";
import EditSlideShow from "./slideshow/EditSlideShow";

function Admin() {
  return (
    <div className="cms-admin">
      <div className="row mx-0">
        <div className="col-3">
          <Switch>
            <Route path="/admin" exact component={Vertical} />
            <Route path="/admin/menu" exact component={Vertical} />
            <Route path="/admin/categories" exact component={Vertical} />
            <Route path="/admin/slideshows" exact component={Vertical} />
          </Switch>
        </div>
        <div className="col-9">
          <Switch>
            <Route path="/admin/menu" exact component={Menu} />
            <Route path="/admin/categories" exact component={Categories} />
            <Route path="/admin/slideshows" exact component={SlideShow} />
          </Switch>
        </div>
        <div className="col-12">
          <Route path="/admin/menu/edit/:id" exact component={Edit} />
          <Route path="/admin/menu/add" exact component={AddMenu} />
          <Route path="/admin/categories/add" exact component={AddCategories} />
          <Route path="/admin/categories/edit/:id" exact component={EditCategories} />
          <Route path="/admin/slideshows/add" exact component={AddSLideShow} />
          <Route path="/admin/slideshows/edit/:id" exact component={EditSlideShow} />
        </div>
      </div>
    </div>
  );
}
export default Admin;
