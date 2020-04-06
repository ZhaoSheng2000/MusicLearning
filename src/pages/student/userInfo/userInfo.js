import React from 'react'
import {Card, Col, Row, Typography, Upload, Modal, Form, Input, InputNumber, Button} from "antd";
import {PlusOutlined} from '@ant-design/icons';

const {Title,} = Typography;

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


export default class UserInfo extends React.Component {

    state = {
        previewVisible: false,
        previewImage: '',
        fileList: []

    };

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
        console.log(e,'FormFinish')
    };
    onFormChange=(value)=>{
        console.log(value)
    }

    handleChange = ({fileList}) => this.setState({fileList});

    render() {
        const {previewVisible, previewImage, fileList} = this.state;
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
                        <div style={{paddingTop: 20}}>
                            <Card>
                                <Title level={3}>个人资料</Title>
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
                                            label="姓名"
                                            name="name"
                                            rules={[{required: true, message: '请输入您的姓名!'}]}
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
                                            label="音乐学习基础"
                                            name="label"
                                            rules={[{required: true, message: '请输入您的音乐学习基础!'}]}
                                        >
                                            <Input style={{width: 300}}/>
                                        </Form.Item>
                                        <Form.Item
                                            label="家长姓名"
                                            name="parents"
                                            rules={[{required: true, message: '请输入家长姓名!'}]}
                                        >
                                            <Input style={{width: 300}}/>
                                        </Form.Item>
                                        <Form.Item
                                            label="手机号"
                                            name="phone"
                                            rules={[{required: true, message: '请输入您的手机号!'}]}
                                        >
                                            <Input type="number" style={{width: 300}}/>
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