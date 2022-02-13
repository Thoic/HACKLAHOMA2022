import React, { Component } from "react";
import Submission from "./Submission";

class SubmissionList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         submissions: [
             {
                 title: "一剪梅",
                 runtime: 223,
                 tags: ["music", "chinese", "陳信義", "egg"],
                 path: "/yijianmei.mp3",
                 image: "/yijianmei.jpg",
             },
             {
                title: "Nature Sounds",
                runtime: 60,
                tags: ["nature", "stream", "relaxing"],
                path: "/nature.mp3",
                image: "/nature.jpg",
            },
            {
                title: "One Dance",
                runtime: 173,
                tags: ["drake", 'hip-hop', '2016'],
                path: "/drake.mp3",
                image: "/drake.jpg",
            },
            {
                title: "Treat You Better",
                runtime: 187,
                tags: ["shawn mendes", "pop", '2016', 'disney'],
                path: "/mende.mp3",
                image: "/mendes.jpg",
            },
            {
                title: "Biden Speech",
                runtime: 124,
                tags: ["joe biden", "2022", "speech", "politics", "usa"],
                path: "/biden.mp3",
                image: "/biden.jpg",
            },
            {
                title: "Buffer",
                runtime: 111,
                tags: [],
                path: null,
                image: null
            }
         ]
      };
   }

   render() {
      const submissions = this.state.submissions;
      const submissionList = submissions.map((submission) => (
         <Submission
            key={submission.title}
            title={submission.title}
            runtime={submission.runtime}
            tags={submission.tags}
            path={submission.path}
            image={submission.image}
         ></Submission>
      ));

      return <div className="main">{submissionList}</div>;
   }
}

export default SubmissionList;
