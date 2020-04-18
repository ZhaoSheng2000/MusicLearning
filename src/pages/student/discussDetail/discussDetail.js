import React from 'react'
import {connect} from 'react-redux'
import {Card, Col, Row, Typography, List, Avatar, Divider, Comment, Form, Button, Input, Pagination} from "antd";
import axios from "axios"

const {Title, Paragraph, Text} = Typography;
const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <div>
        <List
            dataSource={comments}
            itemLayout="horizontal"
            renderItem={props => <Comment {...props} />}
        />
        <div style={{textAlign:"center"}}>
            <Pagination  defaultPageSize={24} defaultCurrent={1} total={500} />
        </div>
    </div>

);
const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                添加评论
            </Button>
        </Form.Item>
    </div>
);


class DiscussDetail extends React.Component {
    componentDidMount() {
        const {theDiscuss} = this.props.theDiscuss;
        console.log(theDiscuss)

    }

    state = {
        comments: [
            {
                author: 'Han Solo',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: <p>12344</p>,
            },
            {
                author: 'Han Solo',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: <p>1233333</p>,
            },
            {
                author: 'Han Solo',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: <p>1233333</p>,
            },
            {
                author: 'Han Solo',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: <p>1233333</p>,
            },
            {
                author: 'Han Solo',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: <p>1233333</p>,
            },
            {
                author: 'Han Solo',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: <p>1233333</p>,
            },
            {
                author: 'Han Solo',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: <p>1233333</p>,
            },
            {
                author: 'Han Solo',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: <p>1233333</p>,
            },
            {
                author: 'Han Solo',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: <p>1233333</p>,
            }
        ],
        submitting: false,
        value: '',
    };
    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    {
                        author: 'Han Solo',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content: <p>{this.state.value}</p>,
                    },
                    ...this.state.comments,
                ],
            });
        }, 1000);
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };


    render() {
        const { comments, submitting, value } = this.state;
        const {theDiscuss} = this.props.theDiscuss;
        return (
            <div>
                <Row gutter={[16]}>
                    <Col span={18} offset={3}>
                        <Card>
                            <Row gutter={16}>
                                <Col span={8}>
                                    <img alt='course' src="https://s1.ax1x.com/2020/03/31/GMW6IS.jpg"/>
                                </Col>
                                <Col span={16}>
                                    <Title level={4}>{theDiscuss.content}</Title>
                                    <Paragraph>
                                        {theDiscuss.content}
                                    </Paragraph>
                                </Col>
                            </Row>
                        </Card>
                        <Card>
                            <Text>共198回复</Text>
                            <Divider/>
                            <div>
                                {comments.length > 0 && <CommentList comments={comments} />}
                                <Comment
                                    avatar={
                                        <Avatar
                                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                            alt="Han Solo"
                                        />
                                    }
                                    content={
                                        <Editor
                                            onChange={this.handleChange}
                                            onSubmit={this.handleSubmit}
                                            submitting={submitting}
                                            value={value}
                                        />
                                    }
                                />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default connect(stete=>({theDiscuss: stete.theDiscuss}))(DiscussDetail)