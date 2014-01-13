var qing = require('../index')
    , mocha = require('mocha')
    , util = require('../lib/util')
    , assert = require('assert');

// 有没有更好的设置方式
qing.access_key_id = '';
qing.secret_access_key = '';





// describe('Instance APIs', function(){

//     it('DescribeInstances', function(done){
//         qing.DescribeInstances({zone: 'pek1'}, function(err, data){
//             if(err)
//                 console.log(err.message);
//             else
//                 console.log(data);
//             done();
//         });
//     })

// });




describe('Image APIs', function(){
    it('DescribeImages', function(done){

        qing.DescribeImages({zone: 'pek1'}, function(err, data){
            if(err)
                console.log(err.message);
            else
                console.log(data);
            done();
        });

    });
});



// describe('util test', function(){

//     it('get_ts', function(){
//         console.log(util.get_ts());
//     });

// });