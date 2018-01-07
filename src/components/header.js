import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortingCatalog } from '../actions';


class Header extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-inverse bg-inverse">
                <span className="text-white" href="#">Wallapop Frontend Test</span>
                <span className="text-white ml-2" onClick={() => this.props.sortingCatalog('price')}>price</span>
            </nav>
        );
    }
}

export default connect(null, { sortingCatalog })(Header)
