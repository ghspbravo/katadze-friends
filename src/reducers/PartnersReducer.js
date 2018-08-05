const partnersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_PARTNERS_CATEGORIES':
            console.log('FETCH_PARTNERS_CATEGORIES')
            return {
                ...state,
                ...action.items
            }

        case 'FETCH_PARTNER':
            console.log('FETCH_PARTNER')
            return {
                ...state,
                ...action.items
            }

        default:
            return state
    }
}

export default partnersReducer