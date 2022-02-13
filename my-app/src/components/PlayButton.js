import React, { Component } from 'react'
import PlayPause from './PlayPause';

class PlayButton extends Component {
    render() {
        const isPlay = this.props.children === 'Play'
        console.log(isPlay)

        return (
            <div className='App'>
                <button
                    onClick={this.props.onClick}
                    style={{
                        border: "none",
                        backgroundColor: "#ff8d8d",
                        boxShadow: "0 0 4px 2px rgba(0,0,0,.2)",
                        cursor: "pointer",
                        height: 40,
                        outline: "none",
                        borderRadius: "100%",
                        width: 40
                    }}>
                        <PlayPause buttonToShow={isPlay ? "play" : "pause"}/>
                </button>
            </div>
        );
    }
}

export default PlayButton
