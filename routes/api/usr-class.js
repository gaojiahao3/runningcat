import rest from '../rest/_util';
/*
	单次课签到
 */
exports.doSignIn = (req, res, next) => {
    new rest({
        functionCode: 'usrClasstimeOrder.doSignIn',
    }).post(req, res);
}

/*
	单次课请假
 */
exports.doLeave = (req, res, next) => {
    new rest({
        functionCode: 'usrClasstimeOrder.doLeave',
    }).post(req, res);
}

/*
	查询课次作业
 */

exports.getCourseWorkInfo = (req, res, next) => {
    new rest({
        functionCode: 'usrCoursetimeWork.getCourseWorkInfo',
    }).post(req, res);
}

/*
	查询我的课次作业
 */

exports.findMyCourseWorkt = (req, res, next) => {
    new rest({
        functionCode: 'usrCoursetimeWork.findMyCourseWorkt',
    }).post(req, res);
}

/*
	提交课次作业
 */

exports.doCourseWork = (req, res, next) => {
    new rest({
        functionCode: 'usrCoursetimeWork.doCourseWork',
    }).post(req, res);
}

/*
	修改课次作业
 */

exports.updateCourseWork = (req, res, next) => {
    new rest({
        functionCode: 'usrCoursetimeWork.updateCourseWork',
    }).post(req, res);
}

/*
    评价页面获取感受值列表
 */
exports.getTrainFeel = (req, res, next) => {
    new rest({
        functionCode: 'classEvaluate.getTrainFeel',
    }).link(req, res,next);
}

/*
    单次课添加评价
 */
exports.addUsrClassEvaluate_classEvaluate = (req, res, next) => {
    new rest({
        functionCode: 'classEvaluate.addUsrClassEvaluate',
    }).post(req, res);
}

/*
    单次课查询评价
 */

exports.getUsrClassEvaluate_classEvaluate = (req, res, next) => {
    new rest({
        functionCode: 'classEvaluate.getUsrClassEvaluate',
    }).link(req, res,next);
}

/*
    单次课评价查询用户剩余猫粮数
 */
exports.getMemberFoodNum = (req, res, next) => {
    new rest({
        functionCode: 'classEvaluate.getMemberFoodNum',
    }).link(req, res,next);
}

/*
    特训营单次课添加评价
 */

exports.addUsrClassEvaluate_specialEvaluate = (req, res, next) => {
    new rest({
        functionCode: 'specialEvaluate.addUsrClassEvaluate',
    }).post(req, res);
}

/*
    特训营单次课查询评价
 */
exports.getUsrClassEvaluate_specialEvaluate = (req, res, next) => {
    new rest({
        functionCode: 'specialEvaluate.getUsrClassEvaluate',
    }).link(req, res,next);
}


