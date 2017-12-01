import React, {Component} from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {
    Row,
    Col,
} from 'antd'

let styles = {
    allPage: {
        height: "100%"
    },
    slider: {
        height: "100%",
        background: "red"
    },
    totalContent: {
        height: "100%",
        background:"green"
    }

}

class App extends Component {


    render() {
        return (
            <div className="all-page" style={styles.allPage}>
                <Row>
                    <Col span={4} className="slider" style={styles.slider}>

                    </Col>
                    <Col span={20} className="total-content" style={styles.totalContent}>col-18 col-push-6</Col>
                </Row>
            </div>
        );
    }
}

export default App;
