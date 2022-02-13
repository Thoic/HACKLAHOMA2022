import React, { Component } from 'react';

class Banner extends Component {
    render() {
        
        return (
            <div className="banner">
                <a href="">All Audio</a>
                <a href="">Music</a>
                <a href="">Politics</a>
                <a href="">Random</a>
                <span className="navright">
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <span>Autoplay</span>
                    <button>Upload</button>
                </span>
            </div>
        );
    }
}

export default Banner;