import './see.less';

import Tool from '../utils/tool.js';
import Workplus from '../utils/workplus.js';

export default {
    init(){
        var self = this;
        this.bindEvents();
        var thisHeight = $(window).height() - 400 + 'px';
        $('.seePage a').css({marginTop: thisHeight});
    },
    bindEvents(){
        var self = this;
        // var events = [{
        //     element: '.highcharts-title',
        //     target: 'tspan',
        //     event: 'click',
        //     handler: function(e){
        //         $('.home-page .table tbody').html(self.allTpl);
        //     }
        // },{
        //     element: document,
        //     target: 'a.get-out',
        //     event: 'click',
        //     handler: function(e){
        //         Workplus.getOut();
        //     }
        // }];
        // Tool.bindEvents(events);
    }
};