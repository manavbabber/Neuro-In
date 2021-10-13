import * as actionTypes from './actionTypes';
import axios from 'axios';

export const listProducts = (name='') => async(dispatch) => {
    try{
        dispatch({type:actionTypes.PRODUCT_LIST_REQUEST});
        const { data } = await axios.get(`https://fakestoreapi.com/products/${name}`)
        dispatch({
            type:actionTypes.PRODUCT_LIST_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:actionTypes.PRODUCT_LIST_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    } 
}

export const listCategoryProducts = (name) => async(dispatch) => {
    try{
        dispatch({type:actionTypes.PRODUCT_LIST_REQUEST});
        const { data } = await axios.get(`https://fakestoreapi.com/products/category/${name}`)
        dispatch({
            type:actionTypes.PRODUCT_LIST_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:actionTypes.PRODUCT_LIST_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    } 
}

export const listProductsDetails = (id) => async(dispatch) => {
    try{
        dispatch({type:actionTypes.PRODUCT_DETAILS_REQUEST});
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
        dispatch({
            type:actionTypes.PRODUCT_DETAILS_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:actionTypes.PRODUCT_DETAILS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
