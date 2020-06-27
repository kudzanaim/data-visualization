
import React, {useEffect} from 'react';
import {Charts} from './charts';
import {Tables} from './tables';
import {Map} from './map';
import _ from 'lodash';

export const Home = ({props})=>{

    document.title = 'EQ Works | Data Visualization Project';

    useEffect(()=>{
        props.poi();
    }, [])

    return (
        <div>
            {
                (props.data.poi)?
                <div>
                    <Charts  props={props} />
                    <Tables  props={props} />
                    <Map  props={props} />
                </div>
                :
                <div className="loadtxt" >Fetching Data...</div>
            }
        </div>
    )
}