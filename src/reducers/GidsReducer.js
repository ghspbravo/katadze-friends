const gidsReducer = (state = {}, action) => {
    switch (action.type) {

        case 'FETCH_GIDS':
            console.log('FETCH_GIDS')
            return {
                ...state,
                ...action.items
            }

        default:
            return state
    }
}

export default gidsReducer