
import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './sliderBar.less';

import {Menu, Icon, Button} from 'antd';

const SubMenu = Menu.SubMenu;

class Slider extends React.Component {

    state = {
        collapsed: false,
        boxStyle: {width: 240}
    }

    toggleCollapsed = () => {

        if(this.state.boxStyle.width == "auto"){
            this.setState({
                collapsed: !this.state.collapsed,
                boxStyle: {width: 240}
            });
        }else{
            this.setState({
                collapsed: !this.state.collapsed,
                boxStyle: {width: "auto"}
            });
        }


    }


    render() {


        return (
            <div style={this.state.boxStyle} className="slider-bar">
                <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 16}}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1">
                        <Link to="/query">
                            <Icon type="pie-chart"/>
                            <span>业务查询</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/manage">
                            <Icon type="desktop"/>
                            <span>用户管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox"/>
                        <span>终端管理</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default Slider