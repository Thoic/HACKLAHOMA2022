import React, { Component } from "react";
import Container from "./Container";
import Filter from "./Filter";

class Banner extends Component {
   render() {
      const triggerText = "Upload!";
      const onSubmit = (event) => {
         event.preventDefault(event);
         console.log(event.target.name.value);
         // console.log(event.target.email.value);
      };
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
               <Container triggerText={triggerText} onSubmit={onSubmit} />
            </span>
         </div>
      );
   }
}

export default Banner;
