export default {
    getOut() {
        cordova.exec(function(result) {},
            function(error) {
                alert("调用失败:" + error);
            },
            "appStore",
            "exit", []);
    },

    getCurrentUserInfo(callback) {
        cordova.exec(function(result) {
            if (typeof(result) === 'string') {
                result = JSON.parse(result);
            }
            callback(result);
        },
        function(error) {
            callback();
        },
        "WorkPlus_Contact",
        "getUserInfo", []);
    },

    selectPhoto(callback, key) {
        cordova.exec(function(result) {
                callback(result);
           }, 
           function(error) { 
                console.log(error);
                callback();
           },
           "WorkPlus_Image", 
           "selectImages",
           key);
    },
    
    openCamera(callback){
        cordova.exec(function(result) {
            console.log(result);
            callback(result);
        }, function(error) { 
            console.log("打开摄像头接口调用失败:" + error);
            callback();
        }, 
        "WorkPlus_Image", 
        "takePhoto",[]); 
    },
    
    selectContact(callback, selected) {
        var param = selected || [];
        cordova.exec(function(result) {
                if (typeof(result) === 'string') {
                    result = JSON.parse(result);
                }
                callback(result);
            },
            function(error) {
                callback();
            },
            "eim",
            "getContactList", param);
    }
}

// {
//     accountName: "lihao",
//     avatar: "55f6c053831447b068495c43",
//     comName: "恒拓高科 恒拓高科",
//     email: "hejianxian@foreveross.com",
//     jobTitle: "前端工程师 前端工程师",
//     mobile: "15992470693",
//     name: "库里",
//     orgName: "研发部 测试部",
//     platform: "ANDROID",
//     username: ""
// }