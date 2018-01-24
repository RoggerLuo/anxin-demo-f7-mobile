var store = require('../reduxStore/configureStore.js').default
var option = {
    // tooltip : {
    //     trigger: 'item',
    //     formatter: "{a} <br/>{b} : {c} ({d}%)"
    // },
    // legend: {
    //     orient: 'horizontal',
    //     left: 'top',
    //     data: [ '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    // },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '45%',
        center: ['52%', '44%'],
        data: [
            // { value: 335, name: '直接访问' },
            // { value: 310, name: '邮件营销' },
            // { value: 234, name: '联盟广告' },
            // { value: 135, name: '视频广告' },
            // { value: 1548, name: '搜索引擎' }
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};
var legendData = []
var seriesData = []
var total=0 


export default function(para){
    store.getState().chartData['companyStats'+para].map((el, index) => {
        total+=parseInt(el.value)
    })

    store.getState().chartData['companyStats'+para].map((el, index) => {
        var percentage = 100*parseInt(el.value)/total
        legendData.push(el.name)
        seriesData.push({ value: el.value, name:el.name+percentage.toFixed(1)+'%,' + el.value + '家'})
    })
    // option.legend.data = legendData
    option.series[0].data = seriesData
    seriesData = []
    total = 0
    return option
}

