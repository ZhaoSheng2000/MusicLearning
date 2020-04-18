import React from 'react'
import {Breadcrumb, Card, Descriptions} from 'antd';


export default class StudentDetail extends React.Component {

    state = {};

    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>学生信息</Breadcrumb.Item>
                    <Breadcrumb.Item>学生详情</Breadcrumb.Item>
                </Breadcrumb>
                <Card title="学生详情">
                    <Descriptions>
                        <Descriptions.Item label="学生姓名">陈小小</Descriptions.Item>
                        <Descriptions.Item label="年龄">19</Descriptions.Item>
                        <Descriptions.Item label="联系方式">1810000000</Descriptions.Item>
                        <Descriptions.Item label="居住地">Hangzhou, Zhejiang</Descriptions.Item>
                        <Descriptions.Item label="性别">男</Descriptions.Item>
                        <Descriptions.Item label="状态">正常</Descriptions.Item>
                        <Descriptions.Item label="Address">
                            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                        </Descriptions.Item>
                    </Descriptions>
                    <br/>
                    <br/>
                    <Descriptions title={'课程信息'}>
                        <Descriptions.Item label="课程">XXXX课程</Descriptions.Item>
                        <Descriptions.Item label="上课次数">18</Descriptions.Item>
                        <Descriptions.Item label="签到次数">16</Descriptions.Item>
                        <Descriptions.Item label="请假次数">2</Descriptions.Item>
                        <Descriptions.Item label="数据更新时间">2020-02-19</Descriptions.Item>
                    </Descriptions>
                    <br/>
                    <Descriptions >
                        <Descriptions.Item label="课程">XXXX课程</Descriptions.Item>
                        <Descriptions.Item label="上课次数">18</Descriptions.Item>
                        <Descriptions.Item label="签到次数">16</Descriptions.Item>
                        <Descriptions.Item label="请假次数">2</Descriptions.Item>
                        <Descriptions.Item label="数据更新时间">2020-02-19</Descriptions.Item>
                    </Descriptions>
                    <br/>
                    <Descriptions>
                        <Descriptions.Item label="课程">XXXX课程</Descriptions.Item>
                        <Descriptions.Item label="上课次数">18</Descriptions.Item>
                        <Descriptions.Item label="签到次数">16</Descriptions.Item>
                        <Descriptions.Item label="请假次数">2</Descriptions.Item>
                        <Descriptions.Item label="数据更新时间">2020-02-19</Descriptions.Item>
                    </Descriptions>
                    <br/>
                    <br/>

                </Card>

            </div>
        )
    }
}