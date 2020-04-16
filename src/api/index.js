import axios from 'axios'
import '../mock/loginMock'
import '../mock/newMock'
import "../mock/userMock";
import "../mock/myCourseMock";
import  "../mock/allcourseMock";
//登录接口
export const reqLogin = ({username, password}) => axios.post('/my/login', {
    username,
    password
});

//获取最新资讯
export const reqNews = () => axios.get('/notice/find');

//获取用户信息
export const reqUserInfo = (id) => axios.post('/stu/getAllThings', {id});

//获取所有课程
export const reqAllCourse = () => axios.get('/stu/getAllCourse');

//My_course
export const reqMyCourse = (id) => axios.post('/stu/selectAllCourse', {stu_id: id});