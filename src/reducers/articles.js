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

const articles = (state = [{item_id:'iamtestid',content:'testcontent',date_and_time:'1234566'}], action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      return [
        ...state,
        singleArticle(undefined, action)
      ]
    default:
      return state
  }
}
export default articles