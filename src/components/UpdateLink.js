import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Update extends Component {
  state = {
    id: "",
    description: "",
    url: ""
  };

  _updateLink = async () => {
    const { id, url, description } = this.state;
    await this.props.updateMutation({
      variables: {
        id,
        url,
        description
      }
    });
  };
  render() {
    return (
      <div>
        <div>
          <span>Description</span>
          <input
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="Type Link Description Here"
          />
          <span>URL</span>
          <input
            value={this.state.url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="Type Link Url here"
          />
          <span>ID</span>
          <input
            value={this.state.id}
            onChange={e => this.setState({ id: e.target.value })}
            type="text"
            placeholder="Type item Id here"
          />
        </div>
        <button onClick={() => this._updateLink()}>Update</button>
      </div>
    );
  }
}

const UPDATE_MUTATION = gql`
    mutation updateMutation($id: ID!, $url: String!, $description: String!) {
        update(id: $id, url : $url, description: $description) {
            id
            description
            url
        }
    }
`

export default graphql(UPDATE_MUTATION, { name: 'updateMutation' })(Update)