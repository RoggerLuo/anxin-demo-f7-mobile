import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import store from '../reduxStore/configureStore.js'

const CustomerList = ({wholeCorpList,customerList}) => (
    <div className="content-block" style={{padding:'0',margin:'0'}}>
        <ul>
            {wholeCorpList.map((company,index)=>{
                let newIcon = ''
                if(company.value == '1'){
                    newIcon = (<div className="item-after"><i className="icon-newsvg"></i></div>)
                }
                let guanzhu = ''
                let guanzhuValue = '0'
                customerList.forEach((el)=>{
                    if(el.objectId == company.objectId){
                        guanzhu = '关注'
                        guanzhuValue = '1'
                    }

                })
                let href = "./page/corpDetail.html?id="+company.objectId+'&new='+company.value+'&guanzhu='+guanzhuValue
                if(window.allCorpListLabel){
                    if(window.allCorpListLabel=='对外投资信息'){
                        href = "./page/duiwaitouzi.html?id="+company.objectId+'&new='+company.value+'&guanzhu='+guanzhuValue                      
                    }
                    if(window.allCorpListLabel=='工商信息'){
                        
                        href = "./page/gongshang.html?id="+company.objectId+'&new='+company.value+'&guanzhu='+guanzhuValue                      
                    }
                    if(window.allCorpListLabel=='董监高信息'){
                        href = "./page/dongjiangao.html?id="+company.objectId+'&new='+company.value+'&guanzhu='+guanzhuValue                      
                    }
                    if(window.allCorpListLabel=='董监高直系亲属信息'){
                        href = "./page/qinshu.html?id="+company.objectId+'&new='+company.value+'&guanzhu='+guanzhuValue                      
                    }
                    if(window.allCorpListLabel=='股东信息'){
                        href = "./page/gudong.html?id="+company.objectId+'&new='+company.value+'&guanzhu='+guanzhuValue                      
                    }
                    if(window.allCorpListLabel=='董监高对外投资信息'){
                        href = "./page/dongjiangaotouzi.html?id="+company.objectId+'&new='+company.value+'&guanzhu='+guanzhuValue                      
                    }
                    if(window.allCorpListLabel=='董监高亲属对外投资信息'){
                        href = "./page/qinshutouzi.html?id="+company.objectId+'&new='+company.value+'&guanzhu='+guanzhuValue                      
                    }

                    if(window.allCorpListLabel=='法院公告'){
                        href = "./page/fayuangonggao.html?id="+company.objectId+'&new='+company.value+'&guanzhu='+guanzhuValue                      
                    }
                    if(window.allCorpListLabel=='执行公告'){
                        href = "./page/zhixinggonggao.html?id="+company.objectId+'&new='+company.value+'&guanzhu='+guanzhuValue                      
                    }
                    if(window.allCorpListLabel=='失信公告'){
                        href = "./page/shixingonggao.html?id="+company.objectId+'&new='+company.value+'&guanzhu='+guanzhuValue                      
                    }

                    if(window.allCorpListLabel=='裁判文书'){
                        href = "./page/caipanwenshu.html?id="+company.objectId+'&new='+company.value+'&guanzhu='+guanzhuValue                      
                    }
                    if(window.allCorpListLabel=='经营异常'){
                        href = "./page/jingyingyichang.html?id="+company.objectId+'&new='+company.value+'&guanzhu='+guanzhuValue                      
                    }
                    if(window.allCorpListLabel=='行政处罚'){
                        href = "./page/xingzhengchufa.html?id="+company.objectId+'&new='+company.value+'&guanzhu='+guanzhuValue                      
                    }

                }
                

                return (
                    <li key={index}>
                        <a href={href} className="item-link item-content">
                            <div className="item-inner">
                                <div className="item-title">{company.name}<span style={{color:'red'}}>&nbsp;{guanzhu}</span></div>
                                {newIcon}
                            </div>
                        </a>
                    </li>
                )
            })}
        </ul>
    </div>
)

const mapStateToProps = (state) => {
    return state  
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}


const CustomerListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerList)


const execute = function(){
    render(
        <Provider store={store}>
            <CustomerListContainer />
        </Provider>
        ,
        document.getElementById('allCorpList')
    )
}

export default execute
 

