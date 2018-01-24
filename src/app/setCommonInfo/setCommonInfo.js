import './setCommonInfo.less';

import Xhr from '../utils/xhr';
import mainHtml from './main.tpl.html';
import Tool from '../utils/tool';

import Modal from '../components/modal';
import { showActionSheet } from '../components/action-sheet';

// import customerList from './customerList.jsx';

// const setChart =require('./setChart.js').default
// const chartData =require('./chartData.js').default
// var echarts = require("imports?this=>window!./echart.js")
// // var chartData =require('./chartData.js').default
// var myChart={}
import setCommonInfo from '../setCommonInfo/setCommonInfo.jsx'

export default {
    // initialization page
    init() {
            // this.render();
            this.bindEvent();

            setCommonInfo()

            /* 客户列表react组件 */
            // customerList()
            
            /* slide */

            /* 图表插件 */
            // var ctx = document.getElementById("pie-chart");
            // myChart = echarts.init(ctx);
            // myChart.setOption(chartData(1));

        },
        render() {
            var tpl = Tool.renderTpl(mainHtml, { text: 'Hello Framework7'});
            $('.setCommonInfo-page').html(tpl);
        },
        
        // bind events
        bindEvent() {
            var events = [{
                target: '.andiqu',
                event: 'click',
                handler: this.andiqu
            }];
            Tool.bindEvents(events);
            
            
        }
};
