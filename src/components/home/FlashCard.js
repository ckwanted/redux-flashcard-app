import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionType from '../../actions';

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
        this.props.dispatch(actionType.addCard({"text" : "Iban"}));
        this.props.dispatch(actionType.addCard({"text" : "Ayose"}));
    }

    render() {
        return (
            <div>
                flash
            </div>
        );
    }

}

export {FlashCard};