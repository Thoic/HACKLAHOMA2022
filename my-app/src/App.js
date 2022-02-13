import React, { Component } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import SubmissionList from "./components/SubmissionList";

class App extends Component {
   render() {
      return (
         <div>
            <Header />
            <Banner />
            <SubmissionList />
         </div>
      );
   }
}

export default App;
