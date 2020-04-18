import Mock from 'mockjs'


export default Mock.mock('/disc/select', 'get',{
    "error_code": 8003,
    "data|10": [
        {
            "id": 1,
            "problem": "你的梦想是什么?",
            "release_time": "2020-05-21 13:00:00",
            "tea_id": 2,
            "teausername":"赵盛",
            "courseid":1,
            "coursename":"音乐素养"
        }
    ]
} )