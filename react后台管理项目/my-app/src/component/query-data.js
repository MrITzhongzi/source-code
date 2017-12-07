import React from 'react'
import { Input,Button } from 'antd';

class QueryData extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div className="search-input" style={{float: "left"}}>
            <Input placeholder="Basic usage" style={{width: 200,marginRight: 20}}/>
            <Button type="primary" icon="search" >搜索</Button>
        </div>
    }
}

export default QueryData