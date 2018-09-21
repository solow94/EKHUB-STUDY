import React, { Component } from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: "",
        phone: ""
    }

    handleRemove = () => {
        console.log(this.props);
        const { info, onRemove } = this.props;
        // console.log(onRemove);
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({
            editing: !editing
        })
        console.log(editing)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { info, onUpdate } = this.props;

        //editing이 false -> true
        //수정->저장 눌렀을때
        if (!prevState.editing && this.state.editing) {
            // this.setState({
            //     name:
            // })
            console.log(info);
        }

        // editing이 true -> false
        // 수정을 눌렀을 때
        if (prevState.editing && !this.state.editing) {
            const { name, phone } = this.state;
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            })
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 수정 상태가 아니고, info 값이 같다면 리렌더링 안함
        if (!this.state.editing
            && !nextState.editing
            && nextProps.info === this.props.info) {
            return false;
        }
        // 나머지 경우엔 리렌더링함
        return true;
    }
    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        };

        const { name, phone } = this.props.info

        const { editing } = this.state;
        // editing === true일때니 수정모드
        if (editing) {
            return (
                <div style={style}>
                    <div>
                        <input
                            placeholder="이름"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            placeholder="전화번호"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>저장</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            );
        }


        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;