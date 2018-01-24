const Reducer = (state = [], action) => {
    switch (action.type) {
        case 'initData':
            return action.initData.infoList
        
        case 'editorCreated':
            return Object.assign({}, state, {
                item_id: action.item_id
            })

        case 'globalenter':
            return state
        case 'globalsave':
        
        case 'editorRenew':
            console.log('redux editorsave run')
            return {
                item_id:'new',
                content:'',
                date_and_time:Date.parse(new Date()).toString()
            }
        
        case 'updateTextarea':
            return Object.assign({}, state, {
                content: action.content
            })
        default:
            return state
    }
}

export default Reducer
