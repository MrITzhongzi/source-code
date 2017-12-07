import React, {Component} from 'react';

import Breadcrumb from './Breadcrumb'
import ChooseTime from './chooseTime'
import UserTable from './userTable'

class Query extends Component {
    styles ={
        marginBottom: 10
    }

    render(){
        return <div className="query-user">
            <Breadcrumb
                content = '业务查询'
            ></Breadcrumb>
            <ChooseTime></ChooseTime>
            <UserTable
            ></UserTable>
        </div>
    }
}

export  default  Query