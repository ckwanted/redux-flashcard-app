import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                { this.props.children }
            </div>
        );
    }

}

export {App};