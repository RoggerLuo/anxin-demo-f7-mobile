import './deal.less';

import Tool from '../utils/tool.js';
import Workplus from '../utils/workplus.js';

export default {
  init(){
    var self = this;
    this.bindEvents();
  },

  bindEvents(){
    var self = this;
    // var events = [{
    //   target: '.checkPageAllButton',
    //   event: 'click',
    //   handler: function(e){
    //     Modal.alertWithClose('审核结果已经通知券商！（2秒内自动关闭）');        
    //   }
    // }];
    // Tool.bindEvents(events);
  }
};