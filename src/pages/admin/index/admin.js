import React from 'react'
import {Route, Switch} from "react-router-dom";
import { Layout, Menu } from 'antd';

import {
    BarChartOutlined,
    CloudOutlined,
    UserOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import './admin.less'

import StudentInform from "../studentInform/studentInform";

const { Header, Content, Footer, Sider } = Layout;


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
                        <div className="myLogo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <a href={'/#/admin'}>
                                    <UserOutlined />
                                    <span className="nav-text">编辑学生信息</span>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <UploadOutlined />
                                <span className="nav-text">上传教师信息</span>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <CloudOutlined />
                                <span className="nav-text">更新实时资讯</span>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <BarChartOutlined />
                                <span className="nav-text">出勤率图表</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout" style={{ marginLeft: 200 }}>
                        <Header className="site-layout-background" style={{padding: 0}}>
                            <h1 style={{paddingLeft: 25}}>后台管理</h1>
                        </Header>
                        <Content style={{margin: '16px 16px'}}>
                            <Switch>

                                <Route  component={StudentInform}/>
                            </Switch>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Music Learning ©2020 Created by Zhao Sheng</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}