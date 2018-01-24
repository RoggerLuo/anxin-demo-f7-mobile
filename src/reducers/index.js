import { combineReducers } from 'redux'
import choosedModule from './choosedModule'

const PcNotes = combineReducers({
    choosedModule
})

export default PcNotes
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