import React from 'react'
import {Card, Col, Row, Typography, Upload, Modal, Form, Input, InputNumber, Button,Descriptions} from "antd";
import {PlusOutlined} from '@ant-design/icons';
import{reqTheTeacher} from "../../../api";
import Cookies from 'js-cookie'

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
        fileList: [],
        user:''
    };
    componentDidMount() {
        const id = Cookies.get("userId");
        reqTheTeacher(id).then(r => {
            console.log(r.data)
            if (r.data.error_code===2013){
                this.setState({
                    user:r.data.data[0]
                })
            }
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
        console.log(e,'FormFinish')
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
                            <Descriptions title="个人信息">
                                <Descriptions.Item label="姓名">{user.nickname}</Descriptions.Item>
                                {
                                    (user.sex===1) ?
                                        <Descriptions.Item label="性别">男</Descriptions.Item>
                                        :
                                        <Descriptions.Item label="性别">女</Descriptions.Item>
                                }
                                <Descriptions.Item label="邮箱">{user.email}</Descriptions.Item>
                                <Descriptions.Item label="备注">
                                    {user.remark}
                                </Descriptions.Item>
                            </Descriptions>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}