/*
包含多个reducer函数：根据老的state和制定的action返回一个新的state
 */
//暴露多个函数需要combineReducers
import {combineReducers} from 'redux'

import {
    LOGIN_SUCCESS,
    ERR_MSG,
    RECEIVE_NEWS,
    USER_INFO,
    MY_COURSE,
    ALL_COURSE,
    ALL_DISCUSS,
    THE_DISCUSS,
    ALL_TEACHER,
    THE_TEACHER,
    THE_TEACHER_COURSE,
    COURSE_DETAIL,
    COURE_REVIEW,
    STU_LIST,
    FEEDBACK
} from "./action-types";


const defaultUser = {
    user: '',
}

//产生user状态的reducer
function user(state = defaultUser, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, user: action.data.data};
        case ERR_MSG:
            return {...state, message: action.data};
        default:
            return state
    }
}

//news
const defaultNews = {
    news: [],
}

function news(state = defaultNews, action) {
    switch (action.type) {
        case RECEIVE_NEWS:
            return {...state, news: action.data.data};
        case ERR_MSG:
            return {...state, message: action.data}
        default:
            return state
    }
}

//userinfo
const initUserInfo = {userinfo: {}};

function userInfo(state = initUserInfo, action) {
    if (action.type === USER_INFO) {
        return {...state, userinfo: action.data};
    } else {
        return state
    }
}

//my_course
const initMyCourse = {mycourse: []};

function myCourse(state = initMyCourse, action) {
    if (action.type === MY_COURSE) {
        return {...state, mycourse: action.data}
    } else {
        return state
    }
}

//all_course
const initAllcourse = {allCourse: []};

function allCourse(state = initAllcourse, action) {
    if (action.type === ALL_COURSE) {
        return {...state, allCourse: action.data}
    } else {
        return state
    }
}

//all_discuss
const initAlldiscuss = {allDiscuss: []};

function allDiscuss(state = initAlldiscuss, action) {
    if (action.type === ALL_DISCUSS) {
        return {...state, allDiscuss: action.data}
    } else {
        return state
    }
}


//the_discuss
const initThediscuss = {theDiscuss: ''};

function theDiscuss(state = initThediscuss, action) {
    if (action.type === THE_DISCUSS) {
        return {...state, theDiscuss: action.data[0]}
    } else {
        return state
    }
}

//all_teacher
const initAllteacher = {allTeacher: []};

function allTeacher(state = initAllteacher, action) {
    if (action.type === ALL_TEACHER) {
        return {...state, allTeacher: action.data}
    } else {
        return state
    }
}

//the_teacher
const initTheteacher = {theTeacher: ''};

function theTeacher(state = initTheteacher, action) {
    if (action.type === THE_TEACHER) {
        return {...state, theTeacher: action.data[0]}
    } else {
        return state
    }
}

//teacher_course
const inittheachercourse = {teacherCourse: []};

function teacherCourse(state = inittheachercourse, action) {
    if (action.type === THE_TEACHER_COURSE) {
        return {...state, teacherCourse: action.data}
    } else {
        return state
    }
}

//course_detail
const initcourseDetail = {courseDetail: ''};

function courseDetail(state = initcourseDetail, action) {
    if (action.type === COURSE_DETAIL) {
        return {...state, courseDetail: action.data[0]}
    } else {
        return state
    }
}

//course_review
const initcoureReview = {courseReview: []};

//
function courseReview(state = initcoureReview, action) {
    if (action.type === COURE_REVIEW) {
        return {...state, courseReview: action.data}
    } else {
        return state
    }
}

//stu_list
const initstuList = {stuList: []};

//
function stuList(state = initstuList, action) {
    if (action.type === STU_LIST) {
        return {...state, stuList: action.data}
    } else {
        return state
    }
}

//feedback
const initfeedBack = {feedback: []};

//
function feedBack(state = initfeedBack, action) {
    if (action.type === FEEDBACK) {
        return{...state,feedback: action.data}
    }else {
        return state
    }
}


export default combineReducers({
    user, news, userInfo, myCourse,
    allCourse, allDiscuss, theDiscuss,
    allTeacher, theTeacher, teacherCourse, courseDetail, courseReview, stuList,feedBack
})
