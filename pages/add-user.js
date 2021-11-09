import React from "react";
import Header from "../components/layout/Header";

export default function AddUser() {
  return (
    <div className="content-wrapper">
      <Header headerValue="Add User" />
      <div className="row">
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Add User</h4>
              {/* <p className="card-description"> Basic form layout </p> */}
              <form className="forms-sample">
                <div className="form-group">
                  <label for="Name1">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Name1"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label for="Email1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email1"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label for="Phone1">Phone Number</label>
                  <input
                    type="Phone"
                    className="form-control"
                    id="Phone1"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-group">
                  <label for="Password1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="Password1"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-gradient-primary mr-2">
                  Add User
                </button>
                <button type="reset" className="btn btn-light">Clear</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
