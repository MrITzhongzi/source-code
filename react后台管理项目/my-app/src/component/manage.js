import React, {Component} from 'react';

import Breadcrumb from './Breadcrumb';
import QueryData from './query-data'
import Setting from './setting'
import ManageTable from './manageTable'

class Manage extends Component {


    render(){
        return <div className="manage-user">
            <Breadcrumb
                content = '用户管理'
            ></Breadcrumb>
            <nav className="manage-nav" style={{overflow: "hidden"}}>
                <QueryData></QueryData>
                <Setting></Setting>
            </nav>
            <ManageTable></ManageTable>
        </div>
    }
}

export  default  Manage