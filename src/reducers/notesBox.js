
const notesBox = (state = {data:[]}, action) => {
    switch (action.type) {
        case 'refreshNotes':
            return {data:action.data}
        default:
            return state
    }
}
export default notesBox
