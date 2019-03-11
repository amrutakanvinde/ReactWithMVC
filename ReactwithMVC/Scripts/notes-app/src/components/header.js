import React, { Component } from 'react';

class Header extends Component {
   render() {
   console.log("Reached header");
   return(
  <div align='center'>
    <h1> {this.props.title} </h1>
  </div>
   );
   }
   }

export default Header;
