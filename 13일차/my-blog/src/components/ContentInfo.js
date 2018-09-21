import React, { Component } from 'react';
import ContentLikeInfo from './ContentLikeInfo.js';
class ContentInfo extends Component {

    state = {
        
    }

    render() {
        const style = {
            border: "1px solid black",
        }
        const div_style = {
            height: "50px",
            weight: "20%"
        }
        const { sub, title, link } = this.props.info
        // this.setState({
            
        // })

        // const like = <ContentLikeInfo />

        return (
            <div style={style}>
                <div style={div_style}><a href={link}>{title}</a></div>
                <div>
                    <ContentLikeInfo data={this.props.info} />
                </div>
            </div>
        );
    }
}

export default ContentInfo;