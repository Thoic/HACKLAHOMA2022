import React, { Component } from 'react';
import Filter from './Filter';

class Banner extends Component {
    render() {
        
        return (
            <div className="banner">
                <Filter value="Home" class="navElement"/>
                <Filter value="Music" class="navElement"/>
                <Filter value="Politics" class="navElement"/>
                <Filter value="Nature" class="navElement"/>
                <Filter value="City" class="navElement"/>
                <Filter value="Random" class="navElement"/>
                <span class="upload">
                <a href="" class="uploadbtn">Upload</a>
                </span>
            </div>
        );
    }
}

export default Banner;