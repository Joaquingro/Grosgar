const initialState = {
    getCourses: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "value":
            return {
                ...state,
                getCourses: action.payload,
            }
    
        default:
            return state;
    }
}

export default rootReducer;