import axios from 'axios'
// import '../mock/loginMock'
// import '../mock/newMock'
// import "../mock/userMock";
// import "../mock/myCourseMock";
// import  "../mock/allcourseMock";
// import  "../mock/alldiscussMock";
// import  "../mock/theNewsMock";
// import  "../mock/theDiscussMock";
// import  "../mock/allTeacherMock";
// import  "../mock/theTeacherMock";
// import  "../mock/teacherCoure";
// import  "../mock/courseDetailMock";
// import  "../mock/courseReviewMock";
// import  "../mock/addCourseMock";
// import  "../mock/updateUserMock";
// import  "../mock/getChartMapMock";
// import  "../mock/stuListMock";
// import  "../mock/feedBackMck";
// import "../mock/newDiscussMock";
// import "../mock/noticeMock";
const baseUrl = "";

//登录接口
export const reqLogin = ({username, password}) => axios.post(baseUrl+'/my/login', {
    username,
    password
});
//获取最新资讯
export const reqNews = () => axios.get(baseUrl+`/notice/find`);

//获取用户信息
export const reqUserInfo = (id) => axios.post(baseUrl+'/stu/getAllThings', {id});//正确

//获取所有课程
export const reqAllCourse = () => axios.get(baseUrl+'/stu/getAllCourse');


//My_course
export const reqMyCourse = (id) => axios.post(baseUrl+'/stu/selectAllCourse', {stu_id: id});//正确

//all_discuss
export const reqAllDiscuss = ()=> axios.get(baseUrl+'/disc/select');

//theNews
export const reqTheNews = (id) =>axios.post(baseUrl+'/notice/getContent',{id});

//the_discuss
export const reqTheDiscuss =(dis_id) =>axios.post(baseUrl+'/disc/getDisReplyByID',{dis_id});//正确
//the_discuss_reback
export const reqdisscussReback = (dis_id,stu_id,content) =>axios.post('/disc/addDisRespsitory',{dis_id,stu_id,content})
//all_teacher
export const reqAllTeacher = ()=>axios.get(baseUrl+'/stu/getTeaList');

//the_teacher
export const reqTheTeacher = (id) =>axios.post(baseUrl+'/stu/getTeaCon',{id}); //正确

//the_teacher_course
export const reqteacherCourse = (tea_id) =>axios.post(baseUrl+'/stu/getTeaCourse',{tea_id});//正确

//course_detail
export const reqcoureDetail = (id) =>axios.post(baseUrl+'/stu/getCourseById',{id});

//course_review
export const reqcourseReview = (course_id,tea_id)=>axios.post(baseUrl+'/tea/stuEvaluation',{course_id,tea_id});//zq

//add_course
export const reqaddCourse = (course_id,tea_id,stu_id) =>axios.post(baseUrl+'/stu/addCourse',{course_id,tea_id,stu_id});//zq

//update_user
export const requpdateUser = (id,age,picture,nickname,email,phone) =>axios.post(baseUrl+'/tea/changeBase',{id,age,picture,nickname,email,phone});//zq


//getChartMap
export const reqchartMap = () =>axios.get(baseUrl+'/chart/getChartMap');

//getStuList
export const reqstuList = (course_id,tea_id) =>axios.post(baseUrl+'/stu/getCourseStuList',{course_id,tea_id});//zq

//查看反馈
export const reqFeedback = (course_id,tea_id) =>axios.post(baseUrl+'/tea/stuFeedback',{course_id,tea_id});//zq

//新建讨论
export const reqNewDiscuss = (tea_id,problem,release_time,course_id)=>axios.post(baseUrl+'/disc/addDiscus',{tea_id,problem,release_time,course_id})

//获取老师通知
export const reqNotice = (tosub)=>axios.post(baseUrl+'/notice/findNoteEach',{tosub});

//获取教师所有学生
export const reqAllStudent = (tea_id) =>axios.post(baseUrl+'/stu/getTeaAllStu',{tea_id});