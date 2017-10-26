import * as types from './actionTypes';

export function requestRoutes(userid){
    return{
        type: types.ROUTE_REQUEST,
        userid: userid
    };
}
