import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCatalog } from '../actions';


class Products extends Component {
    
    componentWillMount () {
        this.props.fetchCatalog();        
    }
    
    render() {
        return (
            <div>
                yea
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.catalog.items,
    isfetched: state.catalog.isfetched
  });

export default connect(mapStateToProps, { fetchCatalog })(Products)