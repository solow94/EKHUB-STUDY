import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo';
import PhoneForm from './PhoneForm';

class PhoneInfoList extends Component {


    render() {
        // console.log(this.props)
        const { data } = this.props;
        // console.log(data);
        // const { data } = this.props.data;
        const list = data.map(
            info => (<PhoneInfo key={info.id} info={info} />)
        )

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;