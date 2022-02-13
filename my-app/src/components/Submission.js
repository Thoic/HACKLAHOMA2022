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
        if (i) {
            this.setState({ play: !this.state.play }, () => {
                this.state.play ? this.audio.play() : this.audio.pause();
            });
        }
    }

    render() {
        const submission = this.props;
        const tagList = submission.tags.map((tag) =>
            <button key={tag}>{tag}</button>
        )
        console.log(this.props)
        console.log(this.audio)
        return (
            <span className="submission">
                {submission.image
                    ? <img src={this.props.image} alt="" width="100rem" height="100rem" />
                    : <img src={"/placeholder.jpg"} alt="" width="100rem" height="100rem"/>}
                <PlayButton onClick={(event) => this.togglePlay(event, submission.path)}>
                    {this.state.play ? 'Pause' : 'Play'}
                </PlayButton>
                <span>{this.props.title}</span>
                <span>{this.props.runtime}</span>
                {tagList}
            </span>
        );
    }
}

export default Submission