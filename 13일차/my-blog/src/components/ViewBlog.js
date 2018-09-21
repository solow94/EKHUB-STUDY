import React, { Component } from 'react';
import ContentList from './ContentList';

class ViewBlog extends Component {

    state = {
        viewing: false
    }

    handleClick = (e) => {
        const { viewing } = this.state;
        this.setState({
            viewing: !viewing
        });
    }

    render() {
        const { viewing } = this.state;
        if (viewing) {
            return (
                <div>
                    <ContentList
                    />
                </div>
            );
        }

        const style = {
            margin: "10px"
        }
        return (
            <div style={style}>
                <button onClick={this.handleClick}>블로그 보기</button>
            </div>
        );
    }
}

export default ViewBlog;