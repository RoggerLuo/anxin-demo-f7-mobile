import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import store from '../reduxStore/configureStore.js'

const SearchList = ({searchList}) => (
    <div className="list-block" style={{padding:'0'}}>
        <ul>
            {searchList.map((company,index)=>{
                let newIcon = ''
                if(company.isNewRecord){
                    newIcon = (<div className="item-after"><i className="icon-newsvg"></i></div>)
                }
                return (
                    <li key={index}>
                        <a href={"./page/corpDetail.html?id="+company.id} className="item-link item-content">
                            <div className="item-inner">
                                <div className="item-title">{company.name}</div>
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


const SearchListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList)


const execute = function(){
    console.log('searchList executed')
    render(
        <Provider store={store}>
            <SearchListContainer />
        </Provider>
        ,
        document.getElementById('searchList')
    )
}
export default execute
 

