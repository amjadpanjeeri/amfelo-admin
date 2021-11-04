import React from 'react'

export default function Header({headerValue}) {
    return (
        <div className="page-header mt-5">
            <h3 className="page-title">
                <span className="page-title-icon bg-gradient-primary text-white mr-2">
                    <i className="mdi mdi-home"></i>
                </span> {headerValue} </h3>
        </div>
    )
}