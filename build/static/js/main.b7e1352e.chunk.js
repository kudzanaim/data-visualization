(this.webpackJsonpsilentapp=this.webpackJsonpsilentapp||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),i=a.n(c),o=(a(58),a(30)),l=a(2),s=a(3),u=a(10),p=a(8),m=a(11),d=a(66),f=a(15),v=a(24),b=a.n(v),h=a(20),E=a.n(h);a(59);var y=a(4),g=a(13),j=a(14),k=a(62),O=function(e){var t=e.props,a=Object(n.useState)({keys:null,values:null}),c=Object(j.a)(a,2),i=c[0],o=c[1];return Object(n.useEffect)((function(){window.poi=t.data.poi;var e=t.data.poi.map((function(e,t){return e.name})),a=t.data.poi.map((function(e,t){return Object.values(e)})).map((function(e){var t=e;return t.shift(),t.shift(),t.shift(),t})).map((function(e){return e.map((function(e){return parseFloat(e)}))}));e.map((function(e,t){a[t].unshift(e)})),o(Object(g.a)({},i,{keys:e,values:[["","Clicks","Impressions (x10)","Revenue"]].concat(Object(y.a)(a))}))}),[]),r.a.createElement("div",{style:{margin:"0 auto",paddingTop:"10px"}},r.a.createElement("div",{className:"header"},"Data Table"),r.a.createElement("div",{className:"hp"},"Implemented using Google Charts Package, metrics retrieved from Postgres API"),i.values?r.a.createElement(k.a,{className:"ChartOne",width:"900px",height:"400px",chartType:"Bar",loader:r.a.createElement("div",{className:"loadtxt2"},"Loading Chart..."),data:i.values,options:{chart:{title:"Total POI Metrics",subtitle:"Clicks, Impressions and Revenue"}}}):r.a.createElement("div",{className:"loadtxt"}))},x=a(64),w=function(e){var t=e.props,a=Object(n.useState)({keys:null,values:null}),c=Object(j.a)(a,2),i=c[0],o=c[1],l={includeScore:!0,keys:["clicks","impressions","revenue","name"]};Object(n.useEffect)((function(){var e,a,n,r;return b.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:e=t.data.poi.map((function(e,t){return e.name})),a=t.data.poi.map((function(e,t){return Object.values(e)})),n=a.map((function(e){var t=e;return t.shift(),t.shift(),t.shift(),t})),r=n.map((function(e){return e.map((function(e){return parseFloat(e)}))})),e.map((function(e,t){r[t].unshift(e)})),o(Object(g.a)({},i,{values:Object(y.a)(r),keys:["POI Name","Clicks","Impressions (x10)","Revenue"]}));case 6:case"end":return c.stop()}}))}),[]);var s=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};return r.a.createElement("div",null,i.values?r.a.createElement("div",null,r.a.createElement("nav",{style:{background:"#212529",margin:"0 auto"},className:"navbar navbar-light"},r.a.createElement("form",{className:"form-inline w-100"},r.a.createElement("input",{style:{background:"#0e1012",color:"white",border:"solid 1px #454b52"},onChange:function(e){return function(e){E()(".tditm").removeClass("tbhiglight");var a=E()(e.target)[0].value,n=new x.a(t.data.poi,l).search(a);window.resultt=n,n.map((function(t){Object.values(t.item).map((function(t,a){var n=E()('.tditm[data-value="'.concat(t,'"]'));try{n&&n.addClass("tbhiglight")}catch(e){return!1}}))}))}(e)},className:"form-control mr-m-2 w-100",type:"search",placeholder:"Search","aria-label":"Search"}))),i.values?r.a.createElement("table",{style:{background:"rgb(33, 37, 41)",color:"white"},className:"table"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},i.keys[0]),r.a.createElement("th",{scope:"col"},i.keys[1]),r.a.createElement("th",{scope:"col"},i.keys[2]),r.a.createElement("th",{scope:"col"},i.keys[3]))),r.a.createElement("tbody",null,i.values?i.values.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",{style:{fontSize:"13px",color:"#cccbcb",borderTop:"1px solid #333538"},className:"tditem"},r.a.createElement("div",{className:"tditm","data-value":e[0]}," ",e[0])),r.a.createElement("td",{style:{fontSize:"13px",color:"#cccbcb",borderTop:"1px solid #333538"},className:"tditem"},r.a.createElement("div",{className:"tditm","data-value":e[1]}," ",s(e[1]))),r.a.createElement("td",{style:{fontSize:"13px",color:"#cccbcb",borderTop:"1px solid #333538"},className:"tditem"},r.a.createElement("div",{className:"tditm","data-value":e[2]}," ",s(e[2]))),r.a.createElement("td",{style:{fontSize:"13px",color:"#cccbcb",borderTop:"1px solid #333538"},className:"tditem"},r.a.createElement("div",{className:"tditm","data-value":e[3]}," $",s(e[3].toFixed(2)))))})):r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"..."),r.a.createElement("td",null,"..."),r.a.createElement("td",null,"..."),r.a.createElement("td",null,"...")))):r.a.createElement("div",null,"Loading Table")):r.a.createElement("div",{className:"loadtxt2"},"Table Data Loading..."))},N=a(6),C=(a(106),a(39)),S=a.n(C),I=a(65),T=function(e){var t=Object(n.useState)(null),a=Object(j.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=e.current,a=new I.a((function(e){e.forEach((function(e){c(e.contentRect)}))}));return a.observe(t),function(){a.unobserve(t)}}),[e]),r},z=function(e){var t=e.props,a=Object(n.useRef)(),c=Object(n.useRef)(),i=T(c),o=Object(n.useState)({keys:void 0,values:void 0}),l=Object(j.a)(o,2),s=l[0],u=l[1];return Object(n.useEffect)((function(){var e=t.data.poi.map((function(e,t){return e.name})),a=t.data.poi.map((function(e,t){return Object.values(e)})).map((function(e){var t=e;return t.pop(),t})).map((function(e){return e.map((function(e){return parseFloat(e)}))}));e.map((function(e,t){a[t].unshift(e)})),u(Object(g.a)({},s,{keys:e,values:[["","Clicks","Impressions (x10)","Revenue"]].concat(Object(y.a)(a))}))}),[]),s.values&&S()("https://work-gcsusetqgq-uk.a.run.app/geojson").then((function(e){return e.json()})).then((function(e){var t=N.g(a.current),n=(i||c.current.getBoundingClientRect()).width,r=N.b().fitSize([n,600],e),o=N.c().projection(r),l=N.e(e.features,(function(e){return e.id})),s=N.d(e.features,(function(e){return e.id})),u=N.f().domain([l,s]).range(["rgb(246, 31, 81)","rgb(181, 25, 61)"]),p=N.g("body").append("div").style("position","absolute").style("z-index","10").style("visibility","hidden").style("width","200px");t.selectAll(".division").data(e.features).join("path").attr("class","division").attr("fill",(function(e){return u(parseInt(e.id))})).attr("stroke","rgb(246, 31, 81)").attr("data-title",(function(e){return e.properties.CDNAME})).attr("d",(function(e){return o(e)})).on("mouseover",(function(e){return p.style("visibility","visible").html("<div>".concat(e.properties.CDNAME,"</div>")).style("color","white").style("cursor","pointer").style("background","none").style("font-family","monospace").style("font-size","20px")})).on("mousemove",(function(){return p.style("top",N.a.pageY-10+"px").style("left",N.a.pageX+10+"px")})).on("mouseout",(function(){return p.style("visibility","hidden")})),S()("https://work-gcsusetqgq-uk.a.run.app/poi").then((function(e){return e.json()})).then((function(e){var a=e;t.selectAll(".pin").data(a).enter().append("circle",".pin").attr("r",5).attr("fill","white").attr("transform",(function(e){return"CN Tower"==e.name?"translate("+r([e.lon+1,e.lat])+")":"EQ Works"==e.name?"translate("+r([e.lon-.2,e.lat])+")":"translate("+r([e.lon,e.lat-.3])+")"})).on("mouseover",(function(e){return p.style("visibility","visible").html("\n                            <div>\n                                <div>Location: ".concat(e.name,"</div>\n                                <div>Clicks: ").concat(e.clicks,"</div>\n                                <div>Impressions: ").concat(e.impressions,"</div>\n                                <div>Revenue: $").concat(e.revenue,"</div>\n                            </div>\n                        ")).style("color","white").style("background","rgb(33, 37, 41)").style("font-family","monospace").style("font-size","12px").style("padding","5px")})).on("mousemove",(function(){return p.style("top",N.a.pageY-10+"px").style("left",N.a.pageX+10+"px")})).on("mouseout",(function(){return p.style("visibility","hidden")}));N.c().projection(r)}))})),r.a.createElement("div",{ref:c},r.a.createElement("div",{className:"header"},"Map implemeted using D3 JS"),r.a.createElement("div",{className:"hp"},"Hover over white markers for location specific metrics."),r.a.createElement("svg",{id:"map",ref:a}))},R=function(e){var t=e.props;return document.title="EQ Works | Data Visualization Project",Object(n.useEffect)((function(){t.poi()}),[]),r.a.createElement("div",null,t.data.poi?r.a.createElement("div",null,r.a.createElement(O,{props:t}),r.a.createElement(w,{props:t}),r.a.createElement(z,{props:t})):r.a.createElement("div",{className:"loadtxt"},"Fetching Data..."))},D=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement(R,{props:e.props})}}))))}}]),t}(n.Component),P=Object(o.b)((function(e){return{poi:e.poi,data:e.data}}),(function(e){return{poi:function(){return e((function(e){return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.awrap(E.a.get("https://work-gcsusetqgq-uk.a.run.app/poi",(function(t){e({type:"POI",payload:{data:t}})})));case 2:case"end":return t.stop()}}))}))}}}))(D),A=a(23);var q=[a(69).a.withExtraArgument({DB:null})],B=Object(A.c)((function(e,t){switch(t.type){case"POI":return Object(g.a)({},e,{data:{poi:t.payload.data}});default:return e}}),{data:{poi:null}},A.a.apply(void 0,q));i.a.render(r.a.createElement(o.a,{store:B},r.a.createElement(P,null)),document.getElementById("root"))},58:function(e,t,a){},91:function(e,t,a){e.exports=a(107)}},[[91,1,2]]]);
//# sourceMappingURL=main.b7e1352e.chunk.js.map