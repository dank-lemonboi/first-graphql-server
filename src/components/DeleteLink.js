import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


class DeletePost extends Component {
    state= {
        id: ''
    }

    render() {
        return(
            <div><div>
                <input 
                    value={this.state.id}
                    type='text'
                    placeholder='Type Id to delete here'
                    onChange={ e => this.setState({ id: e.target.value }) }
                />
                </div>
                <button onClick={() => this._deleteLink()}>Delete</button>
            </div>
        )
    }

    _deleteLink = async () => {
        const { id } = this.state
        await this.props.deleteMutation({
            variables: {
                id
            }
        })
    }
}

const DELETE_MUTATION = gql`
  mutation deleteMutation($id: ID!) {
    delete(id: $id) {
      id
    }
  }
`;

export default graphql(DELETE_MUTATION, {name: 'deleteMutation'} )(DeletePost)