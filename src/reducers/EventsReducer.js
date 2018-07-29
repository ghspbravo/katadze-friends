const events = (state = {}, action) => {
    switch (action.type) {

        case 'FETCH_EVENTS':
            console.log('FETCH_EVENTS')
            return {
                ...state,
                ...action.items
            }

        default:
            return state
    }
}

export default events