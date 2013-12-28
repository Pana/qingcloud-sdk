/*
* 
* Module: qingcloud-sdk
* Date: 2013-12-26
* Author: Pana
*
*/
var request = require('request')
    , utils = require('./util')
    , config = require('./config')
    , actions = config.actions;


/*
* qing对象
*/ 
var qing = {
    errors: config.errors
};


// 生成API
for (var a in actions) {
    var info = actions[a];
    qing[a] = createFunc(a, info);
}



/*
* 多参数正则
*/
var Reg = /\.n/;


/////////////////////////////////////////////////
/*
* 共有参数
*/ 
var COMMON = [
    'action', 'time_stamp', 'access_key_id', 'version', 
    'signature_method', 'signature_version', 'signature'
];


/*
* 创建普通参数对象
*/
function createCommonParam () {
    return {
        time_stamp: utils.get_ts(),
        access_key_id: qing.access_key_id,
        version: config.version,
        signature_method: 'HmacSHA256',
        signature_version: config.signature_version
    };
}

/*
* 创建方法
*/
function createFunc (a, info) {
    var fn = function (cbk, opts) {
        opts = opts || {};
        // 检查必要参数
        for (var i in info.required) {
            var p = info.required[i];
            if (opts[p] === undefined)
                return cbk(new Error('Lack required params: ' + p));
            if (Reg.test(p) && !Object.isArray(opts[p]))
                return cbk(new Error('Param ' + p + ' should be a array'));
        }

        // 组转param
        var params = createCommonParam();
        params.action = a;
        var ps = [].concat(info.required).concat(info.optional);
        for (var i in ps) {
            var p = ps[i];
            if (opts[p] !== undefined) {
                if (!Reg.test(p)) {
                    params[p] = opts[p];
                } else if (Array.isArray(opts[p])) {  // 数组形式参数处理
                    for(var j in opts[p]){
                        var tmpp = p;
                        params[tmpp.replace(Reg, '.'+(Number(j)+1))] = opts[p][j];
                    }
                } else {
                    return cbk(new Error('Param ' + p + ' should be a array'));
                }
            }
        }

        // URL 编码
        var params_arra = [];
        for (var i in params) {
            params_arra.push(i + '=' + utils.escape(params[i]));
        }

        // 排序
        var query = params_arra.sort().join('&');

        // 签名字符串
        var sign_str = 'GET' + "\n" + '/iaas/' + "\n" + query;

        var signature = utils.sign(sign_str, qing.secret_access_key, 'sha256');

        query += '&signature=' + utils.escape(signature);  // 签名同样需要URL转义

        var url = config.host + '?' + query;
        request(url, function(err, response, body){
            if (err)
                cbk(err);
            else
                cbk(null, JSON.parse(body));
        });
    }
    return fn;
}









/*
* 输出Module 
*/
module.exports = qing;


/*
* TODO
*   签名方法改由参数控制
* 
*/
