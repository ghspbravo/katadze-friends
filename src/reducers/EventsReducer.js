const eventsReducer = (state = {}, action) => {
    switch (action.type) {

        case 'FETCH_EVENTS':
            console.log('FETCH_EVENTS')
            return {
                ...state,
                ...action.events
            }
        case 'FETCH_EVENT':
            console.log('FETCH_EVENT')
            return {
                ...state,
                ...action.event,
            }

        default:
            return state
    }
}

export default eventsReducer