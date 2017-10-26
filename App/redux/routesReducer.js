import * as actionTypes from '../actions/actionTypes';
import createReducer from '../lib/createReducer';
const initialState={
    assignedRouteIds:[],
    routesById:{},
    stopsById:{},
    stopObjectsById:{},
    selectedRouteID:-1,
    selectedStopID:-1,
    selectedStopObjectID:-1,
};

export default routesReducer=createReducer(initialState,{
    [actionTypes.ROUTE_REQUEST](state){
        return {...state};
    },
    [actionTypes.ROUTES_RESPONSE](state,action){
        return {
            ...state,
            assignedRouteIds : action.assignedRouteIds,
            routesById : action.routesById,
        };
    },
    [actionTypes.ROUTE_ADDED](state,action){
        let routeId =action.routeId;
        return {
            ...state,
            routesById: {
                ...state.routesById,
                [routeId]:{
                    ...state.routesById[routeId],
                    isSynced: true
                },
            }
        };
    },
    [actionTypes.UPDATE_STOPS](state,action){
        let routeId =action.routeId;
        return {
            ...state,
            routesById: {
                ...state.routesById,
                [routeId]:{
                    ...state.routesById[routeId],
                    stopIds: action.stops
                },
            },
            stopsById : {
                ...state.stopsById,
                ...action.stopsById
            }
        };
    },
    [actionTypes.UPDATE_STOPOBJECTS](state,action){
        return {
            ...state,
            stopObjectsById : {
                ...state.stopObjectsById,
                ...action.stopObjectsById
            }
        };
    },
    [actionTypes.ROUTES_FETCH_FAILED](state){
        return {...state};
    },
    [actionTypes.SELECTED_ROUTE](state,action){
        return {
            ...state,
            selectedRouteID : action.routeID
        };
    },
    [actionTypes.SELECTED_STOP](state,action){
        return {
            ...state,
            selectedStopID : action.stopID
        };
    },
    [actionTypes.SELECTED_STOPOBJECT](state,action){
        return {
            ...state,
            selectedStopObjectID : action.stopObjectID
        };
    },
});
