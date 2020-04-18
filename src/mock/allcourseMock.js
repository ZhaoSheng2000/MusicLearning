import Mock from 'mockjs'


export default Mock.mock('/stu/getAllCourse', 'get', {
    "error_code ": 5001,
    "data|12": [
        {
            "class_teacher": 2,
            "course_content": "@csentence(5,9)",
            "course_end_time": " 2020-04-01",
            "course_start_time": " 2020-03-01",
            "course_title": "@ctitle",
            "course_types_id": 1,
            "id": 1,
            "teausername":"abc",
            "img":"@image('300x160','#363b40','course')"
        },
    ]

})