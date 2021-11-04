import React from "react";
import Header from "../components/layout/Header";

export default function Dashboard() {
  return (
    <div className="content-wrapper">
      <Header headerValue="Dashboard" />
      <div className="row">
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-danger card-img-holder text-white">
            <div className="card-body">
              <img
                src="images/dashboard/circle.svg"
                className="card-img-absolute"
                alt="circle-image"
              />
              <h4 className="font-weight-normal mb-3">
                Total Orders{" "}
                <i className="mdi mdi-chart-line mdi-24px float-right"></i>
              </h4>
              <h2 className="mb-5">150</h2>
              {/* <h6 className="card-text">Increased by 60%</h6> */}
            </div>
          </div>
        </div>
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-info card-img-holder text-white">
            <div className="card-body">
              <img
                src="images/dashboard/circle.svg"
                className="card-img-absolute"
                alt="circle-image"
              />
              <h4 className="font-weight-normal mb-3">
                Not Assigned Orders{" "}
                <i className="mdi mdi-close mdi-24px float-right"></i>
              </h4>
              <h2 className="mb-5">10</h2>
              {/* <h6 className="card-text">Decreased by 10%</h6> */}
            </div>
          </div>
        </div>
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-success card-img-holder text-white">
            <div className="card-body">
              <img
                src="images/dashboard/circle.svg"
                className="card-img-absolute"
                alt="circle-image"
              />
              <h4 className="font-weight-normal mb-3">
                Assigned Orders{" "}
                <i className="mdi mdi-check mdi-24px float-right"></i>
              </h4>
              <h2 className="mb-5">95</h2>
              {/* <h6 className="card-text">Increased by 5%</h6> */}
            </div>
          </div>
        </div>
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-success card-img-holder text-white">
            <div className="card-body">
              <img
                src="images/dashboard/circle.svg"
                className="card-img-absolute"
                alt="circle-image"
              />
              <h4 className="font-weight-normal mb-3">
                Completed Orders{" "}
                <i className="mdi mdi-check-all mdi-24px float-right"></i>
              </h4>
              <h2 className="mb-5">95</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
