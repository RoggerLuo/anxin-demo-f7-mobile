import './main.less';

import Tool from '../utils/tool.js';
import Workplus from '../utils/workplus.js';

export default {
  init(){
    var self = this;
    this.bindEvents();
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
    },{
      target: '.radioBefore',
      event: 'click',
      handler: function(e){
        $('.kindBlock').css({'display': 'none'});       
      }
    },{
      target: '.radioAfter',
      event: 'click',
      handler: function(e){
        $('.kindBlock').css({'display': 'block'});
      }
    },{
      target: '.checkboxTem',
      event: 'click',
      handler: function(e){
        if($('.reportBlock').css('display') == 'block'){
            $('.reportBlock').css({'display': 'none'});
        }else{
            $('.reportBlock').css({'display': 'block'});
        }
      }
    },{
      target: '.choseReportLi',
      event: 'click',
      handler: function(e){
        if($(this).hasClass('choseReportLiActive')){
          $(this).removeClass('choseReportLiActive');
        }else{
          $(this).addClass('choseReportLiActive');
        }
      }
    }];
    Tool.bindEvents(events);
  }
};