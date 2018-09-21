import React, { Component } from 'react';

class ContentLikeInfo extends Component {

    state = {
        liked: false,
        list: []
    }

    handleClick = (e) => {
        const { sub, link, title } = this.props.data;
        const { liked } = this.state;
        this.setState({
            liked: !liked
        })
    }

    componentDidUpdate(prevProp, prevState) {
        const { liked, list } = this.state;
        const { sub, link, title } = this.props.data;
        const new_list = [...list];
        // console.log(liked);

        if (!prevState.liked && liked) {
            console.log(title);
            console.log("좋아요!!!");
            
            this.setState({
                list:[...list,title]
            })
            console.log(list);
        }
    }

    render() {

        return (
            <div>
                <button onClick={this.handleClick}>좋아요</button>
            </div>
        );
    }
}
export default ContentLikeInfo;