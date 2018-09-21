import React, { Component } from 'react'

class PhoneSearch extends Component {

    state = {
        keyword: ""
    }

    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input
                    placeholder="검색 할 이름을 입력하세요."
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default PhoneSearch;
