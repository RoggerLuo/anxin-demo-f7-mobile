'use strict';

import 'framework7';
import 'framework7.ios.css';
import 'framework7.ios.color.css';
import '../assets/app.less';

import mainModule from './main/main';
import Router from './router';
import Xhr from './utils/xhr';
import Workplus from './utils/workplus';
import Modal from './components/modal';

var app = {
    init(){
        // Init App
        window.$ = Dom7;
        window.myApp = new Framework7({
            dynamicNavbar: true
        });
        myApp.addView('.view-main', {
            domCache: true
        });

        // popover
        $(document).on('click', '.open-links', function () {
            console.log('open-links');
            var clickedLink = this;
            myApp.popover('.popover-links', clickedLink);
        });

        // notify
        $(document).on('click', '.send-notify', function () {
            var _elm = $(this),
                _desc = _elm.attr('data-desc');
            
            Xhr.sendNotify({
                data: {
                     "users": window.ACCOUNTNAME,
                     "description": _desc
                },
                success: function(){
                    Modal.alert(_desc);
                },
                error: function(){}
            });    
        });

        // get contact
        $(document).on('click', '.get-contact', function () {
            var _elm = $(this),
                _target = _elm.parents('.page').find('.contact-target');
            Workplus.selectContact(function (result) {
                if (!result) return;
                console.log(result);
                var _tpl = [];
                for (var i = 0, l = result.length; i < l; i++) {
                    _tpl.push(result[i].name);
                }
                if (_target[0].tagName === 'INPUT') {
                    _target.val(_tpl.join(','));
                    return;
                }
                _target.html(_tpl.join(','));
            });
        });

        mainModule.init();
        Router.init();

        this.deviceReady(function(){
            // mainModule.init();
            // Router.init();
        });
    },
    // 如果需要调用cordova 需要在deviceReady后 调用 mainModule.init()
    deviceReady(callback){
        document.addEventListener('deviceready', function() {
            //获取用户信息
            Workplus.getCurrentUserInfo(function(res){
                if (!res) {
                    Modal.alert('获取用户信息失败，请重试！');
                    return;
                }
                window.ACCOUNTNAME = res.accountName;
                callback && callback();
            })
            // 绑定返回事件
            document.addEventListener("backbutton", function(){
                app.cordovaBackEvent();
            }, false);
        }, false);
    },
    cordovaBackEvent(){
        // 物理返回事件
        if ($('.page').length === 1) {
            Workplus.getOut();
        }
        window.history.go(-1);
    }
};
app.init();

// require.ensure(["../assets/icon2/iconfont.css"], (require) => {
//       require("../assets/icon2/iconfont.css")
// })

