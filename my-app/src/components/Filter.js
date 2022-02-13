import React, {Component} from 'react'

class Filter extends Component {
    render() {
        console.log(this.props)
        return(
            <a href="" className="navElement">
                {this.props.value}
            </a>
        )
    }
}

export default Filter