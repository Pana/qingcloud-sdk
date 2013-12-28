var util = require('util');
var crypto = require('crypto');
var qs = require('querystring');


module.exports = {
    sign_method: function(){
        var methods = ['HMAC-SHA256', 'HMAC-SHA1'];
        return methods;
    },

    /*
    * method: default sha1, can be sha256
    */
    sign: function(data, key, method){
        method = method || 'sha1';
        var hmac = crypto.createHmac(method, key);
        hmac.update(data);
        return hmac.digest('base64');
    },

    save_private_key: function(file_name, private_key){

    },

    save_file: function(file_name, content){

    },

    get_utf8_value: function(value){

    },

    // keys用于指定想要保留的key, 非必须参数
    filter_out_none: function(dictionary, keys){

    },

    /*
    * 获取UTC+0的时间字符串: 2013-08-27T13:58:35Z
    */
    get_ts: function(date){
        date = date || new Date;
        var year = date.getUTCFullYear()
            , month = add0(date.getUTCMonth() + 1)
            , day = add0(date.getUTCDate())
            , hour = add0(date.getUTCHours())
            , minute = add0(date.getUTCMinutes())
            , second = add0(date.getUTCSeconds());

        return util.format('%s-%s-%sT%s:%s:%sZ', year, month, day, hour, minute, second);
    },

    parse_ts: function(ts){

    },

    get_expired_ts: function(ts, time_out){

    },

    /*
    * url转移
    */
    escape: function(str){
        return qs.escape(str);
    }
    
}

/*
* 如果数字不满十则在前边补0
*/
function add0(num){
    return num > 9 ? num : '0' + num;
}