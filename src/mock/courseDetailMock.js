import Mock from 'mockjs'


export default Mock.mock('/stu/getCourseById', 'post',{
    "error_code": 5011,
    "data": [
        {
            "class_teacher": 2,
            "course_content": "这门课勾勒出流行音乐的风格地形图，各种重要风格悉数登场。著名音乐人用他们的手指和歌喉，对流行音乐“开膛破肚”，在显微镜下透视其组成部件和内脏器官，告诉你它之所以是这样而不是那样一种风格的原因；还会教你如何写歌写词，如何唱歌弹琴和编曲。快！一起“玩转”流行音乐吧。\n",
            "course_end_time": "2020-04-01",
            "course_start_time": "2020-03-01",
            "course_title": "数据库",
            "course_types_id": 1,
            "id": 1,
            "img": "https://s1.ax1x.com/2020/04/02/GYYhPs.jpg",
            "signin": 10,
            "teausername": "linln"
        }
    ]
} )