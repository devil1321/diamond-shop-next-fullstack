import { APITypes } from '../types'
import { Action } from '../actions/api.actions'

const initState:any = {}

export default function(state = initState,action:Action){
    switch(action.type){
        default:
            return {
                ...state
            }
    }
}