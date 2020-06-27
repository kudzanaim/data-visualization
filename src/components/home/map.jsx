import React, {useEffect, useState, useRef} from 'react';
import * as d3 from "d3";
import * as topojson from "topojson-client";
import fetch from 'node-fetch';
import useResizeObserver from "./useResize";


export const Map = ({props})=>{
    // Ref:
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);
    

    // State Decl:
    const [State, setState] = useState({keys:undefined, values:undefined });
    
    // Call Data on DOM Mount:
    useEffect(()=>{
        // Break Down API data:
        let keys = props.data.poi.map((a,i)=>{return a['name']});
        let unsortedValues = props.data.poi.map((a,i)=>{ return Object.values(a) });
        let values = unsortedValues.map((a)=>{var t = a; t.pop(); return t});

        let newValues = values.map((a)=>{   var t = a.map((b)=>{return parseFloat(b)});  return t   });
        
        // Push POI name to start of array:
        keys.map((a,i)=>{newValues[i].unshift(a)});

        setState({...State, keys, values:[
            ['', 'Clicks', 'Impressions (x10)', 'Revenue'],
            ...newValues
        ]})
    }, [])

 
    if(State.values){
        fetch("https://work-gcsusetqgq-uk.a.run.app/geojson").then(r=>r.json()).then((data)=>{
            // SVG instantiate and MAP setup:
            const svg = d3.select(svgRef.current);
            const {width} = dimensions || wrapperRef.current.getBoundingClientRect();;
            const height = 600;
            const projection = d3.geoMercator().fitSize([width, height], data);
            const pathGenarator = d3.geoPath().projection(projection);

            // Set ColorScale, Range & Domain:
            const minProp = d3.min(data.features, (feature) => { return feature["id"]});
            const maxProp = d3.max(data.features, (feature) => {return feature["id"]});
            const colorScale = d3.scaleLinear().domain([minProp, maxProp]).range(["rgb(246, 31, 81)", "rgb(181, 25, 61)"]);

            // Map Tooltip:
            let tooltip = d3.select("body").append("div").style("position", "absolute").style("z-index", "10").style("visibility", "hidden").style("width","200px");

            // Create Map:
            const g = svg.selectAll('.division');

            g.data(data.features).join("path")
                .attr("class", "division")
                .attr("fill", feature=>{return colorScale( parseInt(feature["id"]) )})
                .attr("stroke","rgb(246, 31, 81)")
                .attr("data-title", feature=>feature.properties["CDNAME"])
                .attr("d", feature => pathGenarator(feature))
                
                .on("mouseover", (feature)=> tooltip
                    .style("visibility", "visible")
                    .html(`<div>${feature.properties["CDNAME"]}</div>`)
                    .style("color", "white") 
                    .style("cursor", "pointer")
                    .style("background", "none")
                    .style("font-family", "monospace")
                    .style("font-size", "20px")
                )
                .on("mousemove", ()=> (tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px")))
                .on("mouseout", ()=> tooltip.style("visibility", "hidden") )


            // Get Data from API and Map Vizualizations:
            fetch("https://work-gcsusetqgq-uk.a.run.app/poi").then(r=>r.json()).then((poi_data)=>{
                const POI = poi_data;

                svg.selectAll(".pin")
                    .data(POI)
                    .enter().append("circle", ".pin")
                    .attr("r", 5)
                    .attr("fill", "white")
                    .attr("transform", (d) => {
                        if(d.name == 'CN Tower'){
                            return "translate(" + projection([ (d.lon+1), (d.lat) ]) + ")"
                        }
                        else if(d.name=="EQ Works"){
                            return "translate(" + projection([ (d.lon-0.2), (d.lat) ]) + ")"
                        }
                        else{
                            return "translate(" + projection([ (d.lon), (d.lat-0.3) ]) + ")"
                        }
                    })
                    .on("mouseover", (d)=> tooltip
                        .style("visibility", "visible")
                        .html(`
                            <div>
                                <div>Location: ${ d.name }</div>
                                <div>Clicks: ${ d.clicks }</div>
                                <div>Impressions: ${ d.impressions }</div>
                                <div>Revenue: $${ d.revenue }</div>
                            </div>
                        `)
                        .style("color", "white")
                        .style("background", "rgb(33, 37, 41)")
                        .style("font-family", "monospace")
                        .style("font-size", "12px")
                        .style("padding", "5px")
                    )
                    .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
                    .on("mouseout", function(){return tooltip.style("visibility", "hidden");});

                var path= d3.geoPath().projection(projection);
    
            })
        }) 
    }
       
    return (
        <div ref={wrapperRef}>
            <div className="header">Map implemeted using D3 JS</div>
            <div className="hp">Hover over white markers for location specific metrics.</div>
            <svg id="map" ref={svgRef}></svg>
        </div>
    )
}