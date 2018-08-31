
export default {
    namespace:'indexPage',
    state: {
        loginLoading: false
      },
    reducers:{
        showLoading(state){
            return {
                ...state,
                loginLoading:false
            }
        }
    },
    effects:{
       *indexPage ({payload},{call,put}){
           yield put({type:'showLoading'})
       }
    }
}