import React from "react";
import Header from "../components/layout/Header";

export default function AllWorkers() {
  return (
    <div className="content-wrapper">
      <Header headerValue="All Workers" />
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">All Workers</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th> # </th>
                      <th> Name </th>
                      <th> Email </th>
                      <th>Phone Number</th>
                      <th>Works</th>
                      <th> Added time </th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> 1 </td>
                      <td> Herman Beck </td>
                      <td>herman@gmail.com</td>
                      <td>9876543210</td>
                      <td>Explosion Box, Gift Bix, Bottles</td>
                      <td> May 15, 2015 </td>
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
