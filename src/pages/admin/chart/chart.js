import React from 'react'
import {Line} from '@antv/g2plot';
import {Card} from "antd";

const data = [
    {year: '1', value: 99},
    {year: '2', value: 97},
    {year: '3', value: 92},
    {year: '4', value: 95},
    {year: '5', value: 99},
    {year: '6', value: 96},
    {year: '7', value: 91},
    {year: '8', value: 97},
    {year: '9', value: 98},
];


export default class Chart extends React.Component {

    state = {};

    componentDidMount() {
        const linePlot = new Line(document.getElementById('container'), {
            title: {
                visible: true,
                text: '整体出勤率',
            },
            description: {
                visible: true,
                text: '记录了本周开课至今的课堂整体出勤率。',
            },
            forceFit: true,
            padding: 'auto',
            data,
            meta: {
                year: {
                    alias: '周',
                    formatter: (v) => {
                        return `第${v}周`
                    }
                },
                value: {
                    alias: '出勤率',
                    formatter: (v) => {
                        return `${v}%`
                    }
                }
            },
            xField: 'year',
            yField: 'value',
            yAxis: {
                min:50,
                max:100
            },
            point: {
                visible: true,
            },
            label: {
                visible: true,
                type: 'point',
            },
        });
        linePlot.render();
    }

    render() {

        return (
            <div>
                <Card>
                    <div id="container"></div>
                </Card>
            </div>
        )
    }
}