import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCatalog, sortingCatalog, favLove, unFav } from '../actions';
import FavsModal from './favs_modal';

class Products extends Component {

    componentWillMount() {
        this.props.fetchCatalog();
    }

    inLove(index){
        if(this.props.favs.includes(index)){
            this.props.unFav(index);
        } else {
            this.props.favLove(index);
        }
    }

    render() {
        const { items, isfetched, favs, lovedone } = this.props;

        if (!isfetched) {
            return <div>loading...</div>
        }

        return (
            <div className="catalog d-flex  justify-content-center flex-wrap">
                <FavsModal />
                {items.map((item, index) => (
                    <div className="cardwrap mt-3" key={item.id}>
                        <div className="card ">
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
                                <div className="row justify-content-between">
                                    <span className="ml-2 btn btn-primary">{item.price} €</span>
                                    <span className="btn">
                                        <i 
                                            className={`fa ${ 
                                                favs.includes(item.id) ?
                                                'fa-heart' : 
                                                'fa-heart-o'} text-danger`}
                                            onClick={()=> this.inLove(item.id)} 
                                            aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

const sortCatalog = (data, key) => {
    if (key === 'price') {
        return [].concat(data).sort((a, b) => {
            if (parseInt(b.price) > parseInt(a.price)) {
                return -1
            }
            if (parseInt(b.price) < parseInt(a.price)) {
                return 1
            }
        })
    } else if (key === '') {
        return data;
    } else {
        return [].concat(data).sort((a, b) => {
            if (b[key] > a[key]) {
                return -1
            }
            if (b[key] < a[key]) {
                return 1
            }
            return 0;
        })
        //
    }

};

const mapStateToProps = (state) => ({
    items: sortCatalog(state.catalog.items, state.sorting.sortkey),
    isfetched: state.catalog.isfetched,
    sortKey: state.sorting.sortkey,
    favs: state.love.favs,
    lovedone: state.love.isfetched
});

export default connect(mapStateToProps, { fetchCatalog, sortingCatalog, favLove, unFav })(Products)