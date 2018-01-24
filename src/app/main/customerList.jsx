import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import store from '../reduxStore/configureStore.js'

const CustomerList = ({customerList}) => (
    <div className="content-block" style={{padding:'0'}}>
        <ul>
            {customerList.map((company,index)=>{
                let newIcon = ''
                if(company.value == '1'){
                    newIcon = (<div className="item-after"><i className="icon-newsvg"></i></div>)
                }
                let href = "./page/corpDetail.html?id="+company.objectId+'&new='+company.value+'&guanzhu=1'
                let after = ''
                if(company.id == -1){
                    href = "./page/allCorpList.html"
                    after = (<div className="item-after"><span style={{color:'red'}}>{company.value}</span></div>)
                    newIcon = ''
                }
                return (
                    <li key={index}>
                        <a href={href} className="item-link item-content">
                            <div className="item-inner">
                                <div className="item-title">{company.name}</div>
                                {newIcon}
                                {after}
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
        document.getElementById('customerList')
    )
}
export default execute
 

