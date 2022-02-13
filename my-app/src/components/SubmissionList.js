import React, {Component} from 'react'
import Submission from './Submission';

class SubmissionList extends Component {

    render() {
        return (
            <div className="main">
                <Submission title="my-audio"/>
                <Submission title="my-audio-two"/>
            </div>
        );
    }
}

export default SubmissionList