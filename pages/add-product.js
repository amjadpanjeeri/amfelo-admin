import React from "react";
import Header from "../components/layout/Header";

export default function AddProduct() {
  return (
    <div className="content-wrapper">
      <Header headerValue="Add Product" />
      <div className="row">
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Add Product</h4>
              {/* <p className="card-description"> Basic form layout </p> */}
              <form className="forms-sample">
                <div className="form-group">
                  <label for="Name1">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Name1"
                    placeholder="Product Name"
                  />
                </div>
                <div className="form-group">
                  <label for="xampleTextarea1">Description</label>
                  <textarea
                    className="form-control"
                    id="xampleTextarea1"
                    rows="4"
                    placeholder="Description"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="xampleFormControlSelect3">Category</label>
                  <select
                    class="form-control form-control-sm"
                    id="xampleFormControlSelect3"
                  >
                    <option>Hamper</option>
                    <option>Hoop</option>
                    <option>Bottle</option>
                    <option>Gift Box</option>
                    <option>Explosion box</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="Contents1">Product Contents</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Contents1"
                    placeholder="Product Contents"
                  />
                </div>
                <div className="form-group">
                  <label for="Price1">Product Price</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Price1"
                    placeholder="Product Price"
                  />
                </div>
                <div className="form-group">
                  <label for="Occasion1">Product Occasion</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Occasion1"
                    placeholder="Product Occasion"
                  />
                </div>
                <div className="form-group">
                  <label>Product Image</label>
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
                  Add Product
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
