const initialState = {
    result:[]
  };

 const DataReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'DATA_ACTION':
            return{
                result:action.value
            }
        default:
            state
    }

}
export default DataReducer
