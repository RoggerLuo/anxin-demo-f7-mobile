import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import configureStore from './configureStore'

const store = configureStore()

const TestComp = ({value}) => (
    <div>
        <div>test</div>
        <div>{value}</div>
    </div>
)

const mapStateToProps = (state) => {
    return state.choosedModule  
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}



const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComp)


const TestComp2 = ({value,dispatch}) => {
    
    const onclick = ()=>{
        dispatch({type:'change'})   
    }
    return (
        <div>
            <div onClick={onclick}>test222</div>
            <div>{value}</div>
        </div>
    )
}

const mapStateToProps2 = (state) => {
    return state.choosedModule  
}

const mapDispatchToProps2 = (dispatch) => {
    return {dispatch}
}


const App2 = connect(
  mapStateToProps2,
  mapDispatchToProps2
)(TestComp2)

const execute = function(){
    render(
        <Provider store={store}>
            <App />
        </Provider>
        ,
        document.getElementById('testApp')
    )
    
    render(
        <Provider store={store}>
            <App2 />
        </Provider>
        ,
        document.getElementById('testApp2')
    )
}
module.exports=execute
export default execute
 

