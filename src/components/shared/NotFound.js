import React, {Component} from 'react';

class NotFound extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <h1>404</h1>
        );
    }

}

export {NotFound};