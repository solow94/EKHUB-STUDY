import React, { Component } from 'react';

class PracticeCounter extends Component {

    state = {
        number: 0
    }

    handleIncrease = () => {
        this.setState(
            ({ number }) => ({
                number: number + 1
            })
        )
    }

    handleDecrease = () => {
        this.setState(
            ({ number }) => ({
                number: number - 1
            })
        )
    }

    render() {
        return (
            <div>
                <div> 값 : {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default PracticeCounter;