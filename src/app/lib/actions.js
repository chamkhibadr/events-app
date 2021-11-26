export const actions = {
    ADD_TO_Subscribed : "ADD_TO_Subscribed ",
    UPADTE_Subscribed : "UPADTE_Subscribed",
    REMOVE_FROM_Subscribed : "REMOVE_FROM_Subscribed",
    SAVE_Subscribed: "SAVE_Subscribed",
    RESET_Subscribed: "RESET_Subscribed"
}


const uid = () => Math.random().toString(34).slice(2)
export function addtoSubscribed(item, End) {
    return {
        type: actions.ADD_TO_Subscribed,
        payload: { id: uid(), End: End, details: item }
    }
}

export function upadateSubscribed(id, End) {
    return {
        type : actions.UPADTE_Subscribed,
        payload : {id: id, End: End}
    }
}

export function romoveFromSubscribed(id) {
    return {
        type:actions.REMOVE_FROM_Subscribed,
        payload: id
    }
}


export function  saveSubscribed(items) {
        return {
            type:actions.SAVE_Subscribed,
            payload:{items:items}
        }
}

export function  resetSubscribed() {
    return {
        type:actions.RESET_Subscribed  
      }
}