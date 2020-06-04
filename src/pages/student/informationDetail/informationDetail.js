import React from 'react'
import {connect} from 'react-redux'
import {Col, Row, Typography, Divider, Card} from "antd";

import {receiveNew} from "../../redux/actions";
import {reqTheNews} from "../../../api"

const { Title, Paragraph } = Typography;
const {Meta} =Card;

class InformationDetail extends React.Component {

    componentDidMount() {
        const {id} = this.props.location.state
        this.props.receiveNew();
        reqTheNews(id).then(res =>{
            const news = res.data.data[0]
            this.setState({theNews:news})
        })
    }

    state = {theNews:''};

    render() {
        const {news} = this.props.news;
        const {theNews} = this.state;
        console.log(theNews)
        return (
            <div>
                <Row gutter={16}>
                    <Col span={18}>

                        <Card style={{minHeight:window.innerHeight-120}}>
                            <Typography>
                               <Title>{theNews.title}</Title>
                                <Paragraph>
                                    <img alt="news" src={theNews.picture} />
                                </Paragraph>
                                <Paragraph>
                                    {theNews.content}
                                </Paragraph>
                            </Typography>
                        </Card>
                    </Col>
                    <Col span={6}>
                       <Card title='最新资讯' >
                           {news.slice(0,4).map((name,index)=>{
                               return(
                                   <Card
                                       key={index}
                                       type={"inner"}
                                   >
                                       <Meta title={name.title} description={name.intro} />
                                   </Card>
                               )
                           })}
                       </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}
export default connect(state=>({ news: state.news}),{receiveNew})(InformationDetail)