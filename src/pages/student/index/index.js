import React from 'react'
import {Layout, Menu,Input} from 'antd';
import {Route, Switch} from "react-router-dom";
import './index.less'
import {
    LogoutOutlined,
    UserOutlined,
    HomeOutlined,
    BookOutlined,
    BulbOutlined,
    TeamOutlined
} from '@ant-design/icons';

import Home from '../home/home';
import AllCourse from '../allCourse/allcourse';
import TeacherList from '../teacherList/teacherlist';
import TeacherDetail from "../teacherList/teacherDetail";
import CourseDetail from "../courseDetail/courseDetail";
import InformationDetail from "../informationDetail/informationDetail";
import Discuss from "../discuss/discuss";
import DiscussDetail from "../discussDetail/discussDetail";
import Personal from "../personal/personal";
import UserInfo from "../userInfo/userInfo";
import AddCourse from "../../addCourse/addCourse";

const {Header, Content, Footer} = Layout;
const {SubMenu} = Menu;
const { Search } = Input;


export default class index extends React.Component {

    state = {
        collapsed: false,

    };


    render() {
        return (
            <div>
                <Layout className="layout">
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <div className="myLogo"/>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['0']}
                        >
                            <Menu.Item key="0"><a href={'/#/'}><HomeOutlined/>首页</a></Menu.Item>
                            <Menu.Item key="1"> <a href={'/#/allcourse'}><BookOutlined />课程</a></Menu.Item>
                            <Menu.Item key="2"> <a href={'/#/teacher'}><TeamOutlined />老师</a></Menu.Item>
                            <Menu.Item key="3"> <a href={'/#/discuss'}><BulbOutlined />精彩讨论</a></Menu.Item>
                            <SubMenu
                                title={
                                <Search
                                    style={{paddingTop:15,paddingLeft:30}}
                                    placeholder="搜索课程或老师"
                                    enterButton="搜索"
                                    onSearch={value => console.log(value)}
                                />
                            }/>
                            <SubMenu title="我的" className="geren">
                                <Menu.Item> <a href={'/#/user'}><UserOutlined/>我的资料</a> </Menu.Item>
                                <Menu.Item><LogoutOutlined/>退出登录</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="4" className="geren"><a href={'/#/personal'}>个人中心</a></Menu.Item>
                        </Menu>
                    </Header>
                    <Content className='mycontent'>
                            <Switch>
                                <Route path={'/allcourse'} component={AllCourse}/>
                                <Route path={'/teacher'} component={TeacherList}/>
                                <Route path={'/teacherDetail'} component={TeacherDetail}/>
                                <Route path={'/courseDetail'} component={CourseDetail}/>
                                <Route path={'/information'} component={InformationDetail}/>
                                <Route path={'/discuss'} component={Discuss}/>
                                <Route path={'/discussDetail'} component={DiscussDetail}/>
                                <Route path={'/personal'} component={Personal}/>
                                <Route path={'/user'} component={UserInfo}/>
                                <Route path={'/addCourse'} component={AddCourse}/>
                                <Route  component={Home}/>
                            </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Music Learning ©2020 Created by Zhao Sheng</Footer>
                </Layout>
            </div>
        )
    }
}