import { UITypes } from '../types'
import { Action } from '../actions/ui.actions'

const initState = {}

export default function(state = initState,action:Action){
    switch(action.type){
        default:
            return {
                ...state
            }
    }
}