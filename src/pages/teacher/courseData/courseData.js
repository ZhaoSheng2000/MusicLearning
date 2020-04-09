import React from 'react'
import {Card, Col, Row} from "antd";
import { Line } from '@antv/g2plot';

const { Meta } = Card;

export default class CourseData extends React.Component {

    componentDidMount() {
        const data = [
            { year: '1991', value: 3 },
            { year: '1992', value: 4 },
            { year: '1993', value: 3.5 },
            { year: '1994', value: 5 },
            { year: '1995', value: 4.9 },
            { year: '1996', value: 6 },
            { year: '1997', value: 7 },
            { year: '1998', value: 9 },
            { year: '1999', value: 13 },
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
                    <Col span={12}>
                        <Card
                            title={'学生记录'}
                        >
                            <Meta  description={<div id="canvas"/>} />
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}