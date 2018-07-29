const events = (state = {tariffId: 0}, action) => {
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
        case 'TARIFF_CHANGE':
            console.log('TARIFF_CHANGE')
            return {
                ...state,
                tariffId: action.tariffId - 1,
            }

        default:
            return state
    }
}

export default events