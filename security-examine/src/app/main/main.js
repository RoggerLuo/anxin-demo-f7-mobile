import './main.less';

var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

import Tool from '../utils/tool.js';
import tableHtml from './main.tpl.html';
import Workplus from '../utils/workplus.js';

export default {
  init(){
    var self = this;
    var dataArray = new Array(17);
    var _tableHtml = Tool.renderTpl(tableHtml, {"mock": dataArray});
    $('.comTbody').html(_tableHtml);

    this.bindEvents();
  },
  setTableHeight(){
    var thisHeight = $(window).height() - 305 + 'px';
    $('.choseTableBlock').css({'max-height': thisHeight});
  },
  bindEvents(){
    var self = this;
    var events = [{
      target: '.exitButton',
      event: 'click',
      handler: function(e){
        document.addEventListener('deviceready', function(){
          cordova.exec(function(result) {
            console.log("退出轻应用成功");
          }, function(error) { 
            console.log("退出轻应用失败");
          }, "WorkPlus_WebView", "exit",[]);
        }, false);  
      }
    }];
    Tool.bindEvents(events);
  }
};