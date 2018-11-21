
import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.min.css';
import './TabBarExample.css'

import Home from './home/Home.js'
import Activity from './Activity/Activity'
import Find from './Find/Find'
import Mine from './Mine/index'
import Tips from './Tips/Tips'

import home from './images/SVG/home.svg'


export default class TabBarExample extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'blueTab',
        hidden: false,
        fullScreen: false,
      };
    }
  
    render() {
      return (
        <div style={{ position: 'fixed', height: '100%', width: '100%', }}>
          
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
                <TabBar.Item
                title="首页"
                key="首页"
                icon={
                <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' 
                    }}
                />
                }
                selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selected={this.state.selectedTab === 'blueTab'}
                badge={0}
                onPress={() => {
                    this.setState({
                    selectedTab: 'blueTab',
                    });
                }}
                data-seed="logId"
                >
                <Home />
                </TabBar.Item>

                <TabBar.Item
                icon={
                    <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                    />
                }
                selectedIcon={
                    <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                    />
                }
                title="动态"
                key="动态"
                badge={''}
                selected={this.state.selectedTab === 'redTab'}
                onPress={() => {
                    this.setState({
                    selectedTab: 'redTab',
                    });
                }}
                data-seed="logId1"
                >
                <Activity />
                </TabBar.Item>

                <TabBar.Item
                icon={
                    <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                    />
                }
                selectedIcon={
                    <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                    />
                }
                title="发现"
                key="发现"
                // dot
                selected={this.state.selectedTab === 'greenTab'}
                onPress={() => {
                    this.setState({
                    selectedTab: 'greenTab',
                    });
                }}
                >
                <Find />
                </TabBar.Item>

                <TabBar.Item
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                title="小册"
                key="小册"
                selected={this.state.selectedTab === 'yellowTab'}
                onPress={() => {
                    this.setState({
                    selectedTab: 'yellowTab',
                    });
                }}
                >
                <Tips />
                </TabBar.Item>

                <TabBar.Item
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                title="我"
                key="我"
                selected={this.state.selectedTab === 'yellowTab2'}
                onPress={() => {
                    this.setState({
                    selectedTab: 'yellowTab2',
                    });
                }}
                >
                <Mine/>
                </TabBar.Item>

          </TabBar>
        </div>
      );
    }
  }
  
