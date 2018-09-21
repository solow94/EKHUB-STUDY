import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from '../components/Menu';

class App extends Component {
    render() {
        // Route를 설정할 때는 Route 컴포넌트 를 사용하고 경로는 path 값
        // :name을 내가 원하는거 치면됨
        // 먼저 비교할 라우트를 위에 작성해야됨.
        // about이 :name보다 위에면 name을 써도 안나타남
        return (
            <div>
                <Menu />
                <Route exact path="/" component={Home} />
                <Switch>
                    <Route path="/about/:name" component={About} />
                    <Route path="/about" component={About} />
                </Switch>
                <Route path="/posts" component={Posts} />
            </div>
        );
    }
}

export default App;
