/*
包含n个 action creator
异步action
同步action
 */
//每一个type必然对应一个同步action
import {
    LOGIN_SUCCESS,
    ERR_MSG,
    RECEIVE_NEWS,
    ALL_COURSE,
    USER_INFO,
    MY_COURSE,
    ALL_DISCUSS,
    THE_NEWS,
    THE_DISCUSS,
    ALL_TEACHER,
    THE_TEACHER,
    THE_TEACHER_COURSE,
    COURSE_DETAIL,
    COURE_REVIEW,
    STU_LIST,
    FEEDBACK
} from "./action-types";

import {
    reqLogin,
    reqNews,
    reqUserInfo,
    reqMyCourse,
    reqAllCourse,
    reqAllDiscuss,
    reqTheNews,
    reqTheDiscuss,
    reqAllTeacher,
    reqTheTeacher,
    reqteacherCourse,
    reqcoureDetail,
    reqcourseReview,
    reqstuList,
    reqFeedback
} from "../../api";


//登陆成功的同步action
const loginSuccess = (user) => ({type: LOGIN_SUCCESS, data: user});
//错误提示信息的action
const errMsg = (msg) => ({type: ERR_MSG, data: msg});
//登陆的异步action
export const userLogin = (user) => {
    return async dispatch => {
        const response = await reqLogin(user);
        const result = response.data;
        if (result.err_code === 1002) {
            dispatch(errMsg('该用户不存在！'))
        } else
            dispatch(loginSuccess(result))
    }
};

//getUserInfo
const receivedUserInfo = (userInfo) => ({type: USER_INFO, data: userInfo});

export const userInfo = (id) => {
    return async dispatch => {
        const response = await reqUserInfo(id);
        const result = response.data;
        if (result.error_code === 3011) {
            dispatch(receivedUserInfo(result.data[0]))
        } else
            dispatch(errMsg(result))
    }
};

//get News
//获取news同步action
const receiveNews = (news) => ({type: RECEIVE_NEWS, data: news});
export const receiveNew = () => {
    return async dispatch => {
        const response = await reqNews();
        const result = response.data;
        if (result.errorCode === 100) {
            dispatch(errMsg('获取news错误!'))
        } else
            dispatch(receiveNews(result))
    }
};

//my_course
const receivedMycourse = (course) => ({type: MY_COURSE, data: course});
//异步
export const receiveMyCourse = (userid) => {
    return async dispatch => {
        const response = await reqMyCourse(userid);
        const result = response.data;
        if (result.error_code === 5005) {
            dispatch(receivedMycourse(result.data))
        } else {
            dispatch(errMsg(result))
        }
    }
};

//get_all_course
const receiveAllcoure = (allCourse) => ({type: ALL_COURSE, data: allCourse});
//异步
export const receiveAllCourse = () => {
    return async dispatch => {
        const response = await reqAllCourse();
        const result = response.data;
        if (result.error_code === 5002) {
            dispatch(errMsg(result))
        } else {
            dispatch(receiveAllcoure(result.data))
        }
    }
}

//all_discuss
const receiveAlldiscuss = (allDiscuss) => ({type: ALL_DISCUSS, data: allDiscuss});
//异步
export const receiveAllDiscuss = () => {
    return async dispatch => {
        const response = await reqAllDiscuss();
        const result = response.data;
        if (result.error_code === 8004) {
            dispatch(errMsg(result))
        } else {
            dispatch(receiveAlldiscuss(result.data))
        }
    }
};

//the_news
const receiveThenews = (theNews) => ({type: THE_NEWS, data: theNews});
//
export const receiveTheNews = (id) => {
    return async dispatch => {
        const response = await reqTheNews(id);
        const result = response.data;
        if (result.error_code === 4008) {
            dispatch(errMsg(result))
        } else {
            dispatch(receiveThenews(result.data))
        }
    }
};

//the_discuss
const receiveThediscuss = (theDiscuss) => ({type: THE_DISCUSS, data: theDiscuss});
//
export const receiveTheDiscuss = (id) => {
    return async dispatch => {
        const response = await reqTheDiscuss(id);
        const result = response.data;
        if (result.error_code === 9006) {
            dispatch(errMsg(result))
        } else {
            dispatch(receiveThediscuss(result.data))
        }
    }
};

//all_teacher
const receiveAllTeacher = (allTeacher) => ({type: ALL_TEACHER, data: allTeacher});
//
export const receivedAllTeacher = () => {
    return async dispatch => {
        const response = await reqAllTeacher();
        const result = response.data;
        if (result.error_code === 2011) {
            dispatch(receiveAllTeacher(result.data))
        } else {
            dispatch(errMsg(result))
        }
    }
};

//the_teacher
const receiveTheteacher = (theTeacher) => ({type: THE_TEACHER, data: theTeacher});
//
export const receivedTheTeacher = (id) => {
    return async disptach => {
        const response = await reqTheTeacher(id);
        const result = response.data;
        if (result.error_code === 2014) {
            disptach(errMsg(result))
        } else {
            disptach(receiveTheteacher(result.data))
        }
    }
};

//teacher_course
const receiveTeachercourse = (teacherCourse) =>({type:THE_TEACHER_COURSE, data: teacherCourse});
//
export const receivedTeacherCourse = (id)=>{
    return async dispatch =>{
        const response = await reqteacherCourse(id);
        const result = response.data;
        if (result.error_code === 5007){
            dispatch(receiveTeachercourse(result.data))
        } else {
            dispatch(errMsg(result))
        }
    }
};

//course_detail
const receiveCoursedetail = (courseDetail) =>({type:COURSE_DETAIL,data:courseDetail});
//
export const receivedCourseDetail = (id)=>{
    return async dispatch =>{
        const response = await reqcoureDetail(id);
        const result = response.data;
        if (result.error_code===5011){
            dispatch(receiveCoursedetail(result.data))
        }else {
            dispatch(errMsg(result))
        }
    }
};

//course_review
const reCoursereview = (courseReview) =>({type:COURE_REVIEW,data:courseReview});
//
export const receivedCoureReview = (course_id,tea_id)=>{
    return async dispatch =>{
        const response = await reqcourseReview(course_id,tea_id);
        const result = response.data;
        if (result.error_code===6001){
            dispatch(reCoursereview(result.data))
        }else {
            dispatch(errMsg(result))
        }
    }
};

//stu_list
const reStulist = (stuList) =>({type:STU_LIST,data:stuList});
//
export const receivedStuList = (course_id,tea_id)=>{
    return async dispatch =>{
        const response = await reqstuList(course_id,tea_id);
        const result = response.data;
        if (result.error_code===3001){
            dispatch(reStulist(result.data))
        }else {
            dispatch(errMsg(result))
        }
    }
};


//feedback
const refeedback = (feedback) =>({type:FEEDBACK,data:feedback});
//
export const receivedFeedback = (course_id,tea_id)=>{
    return async dispatch =>{
        const response = await reqFeedback(course_id,tea_id);
        const result = response.data;
        if(result.error_code===209){
            dispatch(refeedback(result.data))
        }else {
            dispatch(errMsg(result))
        }
    }
};

