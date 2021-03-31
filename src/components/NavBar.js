import React from 'react';

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">UserListing</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <span className="nav-link active" aria-current="page">Home</span>
                        <span className="nav-link">About</span>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default NavBar;