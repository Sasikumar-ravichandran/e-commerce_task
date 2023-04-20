// ** Initial State
const initialState = {
    allData: '',
    selectedMeals: '',
    userInfo: ''
}

const mealList = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MEALS':
            return { ...state, allData: action.data }
        case 'CHECKOUT_MEALS':
            return {...state, selectedMeals: action.data}
        case 'ORDER_DETAILS':
            return {...state, userInfo: action.data}
        default:
            return { ...state }
    }
}
export default mealList
