import{combineReducers} from 'redux';

const INITIAL_STATE = {
    items : [
        {title: 'Buy cofee'},
        {title:'Apply for google'},
        {title:'Practice data structure'},
    ]
};

const todosReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case 'ITEM_CREATED':
            return{...state, items:action.payload};
        default:
            return state;
    }
};


export default combineReducers({
    todo: todosReducer,
    
})