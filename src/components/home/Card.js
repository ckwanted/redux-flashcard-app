import React, {Component, PropTypes} from 'react';

class Card extends Component {

    static propTypes = {
        card: React.PropTypes.object.isRequired
    };

    render() {
        return (
            <div className="cards">
                <p>{this.props.card.text}</p>
            </div>
        );
    }

}

export {Card};