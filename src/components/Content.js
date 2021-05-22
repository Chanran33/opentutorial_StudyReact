import React, { Component } from 'react';

class Content extends Component{
    render(){
      return(
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
      );
    }
  }

export default Content; //TOC라는 클래스를 가져다 사용할 수 있게 해줌.