import React, { Component } from 'react';

class CreateContent extends Component{
    render(){
      console.log('Content render');
      return(
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              );
              alert('Submit!!!')
            }.bind(this)}
          >
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p><textarea name="desc" placeholder="description"></textarea></p>
            <p><input type="submit" value="submit"></input></p>
          </form>
        </article>
      );
    }
  }

export default CreateContent; //TOC라는 클래스를 가져다 사용할 수 있게 해줌.