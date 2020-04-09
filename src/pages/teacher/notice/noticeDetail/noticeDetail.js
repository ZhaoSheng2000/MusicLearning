import React from 'react'
import {Card,Typography, Breadcrumb} from "antd";

const { Paragraph,Text } = Typography;


export default class NoticeDetail extends React.Component {

    state = {};

    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>消息通知</Breadcrumb.Item>
                    <Breadcrumb.Item>通知详情</Breadcrumb.Item>
                </Breadcrumb>
                <Card
                    title={'上课通知'}
                >
                    <Text type={"warning"}>Admin</Text> &nbsp;&nbsp; <Text type={'secondary'}>2020-02-10 09:58</Text>
                    <Paragraph style={{paddingTop:20}}>通知内容通知内容通知内容通知内容通知内容通知内容通知内容</Paragraph>
                </Card>
            </div>
        )
    }
}