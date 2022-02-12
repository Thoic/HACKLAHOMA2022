import React, {Component} from 'react'
import Submission from './Submission';

class SubmissionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submissions: Array(9).fill(null)
        };
    }

    renderSubmission(i) {
        return (
            <Submission title={this.state.submissions[i]} />
        );
    }

    render() {
        return (
            <div>
                <div className="submission">
                    {this.renderSubmission('my-audio')}
                </div>
                <div className="submission">
                    {this.renderSubmission('my-audio-two')}
                </div>
            </div>
        );
    }
}

export default SubmissionList