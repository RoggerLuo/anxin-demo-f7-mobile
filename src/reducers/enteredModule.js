const editor={
    enter:false,
    exit:'global'
}
const leftLeader={
    enter:false,
    exit:'global'
}

const enteredModule = (state = 'global', action) => {
    switch (action.type) {
        case 'globalenter':
            return action.choosedModule
        case 'editoresc':
            return editor.exit
        case 'leftLeaderesc':
            return leftLeader.exit

        default:
            return state
    }
    // switch (true){
    //     case /\w+(esc)$/.test(action.type):
    //         // alert(action.type)
    //         return 'global'

    // }

}

export default enteredModule