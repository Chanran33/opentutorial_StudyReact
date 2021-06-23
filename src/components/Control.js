import React, { Component } from 'react';
import '../css/Control.css';

class Control extends Component{
    render(){
      return(
        <div className="Control_list">
            <a href="/create" onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('create');
            }.bind(this)}>create</a>
            <a href="/update" onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('update');
            }.bind(this)}>update</a>
            <input type="button" value="delete" onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('delete');
            }.bind(this)}></input>
        </div>
      );
    }
  } 


  export default Control; 