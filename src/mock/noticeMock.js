import Mock from 'mockjs'


export default Mock.mock('/notice/findNoteEach', '', {
    "error_code": 4009,
    "data|10": [
        {
            "content": "资讯三内容",
            "id": 4,
            "intro": "给教师的。",
            "picture": "pic3",
            "time": "2020-15-04 20:27:28",
            "title": "标题3",
            "tosub": 2
        }
    ]
})