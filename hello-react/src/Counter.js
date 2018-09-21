// import React, { Component } from 'react';

// class Counter extends Component {

//     // class field와 constructor 를 같이 사용하면 class fields가 먼저 실행되고, 그 다음에 constructor 가 실행된다..
//     // 즉, constructor 에서 설정한 내용이 반영되어버림

//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         number: 0
//     //     }
//     // }

//     state = {
//         number: 0
//     }

//     /*
//         메소드 작성시 아래와 같이 하면 this가 undefined 되는 일이 없음.
//         하지만
//         handleIncrease() {
//             this.setState({
//                 // do something
//             })
//         }
//         이런 식으로 해버리면 this가 풀려버릴 일이 생길 수 있음.
//         이걸 고치려면 constructor 에서 this.handleIncrease = this.handleIncrease.bind(this) 로 고쳐주면 된다.
//     */


//     // state에 있는 값을 변경하기 위해서는 반드시 this.setState를 거쳐야한다. 이 함수가 호출되면 컴포넌트가 re-rendering 되도록 설계되어있다.
//     // setState는 객체로 전달되는 인자만 업데이트를 해준다.
//     handleIncrease = () => {
//         this.setState({
//             number: this.state.number + 1
//         });

//         // this.setState(
//         //     ({ number }) => ({
//         //         number: number + 1
//         //     })
//         // )
//     }

//     handleDecrease = () => {
//         // this.setState({
//         //     number: this.state.number - 1
//         // });

//         if (this.state.number <= 0) return;
//         this.setState(
//             ({ number }) => ({
//                 number: number - 1
//             })
//         )
//     }

//     render() {
//         // 이벤트 이름을 설정할때 Camel Case로 설정해주어야함. onclick => onClick, onmousedown => onMouseDown, onchange => onChange
//         // 이벤트에 전달해주는 값은 함수여야 한다.
//         // 만약에 onClick={this.handleIncrease()} 이런식으로 하게 된다면 렌더링을 할 때마다 해당 함수가 호출이 된다.
//         // 이렇게 하게 되면 렌더링 -> 함수호출 -> setState -> 렌더링 -> 함수호출 -> 무한반복... 이 되어버린다.
//         return (
//             <div>
//                 <h1>카운터</h1>
//                 <div>값: {this.state.number} </div>
//                 <button onClick={this.handleIncrease}>+</button>
//                 <button onClick={this.handleDecrease}>-</button>
//             </div>
//         );
//     }
// }

// export default Counter;
import React, { Component } from 'react';

const Problematic = () => {
    throw (new Error('버그가 나타났다!'));
    return (
        <div></div>
    );
};

class Counter extends Component {
    state = {
        number: 0
    }

    //에러 잡을때 사용함
    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
    }

    constructor(props) {
        super(props);
        console.log("constructor");
    }

    //컴포넌트가 화면에 나가기 직전에 호출됨
    componentWillMount() {
        console.log('componentWillMount (deprecated)');
        //이제 안씀
    }

    //컴포넌트가 화면에 나타나게 됬을때 호출됨
    componentDidMount() {
        console.log('componentDidMount');
    }


    // 3개는 값이 변화할때
    // state가 변경되거나 부모 컴포넌트로부터 새로운 props을 전달 받을 때 실행
    // re-rendering을 할지 말지 정하는 메소드
    // number 값이 %5 ===0 일땐 componentWillUpdate, componentDidUpdate 호출 X
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpadte');
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    // 3개는 값이 변화할때
    // 컴포넌트가 업데이트 되기 전에 실행
    // 여기 안에서 this.setState()사용하면 무한루프
    // shouldComponentUpdate 에서 true를 반환 했을때만 호출된다.
    // number 값이 %5 ===0 일땐 componentWillUpdate, componentDidUpdate 호출 X
    componentWillUpdate(nextProps, nextState) {
        console.log("nextProps", nextProps, "nextState", nextState);
    }

    // 3개는 값이 변화할때
    // 컴포넌트가 re-rendering을 마친 후 실행됨
    // number 값이 %5 ===0 일땐 componentWillUpdate, componentDidUpdate 호출 X
    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps, "prevState", prevState);
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    handleDecrease = () => {

        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        if(this.state.error) return (<h1>에러 발생!</h1>);

        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                {this.state.number === 4 && <Problematic />}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;