import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionType from '../../actions';
import {Card} from './Card';

@connect((state) => {
    return {
        cards: state.cardReducer
    }
})
class FlashCard extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(actionType.addCard({"text": "Iban"}));
        this.props.dispatch(actionType.addCard({"text": "Ayose"}));
    }

    render() {
        return (
            <div className="flex-flash-cards">
                {this.props.cards.map((card) => {
                    return (<Card key={card.id} card={card} />);
                })}
            </div>
        );
    }

}

export {FlashCard};