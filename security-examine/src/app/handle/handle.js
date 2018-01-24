import './handle.less';

import tableHtml from './handle.tpl.html';
import Tool from '../utils/tool.js';
import Workplus from '../utils/workplus.js';
import Modal from '../components/modal';

export default {
  init(){
    var self = this;
    this.setTableHeight();
    var dataArray = [{
        kind: '挂牌公司更名未披露信息',
        comcolor: 'red',
        constate: '未处理',
        buscolor: 'rgb(255,0,255)',
        linkpage: '',
        busstate: '提醒'
      },{
        kind: '是否发生控股股东、实际控制人及其关联方对挂牌公司的资金占用情形',
        comcolor: 'green',
        constate: '是',
        buscolor: 'red',
        linkpage: 'page/deal.html',
        busstate: '处理'
      },{
        kind: '如有资金占用的，是否自事实发生之日起两个转让日内发布临时公告，充分披露相关的决策程序、预计归还方式及时间等内容',
        comcolor: 'green',
        constate: '是',
        buscolor: 'rgb(0,0,0)',
        linkpage: 'page/see.html',
        busstate: '查看'
      },{
        kind: '如有资金占用的，挂牌公司是否至少每月发布一次提示性公告，披露资金占用的解决进展情况',
        comcolor: 'green',
        constate: '否',
        buscolor: 'red',
        linkpage: '',
        busstate: '处理'
      },{
        kind: '挂牌公司董事会、股东大会审议关联交易事项时，是否执行公司章程规定的表决权回避制度',
        comcolor: 'red',
        constate: '未处理',
        buscolor: 'rgb(255,0,255)',
        linkpage: '',
        busstate: '提醒'
      },{
        kind: '是否存在日常性关联交易补充预计的情形',
        comcolor: 'red',
        constate: '未处理',
        buscolor: 'rgb(255,0,255)',
        linkpage: '',
        busstate: '提醒'
      },{
        kind: '偶发性关联交易是否履行股东大会审议等必要的决策程序',
        comcolor: 'red',
        constate: '未处理',
        buscolor: 'rgb(255,0,255)',
        linkpage: '',
        busstate: '提醒'
      },{
        kind: '是否存在关联交易价格明显不公允的情形',
        comcolor: 'green',
        constate: '是',
        buscolor: 'green',
        linkpage: '',
        busstate: '是'
      },{
        kind: '是否存在关联交易非关联化的情形',
        comcolor: 'green',
        constate: '否',
        buscolor: 'green',
        linkpage: '',
        busstate: '否'
      },{
        kind: '发生涉案金额占挂牌公司最近一期经审计净资产绝对值10％以上的重大诉讼、仲裁事项的，是否及时披露',
        comcolor: 'green',
        constate: '是',
        buscolor: 'green',
        linkpage: '',
        busstate: '是'
      },{
        kind: '上述重大诉讼、仲裁事项，涉及金额、比例、案件进展情况与临时公告是否保持一致、并填写准确',
        comcolor: 'green',
        constate: '是',
        buscolor: 'green',
        linkpage: '',
        busstate: '是'
      }
    ];
    var _tableHtml = Tool.renderTpl(tableHtml, {"mock": dataArray});
    $('.handleTbody').html(_tableHtml);
    this.bindEvents();
  },
  setTableHeight(){
    var thisHeight = $(window).height() - 130 + 'px';
    $('.handleTableBlock').css({'max-height': thisHeight});
  },
  bindEvents(){
    var self = this;
    var events = [{
      target: '.handleTbody tr:first-child td:last-child',
      event: 'click',
      handler: function(e){
        $('.handleTbody tr:first-child td:last-child').html('已通知');
      }
    }];
    Tool.bindEvents(events);
  }
};