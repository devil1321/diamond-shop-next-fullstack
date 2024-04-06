import { combineReducers } from 'redux'
import uiReducer from './ui.reducer'
import shopReducer from './shop.reducer'
import apiReducer from './api.reducer'

const reducers = combineReducers({
    ui:uiReducer,
    shop:shopReducer,
    apiReducer:apiReducer
})

export type State = ReturnType<typeof reducers>