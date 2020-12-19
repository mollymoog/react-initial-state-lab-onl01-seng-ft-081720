import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render () {
        console.log (this)
        if (this.state.secondsLeft === 0){
            return `Boom!`
        } else {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }
}

export default Bomb