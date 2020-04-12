import React from 'react'
import {Breadcrumb, Card, Typography, Input, Divider, Button} from "antd";

const {Paragraph, Text} = Typography;
const {TextArea} = Input;

export default class FeedbackDetail extends React.Component {

    state = {value: '',};

    onChange = ({target: {value}}) => {
        this.setState({value});
    };

    render() {
        const {value} = this.state;

        return (
            <div>
                <Breadcrumb style={{margin: '12px 0'}}>
                    <Breadcrumb.Item>课下反馈</Breadcrumb.Item>
                    <Breadcrumb.Item>反馈详情</Breadcrumb.Item>
                </Breadcrumb>
                <Card
                    title={'问题1'}
                >
                    <Text type={"warning"}>学生1</Text> &nbsp;&nbsp; <Text type={'secondary'}>2020-02-10 09:58</Text>
                    <Paragraph style={{paddingTop: 20}}>休息下？内容内容</Paragraph>
                </Card>
                <Divider orientation={"left"}>回复</Divider>
                <TextArea
                    value={value}
                    onChange={this.onChange}
                    autoSize={{minRows: 5}}

                />
                <div style={{textAlign: 'right', paddingTop: 20}}>
                    <Button type={"primary"}>回复</Button>
                </div>
            </div>
        )
    }
}