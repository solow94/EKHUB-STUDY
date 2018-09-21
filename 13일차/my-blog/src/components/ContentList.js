import React, { Component } from 'react';
import datalist from '../data/ContentData.json';
import ContentInfo from './ContentInfo';

class ContentList extends Component {
    id = 0;
    state = {
        info: [

        ]
    }

    componentDidMount() {
        const { info } = this.state;
        const data = [...datalist.body];

        this.setState({
            info: info.concat(...data)
        })
    }

    render() {
        const { info } = this.state;
        const list = info.map(
            info => (<ContentInfo key={info.sub} info={info} />)
        )

        return (
            <div>
                {list}
            </div>
        );
    }
}
export default ContentList;