'use strict';

export default {
    alert(text, callback){
        myApp.modal({
            title: '提示',
            text,
            buttons: [{
                text: '确定',
                onClick(){
                    callback && callback();
                }
            }]
        });
    },
    alertWithClose(text){
        myApp.modal({
            text
        });
        setTimeout(function (argument) {
            console.log(1);
        }, 2000);
    },
    confrim(text, callback){
        myApp.modal({
            title: '提示',
            text,
            buttons: [{
                text: '取消'
            },{
                text: '确定',
                onClick(){
                    callback && callback();
                }
            }]
        });
    }
};