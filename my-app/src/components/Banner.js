import React, { Component } from "react";
import Filter from "./Filter";

class Banner extends Component {
   render() {
      return (
         <div className="banner">
            <Filter value="Home" className="navElement" />
            <Filter value="Music" className="navElement" />
            <Filter value="Politics" className="navElement" />
            <Filter value="Nature" className="navElement" />
            <Filter value="City" className="navElement" />
            <Filter value="Random" className="navElement" />

            <span className="upload">
               <form className="searchForm" action="action_page.php">
                  <input type="text" placeholder="Search.." name="search" />
                  <button type="submit">
                     <i className="fa fa-search"></i>
                  </button>
               </form>
               <a href="" className="uploadbtn">
                  Upload
               </a>
            </span>
         </div>
      );
   }
}

export default Banner;
