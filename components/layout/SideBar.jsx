import React from 'react'

export default function SideBar() {
    return (
        <div>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item nav-profile">
                        <a href="#" className="nav-link">
                            <div className="nav-profile-image">
                                <img src="images/faces/face1.jpg" alt="profile" />
                                <span className="login-status online"></span>
                            </div>
                            <div className="nav-profile-text d-flex flex-column">
                                <span className="font-weight-bold mb-2">David Grey. H</span>
                                <span className="text-secondary text-small">Project Manager</span>
                            </div>
                            <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/dashboard">
                            <span className="menu-title">Dashboard</span>
                            <i className="mdi mdi-home menu-icon"></i>
                        </a>
                    </li>
                    <li className="nav-item sidebar-actions">
                        <span className="nav-link">
                            <div className="border-bottom">
                                <h6 className="font-weight-normal mb-3">Users Management</h6>
                            </div>
                        </span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/all-users">
                            <span className="menu-title">All Users</span>
                            <i className="mdi mdi-view-list menu-icon"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span className="menu-title">Add User</span>
                            <i className="mdi mdi-playlist-check menu-icon"></i>
                        </a>
                    </li>
                    <li className="nav-item sidebar-actions">
                        <span className="nav-link">
                            <div className="border-bottom">
                                <h6 className="font-weight-normal mb-3">Category Management</h6>
                            </div>
                        </span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/all-categories">
                            <span className="menu-title">All Categories</span>
                            <i className="mdi mdi-view-list menu-icon"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">
                            <span className="menu-title">Add Category</span>
                            <i className="mdi mdi-plus-box menu-icon"></i>
                        </a>
                    </li>
                    <li className="nav-item sidebar-actions">
                        <span className="nav-link">
                            <div className="border-bottom">
                                <h6 className="font-weight-normal mb-3">Product Management</h6>
                            </div>
                        </span>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="all-products">
                            <span className="menu-title">All Products</span>
                            <i className="mdi mdi-account-multiple menu-icon"></i>
                        </a>
                    </li>
                   
                    <li className="nav-item">
                        <a className="nav-link" href="">
                            <span className="menu-title">Add Product</span>
                            <i className="mdi mdi-plus-box menu-icon"></i>
                        </a>
                    </li>
                    <li className="nav-item sidebar-actions">
                        <span className="nav-link">
                            <div className="border-bottom">
                                <h6 className="font-weight-normal mb-3">Sales Management</h6>
                            </div>
                        </span>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/all-sales">
                            <span className="menu-title">All Sales</span>
                            <i className="mdi mdi-account-multiple menu-icon"></i>
                        </a>
                    </li>

                    <li className="nav-item sidebar-actions">
                        <span className="nav-link">
                            <div className="border-bottom">
                                <h6 className="font-weight-normal mb-3">Workers Management</h6>
                            </div>
                        </span>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/all-workers">
                            <span className="menu-title">All Workers</span>
                            <i className="mdi mdi-account-multiple menu-icon"></i>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="">
                            <span className="menu-title">Add Worker</span>
                            <i className="mdi mdi-plus-box menu-icon"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}