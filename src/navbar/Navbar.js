import React from 'react';
import "./Navbar.css"

const Navbar = (props) => {
    return (
        <div className='shadow-sm'>
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
                    <div>
                        <a className="navbar-brand fw-bolder" href="/navbar">Super Power Gun Store</a>
                    </div>
                    <form className="d-flex">
                        <div>
                            <i className="fa-solid fa-cart-shopping">
                                <small className='count'> {props.count} </small>
                            </i>
                        </div>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;