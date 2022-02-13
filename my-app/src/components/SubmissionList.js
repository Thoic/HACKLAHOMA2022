import React, {Component} from 'react'
import Submission from './Submission';

class SubmissionList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submissions: [
                {title: 'myron 2', runtime: 134, tag1: 'politics', tag2: null, tag3: null, path: '/myron 2.mp3', image: '/69.jpg'},
                {title: 'my-audio-two', runtime: 145, tag1: 'music', tag2: null, tag3: null, path: null, image: null},
            ]
        }    
    }

    render() {
        const submissions = this.state.submissions
        const submissionList = submissions.map((submission) => 
            <Submission key={submission.title}
                title={submission.title} 
                runtime={submission.runtime} 
                tag1={submission.tag1} 
                tag2={submission.tag2} 
                tag3={submission.tag3}
                path={submission.path}
                image={submission.image}>
            </Submission>
        )

        return (
            <div className="main">
                {submissionList}
            </div>
        );
    }
}

export default SubmissionList