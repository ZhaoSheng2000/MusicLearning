import React from 'react'
import {Card, Col, Row} from "antd";
import { Line } from '@antv/g2plot';

const { Meta } = Card;

export default class Classes extends React.Component {

    componentDidMount() {
        const data = [
            { year: '第一周', value: 3 },
            { year: '第二周', value: 4 },
            { year: '第三周', value: 3 },
            { year: '第四周', value: 5 },
            { year: '第五周', value: 4 },
            { year: '第六周', value: 6 },
            { year: '第七周', value: 7 },
            { year: '第八周', value: 9 },
            { year: '第九周', value: 3 },
        ];

        const linePlot = new Line('canvas', {
            data,
            xField: 'year',
            yField: 'value',
        });

        linePlot.render();
    }
    state = {};
    render() {
        return (
            <div>
                <Row gutter={[16,16]}>
                    <Col span={24}>
                        <Card
                            title={'上课次数'}
                        >
                            <Meta  description={<div id="canvas"/>} />
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}