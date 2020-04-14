import React from 'react'
import {Card, Col, Row, Input, Upload, message, Button} from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

export default class NewsDetail extends React.Component {

    state = {
        loading: false,
        value: '',
    };

    onChange = ({ target: { value } }) => {
        this.setState({ value });
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };


    render() {
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        const { value } = this.state;

        return (
            <div>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card
                            title={<span><Input placeholder="请输入标题" style={{width:400}} />&nbsp;<Input placeholder="请输入作者" style={{width:200}} /></span>}
                            extra={<Button type={"primary"}>保存</Button>}
                        >
                            请上传封面图：
                            <br/><br/>
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                            <div style={{ margin: '24px 0' }} />
                            <TextArea
                                value={value}
                                onChange={this.onChange}
                                placeholder="请输入内容"
                                autoSize={{ minRows: 20, }}
                            />
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}