const singleArticle = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      return {
        item_id: action.item_id,
        content: action.content,
        date_and_time: (Date.parse(new Date())/1000).toString()
      }

    default:
      return state
  }
}

const recentNotes = (state = {data:[],choosed:{}}, action) => {
  switch (action.type) {
    case 'receiveRecentNotes':
      return {data:action.data,choosed:{}}
    default:
      return state
  }
}
export default recentNotes