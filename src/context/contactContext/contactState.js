import { ADD_CONTACT, UPDATE_CONTACT, UPDATE_CONTACT_DATA } from "../constant";

const reducerMethod = (initialState, action) => {
    console.log({action, initialState}, 'test')
    switch(action.type) {
        case ADD_CONTACT:
            return {
                ...initialState,
                data: [action.payload, ...initialState.data,]
            }
        case UPDATE_CONTACT_DATA:
            return {
                ...initialState,
                updateContactData: action.payload
            }
        case UPDATE_CONTACT: {
            return {
                ...initialState,
                data: initialState.data?.length ? initialState.data?.map((item) => {
                    if(item.id === action.payload.id) {
                        return {
                            ...action.payload,
                        }
                    }
                    return item
                }) : [],
                updateContactData: null
            }
        }
        default: 
            return initialState;
    }
}

export default reducerMethod;