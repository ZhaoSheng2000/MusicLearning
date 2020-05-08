import React from 'react'
import {Card, Col, Row} from "antd";
import { Line, GroupedColumn } from '@antv/g2plot';
import {reqchartMap} from "../../../../api";


const { Meta } = Card;

const mydata = [
    {
        name: '音乐',
        时间: 'Jan.',
        满意度: 99,
    },
    {
        name: '音乐',
        时间: 'Feb.',
        满意度: 98,
    },
    {
        name: '音乐',
        时间: 'Mar.',
        满意度: 93,
    },
    {
        name: '音乐',
        时间: 'Apr.',
        满意度: 91,
    },
    {
        name: '音乐',
        时间: 'May',
        满意度: 97,
    },
    {
        name: '音乐',
        时间: 'Jun.',
        满意度: 93,
    },
    {
        name: '音乐',
        时间: 'Jul.',
        满意度: 94,
    },
    {
        name: '音乐',
        时间: 'Aug.',
        满意度: 96,
    },
    {
        name: '古典',
        时间: 'Jan.',
        满意度: 94,
    },
    {
        name: '古典',
        时间: 'Feb.',
        满意度: 92,
    },
    {
        name: '古典',
        时间: 'Mar.',
        满意度: 95,
    },
    {
        name: '古典',
        时间: 'Apr.',
        满意度: 99,
    },
    {
        name: '古典',
        时间: 'May',
        满意度: 96,
    },
    {
        name: '古典',
        时间: 'Jun.',
        满意度: 92,
    },
    {
        name: '古典',
        时间: 'Jul.',
        满意度: 91,
    },
    {
        name: '古典',
        时间: 'Aug.',
        满意度: 91,
    },
    {
        name: '摇滚',
        时间: 'Jan.',
        满意度: 98,
    },
    {
        name: '摇滚',
        时间: 'Feb.',
        满意度: 98,
    },
    {
        name: '摇滚',
        时间: 'Mar.',
        满意度: 93,
    },
    {
        name: '摇滚',
        时间: 'Apr.',
        满意度: 91,
    },
    {
        name: '摇滚',
        时间: 'May',
        满意度: 93,
    },
    {
        name: '摇滚',
        时间: 'Jun.',
        满意度: 95,
    },
    {
        name: '摇滚',
        时间: 'Jul.',
        满意度: 95,
    },
    {
        name: '摇滚',
        时间: 'Aug.',
        满意度: 97,
    }
];


const data = [
    {
        date: '2018/8/1',
        type: '音乐',
        value: 4623,
    },
    {
        date: '2018/8/1',
        type: '古典',
        value: 2208,
    },
    {
        date: '2018/8/1',
        type: '摇滚',
        value: 182,
    },
    {
        date: '2018/8/2',
        type: '音乐',
        value: 6145,
    },
    {
        date: '2018/8/2',
        type: '古典',
        value: 2016,
    },
    {
        date: '2018/8/2',
        type: '摇滚',
        value: 257,
    },
    {
        date: '2018/8/3',
        type: '音乐',
        value: 508,
    },
    {
        date: '2018/8/3',
        type: '古典',
        value: 2916,
    },
    {
        date: '2018/8/3',
        type: '摇滚',
        value: 289,
    },
    {
        date: '2018/8/4',
        type: '音乐',
        value: 6268,
    },
    {
        date: '2018/8/4',
        type: '古典',
        value: 4512,
    },
    {
        date: '2018/8/4',
        type: '摇滚',
        value: 428,
    },
    {
        date: '2018/8/5',
        type: '音乐',
        value: 6411,
    },
    {
        date: '2018/8/5',
        type: '古典',
        value: 8281,
    },
    {
        date: '2018/8/5',
        type: '摇滚',
        value: 619,
    },
    {
        date: '2018/8/6',
        type: '音乐',
        value: 1890,
    },
    {
        date: '2018/8/6',
        type: '古典',
        value: 2008,
    },
    {
        date: '2018/8/6',
        type: '摇滚',
        value: 87,
    },
    {
        date: '2018/8/7',
        type: '音乐',
        value: 4251,
    },
    {
        date: '2018/8/7',
        type: '古典',
        value: 1963,
    },
    {
        date: '2018/8/7',
        type: '摇滚',
        value: 706,
    },
    {
        date: '2018/8/8',
        type: '音乐',
        value: 2978,
    },
    {
        date: '2018/8/8',
        type: '古典',
        value: 2367,
    },
    {
        date: '2018/8/8',
        type: '摇滚',
        value: 387,
    },
    {
        date: '2018/8/9',
        type: '音乐',
        value: 3880,
    },
    {
        date: '2018/8/9',
        type: '古典',
        value: 2956,
    },
    {
        date: '2018/8/9',
        type: '摇滚',
        value: 488,
    },
    {
        date: '2018/8/10',
        type: '音乐',
        value: 3606,
    },
    {
        date: '2018/8/10',
        type: '古典',
        value: 678,
    },
    {
        date: '2018/8/10',
        type: '摇滚',
        value: 507,
    },
    {
        date: '2018/8/11',
        type: '音乐',
        value: 4311,
    },
    {
        date: '2018/8/11',
        type: '古典',
        value: 3188,
    },
    {
        date: '2018/8/11',
        type: '摇滚',
        value: 548,
    },
    {
        date: '2018/8/12',
        type: '音乐',
        value: 4116,
    },
    {
        date: '2018/8/12',
        type: '古典',
        value: 3491,
    },
    {
        date: '2018/8/12',
        type: '摇滚',
        value: 456,
    },
    {
        date: '2018/8/13',
        type: '音乐',
        value: 6419,
    },
    {
        date: '2018/8/13',
        type: '古典',
        value: 2852,
    },
    {
        date: '2018/8/13',
        type: '摇滚',
        value: 689,
    },
    {
        date: '2018/8/14',
        type: '音乐',
        value: 1643,
    },
    {
        date: '2018/8/14',
        type: '古典',
        value: 4788,
    },
    {
        date: '2018/8/14',
        type: '摇滚',
        value: 280,
    },
    {
        date: '2018/8/15',
        type: '音乐',
        value: 445,
    },
    {
        date: '2018/8/15',
        type: '古典',
        value: 4319,
    },
    {
        date: '2018/8/15',
        type: '摇滚',
        value: 176,
    },
];


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


        const linePlot = new Line('container2', {
            title: {
                visible: true,
                text: '课程统计',
            },
            description: {
                visible: true,
                text: '从开课至今的课程记录',
            },
            padding: 'auto',
            forceFit: true,
            data,
            xField: 'date',
            yField: 'value',
            yAxis: {
                label: {
                    // 数值格式化为千分位
                    formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
                },
            },
            legend: {
                position: 'right-top',
            },
            seriesField: 'type',
            responsive: true,
        });
        linePlot.render();
        const columnPlot = new GroupedColumn('container', {
            title: {
                visible: true,
                text: '课程满意度',
            },
            forceFit: true,
            data:mydata,
            xField: '时间',
            yField: '满意度',
            yAxis: {
                min: 0,
            },
            label: {
                visible: true,
            },
            groupField: 'name',
            color: ['#1ca9e6', '#f88c24'],
        });
        columnPlot.render();



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
                    <Col span={24}>
                        <Card>
                            <Meta  description={<div id="container2"/>} />
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card>
                            <Meta  description={<div id="container"/>} />
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}