import React from 'react'
import PlayButton from './PlayButton'

class Submission extends React.Component {
    state = {
        play: false
    }
    audio = new Audio(this.props.path)
    
    componentDidMount() {
        this.audio.addEventListener('ended', () => this.setstate({ play: false }));
    }
    
    componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({play: false }));
    }
    
    togglePlay(event, i) {
        event.preventDefault()
        this.setState({ play: !this.state.play }, () => {
            this.state.play ? this.audio.play() : this.audio.pause();
        });
    }

    render() {
        const submission = this.props;
        console.log(this.props)
        console.log(this.audio)
        return (
            <span className="submission">
                {submission.image
                    ? <img src={this.props.image} alt="" width="100rem" height="100rem" />
                    : <img src={"/placeholder.jpg"} alt="" width="100rem" height="100rem"/>}
                <PlayButton onClick={(event) => this.togglePlay(event, submission.url)}>
                    {this.state.play ? 'Pause' : 'Play'}
                </PlayButton>
                <span>{this.props.title}</span>
                <span>{this.props.runtime}</span>
                { this.props.tag1 && <button>{this.props.tag1}</button> }
                { this.props.tag2 && <button>{this.props.tag2}</button> }
                { this.props.tag3 && <button>{this.props.tag3}</button> } 
            </span>
        );
    }
}

export default Submission