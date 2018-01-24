import Py from '../lib/py'

const initalState={
    data:[{shortcut:'cut',thread_id:'1',thread_text:'aaa1'},{shortcut:'cut2',thread_id:'2',thread_text:'aaa2'}],
    choosed:{}
}
const threads = (state = initalState, action) => {
  switch (action.type) {
    case 'receiveThreads':
        action.data.forEach(function(el,index,arr){
            el.shortcut=Py(el.thread_text)[0].toLowerCase()
        })
        return {data:action.data,choosed:{}}
    default:
        return state
  }
  return state
}
export default threads
/*


*/


