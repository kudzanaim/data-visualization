import $ from 'jquery';
import _ from 'lodash';

// Action Types
export const POI = "POI";

// Get POI Functions
export function poi(details) {
    return async function(dispatch){
        await $.get(`https://work-gcsusetqgq-uk.a.run.app/poi`, function(data){
            dispatch({
                type: POI,
                payload:{
                    data:data,
                },
            })
        })
        
    }
};