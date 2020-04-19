import axios from 'axios'
import '../mock/loginMock'
import '../mock/newMock'
import "../mock/userMock";
import "../mock/myCourseMock";
import  "../mock/allcourseMock";
import  "../mock/alldiscussMock";
import  "../mock/theNewsMock";
import  "../mock/theDiscussMock";
import  "../mock/allTeacherMock";
import  "../mock/theTeacherMock";
import  "../mock/teacherCoure";
import  "../mock/courseDetailMock";
import  "../mock/courseReviewMock";
import  "../mock/addCourseMock";
import  "../mock/updateUserMock";
import  "../mock/getChartMapMock";
import  "../mock/stuListMock";
import  "../mock/feedBackMck";
import "../mock/newDiscussMock";
import "../mock/noticeMock";
//登录接口
export const reqLogin = ({username, password}) => axios.post('/my/login', {
    username,
    password
});

//获取最新资讯
export const reqNews = () => axios.get('/notice/find');

//获取用户信息
export const reqUserInfo = (id) => axios.post('/stu/getAllThings', {id});//正确

//获取所有课程
export const reqAllCourse = () => axios.get('/stu/getAllCourse');


//My_course
export const reqMyCourse = (id) => axios.post('/stu/selectAllCourse', {stu_id: id});//正确

//all_discuss
export const reqAllDiscuss = ()=> axios.get('/disc/select');

//theNews
export const reqTheNews = (id) =>axios.post('/notice/getContent',{id});//正确

//the_discuss
export const reqTheDiscuss =(dis_id) =>axios.post('/disc/getDisReplyByID',{dis_id});//正确

//all_teacher
export const reqAllTeacher = ()=>axios.get('/stu/getTeaList');

//the_teacher
export const reqTheTeacher = (id) =>axios.post('/stu/getTeaCon',{id}); //正确

//the_teacher_course
export const reqteacherCourse = (tea_id) =>axios.post('/stu/getTeaCourse',{tea_id});//正确

//course_detail
export const reqcoureDetail = (id) =>axios.post('/stu/getCourseById',{id});//正确

//course_review
export const reqcourseReview = (course_id,tea_id)=>axios.post('/tea/stuEvaluation',{course_id,tea_id});//zq

//add_course
export const reqaddCourse = (course_id,tea_id,stu_id) =>axios.post('/stu/addCourse',{course_id,tea_id,stu_id});//zq

//update_user
export const requpdateUser = (id,age,picture,nickname,email,phone) =>axios.post('/tea/changeBase',{id,age,picture,nickname,email,phone});//zq


//getChartMap
export const reqchartMap = () =>axios.get('/chart/getChartMap');

//getStuList
export const reqstuList = (course_id,tea_id) =>axios.post('/stu/getCourseStuList',{course_id,tea_id});//zq

//查看反馈
export const reqFeedback = (course_id,tea_id) =>axios.post('/tea/stuFeedback',{course_id,tea_id});//zq

//新建讨论
export const reqNewDiscuss = (tea_id,problem,release_time,course_id)=>axios.post('/disc/addDiscus',{tea_id,problem,release_time,course_id})

//获取老师通知
export const reqNotice = (tosub)=>axios.post('/notice/findNoteEach',{tosub});