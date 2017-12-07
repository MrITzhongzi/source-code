import React, {Component} from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {
    Row,
    Col,
} from 'antd'

import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom'

import Slider from './component/sliderBar'

import Query from './component/query'
import Manage from './component/manage'

let styles = {
    allPage: {
        height: "100%"
    },
    slider: {
        height: "100%",
        background: "#404040",
        float: 'left',


    },
    totalContent: {
        height: "100%",
        background:"",
        overflow: "hidden"
    }

}

class App extends Component {

    state = {

    }

    componentWillMount(){
        if(!this.isLogin()){
            this.props.history.push('/login')
        }
    }

    componentDidMount(){

    }

    isLogin(){
        const name = localStorage.getItem('sfzLoginName')
        const pwd = localStorage.getItem('sfzLoginPwd')

        return (name == 'lhw' && pwd == 123)
    }


    render() {
        return (
            <div className="all-page" style={styles.allPage}>
                <Row>
                    <Col  className="slider" style={styles.slider}>
                        <Slider />
                    </Col>
                    <Col  className="total-content" style={styles.totalContent}>
                        <Route exact path="/query" component={Query}/>
                        <Route exact path="/manage" component={Manage}/>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
