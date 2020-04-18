import Mock from 'mockjs'


export default Mock.mock('/stu/getTeaCon', 'post',{
    "error_code": 2013,
    "data": [
        {
            "age": 22,
            "checkintimes": 0,
            "email": "1008612@qq.com",
            "id": 2,
            "nickname": "小懒虫",
            "phone": "1008612",
            "picture": "@image('300x300','#363b40','teacher')",
            "remark": "郑州轻工业大学（Zhengzhou University of Light Industry）位于河南省会郑州市，是中央与地方共建、以地方管理为主的河南省特色骨干大学，是河南省人民政府和国家烟草专卖局共建高校，河南省博士学位授予重点立项建设单位，入选教育部卓越工程师教育培养计划、国家级大学生创新创业训练计划、全国毕业生就业典型经验高校、河南省优势特色学科建设工程。",
            "sex": 2,
            "status": "1",
            "username": "linln"
        }
    ]
} )