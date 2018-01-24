import { combineReducers } from 'redux'
import customerList from './customerList'
import searchList from './searchList'
import chartData from './chartData'
import commonInfo from './commonInfo'
import setCommonInfo from './setCommonInfo'
import setCommonInfoFilter from './setCommonInfoFilter'
import wholeCorpList from './wholeCorpList'


const rootRuducer = combineReducers({
    customerList,
    searchList,
    chartData,
    commonInfo,
    setCommonInfo,
    setCommonInfoFilter,
    wholeCorpList
})

export default rootRuducer
/*
state
{
    choosedModule:{},
    enteredModule:{},
    leftNotes:{data:[],choosed:{}},
    rightNotes:{data:[],choosed:{}},
    editor:{
        item_id,
        content,
        date_and_time,
        thread_id,
    }
    editorSetting:{}
    leftLeader
    rightLeader

}
*/