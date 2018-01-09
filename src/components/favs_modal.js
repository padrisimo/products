import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal, unFav } from '../actions'

import Modal from 'react-bootstrap4-modal';

class FavsModal extends Component {
    onClose() {
        this.props.hideModal();
    }
    modalBackdropClicked() {
        console.log('go banana, go! go! banana!');
    }
    render() {
        const { visible, items, favs } = this.props;
        if (favs.length == 0) {
            return (
                <Modal visible={visible} onClickBackdrop={this.modalBackdropClicked}>
                    <div className="modal-header">
                        <h5 className="modal-title">Only Macarroni :(</h5>
                    </div>
                    <div className="modal-body">
                        <h5>U may choose some favorites!</h5>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" onClick={() => this.onClose()}>
                            Close
                        </button>
                    </div>
                </Modal>
            );
        }
        return (
            <Modal visible={visible} onClickBackdrop={this.modalBackdropClicked}>
                <div className="modal-header">
                    <h5 className="modal-title">U love those so much!</h5>
                </div>
                <div className="modal-body">
                    <ul className="list-group">
                        {items.filter(item => favs.includes(item.id)).map(
                            fav => (
                                <li className="list-group-item justify-content-between" key={fav.id}>
                                    {fav.title}
                                    <span className="">
                                    <i 
                                        className="fa fa-heart text-danger"
                                        data-toggle="tooltip" 
                                        data-placement="top" 
                                        title="delete from favs"
                                        onClick={()=> this.props.unFav(fav.id)} 
                                        aria-hidden="true"></i>
                                    </span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={() => this.onClose()}>
                        Close
                    </button>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    visible: state.modal.visible,
    isfetched: state.modal.isfetched,
    items: state.catalog.items,
    favs: state.love.favs,
});

export default connect(mapStateToProps, { showModal, hideModal, unFav })(FavsModal)
