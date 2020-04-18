import Mock from 'mockjs'


export default Mock.mock('/stu/getTeaCourse', 'post',{
    "error_code": 5007,
    "data": [
        {
            "class_teacher": 2,
            "course_content": "存储结构",
            "course_end_time": "2020-04-01",
            "course_start_time": "2020-03-01",
            "course_title": "数据库",
            "course_types_id": 1,
            "id": 1
        },
        {
            "class_teacher": 2,
            "course_content": "程序设计语言",
            "course_end_time": "2020-04-02",
            "course_start_time": "2020-03-02",
            "course_title": "程序设计",
            "course_types_id": 2,
            "id": 2
        },
        {
            "class_teacher": 2,
            "course_content": "对于软件的测试",
            "course_end_time": "2020-04-01",
            "course_start_time": "2020-03-01",
            "course_title": "软件测试",
            "course_types_id": 1,
            "id": 4
        },
        {
            "class_teacher": 2,
            "course_content": "高数",
            "course_end_time": "2020-04-02",
            "course_start_time": "2020-03-02",
            "course_title": "高等数学",
            "course_types_id": 1,
            "id": 5
        }
    ]
} )