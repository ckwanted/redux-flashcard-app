import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addCard } from '../../actions';

@connect((state) => {
    return {
        cards : state.cardReducer
    }
})
class FlashCard extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //this.props.addCard({name : 'texto'});
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