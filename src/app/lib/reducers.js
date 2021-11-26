import {actions} from './actions'



const saveToLocalStorage = object =>{
    localStorage.setItem("items",JSON.stringify(object))
}

const initialState = {
    items: JSON.parse(localStorage.getItem("items")) !== null ? JSON.parse(localStorage.getItem("items")):[]
}


export default function onlineStoreApp(state = initialState,action) {
    switch(action.type){
        case actions.ADD_TO_Subscribed : return Object.assign({}, state, { items : [...state.items, action.payload]});
        case actions.UPADTE_Subscribed : return Object.assign({},state,{
           
            items : state.items.map(item =>{ 
                return item.id === action.payload.id ?
                Object.assign({},item,{
                    End:action.payload.End
                }) :item;
            })
        })
       
        case actions.REMOVE_FROM_Subscribed :return Object.assign({},state,{
            items: state.items.filter(item =>{
                return item.id != action.payload
            })
        })

        case actions.SAVE_Subscribed: 
            saveToLocalStorage(action.payload.items)
            return state

        case actions.RESET_Subscribed:
            saveToLocalStorage([])
            return Object.assign({},state,{
                    items:[]
            }) 
            
        default : return state  
    }
    
}