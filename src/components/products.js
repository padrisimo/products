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
            <div className="catalog">
                { items.map( (item, index) => (
                    <div className="cardwrap mt-3" key={index}>
                    <div className="card">
                        <img 
                            className="card-img-top" 
                            src={`../../assets/${item.image}`}
                            />
                        <div className="card-block">
                            <h4 className="card-title">{item.title}</h4>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text">
                                <small className="text-muted">{item.email}</small>
                            </p>
                            <span className="btn btn-primary">{item.price} €</span>
                        </div>
                    </div>
                    </div>
                ) ) }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: [].concat(state.catalog.items).sort((a, b) => {
        if (parseInt(b.price) > parseInt(a.price)) {
            return -1
        }
        if (parseInt(b.price) < parseInt(a.price)) {
            return 1
        }
    }),
    isfetched: state.catalog.isfetched
  });

export default connect(mapStateToProps, { fetchCatalog })(Products)