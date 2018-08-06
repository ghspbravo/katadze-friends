const tourReducer = (state = {}, action) => {
    switch (action.type) {

        case 'FETCH_TOUR':
            console.log('FETCH_TOUR')
            return {
                ...state,
                ...action.items
            }

        default:
            return state
    }
}

export default tourReducer