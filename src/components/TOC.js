import React, { Component } from 'react';

class TOC extends Component{
    shouldComponentUpdate(newProps, newState){
        console.log('===>TOC render shouldComponentUpdate',
        newProps.data,
        this.props.data);
        if(this.props.data === newProps.data){ //현재 값과 바뀐 값이 같다면 data내용이 수정되지 않았다는 뜻
            return false;
        }
        return true;
    }
    render(){
        console.log('TOC render');
        var lists = [];
        var data = this.props.data
        var i = 0;
        while(i < data.length){
            lists.push(
                <li key={data[i].id}>
                    <a href={"/content/"+data[i].id}
                        data-id = {data[i].id}
                        onClick={function(e){
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}>
                        {data[i].title}
                    </a>
                </li>)
            i = i + 1;
        }
        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC; //TOC라는 클래스를 가져다 사용할 수 있게 해줌.