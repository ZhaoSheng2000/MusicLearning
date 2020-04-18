import Mock from 'mockjs'


export default Mock.mock('/stu/selectAllCourse', 'post',{
    "error_code": 5005,
    "data|4": [
        {
            "class_teacher": 2,
            "course_content": "存储结构",
            "course_end_time": "2020-04-01",
            "course_start_time": "2020-03-01",
            "course_title": "数据库",
            "course_types_id": 1,
            "id": 1,
            "teausername":"@cname",
            "img":"@image('230x130','#363b40','myCourse')"
        }
    ]
} )