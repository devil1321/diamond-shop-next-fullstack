import { ShopTypes } from '../types'
import { Action } from '../actions/shop.actions'


const initState = {}

export default function(state = initState,action:Action){
    switch(action.type){
        default:
            return {
                ...state
            }
    }
}