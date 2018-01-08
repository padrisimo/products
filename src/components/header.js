import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortingCatalog } from '../actions';


class Header extends Component {
    render() {
        return (
            <ul className="nav fixed-top justify-content-center navbar-inverse bg-inverse">
                <li className="nav-item">
                    <span 
                        onClick={() => this.props.sortingCatalog('price')} 
                        className="nav-link text-white">
                            <i className="fa fa-dollar" aria-hidden="true"></i>
                    </span>
                </li>
                <li className="nav-item">
                    <span 
                        onClick={() => this.props.sortingCatalog('title')} 
                        className="nav-link text-white">
                            <i className="fa fa-header" aria-hidden="true"></i>
                    </span>
                </li>
                <li className="nav-item">
                    <span 
                        onClick={() => this.props.sortingCatalog('description')} 
                        className="nav-link text-white">
                            <i className="fa fa-file-text-o" aria-hidden="true"></i>
                    </span>
                </li>
                <li className="nav-item">
                    <span 
                        onClick={() => this.props.sortingCatalog('email')} 
                        className="nav-link text-white">
                         <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </li>

                <li className="nav-item">
                    <span
                        onClick={() => this.props.sortingCatalog('')} 
                        className="nav-link text-white">
                            <i className="fa fa-exchange" aria-hidden="true"></i>
                    </span>
                </li>
            </ul>
        );
    }
}

export default connect(null, { sortingCatalog })(Header)
