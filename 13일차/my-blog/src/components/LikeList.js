import React, { Component } from 'react';

class LikeList extends Component {
    render() {
        const style = {
            border: "3px solid skyblue",
            height: "50px"
        }
        return (
            <div style={style}>
                찜목록
            </div>
        );
    }
}

export default LikeList;