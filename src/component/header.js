import React, { Component } from 'react'

class Header extends Component {

    render(){
        return(
            <div className="container-fluid">
            <div class="row tm-brand-row">
                <div class="col-lg-4 col-10">
                <div class="tm-brand-container">
                    <div class="tm-brand-texts">
                    <h1 class="text-uppercase tm-brand-name">Next Level</h1>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-8 col-2 tm-nav-col">
                <div className="tm-nav">
                    <nav className="navbar navbar-expand-lg navbar-light tm-navbar">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto mr-0">
                                <li className="nav-item active">
                                    <div className="tm-nav-link-highlight"></div>
                                    <a className="nav-link" href="#"
                                    >Home <span className="sr-only">(current)</span></a
                                    >
                                </li>
                                <li className="nav-item">
                                    <div className="tm-nav-link-highlight"></div>
                                    <a className="nav-link" href="about.html">About</a>
                                </li>
                                <li className="nav-item">
                                    <div className="tm-nav-link-highlight"></div>
                                    <a className="nav-link" href="gallery.html">Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <div className="tm-nav-link-highlight"></div>
                                    <a className="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        )
    }
}

export default Header
