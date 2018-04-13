import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Styles = {
  li1: {
    color: "blue",
    background: "red",
    float: "left",
    listStyle: "none",
    margin: "10px"
  },
  li2: {
    color: "white",
    background: "black",
    float: "left",
    listStyle: "none",
    margin: "10px"
  }
}

// 对Route 进行一次封装， 当点击 link 触发的时候，包裹 该link 的 route 的path 吻合也会触发，
// 然后判断 match 是否存在，存在的话 就设置一个样式，不存在的话设置另一个样式
const MenuItem = ({ to, text, exact }) => {
  return <Route path={to} exact={exact} children={
    ({ match }) => {
    console.log(match,"match")
    return <Link to={to}>
      <li style={match ? Styles.li1 : Styles.li2}>{text}</li>
    </Link>
  }} />
};

const Home = () => (
  <div>home</div>
)
const Login = () => (
  <div>login页</div>
)
const Main = () => (
  <div>main</div>
)

class App extends Component {

  render() {
    return (
      <Router>
        <div style={{margin:"40px"}}>
          <div style={{overflow:"hidden"}}>
            <MenuItem to="/home" text="主页" exact />
            <MenuItem to="/login" text="登录" />
            <MenuItem to="/main" text="内容" />
          </div>
          <hr/>
          <div style={{textAlign:"left"}}>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/main" component={Main} />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
