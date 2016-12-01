import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionType from '../../actions';

@connect()
class CardPlus extends Component {

    render() {
        return (
            <div className="card-plus" onClick={() => this.props.dispatch(actionType.showModal(null))}>
                <img src="src/assets/images/icon-plus.svg" alt="icon-plus"/>
            </div>
        );
    }

}

export {CardPlus};