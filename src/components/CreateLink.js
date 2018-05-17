import React, {Component} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class CreateLink extends Component {
    state= {
        description: '',
        url: ''
    }

        _createLink = async () => {
        const { description, url } = this.state
        await this.props.postMutation({
            variables: {
                description,
                url
              }
          })
      }
 

    render() {
        return (
            <div>
              <div>
                <input 
                    value={this.state.description} 
                    onChange={ e => this.setState({ description: e.target.value }) }
                    type='text'
                    placeholder='Type Link Description Here'
                />
                <input 
                    value={this.state.url}
                    onChange={ e => this.setState({ url: e.target.value })}
                    type='text'
                    placeholder='Type Link Url here'
                />
              </div>
              <button onClick={() => this._createLink()}>Submit</button>
            </div>
        )
    }

}


const POST_MUTATION = gql`
    mutation postMutation($description: String!, $url: String!) {
        post(description: $description, url: $url) {
            id
            description
            url
        }
    }
`



export default graphql(POST_MUTATION, {name: 'postMutation'} )(CreateLink)