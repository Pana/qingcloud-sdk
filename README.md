qingcloud-sdk
=============
A node port of qingcloud.com's python SDK library.

## Install

    npm install qingcloud-sdk

## Example
```
var qing = require('qing');
// set key_id and key
qing.access_key_id = 'access_key_id';
qing.secret_access_key = 'secret_access_key';
// call the API
qing.DescribeInstances({zone: 'pek1'}, function(err, data){
    if(err)
        console.log(err.message);
    else
        console.log(data);
});
```

## API signature
```
qing.apiName([opts], cbk);   // opts 为参数对象, 可选
```

## API

### 主机

* DescribeInstances
* RunInstances
* TerminateInstances
* StartInstances
* StopInstances
* RestartInstances
* ResetInstances
* ResizeInstances
* ModifyInstanceAttributes

### 硬盘

* DescribeVolumes
* CreateVolumes
* DeleteVolumes
* AttachVolumes
* DetachVolumes
* ResizeVolumes
* ModifyVolumeAttributes

### 私有网络

* DescribeVxnets
* CreateVxnets
* DeleteVxnets
* JoinVxnet
* LeaveVxnet
* ModifyVxnetAttributes
* DescribeVxnetInstances

### 路由器

* DescribeRouters
* CreateRouters
* DeleteRouters
* UpdateRouters
* PowerOffRouters
* PowerOnRouters
* JoinRouter
* LeaveRouter
* ModifyRouterAttributes
* DescribeRouterStatics
* AddRouterStatics
* DeleteRouterStatics
* DescribeRouterVxnets

### 公网 IP

* DescribeEips
* AllocateEips
* ReleaseEips
* AssociateEip
* DissociateEips
* ChangeEipsBandwidth
* ModifyEipAttributes

### 防火墙

* DescribeSecurityGroups
* CreateSecurityGroup
* DeleteSecurityGroups
* ApplySecurityGroup
* ModifySecurityGroupAttributes
* DescribeSecurityGroupRules
* AddSecurityGroupRules
* DeleteSecurityGroupRules
* ModifySecurityGroupRuleAttributes

### SSH 密钥

* DescribeKeyPairs
* CreateKeyPair
* DeleteKeyPairs
* AttachKeyPairs
* DetachKeyPairs
* ModifyKeyPairAttributes

### 映像

* DescribeImages
* CaptureInstance
* DeleteImages
* ModifyImageAttributes

## 说明

* 私钥id和密匙到控制台中添加查看
* zone参数目前只有'pek1'
* 目前内部使用sha256加密方式
* 带n的参数值必须为数组
* 具体参数参看青云[官方文档](https://docs.qingcloud.com/api/index.html)


## Test
修改test/test.js 设置key_id和key
    
    make

## TODO

* 添加参数类型(包括枚举值)检查
* 连接池, 连接队列功能添加(参考官方SDK)
* 测试用例 



## LICENSE
The MIT License (MIT)

Copyright (c) 2013 Pana Wang

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

