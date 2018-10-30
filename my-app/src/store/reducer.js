const defaultState ={
    value:'',
    message:[1,2,3,4,5],
}
export default(state = defaultState,action) =>{
    if(action.type==="input-change"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.value =action.value;
        return newState;

    }
    if(action.type==="button-click"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.message.push(newState.value);
        newState.value=''
        return newState;
        
    }
    if(action.type==="delete-item"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.message.splice(action.index,1);
        return newState;    
    }   
    //删除操作
    return state;
}