import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-inverse bg-inverse">
                <a className="navbar-brand" href="#">Wallapop Frontend Test</a>
            </nav>
        );
    }
}

export default Header;