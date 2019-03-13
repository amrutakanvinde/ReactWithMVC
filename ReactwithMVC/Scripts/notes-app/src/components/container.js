import React, { Component } from 'react';
import Header from '../components/header.js';
import NotesList from '../components/notesList.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {serverMessage : []};
    this.getData();
  }

  getData(){
      //fetch data from server
    $.getJSON('http://127.0.0.1:8080/Notes/GetNotes', function(result){
        this.setState({serverMessage : result});
    }.bind(this));
  }

  render(){
    const self = this;
    let noteList = null;
    if (self.state.serverMessage.length !== 0) {
      noteList = (<NotesList serverMessage={self.state.serverMessage} />)
    }
    return(
      <div>
          <Header title="Welcome to Notes App" />
          {noteList}
      </div>
    );
  }
}


export default Container;
