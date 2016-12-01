import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actionType from '../../actions';

@connect()
class Card extends Component {

    static propTypes = {
        card: React.PropTypes.object.isRequired
    };

    render() {
        return (
            <div className="cards" onClick={() => this.props.dispatch(actionType.showModal(this.props.card))}>
                <p>{this.props.card.text}</p>
            </div>
        );
    }

}

export {Card};