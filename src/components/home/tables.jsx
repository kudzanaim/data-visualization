import React, {useEffect, useState} from 'react';
import Fuse from 'fuse.js';
import $ from 'jquery';

export const Tables = ({props})=>{

    const [State, setState] = useState({keys:null, values:null}); 

    const options = {
        includeScore: true,
        keys: ['clicks', 'impressions', 'revenue', 'name']
    }

    useEffect(async()=>{
        // Break Down API data:
        let keys = props.data.poi.map((a,i)=>{return a['name']});
        let unsortedValues = props.data.poi.map((a,i)=>{ return Object.values(a) });
        let values = unsortedValues.map((a)=>{var t = a; t.shift();t.shift();t.shift(); return t});
        let newValues = values.map((a)=>{   var t = a.map( b=> parseFloat(b) );  return t   });
        
        // Push POI name to start of array:
        keys.map((a,i)=>{newValues[i].unshift(a)});
        
        setState({...State, values:[...newValues], keys: ['POI Name', 'Clicks', 'Impressions (x10)', 'Revenue'],});

    }, []);

    // Format String:
    const numFormat = (x)=>{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // On Search:
    const search = (e)=>{

        // Clear highlight
        $('.tditm').removeClass('tbhiglight')

        const text = $(e.target)[0].value;
        const fuse = new Fuse(props.data.poi, options);
        const result = fuse.search(text);

        
        // Map Results and Highlight
        window.resultt = result;

        result.map((a)=>{
            Object.values(a['item']).map((b,i)=>{
                var t = $(`.tditm[data-value="${b}"]`);
                try{
                    if(t){ t.addClass('tbhiglight') }
                }catch(e){return false}
            })
        });
        
    };

    return (
        <div>
            {/* <div className="header">Fuzzy Search Table</div>
            <div className="hp">Highlights matching rows and uses 3rd party fuzzy-search NPM package </div> */}
            {
                (State.values)?
                <div>
                    <nav style={{ background: '#212529',  margin: '0 auto'}} className="navbar navbar-light">
                        <form className="form-inline w-100">
                            <input style={{background: '#0e1012',color: 'white',border: 'solid 1px #454b52'}} onChange={(e)=>search(e)} className="form-control mr-m-2 w-100" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </nav>
        
                    {
                        (State.values)? <table style={{background: 'rgb(33, 37, 41)',color: 'white'}} className="table">
                                <thead className="thead-dark">
                                    {
                                        <tr>
                                            <th scope="col">{ State.keys[0] }</th>
                                            <th scope="col">{ State.keys[1] }</th>
                                            <th scope="col">{ State.keys[2] }</th>
                                            <th scope="col">{ State.keys[3] }</th>
                                        </tr>
                                    }
                                </thead>
                                <tbody>
                                    {
                                        (State.values)? State.values.map((a,i)=>{
                                    
                                            return <tr>
                                                <td style={{ fontSize: '13px', color: '#cccbcb', borderTop: '1px solid #333538'}} className="tditem" ><div className="tditm" data-value={a[0]}> {a[0]}</div></td>
                                                <td style={{ fontSize: '13px', color: '#cccbcb', borderTop: '1px solid #333538'}} className="tditem" ><div className="tditm" data-value={a[1]}> {numFormat( a[1] )}</div></td>
                                                <td style={{ fontSize: '13px', color: '#cccbcb', borderTop: '1px solid #333538'}} className="tditem" ><div className="tditm" data-value={a[2]}> {numFormat( a[2] )}</div></td>
                                                <td style={{ fontSize: '13px', color: '#cccbcb', borderTop: '1px solid #333538'}} className="tditem" ><div className="tditm" data-value={a[3]}> ${numFormat( a[3].toFixed(2) )}</div></td>
                                            </tr>
                                        }): 
                                        <tr>
                                            <th scope="row">...</th><td>...</td><td>...</td><td>...</td>
                                        </tr>
                                    }
                                </tbody>
                            </table> : <div>Loading Table</div>
                    }
                </div>
                :
                <div className="loadtxt2">Table Data Loading...</div>
            }
        </div>
    )
}

