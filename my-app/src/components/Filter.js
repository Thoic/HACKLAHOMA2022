import React, {Component} from 'react'

class Filter extends Component {
    render() {
        console.log(this.props)
        return(
            <a href="" class="navElement">
                {this.props.value}
            </a>
        )
    }
}

export default Filter