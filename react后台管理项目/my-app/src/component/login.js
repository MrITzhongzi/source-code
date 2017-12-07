import React, {Component} from 'react'
import 'antd/dist/antd.css'
import {
    Input,
    Icon,
    Checkbox,
    Button,
    Modal,
    Alert
} from 'antd'

import './login.less'

import ReactDOM from 'react-dom';

let i = 1;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'lhw',
            password: '123',
            inputname: '',
            inputpwd: '',
            remember: !!localStorage.getItem("username"),
            logging: false
        };
    }

    getInput(type, event) {

        //获取输入的用户名密码
        if (type == 'pwd') {
            this.setState({inputpwd: event.target.value})
        }
        if (type == 'name') {
            this.setState({inputname: event.target.value})
        }
    }

    clickLogin({...abc}){
        console.log(1)
        let name = this.state.inputname === this.state.username;
        let pwd = this.state.inputpwd === this.state.password
        if(name && pwd){



            ReactDOM.render(<div>
                <Alert message="Success Tips" type="success" showIcon />

            </div>,document.querySelector('.login-tip'))


            localStorage.setItem("sfzLoginName", this.state.inputname);
            localStorage.setItem('sfzLoginPwd',this.state.inputpwd)

            this.props.history.push('/')

        }else {

            ReactDOM.render(<div>
                <Alert
                    message="Error"
                    description="This is an error message about copywriting."
                    type="error"
                    showIcon
                    closable={true}
                />
            </div>,document.querySelector('.login-tip'))
        }
    }

    render() {
        return (
            <div className="userlogin">
                <div className="login-tip"></div>
                <Input placeholder="Basic usage" value={this.state.inputname} onChange={e => this.getInput('name', e)} onPressEnter={this.clickLogin.bind(this)}/>
                <Input placeholder="Basic usage" value={this.state.inputpwd} onChange={e => this.getInput('pwd', e)} onPressEnter={this.clickLogin.bind(this)}/>
                <Button type="primary" onClick={this.clickLogin.bind(this)}>登录</Button>
            </div>
        )
    }
}

export default Login