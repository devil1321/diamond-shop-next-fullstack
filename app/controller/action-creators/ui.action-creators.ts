import { UITypes } from "../types";
import { Dispatch } from "redux";

export const setCarouselCount = (count:number) => (dispatch:Dispatch) =>{
    dispatch({
        type:UITypes.SET_CAROUSEL_COUNT,
        carouselCount:count
    })
} 