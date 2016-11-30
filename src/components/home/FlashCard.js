import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionType from '../../actions';
import {Card, CardPlus, Modal} from '../index';

@connect((state) => {
    return {
        cards: state.cardReducer
    }
})
class FlashCard extends Component {

    render() {
        return (
            <div>
                <Modal />
                <div className="flex-flash-cards">
                    {this.props.cards.map((card) => {
                        return (<Card key={card.id} card={card}/>);
                    })}
                    <CardPlus />
                </div>
            </div>
        );
    }

}

export {FlashCard};