import React from "react";
import Header from "../components/layout/Header";

export default function AllProducts() {
  return (
    <div className="content-wrapper">
      <Header headerValue="All Products" />
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">All Products</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th> # </th>
                      <th> Name </th>
                      <th> Description </th>
                      <th> Category </th>
                      <th> Contents </th>
                      <th> Image </th>
                      <th> Price </th>
                      <th> Added By </th>
                      <th> Time Stamp </th>
                      <th> Occasions </th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> 1 </td>
                      <td> Chocolate hamper </td>
                      <td>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Cras adipiscing enim eu turpis egestas.
                        Dignissim sodales ut eu sem. Feugiat nisl pretium fusce
                        id velit ut tortor pretium viverra.{" "}
                      </td>
                      <td> Hamper </td>
                      <td> Kitkat, DiaryMilk, Silk </td>
                      <td>
                        <img src="https://m.media-amazon.com/images/I/71QsFY7S-RL._AC_UL320_.jpg"></img>
                      </td>
                      <td> 1500 </td>
                      <td> amjadpanjeeri@gmail.com </td>
                      <td> May 15, 2015 </td>
                      <td> Engagement, Birthday </td>
                      <td>
                        <button
                          type="button"
                          class="btn mr-1 btn-outline-primary btn-sm"
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          class="btn btn-outline-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
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
