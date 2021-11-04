import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Footer from './Footer'
// import Dashboard from '../../pages/dashboard'

export default function Layout({ children }) {
    return (
        <div className="container-scroller">
            <NavBar />
            <div className="container-fluid page-body-wrapper">
                <SideBar />
                <div className="main-panel">
                    <main>
                        {children}
                        <Footer />
                    </main>
                </div>
            </div>
        </div>
    )
}