import React, { Component } from 'react'

class PhoneForm extends Component {

    state = {
        name: "",
        phone: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handlesubmit = (e) => {
        e.preventDefault();

        this.props.onCreate(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handlesubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleChange}
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    name="phone"
                    onChange={this.handleChange}
                />
                <button type="submit">등록</button>
                <div>{this.state.name}{this.state.phone}</div>
            </form>
        );
    }
}

export default PhoneForm;