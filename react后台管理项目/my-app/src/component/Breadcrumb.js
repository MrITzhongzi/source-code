import React from 'react'
import { Breadcrumb } from 'antd';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render (){
        return <Breadcrumb>
            <Breadcrumb.Item>{this.props.content}</Breadcrumb.Item>
            <Breadcrumb.Item>{this.props.content}</Breadcrumb.Item>

        </Breadcrumb>
    }
}

export default Index