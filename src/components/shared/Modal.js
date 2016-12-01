import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionType from '../../actions';

@connect((state) => {
    return {
        modal: state.modalReducer
    }
})
class Modal extends Component {

    _newCard(event) {
        event.preventDefault();
        if (event.target.text.value.trim().length) {
            this.props.dispatch(actionType.addCard({text: event.target.text.value.trim()}));
            event.target.text.value = '';
            this.props.dispatch(actionType.closeModal());
        }
    }

    _editCard(event) {
        event.preventDefault();
        if (event.target.text.value.trim().length) {
            this.props.dispatch(actionType.editCard({
                id: this.props.modal.card.id,
                text: event.target.text.value.trim()
            }));
            event.target.text.value = '';
            this.props.dispatch(actionType.closeModal());
        }
    }

    _showContent() {
        if (this.props.modal.card) {
            return (
                <div>
                    <header>
                        <h2>Edit Card</h2>
                    </header>
                    <form onSubmit={this._editCard.bind(this)}>
                        <input type="text" name="text" placeholder="text" defaultValue={this.props.modal.card.text}/>
                        <div className="flex-modal">
                            <button type="button" onClick={() => this.props.dispatch(actionType.closeModal())}>Cancel</button>
                            <button type="submit">Edit</button>
                        </div>
                    </form>
                </div>
            );
        }
        else return (
            <div>
                <header>
                    <h2>New Card</h2>
                </header>
                <form onSubmit={this._newCard.bind(this)}>
                    <input type="text" name="text" placeholder="text"/>
                    <div className="flex-modal">
                        <button type="button" onClick={() => this.props.dispatch(actionType.closeModal())}>Cancel
                        </button>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        );
    }

    render() {
        return (
            <div className="modal-component" style={this.props.modal.active ? {display: 'flex'} : {display: 'none'}}>
                {this._showContent.bind(this)()}
            </div>
        );
    }
}

export {Modal};