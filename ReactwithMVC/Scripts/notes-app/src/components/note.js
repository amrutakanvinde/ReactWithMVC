import React, { Component } from 'react';
import $ from 'jquery';
import {Button, Form, Col} from 'react-bootstrap';

class Note extends Component {
  constructor(props) {
  super(props);
  this.state = { isReadOnly: true };
  }
  handleClick(){
    console.log("reavched handle" + this.props.id);
    //if(this.state){
    //this.setState({ isReadOnly: false });
    //} else{
    this.setState({ isReadOnly: false });
    //}

    //this.handleClick = this.handleClick.bind(this);
  }
  OnDelete(){
    //alert("Are you sure you want to delete this??");
    console.log("hello delete");
       $.ajax({
       type: "DELETE",
       url: 'http://127.0.0.1:8080/Notes/Delete',//+ this.props.id,
       data: JSON.stringify({ id: this.props.id }), //use id here
       dataType: "json",
       crossDomain : true,
       //contentType: "application/json; charset=utf-8",
       success: function () {
          console.log("Data has been deleted.");
       },
       error: function () {
           console.log("Error while deleting data");
       }
    })
    /*$.getJSON('http://127.0.0.1:8080/Notes/Delete'+ this.props.id, function(result){
        this.setState({serverMessage : result});
    }.bind(this)); */
  }
  render() {
    const { isReadOnly } = this.state;
    console.log("Reached note");
    return(
      <div id="NoteContainer" className="container">
        <Form>
          <Form.Row>
            <Col>
              <Form.Control readOnly={isReadOnly} placeholder={this.props.name}/>
            </Col>
              <div className="col-auto">
                <Button variant="outline-secondary"
                  onClick={this.handleClick.bind(this)}>
                  Edit
                </Button>
              </div>
              <div className="col-auto">
                <Button variant="outline-primary" value="Reset"
                  onClick={this.OnDelete.bind(this)}>
                  Delete
                </Button>
              </div>
              <div className="col-auto">
                <Button variant="outline-primary" disabled={isReadOnly}
                  onClick={this.handleClick.bind(this)}>
                  Cancel
                </Button>
              </div>
          </Form.Row>
          <br/>
        </Form>
      </div>
      );
    }
  }


  export default Note;
