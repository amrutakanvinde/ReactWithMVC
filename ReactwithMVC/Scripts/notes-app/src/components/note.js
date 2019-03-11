import React, { Component } from 'react';
import ReactBootstrap, {ButtonToolbar, Button, InputGroup, Form, Col} from 'react-bootstrap';

class Note extends Component {
  render() {
    console.log("Reached note");
    return(
      <div id="NoteContainer" class="container">
        <div class="container">
           <div class="row">
              <div class="col">
                <Form.Control placeholder={this.props.name}/>
              </div>
              <div class="col-auto">
                <Button variant="outline-secondary" type="submit">Edit </Button>
              </div>
              <div class="col-auto">
                <Button variant="outline-primary">Delete</Button>
              </div>
           </div>
       </div>
        <Form>
          <Form.Row>
            <Col>
              <Form.Control placeholder={this.props.name}/>
            </Col>
            <Col>
              <ButtonToolbar>
                <Button variant="outline-secondary" type="submit">Edit </Button>
                <Button variant="outline-primary">Delete</Button>
              </ButtonToolbar>
            </Col>
          </Form.Row>
          <br/>
        </Form>
      </div>
      );
    }
  }


  export default Note;
