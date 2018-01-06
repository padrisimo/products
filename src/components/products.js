import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCatalog } from '../actions';


class Products extends Component {
    
    componentWillMount () {
        this.props.fetchCatalog();        
    }
    
    render() {
        const { items, isfetched } = this.props;
        
        if(!isfetched) {
          return <div>loading...</div>
        }
    
        return (
            <div className="card-deck">
                { items.map( (item, index) => (
                    <div className="card" key={index}>
                        <img 
                            className="card-img-top" 
                            src={"../../assets/" + item.image}
                            />
                    </div>
                ) ) }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.catalog.items,
    isfetched: state.catalog.isfetched
  });

export default connect(mapStateToProps, { fetchCatalog })(Products)