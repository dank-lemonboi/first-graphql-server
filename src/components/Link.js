import React, {Component} from 'react'

class Link extends Component {
    render() {
        return(
            <div>
              <div>
                {this.props.link.description}  ---{this.props.link.url}---
              </div>
            </div>
        )
    }

    _votForLink = async () => {

    }
}

export default Link