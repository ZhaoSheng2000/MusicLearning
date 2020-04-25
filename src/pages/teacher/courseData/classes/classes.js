import React from 'react'
import {Card, Col, Row} from "antd";
import { Line } from '@antv/g2plot';
import {reqchartMap} from "../../../../api";


const { Meta } = Card;

export default class Classes extends React.Component {

    componentDidMount() {
        reqchartMap().then(e =>{
            const data = e.data.data;
            const linePlot = new Line('canvas', {
                data,
                xField: 'course',
                yField: 'value',
            });


            linePlot.render();
        });



    }
    state = {};
    render() {
        return (
            <div>
                <Row gutter={[16,16]}>
                    <Col span={24}>
                        <Card
                            title={'签到次数'}
                        >
                            <Meta  description={<div id="canvas"/>} />
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}