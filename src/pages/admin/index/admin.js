import React from 'react'
import {Route, Switch} from "react-router-dom";
import {Layout, Menu} from 'antd';
import './admin.less'

import {
    BarChartOutlined,
    CloudOutlined,
    UserOutlined,
    UploadOutlined,
} from '@ant-design/icons';


import StudentInform from "../studentInform/studentInform";
import UploadTeacher from "../uploadTeacher/uploadTeacher";
import UpdateNews from "../updateNews/updateNews";
import NewsDetail from "../updateNews/newsDetail/newsDetail";
import Chart from "../chart/chart";

const {Header, Content, Footer, Sider} = Layout;


export default class Admin extends React.Component {

    state = {};

    render() {
        return (
            <div>
                <Layout>
                    <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}
                    >
                        <div className="myLogo"/>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <a href={'/#/admin'}>
                                    <UserOutlined/>
                                    <span className="nav-text">编辑学生信息</span>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <a href={'/#/admin/uploadTeacher'}>
                                    <UploadOutlined/>
                                    <span className="nav-text">上传教师信息</span>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <a href={'/#/admin/updateNews'}>
                                    <CloudOutlined/>
                                    <span className="nav-text">更新实时资讯</span>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <a href={'/#/admin/Chart'}>
                                    <BarChartOutlined/>
                                    <span className="nav-text">出勤率图表</span>
                                </a>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout" style={{marginLeft: 200}}>
                        <Header className="site-layout-background" style={{padding: 0}}>
                            <h1 style={{paddingLeft: 25}}>后台管理</h1>
                        </Header>
                        <Content style={{margin: '16px 16px',minHeight:window.innerHeight-170}}>
                            <Switch>
                                <Route path={'/admin/uploadTeacher'} component={UploadTeacher}/>
                                <Route path={'/admin/updateNews'} component={UpdateNews}/>
                                <Route path={'/admin/newsDetail'} component={NewsDetail}/>
                                <Route path={'/admin/Chart'} component={Chart}/>
                                <Route component={StudentInform}/>
                            </Switch>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Music Learning ©2020 Created by Zhao Sheng</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}