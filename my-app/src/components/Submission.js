import React, {Component} from 'react'
import sixnine from '../69.jpg'

class Submission extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
        };
    }
    
    render() {
        return (
            <span className={this.props.className}>
                <img src={sixnine} alt="" width="100rem," height="100rem" />
                <a href="" className="glightbox_video">
                    <svg
                        width="7rem"
                        height="7rem"
                        viewBox="0 0 131 131"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="inner-circle"
                            d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z"
                            fill="#bf2428"
                        ></path>
                        <circle
                            className="outer_circle"
                            cx="65.5"
                            cy="65.5"
                            r="64"
                            stroke="#bf2428"
                        ></circle>
                        <path
                            className="play"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M60 76V57L77 66.7774L60 76Z"
                            fill="white"
                        ></path>
                    </svg>
                </a>
                <span>{this.props.title}</span>
                <span>{this.props.runtime}</span>
                <button>{this.props.tag1}</button>
                <button>{this.props.tag2}</button>
                <button>{this.props.tag3}</button>
            </span>
        );
    }
}

export default Submission