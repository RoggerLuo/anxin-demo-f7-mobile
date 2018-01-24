const config={}

config.leftNotes={
    up:'editor',
    down:'editor',
    left:'editor',
    right:'editor'
}
config.leftLeader={
    up:false,
    down:'leftNotes',
    left:false,
    right:'editor'    
}
config.editor={
    up:'leftNotes',
    down:'leftNotes',
    left:'leftNotes',
    right:'leftNotes'        
}
config.editorSetting={
    up:'editor',
    down:false,
    left:'leftNotes',
    right:'rightNotes'        
}

config.rightNotes={
    up:'rightLeader',
    down:false,
    left:'editor',
    right:false
}
config.rightLeader={
    up:false,
    down:'rightNotes',
    left:'editor',
    right:false
}
const choosedModule = (state = {value:'editor'}, action) => {
    switch (action.type) {
        case 'change':
            return {value:'lalala, I am changed!!'}
        case 'globalup':
            if(config[state][action.type.slice(6)]){
                return config[state][action.type.slice(6)]
            }else{
                return state
            }

        case 'globaldown':
            if(config[state][action.type.slice(6)]){
                return config[state][action.type.slice(6)]
            }else{
                return state
            }

        case 'globalleft':
            if(config[state][action.type.slice(6)]){
                return config[state][action.type.slice(6)]
            }else{
                return state
            }

        case 'globalright':
            if(config[state][action.type.slice(6)]){
                return config[state][action.type.slice(6)]
            }else{
                return state
            }

        default:
        return state
    }
}

export default choosedModule