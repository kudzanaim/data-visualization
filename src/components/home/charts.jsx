import React, {useEffect, useState} from 'react';
import {Chart} from 'react-google-charts';

export const Charts = ({props})=>{

    const [State, setState] = useState({keys:null, values:null });

    useEffect(()=>{
        // Break Down API data:
        window.poi = props.data.poi;
        let keys = props.data.poi.map((a,i)=>{return a['name']});
        let unsortedValues = props.data.poi.map((a,i)=>{ return Object.values(a) });
        let values = unsortedValues.map((a)=>{var t = a; t.shift();t.shift();t.shift(); return t});

        let newValues = values.map((a)=>{   var t = a.map((b)=>{return parseFloat(b)});  return t   });
        
        // Push POI name to start of array:
        keys.map((a,i)=>{newValues[i].unshift(a)});

        setState({...State, keys, values:[
            ['', 'Clicks', 'Impressions (x10)', 'Revenue'],
            ...newValues
        ]})
    }, [])
   
    return (
        <div style={{ margin: '0 auto', paddingTop:'10px'}}>
            <div className="header">Data Table</div>
            <div className="hp">Implemented using Google Charts Package, metrics retrieved from Postgres API</div>
            {
                ( State.values )?<Chart className='ChartOne' width={'900px'} height={'400px'} chartType="Bar" loader={<div className="loadtxt2">Loading Chart...</div>} data={ State.values }
                    options={{
                        // Material design options
                        chart: {
                        title: 'Total POI Metrics',
                        subtitle: 'Clicks, Impressions and Revenue',
                        },
                    }}
                    // For tests
                /> : <div className="loadtxt"></div>
            }
        </div>
    )
}