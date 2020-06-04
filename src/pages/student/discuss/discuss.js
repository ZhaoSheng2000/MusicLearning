import React from 'react'
import {connect} from 'react-redux'
import {Card, Col, Pagination, Row, Typography} from "antd";

import {receiveAllDiscuss,receiveTheDiscuss} from "../../redux/actions";

const {Title, Paragraph, Text} = Typography;



class Discuss extends React.Component {

    state = {
        discuss: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
    componentDidMount() {
        this.props.receiveAllDiscuss()
    }

    onChange = (pageNumber)=> {
        console.log('Page: ', pageNumber);
    };

    onDetail=(id)=>{
        this.props.receiveTheDiscuss(id);
        console.log(typeof id);
        this.props.history.push({pathname:'/discussDetail',state:{id:id}});
    };

    render() {
        const {allDiscuss} = this.props.allDiscuss;

        return (
            <div>
                <Title level={3} style={{paddingTop: 16}}>课堂交流</Title>
                <Row gutter={[16, 16]}>
                    <Col span={18}>
                        {
                            allDiscuss.map((name, index) => {
                                return (
                                    <Card key={index} hoverable onClick={()=>this.onDetail(name.id)}>
                                        <Row gutter={16}>
                                            <Col span={8}>
                                                <img alt='course' src="https://s1.ax1x.com/2020/03/31/GMW6IS.jpg"/>
                                            </Col>
                                            <Col span={16}>
                                                <Title level={4}>{name.problem}</Title>
                                                <Paragraph>
                                                    {name.problem}
                                                </Paragraph>
                                                <Text type="warning">来自{name.coursename}课程</Text>
                                            </Col>
                                        </Row>
                                    </Card>
                                )
                            })
                        }
                    </Col>
                </Row>

            </div>
        )
    }
}
export default connect(stete=>
    ({allDiscuss:stete.allDiscuss}),
    {receiveAllDiscuss,receiveTheDiscuss})(Discuss)