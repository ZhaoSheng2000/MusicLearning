import React from 'react'
import {connect} from 'react-redux'
import {Card, Col, Row, List, Avatar, Comment, Form, Button, Input,} from "antd";
import {reqdisscussReback, reqTheDiscuss, reqUserInfo} from "../../../api"
import Cookies from "js-cookie"

const {TextArea} = Input;
const Editor = ({onChange, onSubmit, submitting, value}) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value}/>
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                添加评论
            </Button>
        </Form.Item>
    </div>
);
Date.prototype.format = function(fmt) {
    const o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt)) {
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(const k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
}
class DiscussDetail extends React.Component {
    componentDidMount() {
        const userid = Cookies.get("userId");
        reqUserInfo(userid).then(r => {
            const user = r.data.data[0];
            this.setState({user})
        })
        const {id} = this.props.location.state
        this.setState({dis_id:id})
        reqTheDiscuss(id).then(res => {
            this.setState({comments: res.data.data})
        })
    }

    state = {
        comments: [],
        submitting: false,
        value: '',
        user: '',
        dis_id:''
    };
    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });
        const {dis_id} = this.state
        const userid = Cookies.get("userId");
        console.log(dis_id,userid,this.state.value)
        reqdisscussReback(dis_id,userid,this.state.value).then(res =>{
            console.log(res.data)
        })

        setTimeout(() => {
            const newDate = new Date()
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    {
                        stuname: this.state.user.nickname,
                        picture: this.state.user.picture,
                        content: <p>{this.state.value}</p>,
                        intime: newDate.format("yyyy-MM-dd hh:mm:ss")
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
        const {comments, submitting, value} = this.state;
        return (
            <div>
                <Row gutter={[16]}>
                    <Col span={18} offset={3}>
                        <Card>
                            <List
                                header={`${comments.length} 回复`}
                                itemLayout="horizontal"
                                dataSource={comments}
                                renderItem={item => (
                                    <li>
                                        <Comment
                                            author={item.stuname}
                                            avatar={item.picture}
                                            content={item.content}
                                            datetime={item.intime}
                                        />
                                    </li>
                                )}
                            />
                            <div>
                                <Comment
                                    avatar={
                                        <Avatar
                                            src={this.state.user.picture}
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

export default connect(stete => ({theDiscuss: stete.theDiscuss}))(DiscussDetail)