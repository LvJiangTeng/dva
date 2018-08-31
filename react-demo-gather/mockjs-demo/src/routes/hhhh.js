import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import request from '../utils/request';
import List from '../components/List';

const IndexPage=({dispatch,index})=>{
    function click(){
        request("./users").then((res)=>{
            dispatch ({
                type : 'index/save',
                paload:res
            })
        })
    }

    return (
        <div>
        <Button type="primary" onClick={click}>点击获取users</Button>
        <List index={index} />
        </div>
    )
}
IndexPage.propsTypes={}
export default connect(({index})=>({index}))(IndexPage)