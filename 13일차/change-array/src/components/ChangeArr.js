import React, { Component } from 'react'

class ChangeArr extends Component {
    state = {
        users: [
            {
                id: 1,
                username: 'velopert',
                email: 'public.velopert@gmail.com'
            },
            {
                id: 2,
                username: 'lopert',
                email: 'lopert@gmail.com'
            }
        ]
    }

    handleClick = (e) => {
        // console.log(this.state);
        const { users } = this.state;
        const change_users = [...users];
        change_users[1] = {
            ...users[1],
            email: 'new_lopert@gmail.com'
        };
        console.log(change_users);
        this.setState({
            users: change_users
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>이메일 변경</button>
                <div>{this.state.users[1].email}</div>
            </div>
        );
    }
}

export default ChangeArr;