import React from 'react'
import { Button,Icon } from 'antd';


let buttonStyle = {
    color: "orange",
    borderColor: 'orange',
    margin: '0 10px'
}
class Setting extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return <div className="setting">
            <Button type="primary" ghost style={buttonStyle}><Icon type="plus" />添加用户</Button>
            <Button type="primary" ghost style={buttonStyle}><Icon type="unlock" /> 重置密码</Button>
            <Button type="primary" ghost style={buttonStyle}><Icon type="link" />分配权限</Button>
        </div>
    }

}

export default Setting