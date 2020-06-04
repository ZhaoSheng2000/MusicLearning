import React from 'react'
import {Card,Typography, Breadcrumb} from "antd";
import {reqTheNews} from "../../../../api"

const { Paragraph,Text } = Typography;


export default class NoticeDetail extends React.Component {

    state = {news:''};
    componentDidMount() {
        const {id} = this.props.location.state
        console.log(id)
        reqTheNews(id).then(res =>{
            const news = res.data.data[0]
            this.setState({news:news})
        })
    }

    render() {
        const {news} = this.state
        console.log(news)
        return (
            <div>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>消息通知</Breadcrumb.Item>
                    <Breadcrumb.Item>通知详情</Breadcrumb.Item>
                </Breadcrumb>
                <Card
                    title={news.title}
                >
                    <Paragraph><img src={news.picture}/></Paragraph>
                    <Paragraph>{news.content}</Paragraph>
                </Card>
            </div>
        )
    }
}