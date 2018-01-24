import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import store from '../reduxStore/configureStore.js'

const CommonInfo = ({setCommonInfo}) => {
    setCommonInfo = setCommonInfo.filter((el)=>el.get('isAdd')=='1')

    let content=''

    if(setCommonInfo.size>3){
        let number = 7  - setCommonInfo.size 
        let rs=[]
        for (var i = 0; i < number; i++) {
            let key = 'empty' + i
            rs[i] = (
                <div className=" centerdiv" key={key}>
                    <div>
                        <div></div>
                    </div>
                </div>
            )
        }

        content = (
            <div className="content-block-inner">
                <span style={{fontSize:'17px'}}>我的常用信息</span>

                <div style={{margin:'10px 0px 15px 0'}} key='1'>
                    {
                        setCommonInfo.slice(0,4).map((item,index)=>{
                            let picName = require('../../assets/images/app1.png') 
                            if(index%2 == 0 ){
                                picName = require('../../assets/images/app2.png') 
                            }
                            let href="./page/allCorpList.html?label="+ item.get('label')
                            let newIcon = ''
                            if( item.get('label')=='工商信息'){
                                newIcon = <i style={{position: 'absolute',marginLeft: '-6px'}} className="icon-newsvg"></i>                                
                            }
                            //<img src={picName} width='40' />
                            return (
                                <a className=" centerdiv" key={index} href={href}>
                                    <i style={{fontSize:'43px'}} className={"iconfont2 icon-jinrongleiicontubiao-"+item.get('label')}></i>{newIcon}
                                    <div className="label">{item.get('label')}</div>
                                </a>
                            )
                        })
                    }
                </div>
                <div style={{margin:'10px 0px 15px 0'}} key='2'>
                    {
                        setCommonInfo.slice(4).map((item,index)=>{
                            let picName = require('../../assets/images/app1.png') 
                            if(index%2 == 0 ){
                                picName = require('../../assets/images/app2.png') 
                            }
                            let href="./page/allCorpList.html?label="+ item.get('label')
                            let newIcon = ''
                            if( item.get('label')=='工商信息'){
                                newIcon = <i style={{position: 'absolute',marginLeft: '-6px'}} className="icon-newsvg"></i>                                
                            }

                            return (
                                <a className=" centerdiv" key={index} href={href}>
                                    
                                <i style={{fontSize:'43px'}} className={"iconfont2 icon-jinrongleiicontubiao-"+item.get('label')}></i>
                                {newIcon}

                                    <div className="label">{item.get('label')}</div>
                                </a>
                                
                            )
                        })
                    }
                    <a className=" centerdiv" key='more' href="./page/setCommonInfo.html">
                        <div>
                            <img src={require('../../assets/images/add.svg')} width='22' style={{border:'1px solid #CCC',padding:'8px',color:'#ccc'}}/>
                            <div className="label">更多...</div>
                        </div>
                    </a>
                    {rs}
                </div>
            </div>

        )  

    }
    if(setCommonInfo.size<=3){
        let number = 3  - setCommonInfo.size 
        let rs=[]
        for (var i = 0; i < number; i++) {
            let key = 'empty' + i
            rs[i] = (
                <div className=" centerdiv" key={key}>
                    <div>
                        <div></div>
                    </div>
                </div>
            )
        }
        content = (
            <div className="content-block-inner">
                <span style={{fontSize:'17px'}}>我的常用信息</span>

                <div style={{margin:'10px 0px 15px 0'}} key='1'>
                    {
                        setCommonInfo.map((item,index)=>{
                            let picName = require('../../assets/images/app1.png') 
                            if(index%2 == 0 ){
                                picName = require('../../assets/images/app2.png') 
                            }
                            return (
                                <a className=" centerdiv" key={index} href="./page/setCommonInfo.html">
                                    <img src={picName} width='40' />
                                    <div className="label">{item.get('label')}</div>
                                </a>
                            )
                        })
                    }
                    <a className=" centerdiv" key='more' href="./page/setCommonInfo.html">
                        <div>
                            <img src={require('../../assets/images/add.svg')} width='22' style={{border:'1px solid #CCC',padding:'8px',color:'#ccc'}}/>
                            <div className="label">更多...</div>
                        </div>
                    </a>
                    {rs}
                </div>
            </div>
        )   
    }
    return content
}

const mapStateToProps = (state) => {
    return state  
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}


const CommonInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommonInfo)


const execute = function(){
    // console.log('CommonInfoContainer executed')
    render(
        <Provider store={store}>
            <CommonInfoContainer />
        </Provider>
        ,
        document.getElementById('common-info')
    )
}
export default execute
 

