import React from 'react'
import {connect} from 'react-redux'
import {Col, Row, Typography, Divider, Card} from "antd";

import {receiveNew} from "../../redux/actions";

const { Title, Paragraph } = Typography;
const {Meta} =Card;

class InformationDetail extends React.Component {

    componentDidMount() {
        this.props.receiveNew();
    }

    state = {};

    render() {
        const {news} = this.props.news;
        const {theNews} = this.props.theNews;

        console.log(news,theNews);
        return (
            <div>
                <Row gutter={16}>
                    <Col span={18}>
                        <Card style={{minHeight:window.innerHeight-120}}>
                            <Typography>
                               <Title>{theNews.title}</Title>
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
export default connect(state=>({ news: state.news,theNews:state.theNews}),{receiveNew})(InformationDetail)