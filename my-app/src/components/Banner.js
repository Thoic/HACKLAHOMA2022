import React, { Component } from 'react';
import Filter from './Filter';

class Banner extends Component {
    render() {
        
        return (
            <div className="banner">
                <Filter value="Home" className="navElement"/>
                <Filter value="Music" className="navElement"/>
                <Filter value="Politics" className="navElement"/>
                <Filter value="Nature" className="navElement"/>
                <Filter value="City" className="navElement"/>
                <Filter value="Random" className="navElement"/>
                <span className="upload">
                <a href="" className="uploadbtn">Upload</a>
                </span>
            </div>
        );
    }
}

export default Banner;