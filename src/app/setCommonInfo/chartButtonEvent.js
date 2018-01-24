// var echarts = require("imports?this=>window!./echart.js")
// var ctx = document.getElementById("pie-chart");
// debugger
// var myChart = echarts.init(ctx);

export default function execute(myChart,chartData) {
    $('.andiqu')[0].style.backgroundColor = "#1a98ff"
    $('.andiqu')[0].style.color = "white"

    $('.andiqu').click(function() {
        myChart.setOption(chartData(1));
        this.parentElement.children[0].style.backgroundColor = "white"
        this.parentElement.children[0].style.color = "black"
        this.parentElement.children[1].style.backgroundColor = "white"
        this.parentElement.children[1].style.color = "black"
        this.parentElement.children[2].style.backgroundColor = "white"
        this.parentElement.children[2].style.color = "black"
        this.style.backgroundColor = "#1a98ff"
        this.style.color = "white"
    })
    $('.anhangye').click(function() {
        myChart.setOption(chartData(2));
        this.parentElement.children[0].style.backgroundColor = "white"
        this.parentElement.children[0].style.color = "black"
        this.parentElement.children[1].style.backgroundColor = "white"
        this.parentElement.children[1].style.color = "black"
        this.parentElement.children[2].style.backgroundColor = "white"
        this.parentElement.children[2].style.color = "black"
        this.style.backgroundColor = "#1a98ff"
        this.style.color = "white"
    })
    $('.anzijin').click(function() {
        myChart.setOption(chartData(3));
        this.parentElement.children[0].style.backgroundColor = "white"
        this.parentElement.children[0].style.color = "black"
        this.parentElement.children[1].style.backgroundColor = "white"
        this.parentElement.children[1].style.color = "black"
        this.parentElement.children[2].style.backgroundColor = "white"
        this.parentElement.children[2].style.color = "black"
        this.style.backgroundColor = "#1a98ff"
        this.style.color = "white"
    })
}
