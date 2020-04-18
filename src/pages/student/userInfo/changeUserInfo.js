import React from 'react'
import {Card, Col, Row, Typography, Upload, Modal, Form, Input, InputNumber, Button,Descriptions,message} from "antd";
import {PlusOutlined} from '@ant-design/icons';
import Cookies from 'js-cookie'

import {reqUserInfo,requpdateUser} from "../../../api";

const {Title} = Typography;

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}


export default class ChangeUserInfo extends React.Component {

    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [],
        user:'',
    };
    componentDidMount() {
        const id = Cookies.get("userId");
        reqUserInfo(id).then(r =>{
            const user = r.data.data[0];
            this.setState({user})
        })
    }

    handleCancel = () => this.setState({previewVisible: false});

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };
    onFinish=(e)=>{
        console.log(e,'FormFinish');

        if (this.state.fileList[0] === undefined){
            message.error('请选择头像')
        }else {
            const picture = this.state.fileList[0].thumbUrl;
            const {name,phone,email,age }= e;
            const id = Cookies.get('userId');
            requpdateUser(id,age,picture,name,email,phone).then(r => {
                if(r.data.error_code===2007){
                    message.success('修改成功！')
                }
            })
        }



    };
    onFormChange=(value)=>{
        console.log(value)
    }

    handleChange = ({fileList}) => this.setState({fileList});

    render() {
        const {previewVisible, previewImage, fileList,user} = this.state;
        const uploadButton = (
            <div>
                <PlusOutlined/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (
            <div>
                <Row>
                    <Col span={18} push={3}>
                        <Card>
                            <Descriptions title="个人资料">
                                <Descriptions.Item label="姓名">{user.nickname}</Descriptions.Item>
                                <Descriptions.Item label="联系方式">{user.phone}</Descriptions.Item>
                                {
                                    (user.sex===1) ?
                                        <Descriptions.Item label="性别">男</Descriptions.Item>
                                        :
                                        <Descriptions.Item label="性别">女</Descriptions.Item>
                                }
                                <Descriptions.Item label="昵称">{user.username}</Descriptions.Item>
                                <Descriptions.Item label="备注">
                                </Descriptions.Item>
                            </Descriptions>
                        </Card>
                        <div style={{paddingTop: 20}}>
                            <Card>
                                <Title level={3}>修改资料</Title>
                                <br/>
                                <div>
                                    <Form
                                        labelCol={{span: 3}}
                                        onFinish={this.onFinish}
                                        onValuesChange={this.onFormChange}
                                    >
                                        <Form.Item
                                            label="头像"
                                            name="img"
                                        >
                                            <Upload
                                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                listType="picture-card"
                                                fileList={fileList}
                                                onPreview={this.handlePreview}
                                                onChange={this.handleChange}
                                            >
                                                {fileList.length >= 1 ? null : uploadButton}
                                            </Upload>
                                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                <img alt="example" style={{width: '100%'}} src={previewImage}/>
                                            </Modal>
                                        </Form.Item>
                                        <Form.Item
                                            label="昵称"
                                            name="name"
                                            rules={[{required: true, message: '请输入您的昵称!'}]}
                                        >
                                            <Input style={{width: 300}}/>
                                        </Form.Item>
                                        <Form.Item
                                            label="年龄"
                                            name="age"
                                            rules={[{required: true, message: '请输入您的年龄!'}]}
                                        >
                                            <InputNumber/>
                                        </Form.Item>

                                        <Form.Item
                                            label="手机号"
                                            name="phone"
                                            rules={[{required: true, message: '请输入您的手机号!'}]}
                                        >
                                            <Input type="number" style={{width: 300}}/>
                                        </Form.Item>
                                        <Form.Item
                                            label="邮箱"
                                            name="email"
                                            rules={[{required: true, type:'email', message: '请输入正确的邮箱!'}]}
                                        >
                                            <Input  style={{width: 300}}/>
                                        </Form.Item>
                                        <Form.Item {...tailLayout}>
                                            <Button type="primary" htmlType="submit">
                                                保存
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}