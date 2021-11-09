import React from "react";
import Header from "../components/layout/Header";

export default function AddCategory() {
  return (
    <div className="content-wrapper">
      <Header headerValue="Add Category" />
      <div className="row">
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Add Category</h4>
              {/* <p className="card-description"> Basic form layout </p> */}
              <form className="forms-sample">
                <div className="form-group">
                  <label for=" Name1">Category Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id=" Name1"
                    placeholder="Category Name"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleTextarea1">Description</label>
                  <textarea
                    className="form-control"
                    id="exampleTextarea1"
                    rows="4"
                    placeholder="Description"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>File upload</label>
                  <input
                    type="file"
                    name="img[]"
                    className="file-upload-default"
                  />
                  <div className="input-group col-xs-12">
                    <input
                      type="file"
                      className="form-control file-upload-info"
                      placeholder="Upload Image"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-gradient-primary mr-2">
                  Add Category
                </button>
                <button type="reset" className="btn btn-light">
                  Clear
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
