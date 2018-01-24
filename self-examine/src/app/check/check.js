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
      target: '.uploadButton',
      event: 'click',
      handler: function(e){
        var self = this;
        document.addEventListener('deviceready', function(){
          cordova.exec(function(result) {
            if($(self).hasClass('uploadButton1')){
              $('.uploadSuccess1').css({'display': 'block'});
            }else if($(self).hasClass('uploadButton2')){
              $('.uploadSuccess2').css({'display': 'block'});
            }else if($(self).hasClass('uploadButton3')){
              $('.uploadSuccess3').css({'display': 'block'});
            }
          }, function(error) {
            console.log("单选文件失败");
          }, "WorkPlus_Files", "selectFile", []);
        }, false);

      }
    },{
      target: '.downloadButton',
      event: 'click',
      handler: function(e){
        $('.downloadSuccessText').css({'display': 'inline-block'});
      }
    }
    ];
    Tool.bindEvents(events);
  }
};
