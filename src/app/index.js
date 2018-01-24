'use strict';

require('react')
require('react-dom')
require('react-redux')
require('redux')
require('redux-thunk')
require('redux-logger')
// require('../assets/iconfont2/iconfont.css')
require.ensure(['./main/commonInfo.jsx','./f7init.js','./main/setChart.js', './main/chartData.js','./main/customerList.jsx', './reduxStore/configureStore.js', './reduxStore/indexData.js', './reduxStore/ajaxChartData.js', './actions/initAction.js'], (require) => {
    require('./f7init.js')
    const store = require('./reduxStore/configureStore.js').default
    const customerList = require('./main/customerList.jsx').default
    const commonInfo = require('./main/commonInfo.jsx').default
    //加载react组件
    customerList() 
    commonInfo()

    /* 开始加载图表的数据 */
    const ajaxChartDataPromise = require('./reduxStore/ajaxChartData.js').default
    const ajaxChartDataInitAction = require('./actions/ajaxChartDataInitAction.js').default

    ajaxChartDataPromise.then((ajaxChartData) => {
        store.dispatch(ajaxChartDataInitAction(ajaxChartData.chartData))
        
        /*  图表数据加载完以后，加载图标插件初始化 */

        require.ensure(['imports?this=>window!./main/echart.js','./main/chartButtonEvent.js'], (require) => {
            const setChart = require('./main/setChart.js').default
            const chartData = require('./main/chartData.js').default
            var echarts = require("imports?this=>window!./main/echart.js")
                // var chartData =require('./chartData.js').default
            var myChart = {}
            var ctx = document.getElementById("pie-chart");
            myChart = echarts.init(ctx);
            myChart.setOption(chartData(1));
            const eventBind = require('./main/chartButtonEvent.js').default
            eventBind(myChart,chartData)
            
        })
    })

    /* ajax加载数据，然后dispatch */
    const indexDataPromise = require('./reduxStore/indexData.js').default
    const indexDataInitAction = require('./actions/indexDataInitAction.js').default
    indexDataPromise.then((initData) => {
        store.dispatch(indexDataInitAction(initData))

        /* 打开下拉关注客户 */
        var item = $('.home-page .accordion-item')[1]
        myApp.accordionOpen(item)

    })

})
