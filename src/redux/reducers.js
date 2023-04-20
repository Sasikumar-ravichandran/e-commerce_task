import { combineReducers } from 'redux'


import mealList from '../pages/store/reducer'

const reducers = combineReducers({
    mealList,
})

export default reducers