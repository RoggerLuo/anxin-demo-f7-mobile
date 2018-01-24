const editor={
    item_id:'new',//Date.parse(new Date()).toString(),
    content:'',
    date_and_time:Date.parse(new Date()).toString(),
}
const editorReducer = (state = editor, action) => {
    switch (true){
        case /\w+(esc)$/.test(action.type):
            return 'global'
    }
    switch (action.type) {
        case 'editorNote':
            return action.note
        
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
export default editorReducer
