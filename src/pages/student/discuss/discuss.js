import React from 'react'
import {Card, Col, Pagination, Row, Typography} from "antd";

const {Title, Paragraph, Text} = Typography;


export default class Discuss extends React.Component {

    state = {
        discuss: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };

    onChange = (pageNumber)=> {
        console.log('Page: ', pageNumber);
    };

    onDetail=()=>{
      this.props.history.push('/discussDetail')
    };

    render() {
        return (
            <div>
                <Title level={3} style={{paddingTop: 16}}>课堂交流</Title>
                <Row gutter={[16, 16]}>
                    <Col span={18}>
                        {
                            this.state.discuss.map((name, index) => {
                                return (
                                    <Card hoverable onClick={this.onDetail}>
                                        <Row gutter={16}>
                                            <Col span={8}>
                                                <img alt='course' src="https://s1.ax1x.com/2020/03/31/GMW6IS.jpg"/>
                                            </Col>
                                            <Col span={16}>
                                                <Title level={4}>XXX{name}如何解决</Title>
                                                <Paragraph>
                                                    同学们遇到XXXXXXXX？
                                                </Paragraph>
                                                <Text type="warning"> 来自XXXX{name}课程</Text>
                                            </Col>
                                        </Row>
                                    </Card>
                                )
                            })
                        }
                    </Col>
                </Row>

                <div style={{textAlign:"center"}}>
                    <Pagination  defaultPageSize={24} defaultCurrent={1} total={500} onChange={this.onChange}/>
                </div>
            </div>
        )
    }
}