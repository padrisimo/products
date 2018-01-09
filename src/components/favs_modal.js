import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal } from '../actions'

import Modal from 'react-bootstrap4-modal';

class FavsModal extends Component {
    onClose(){
        this.props.hideModal();
    }
    modalBackdropClicked(){
        alert('go banana, go! go! banana!');
    }
    render() {
        return (
            <Modal visible={this.props.visible} onClickBackdrop={this.modalBackdropClicked}>
                <div className="modal-header">
                    <h5 className="modal-title">U love those so much!</h5>
                </div>
                <div className="modal-body">
                    <p>Enemy vessel approaching!</p>
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
    isfetched: state.modal.isfetched
});

export default connect(mapStateToProps, { showModal, hideModal })(FavsModal)
