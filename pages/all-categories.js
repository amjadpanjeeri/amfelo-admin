import React from "react";
import Header from "../components/layout/Header";

export default function AllCategories() {
  return (
    <div className="content-wrapper">
      <Header headerValue="All Categories" />
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">All Categories</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th> # </th>
                      <th>Category Name </th>
                      <th>Description </th>
                      <th>Image </th>
                      <th>Added by </th>
                      <th>Created Date </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> 1 </td>
                      <td> Hampers </td>
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Cras adipiscing enim eu turpis egestas.
                        Dignissim sodales ut eu sem. Feugiat nisl pretium fusce
                        id velit ut tortor pretium viverra.
                      </td>
                      <td>
                        <img src="https://media.istockphoto.com/photos/gift-basket-on-gray-background-picture-id1169632374?k=20&m=1169632374&s=612x612&w=0&h=PjN-bVLOYsLg11Bq0DNzE-zrk6hZyejxdEB7Hq4ObvY="></img>
                      </td>
                      <td>amjadpanjeeri@gmail.com</td>
                      <td> May 15, 2015 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
