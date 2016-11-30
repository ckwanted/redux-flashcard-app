import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionType from '../../actions';

@connect((state) => {
    return {
        modal: state.modalReducer
    }
})
class Modal extends Component {

    _onSubmit(event) {
        event.preventDefault();
        if(event.target.text.value.trim().length) {
            this.props.dispatch(actionType.addCard({text: event.target.text.value.trim()}));
            event.target.text.value = '';
            this.props.dispatch(actionType.closeModal());
        }
    }

    render() {
        return (
            <div className="modal-component" style={this.props.modal ? {display: 'flex'} : {display: 'none'}}>
                <div>
                    <header>
                        <h2>Lorem</h2>
                    </header>
                    <form onSubmit={this._onSubmit.bind(this)}>
                        <input type="text" name="text" placeholder="text"/>
                        <div className="flex-modal">
                            <button type="button" onClick={() => this.props.dispatch(actionType.closeModal())}>Cancel</button>
                            <button type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export {Modal};