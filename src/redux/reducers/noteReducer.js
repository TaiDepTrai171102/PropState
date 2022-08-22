
import {ADD_NEW_NOTE,REMOVE_NOTE, DETAIL_NOTE} from '../../constain/index'
const noteReducer = (state = [] , action ) =>{
    switch (action.type) {
        case ADD_NEW_NOTE:
            const id =  new Date().getTime();
            state = [...state, {id: id, content: action.content , title : action.title} ];
            console.log("Thêm note:", state)
            return state;
        case REMOVE_NOTE:
            const idNote = action.id;
            state = state.filter(row => { 
                if (row.id === idNote)
                return false;
                else
                return true
            })
            console.log("Xóa node:", state);
            return state;
        case DETAIL_NOTE:
            const indexNotea = state.map((e) => e.id === e.title )
            if (indexNotea )
            state[indexNotea].title = action.title;
            console.log("Chi tiết note : ", state);   
            return state
        default:
            return state;
    }
     
};
export default noteReducer 