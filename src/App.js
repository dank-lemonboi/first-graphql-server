import React, { Component } from 'react';
import './App.css';
import LinkList from './components/LinkList'
import CreateLink from './components/CreateLink'
import DeletePost from './components/DeleteLink'
import Update from './components/UpdateLink'
import {graphql} from 'react-apollo'

class App extends Component {
  render() {
    return (
      <div className="App">
       {/*<LinkList />*/}
       <Update />
       <CreateLink />
       <DeletePost />
      </div>
    );
  }
}



export default App
