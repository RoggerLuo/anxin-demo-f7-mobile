
import Tool from '../utils/tool.js';
import Workplus from '../utils/workplus.js';

export default {
  init(){
    var self = this;
    this.bindEvents();
  },

  bindEvents(){
    var self = this;
    var events = [];
    Tool.bindEvents(events);
  }
};
