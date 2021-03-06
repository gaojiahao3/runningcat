import rest from '../rest/_util';
/*
	特训营
 */

/*特训营列表*/
exports.till = (req, res, next) => {
    new rest({
        functionCode: 'specialClass.querySpecialClasses',
    }).link(req, res, next);
}

/*特训营详情*/
exports.tillDetail = (req, res, next) => {
    new rest({
        functionCode: 'specialClass.querySpecialClassInfo',
    }).post(req, res, next);
}

/*特训营详情 link*/
exports.querySpecialClassInfo = (req, res, next) => {
    new rest({
        functionCode: 'specialClass.querySpecialClassInfo',
    }).link(req, res, next);
}

exports.getUsrSpecialOnceInfo = (req, res, next) => {
    new rest({
        functionCode: 'usrClasstimeOrder.getUsrSpecialOnceInfo',
    }).link(req, res, next);
}