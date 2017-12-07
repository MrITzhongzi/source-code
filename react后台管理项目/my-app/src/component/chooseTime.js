import React from 'react'

import {DatePicker} from 'antd';
import {Menu, Dropdown, Button, Icon, message, Table} from 'antd';

class ChooseTime extends React.Component {
    constructor(props) {
        super(props);

    }

    onChange(date, dateString) {
        console.log(date, dateString);
    }

    handleButtonClick(e) {

    }

    handleMenuClick(e) {
        let chooseArea = e.item.props.children;
        this.refs.showPlace.innerText = chooseArea;
    }


    menu = (
        <Menu onClick={this.handleMenuClick.bind(this)}>
            <Menu.Item key="1">北京</Menu.Item>
            <Menu.Item key="2">上海</Menu.Item>
            <Menu.Item key="3">烟台</Menu.Item>
        </Menu>
    );

    render() {
        return <div className="choose-time">
            <span>请选择办理时间:</span>
            <DatePicker onChange={this.onChange}/>
            至
            <DatePicker onChange={this.onChange}/>
            <span style={{marginLeft: 20}}>办理场所：</span>
            <Dropdown overlay={this.menu} className="choose-area">
                <Button style={{marginLeft: 8}} onClick={this.handleButtonClick}>
                    <span ref="showPlace">全部</span> <Icon type="down"/>
                </Button>
            </Dropdown>

        </div>
    }
}

export default ChooseTime