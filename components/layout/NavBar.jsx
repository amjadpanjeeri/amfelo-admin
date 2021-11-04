import React from 'react'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    <a className="navbar-brand brand-logo" href="" ><img style={{height:"35px"}} src="images/logo.png" alt="logo" /></a>
                    <a className="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg" alt="logo" /></a>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-stretch">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                        <span className="mdi mdi-menu"></span>
                    </button>
                    <div className="search-field d-none d-md-block">
                        <form className="d-flex align-items-center h-100" action="#">
                            <div className="input-group">
                                <div className="input-group-prepend bg-transparent">
                                    <i className="input-group-text border-0 mdi mdi-magnify"></i>
                                </div>
                                <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects" />
                            </div>
                        </form>
                    </div>
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item nav-profile dropdown">
                            <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                                <div className="nav-profile-img">
                                    <img src="images/faces/face1.jpg" alt="image" />
                                    <span className="availability-status online"></span>
                                </div>
                                <div className="nav-profile-text">
                                    <p className="mb-1 text-black">David Greymaax</p>
                                </div>
                            </a>
                            <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                                <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-cached mr-2 text-success"></i> Activity Log </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-logout mr-2 text-primary"></i> Signout </a>
                            </div>
                        </li>
                        <li className="nav-item d-none d-lg-block full-screen-link">
                            <a className="nav-link">
                                <i className="mdi mdi-fullscreen" id="fullscreen-button"></i>
                            </a>
                        </li>
                         <li className="nav-item nav-logout d-none d-lg-block">
                            <a className="nav-link" href="#">
                                <i className="mdi mdi-power"></i>
                            </a>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="mdi mdi-menu"></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}