import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import store from '../reduxStore/configureStore.js'
import {addCommonInfo} from '../actions/setCommonInfoAction'
import {cancelCommonInfo} from '../actions/setCommonInfoAction'

const SetCommonInfo = ({setCommonInfo,setCommonInfoFilter,add,cancelEvent,filterChoose}) => {
    let headerbarContent = (
        <div className="content">
            <div className="item" style={{color:'#007aff'}} onClick={()=>filterChoose('all')}>全部</div>
            <div className="item" onClick={()=>filterChoose('basic')}>基础信息</div>
            <div className="item" onClick={()=>filterChoose('expand')}>扩展信息</div>
            <div className="item" onClick={()=>filterChoose('venture')}>风险信息</div>
        </div>
        )

    if(setCommonInfoFilter.value == "basic"){
        setCommonInfo = setCommonInfo.filter((item)=>item.get('value')=='baseinfo')
        headerbarContent = (
            <div className="content">
                <div className="item" onClick={()=>filterChoose('all')}>全部</div>
                <div className="item" style={{color:'#007aff'}} onClick={()=>filterChoose('basic')}>基础信息</div>
                <div className="item" onClick={()=>filterChoose('expand')}>扩展信息</div>
                <div className="item" onClick={()=>filterChoose('venture')}>风险信息</div>
            </div>
            )
    }
    if(setCommonInfoFilter.value == "expand"){
        setCommonInfo = setCommonInfo.filter((item)=>item.get('value')=='plusinfo')
        headerbarContent = (
            <div className="content">
                <div className="item" onClick={()=>filterChoose('all')}>全部</div>
                <div className="item" onClick={()=>filterChoose('basic')}>基础信息</div>
                <div className="item" style={{color:'#007aff'}} onClick={()=>filterChoose('expand')}>扩展信息</div>
                <div className="item" onClick={()=>filterChoose('venture')}>风险信息</div>
            </div>
            )

    }
    if(setCommonInfoFilter.value == "venture"){
        setCommonInfo = setCommonInfo.filter((item)=>item.get('value')=='ventureinfo')
        headerbarContent = (
            <div className="content">
                <div className="item"  onClick={()=>filterChoose('all')}>全部</div>
                <div className="item" onClick={()=>filterChoose('basic')}>基础信息</div>
                <div className="item" onClick={()=>filterChoose('expand')}>扩展信息</div>
                <div className="item" style={{color:'#007aff'}} onClick={()=>filterChoose('venture')}>风险信息</div>
            </div>
            )

    }

    let content = setCommonInfo.map((item,index)=>{
        let picName = require('../../assets/images/app1.png')
        if(index%2 == 0 ){
            picName = require('../../assets/images/app2.png')
        }
        let setKey = 'set' + index 
        let cancel = (<div className="button button-fill color-gray " onClick={()=>cancelEvent(item.get("id"))}>取消</div>)
        let confirm = (<div className="button" onClick={()=>add(item.get("id"))}>添加</div>)
        let button = cancel
        
        if(item.get("isAdd")!="1"){
            button = confirm
        }
        return (
            <div className="row" style={{margin:'10px 0px 15px 0'}} key={index}>
                <div className="col-25 centerdiv" key={index}>
                <i style={{fontSize:'43px',color:'rgb(0,122,255)'}} className={"iconfont2 icon-jinrongleiicontubiao-"+item.get('label')}></i>
                    <div>{item.get("label")}</div>
                </div>
                <div className="col-25 centerdiv" key={setKey}>
                    {button}
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="headerbar">
                {headerbarContent}
            </div>
       
                <div className="item-container">
                    {content}
                </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return state  
}

const mapDispatchToProps = (dispatch) => {
    return {
        add(id){
            dispatch(addCommonInfo(id))
        },
        cancelEvent(id){
            dispatch(cancelCommonInfo(id))
        },
        filterChoose(cate){
            dispatch({type:'filterChange',value:cate})
        },
        dispatch
    }
}

const SetCommonInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SetCommonInfo)

const execute = function(){
    render(
        <Provider store={store}>
            <SetCommonInfoContainer />
        </Provider>
        ,
        document.getElementById('setCommonInfo')
    )
}
export default execute
 

