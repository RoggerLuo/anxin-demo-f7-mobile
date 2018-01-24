// import 'framework7';
// import 'framework7.ios.css';
// import 'framework7.ios.color.css';
// import '../assets/app.less';
import mainModule from './main/main';
import Router from './router';
import { domainName } from './constantConfig.js'
import store from './reduxStore/configureStore.js'

var app = {
    init() {
        // Init App
        window.$ = Dom7;
        window.myApp = new Framework7({
            animateNavBackIcon: true,
            pushState: true,
        });

        var mainView = myApp.addView('.view-main', {
            domCache: true,
            swipeBackPage: false
        });
        //搜索栏
        let mySearchbar = myApp.searchbar('.searchbar', {
            searchList: '.list-block-search',
            searchIn: '.item-title',
            onDisable: function() {
                let searchValue = $('.searchbar-input').children()[0].value
            }
        });

        $('form').on('submit', function(e) {
            let searchValue = $('.searchbar-input').children()[0].value
            if (searchValue == '') {
                alert('请输入搜索条件')
                return false
            }

            fetch(domainName + '/webbase5/api/company/serach?name=' + searchValue)
                .then(response => response.json())
                .then(json => {
                    store.dispatch({ type: 'doingSearch', list: json })
                })

            mainView.router.load({ url: "./page/search-result.html" })
            $('.searchbar-input').children()[0].blur()
            return false
        });
        //搜索栏end

        mainModule.init();
        Router.init();

    },
    // 如果需要调用cordova 需要在deviceReady后 调用 mainModule.init()
    deviceReady() {
        document.addEventListener('deviceready', function() {
            // 绑定返回事件
            document.addEventListener("backbutton", function() {
                app.cordovaBackEvent();
            }, false);

        }, false);
    },
    cordovaBackEvent() {
        // 物理返回事件
    }
};
app.init();

window.getLoginUserInfo = function() {
    cordova.exec(function(winParam) {
        fetch(domainName + '/webbase5/api/company/sysUser/tempoaryPost?workplusId=' + winParam.login_token.client_id + '&name=' + winParam.login_user.name )
            .then(response => response.json())
            .then(json => {
                if(json[0].result == '1'){
                    // alert(json[0].msg)                    
                }else{ 
                    alert('推送失败')
                }
            })
            // alert(winParam.login_token.client_id)
        },
        function(error) {
            // alert("调用失败");
        },
        "WorkPlus_Auth",
        "getLoginUserInfo", []);
    }

window.showUserChatViewByUser = function(userId) {
    cordova.exec(function(winParam) {
            // alert(winParam);
        },
        function(error) {
            // alert("调用失败");
        },
        "WorkPlus_Contact",
        "showUserChatViewByUser", [{
            "userId": userId,
            "domainId": "atwork"
        }]);
}

window.openWebView = function(urlPara, titlePara) {
    cordova.exec(function(winParam) {
            // alert(winParam);
        },
        function(error) {
            // alert("调用失败");
        },
        "WorkPlus_WebView",
        "openWebView", [{
            "url": urlPara,
            "title": titlePara
        }]
    );
}
window.share = function(urlPara, titlePara) {
    cordova.exec(function(winParam) {
            // alert(winParam);
        },
        function(error) {
            // alert("调用失败");
        },
        "WorkPlus_WebView",
        "share", [{ "url": urlPara, "title": titlePara, "cover_media_id": "分享图标mediaId" }]
    );
}
window.exitWebView = function(){
     cordova.exec(function(winParam) {
                // alert(winParam);
            },
            function(error) {
                alert("调用失败");
            },
            "WorkPlus_WebView",
            "exit", 
            []
            );
}

require.ensure(['framework7.ios.css', 'framework7.ios.color.css', '../assets/app.less'], (require) => {
    require('framework7.ios.css')
    require('framework7.ios.color.css')
    require('../assets/app.less')
})
