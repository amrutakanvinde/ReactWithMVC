import React, { Component } from 'react';
import Note from '../components/note.js';
import ReactBootstrap, {ButtonToolbar, Button} from 'react-bootstrap';


class NotesList extends Component {
   render() {
   var testServer = []

   console.log("Reached NoteList", this.props.serverMessage);
   if(this.props.serverMessage != null)
   {
   console.log("Test", this.props.serverMessage );
   const test = this.props.serverMessage;
   testServer = test.map(function(object) {
     console.log(object);
     return (
     <Note name={object.Name} key={object.Id} />
     );
   })
   }

   return(
   <div>
       {testServer}
   </div>

   );

   }
   }

export default NotesList;
