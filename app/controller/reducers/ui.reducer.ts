import { UITypes } from '../types'
import { Action } from '../actions/ui.actions'

const initState = {
    carouselCount:0
}

export default function(state = initState,action:Action){
    switch(action.type){
        case UITypes.SET_CAROUSEL_COUNT:
            return{
                ...state,
                carouselCount:action.carouselCount
            }
        default:
            return {
                ...state
            }
    }
}