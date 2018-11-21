
import React, { Component } from 'react';

import {Tabs, WhiteSpace} from 'antd-mobile'
import DNAxiosTool from '../NetworkCenter/DNAxios'
import DNApiName from '../NetworkCenter/DNApiName'

import axios from 'axios'

const tabs = [
    { title: '首页' },
    { title: 'Android'},
    { title: '前端' },
    { title: 'iOS'},
    { title: '产品' },
    { title: '设计'},
    { title: '后端' },
];

let baseUrl = "https://timeline-merger-ms.juejin.im";

if(process.env.NODE_ENV === 'development'){
    baseUrl = "http://localhost:3000"
}

var instance = axios.create({
    // baseURL: 'https://timeline-merger-ms.juejin.im',
    baseURL:baseUrl,
    timeout: 10000,
    responseType : 'json',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    }
  });

export default class Home extends Component{

    componentDidMount(){
        this.getHotRecommendInfo()
    }

    // 获取首页热门推荐数据
    getHotRecommendInfo(param){
        
        DNAxiosTool.get(DNApiName.ApiForEntryHotRecomment , {
            "device_id" : 'D2F3A47D-6BCA-446A-8D91-C2B7F1068DE1',
            "limit" : '3',
            "src" : 'ios',
            "token" : "eyJhY2Nlc3NfdG9rZW4iOiJWMGZIQjNYd1ROazZNRXEzIiwicmVmcmVzaF90b2tlbiI6IllOT3hBMXhOSVU4dXNiSmEiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ%3D%3D",
            "uid" : "5b8390f3e51d45389d3b5028"
        }).then(rsp => {
            console.log(rsp)
        }).catch(err => {
        })
    }

    renderContent = tab =>(
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' ,flexDirection:'column'}}>
            <p>Content of {tab.title}</p>
        </div>
    );

    render(){
        return (
            <div>
                {/* 顶部导航栏 */}
                <div style={{ height: "100%" }}>
                    <Tabs tabs={tabs}
                        initalPage={'2'}
                        renderTabBar={props => <Tabs.DefaultTabBar {...props} />}
                    >
                    {this.renderContent}
                    </Tabs>
                </div>



            </div>
        );
    }
}
