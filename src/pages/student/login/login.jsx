import React from 'react'
import {Form,  Input, Button, Card,Radio} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default class Login extends React.Component {
    state = {
        identity: 1
    };
    onFinish =(e)=>{
        console.log(e)
        if (e.identity===1){
            this.props.history.push('/');
        } else if (e.identity===2){
            this.props.history.push('/teacherPage')
        }else {
            this.props.history.push('/admin')
        }
    };

    render() {
        return (
            <div style={{
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: window.innerHeight,
                backgroundImage: "url(" + require("./loginBg.jpg") + ")",
            }}
            >
                <Card
                    title='账号登陆'
                    style={{
                        width: 380,
                    }}>
                    <Form
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入您的用户名！' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入您的密码！' }]}
                        >
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item
                            name="identity"
                            rules={[{ required: true, message: ' 请选择您的身份！' }]}
                        >
                            <Radio.Group value={this.state.identity}>
                                <Radio value={1}>我是学生</Radio>
                                <Radio value={2}>我是教师</Radio>
                                <Radio value={3}>我是管理员</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                登 录
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
