import React from "react";

export default function Navigation() {
  return (
    <div className="vertical">
      <h2 className="text-white py-5">CMS ADMIN</h2>
      <ul>
        <li>
          <i className="fa fa-bars mr-3"></i>
          <a href="/admin/menu">menu</a>
        </li>
        <li>
          <i className="fa fa-bars mr-3"></i>
          <a href="/admin/categories">categories</a>
        </li>
        <li>
          <i className="fa fa-bars mr-3"></i>
          <a href="/admin/slideshow">slideShow</a>
        </li>
      </ul>
    </div>
  );
}
