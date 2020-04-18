import Mock from 'mockjs'


export default Mock.mock('/chart/getChartMap', 'get',{
    "error_code": 5009,
    "data": [
        {
            "软件测试": 12,
            "程序设计": 11,
            "高等数学": 13,
            "数据库": 10,

        }
    ]
} )