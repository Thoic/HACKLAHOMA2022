import React, {Component} from 'react'
import Submission from './Submission';

class SubmissionList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submissions: [
                {title: 'myron 2', runtime: 134, tags: ['music', 'hip-hop', 'fleetness'], path: '/myron 2.mp3', image: '/myron2.png'},
                {title: 'my-audio-two', runtime: 145, tags: ['music'], path: null, image: null},
                {title: 'my-audio-two', runtime: 145, tags: ['music'], path: null, image: null},
                {title: 'my-audio-two', runtime: 145, tags: ['music'], path: null, image: null},
                {title: 'my-audio-two', runtime: 145, tags: ['music'], path: null, image: null},
                {title: 'my-audio-two', runtime: 145, tags: ['music'], path: null, image: null},
                {title: 'my-audio-two', runtime: 145, tags: ['music'], path: null, image: null},
                {title: 'my-audio-two', runtime: 145, tags: ['music'], path: null, image: null},
                {title: 'my-audio-two', runtime: 145, tags: ['music'], path: null, image: null},

            ]
        }    
    }

    render() {
        const submissions = this.state.submissions
        const submissionList = submissions.map((submission) => 
            <Submission key={submission.title}
                title={submission.title} 
                runtime={submission.runtime} 
                tags={submission.tags} 
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