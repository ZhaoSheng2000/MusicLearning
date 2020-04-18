import Mock from 'mockjs'


export default Mock.mock('/tea/stuFeedback', 'post',{
    "error_code": 209,
    "data|10": [
        {
            "course_id": 2,
            "feedback": "程序设计课后反馈内容",
            "stu_id": 3,
            "tea_id": 2
        }
    ]
} )