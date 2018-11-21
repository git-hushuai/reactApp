
import React, { Component } from 'react';

import {Tabs, WhiteSpace , ListView, List} from 'antd-mobile'
import DNAxiosTool from '../NetworkCenter/DNAxios'
import DNApiName from '../NetworkCenter/DNApiName'

import axios from 'axios'

const tabs = [
    { title: '首页'    , "category" : '' , "index" : 0},
    { title: 'Android' , "category" : '5562b410e4b00c57d9b94a92' , "type" :'',   "index"  : 1},
    { title: '前端'     , "category" : '5562b415e4b00c57d9b94ac8' , "type" :'' ,  "index"  : 2},
    { title: 'iOS'     , "category" : '5562b405e4b00c57d9b94a41' , "type"  : '' , "index"  : 3},
    { title: '产品'     , "category" : '569cbe0460b23e90721dff38' , "type" : '',  "index"   : 4},
    { title: '设计'     , "category" : '5562b41de4b00c57d9b94b0f' , 'type' : '',  "index"  : 5},
    { title: '后端'     , 'category' : '5562b419e4b00c57d9b94ae2' , 'type' : '',  "index"   : 6},
];

let baseUrl = "https://timeline-merger-ms.juejin.im";
const { Item } = List

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

    constructor(props){
        super(props)

        // const getSectionData = (dataBlob ,sectionID) => dataBlob[sectionID]
        // const getRowData = (dataBlob ,sectionID ,rowID) => dataBlob[rowID]

        var da = new ListView.DataSource({
            // getRowData,
            // getSectionHeaderData : getSectionData,
            rowHasChanged:(r1,r2)=>{return r1 != r2 },
            // sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        })

        this.state = {
            dataSouce : da.cloneWithRows([]),
            pageIndex : 1,
            noMoreData : false
        }
        this.dsDataLists = [];
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount(){
        // this.getHotRecommendInfo()
        this.getHomeHotRecommendListInfo()
    }

    loadMore(){
        console.log('加载更多');
    }

    // 获取首页热门列表数据
    getHomeHotRecommendListInfo(){
        var self = this
        DNAxiosTool.get(DNApiName.ApiForEntryHotRecomment,{
            params: {
                "device_id" : 'D2F3A47D-6BCA-446A-8D91-C2B7F1068DE1',
                "src" : 'ios',
                "token" : "eyJhY2Nlc3NfdG9rZW4iOiJWMGZIQjNYd1ROazZNRXEzIiwicmVmcmVzaF90b2tlbiI6IllOT3hBMXhOSVU4dXNiSmEiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ==",
                "uid" : "5b8390f3e51d45389d3b5028",
                "before" :'',
                "limit" : '20'
            }
        }).then(rsp=>{
            console.log(rsp);
            // if(rsp !== undefined){
                
                self.dsDataLists = self.dsDataLists.concat(rsp.d.entry.entrylist);
                // self.setState({
                //     dataSouce : self.state.dataSouce.cloneWithRowsAndSections(self.dsDataLists)
                // })
                
                self.setState({
                    dataSouce : self.state.dataSouce.cloneWithRows(self.dsDataLists)
                },()=>{
                    
                })
            // }
        }).catch(err=>{

        });
    }

    // 获取首页热门推荐数据
    getHotRecommendInfo(param){
        var self = this
        DNAxiosTool.get(DNApiName.ApiForEntryHotRecomment , {
            params: {
            "device_id" : 'D2F3A47D-6BCA-446A-8D91-C2B7F1068DE1',
            "limit" : '3',
            "src" : 'ios',
            "token" : "eyJhY2Nlc3NfdG9rZW4iOiJWMGZIQjNYd1ROazZNRXEzIiwicmVmcmVzaF90b2tlbiI6IllOT3hBMXhOSVU4dXNiSmEiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ==",
            "uid" : "5b8390f3e51d45389d3b5028"
            }
        }).then(rsp => {
            console.log(rsp)
            // self.dsDataLists = self.dsDataLists.concat(rsp.d.entry);
            // self.setState({
            //     dataSouce : self.state.dataSouce.cloneWithRowsAndSections(self.dsDataLists)
            // })
            self.setState({
                dataSouce : self.state.dataSouce.cloneWithRows(rsp.d.entry)
            },()=>{
            })

        }).catch(err => {
        })
    }
    // 渲染Cell
    renderItem(item ,section ,pageIndex){
        console.log('item' + item +'/n' + 'section' + section + '/n' + 'pageindex' + pageIndex + '/n')
        
        // let itemList = this.state.dataSouce._dataBlob.entrylist;
        let itemModel = item
        
        return (
            <div key={pageIndex}>
                <div style={{height:80,backgroundColor:'white',alignSelf:'left',textAlign:'left',marginLeft:12,marginRight:12,flexDirection:"row",display:'flex'}}>

                    <div style={{height:80,flexDirection:'column',flex:1,display:'flex',marginLeft:0}}>
                        <label style={{fontSize:12,color:'#333',fontWeight:'bold',display:'block',marginTop:10}}>{itemModel.title}</label>
                        <label style={{fontSize:12,color:'#333',marginTop:10,display:'block'}}>{itemModel.collectionCount}人赞 · {itemModel.user.username} · 1天前</label>
                    </div>

                    {/* 条件渲染 */}
                    {itemModel.screenshot ? <div style={{marginRight:0,width:60,height:60,backgroundColor:'red',alignSelf:'center'}} dis>
                        <img 
                        alt='404'
                        style={{height:60,width:60,backgroundColor:'gray',alignSelf:'center',display:'flex',marginRight:0,}}
                        src={itemModel.screenshot}
                        >
                    </img>
                    </div> : null }



                </div>
            </div>
        );
    }

    // 标签内容
    renderContent = tab =>(
        <div style={{ display: 'flex', height: '100%', backgroundColor: '#fff' ,flexDirection:'column'}}>
            <p>Content of {tab.title}</p>

            <ListView
                tabBarIndex = {tab}
                ref = {el => this.lv = el}
                dataSource = {this.state.dataSouce}
                useBodyScroll
                renderRow={this.renderItem}
                scrollEventThrottle={200}
                pageSize={20}
                initalPage={20}
                onEndReached={this.loadMore}
                className="am-list sticky-list"
                onEndReachedThreshold={0.01}
                // renderSectionHeader={sectionData => {
                //     console.log('sectionData' + sectionData);
                //     return <div style={{height:20,width:"100%"}}>
                //         <label style={{fontSize:12,textAlign:'left',color:'#333'}}>热门推荐</label>
                //     </div>
                // }}
                renderSeparator={(section,index)=>{
                    return (<div style={{height:10,backgroundColor:'#f3f3f3'}}></div>)
                }}
                // renderHeader={(item)=> {
                //     console.log('item' + item)
                //     return <span>custom header + {item}</span>
                // }}

            ></ListView>
            
        </div>
    );

    render(){
        return (
            <div>
                {/* 顶部导航栏 */}
                <div style={{ height: "100%" }}>
                    <Tabs tabs={tabs}
                        initalPage={'1'}
                        renderTabBar={props => <Tabs.DefaultTabBar {...props} />}
                        onTabClick={(tab, index) => {
                            console.log('tab' + tab + 'index'+ index);
                        }}
                    >
                    {this.renderContent}
                    </Tabs>
                </div>
            </div>
        );
    }
}
