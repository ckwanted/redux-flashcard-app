import React, {Component, PropTypes} from 'react';

class Card extends Component {

    static propTypes = {
        card: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <p>{this.props.card.text}</p>
            </div>
        );
    }

}

export {Card};