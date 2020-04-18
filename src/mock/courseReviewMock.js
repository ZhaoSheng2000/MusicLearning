import Mock from 'mockjs'


export default Mock.mock('/tea/stuEvaluation', 'post',{
    "error_code": 6001,
    "data|10": [
        {
            "course_id": 1,
            "evaluation": "@cparagraph(2)",
            "stu_id": 3,
            "tea_id": 2
        }
    ]
} )