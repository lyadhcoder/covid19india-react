(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{160:function(e,t,a){e.exports=a(188)},165:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(91),l=a.n(c),s=a(16),i=a(13),o=(a(165),a(3)),d=a(192),m=a(193),u=a(15),f=a.n(u),h=a(194),v=a(195),p=a(191);var E=function(e){var t=Object(n.useState)(e.state),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){l(e.state)}),[e.state]),r.a.createElement("tr",null,r.a.createElement("td",{style:{fontWeight:600}},c.state),r.a.createElement("td",null,c.confirmed),r.a.createElement("td",{style:{color:0===parseInt(c.active)?"#B5B5B5":"inherit"}},0===parseInt(c.active)?"-":c.active),r.a.createElement("td",{style:{color:0===parseInt(c.recovered)?"#B5B5B5":"inherit"}},0===parseInt(c.recovered)?"-":c.recovered),r.a.createElement("td",{style:{color:0===parseInt(c.deaths)?"#B5B5B5":"inherit"}},0===parseInt(c.deaths)?"-":c.deaths))};var g=function(e){var t=Object(n.useState)(e.states),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(0),i=Object(o.a)(s,2),d=i[0],m=i[1],u=Object(n.useState)({sortColumn:"confirmed",isAscending:!1}),f=Object(o.a)(u,2),h=f[0],v=f[1];Object(n.useEffect)((function(){!0===e.summary?l(e.states.slice(0,9)):l(e.states)}),[e.states]),Object(n.useEffect)((function(){if(c.length>0){var t=0;e.states.map((function(a,n){0!==n&&a.confirmed>0&&(t+=1),n===e.states.length-1&&m(t)}))}}),[c.length]);var g=function(e,t){var a=e.currentTarget.querySelector("abbr").getAttribute("title").toLowerCase();v({sortColumn:a,isAscending:h.sortColumn==a?!h.isAscending:"state"===h.sortColumn})};return function(e,t){var a=c.splice(0,1);c.sort((function(e,t){var a=h.sortColumn,n=e[a],r=t[a];return"state"!=a&&(n=parseInt(e[a]),r=parseInt(t[a])),h.isAscending?n>r?1:-1:n>r?-1:1})),c.unshift(a[0])}(),r.a.createElement("table",{className:"table fadeInUp",style:{animationDelay:"1s"}},r.a.createElement("h5",{className:"affected-count"},d," States/UTS Affected"),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"state-heading",onClick:function(e){return g(e)}},r.a.createElement("div",{className:"heading-content"},r.a.createElement("abbr",{title:"State"},"State/UT"),r.a.createElement("div",{style:{display:"state"===h.sortColumn?"initial":"none"}},r.a.createElement(p.a,null)))),r.a.createElement("th",{onClick:function(e){return g(e)}},r.a.createElement("div",{className:"heading-content"},r.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-cherry":""),title:"Confirmed"},window.innerWidth<=769?"Cnfrmd":"Confirmed"),r.a.createElement("div",{style:{display:"confirmed"===h.sortColumn?"initial":"none"}},r.a.createElement(p.a,null)))),r.a.createElement("th",{onClick:function(e){return g(e)}},r.a.createElement("div",{className:"heading-content"},r.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-blue":""),title:"Active"},window.innerWidth<=769?"Actv":"Active"),r.a.createElement("div",{style:{display:"active"===h.sortColumn?"initial":"none"}},r.a.createElement(p.a,null)))),r.a.createElement("th",{onClick:function(e){return g(e)}},r.a.createElement("div",{className:"heading-content"},r.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-green":""),title:"Recovered"},window.innerWidth<=769?"Rcvrd":"Recovered"),r.a.createElement("div",{className:"recovered"===h.sortColumn?"sort-black":""}),r.a.createElement("div",{style:{display:"recovered"===h.sortColumn?"initial":"none"}},r.a.createElement(p.a,null)))),r.a.createElement("th",{onClick:function(e){return g(e)}},r.a.createElement("div",{className:"heading-content"},r.a.createElement("abbr",{className:"".concat(window.innerWidth<=769?"is-gray":""),title:"Deaths"},window.innerWidth<=769?"DCSD":"Deaths"),r.a.createElement("div",{style:{display:"deaths"===h.sortColumn?"initial":"none"}},r.a.createElement(p.a,null)))))),r.a.createElement("tbody",null,c.map((function(e,t){if(0!==t&&e.confirmed>0)return r.a.createElement(E,{key:t,state:e})})),c.length>1&&!1===e.summary&&r.a.createElement(E,{key:0,state:c[0],total:!0})))};var y=function(e){var t=Object(n.useState)(e.data),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(0),i=Object(o.a)(s,2),d=i[0],m=i[1],u=Object(n.useState)(0),f=Object(o.a)(u,2),h=f[0],v=f[1],p=Object(n.useState)(0),E=Object(o.a)(p,2),g=E[0],y=E[1],b=Object(n.useState)(0),w=Object(o.a)(b,2),N=w[0],j=w[1];Object(n.useEffect)((function(){l(e.data),O()}));var O=function(){var e=0,t=0,a=0,n=0;c.map((function(r,c){0!==c&&(e+=parseInt(r.confirmed),t+=parseInt(r.active),a+=parseInt(r.recovered),n+=parseInt(r.deaths))})),m(e),v(t),y(a),j(n)};return r.a.createElement("div",{className:"Level fadeInUp",style:{animationDelay:"0.8s"}},r.a.createElement("div",{className:"level-item is-cherry"},r.a.createElement("h5",null,"Confirmed"),r.a.createElement("h4",null,"[",e.deltas?e.deltas.confirmeddelta>=0?"+"+e.deltas.confirmeddelta:e.deltas.confirmeddelta:"","]"),r.a.createElement("h1",null,d," ")),r.a.createElement("div",{className:"level-item is-blue"},r.a.createElement("h5",{className:"heading"},"Active"),r.a.createElement("h4",null,"[",e.deltas?e.deltas.recovereddelta>=0?"+"+e.deltas.recovereddelta:e.deltas.recovereddelta:"","]"),r.a.createElement("h1",{className:"title has-text-info"},h)),r.a.createElement("div",{className:"level-item is-green"},r.a.createElement("h5",{className:"heading"},"Recovered"),r.a.createElement("h4",null,"[",e.deltas?e.deltas.recovereddelta>=0?"+"+e.deltas.recovereddelta:e.deltas.recovereddelta:"","]"),r.a.createElement("h1",{className:"title has-text-success"},g," ")),r.a.createElement("div",{className:"level-item is-gray"},r.a.createElement("h5",{className:"heading"},"Deceased"),r.a.createElement("h4",null,"[",e.deltas?e.deltas.deceaseddelta>=0?"+"+e.deltas.deceaseddelta:e.deltas.deceaseddelta:"","]"),r.a.createElement("h1",{className:"title has-text-grey"},N)))},b=a(1),w=a(35);var N=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=(a[0],a[1],Object(n.useState)(e.states)),l=Object(o.a)(c,2),s=l[0],i=l[1],d=Object(n.useState)({}),m=Object(o.a)(d,2),u=m[0],f=m[1],h=Object(n.useState)(0),v=Object(o.a)(h,2),p=v[0],E=v[1],g=Object(n.useState)(1),y=Object(o.a)(g,2),N=(y[0],y[1]),j=Object(n.useRef)(null);Object(n.useEffect)((function(){e.states.length>1&&j.current&&(O(j.current),f(s[1]))}),[p]),Object(n.useEffect)((function(){for(var e=0,t=1;t<s.length;t++)e+=parseInt(s[t].confirmed);E(e)}),[s]),Object(n.useEffect)((function(){i(e.states)}),[e.states]);var O=function(e){var t=b.n(e),a=+t.attr("width"),n=+t.attr("height"),r=b.j(),c=b.e().center([78.9629,19]).scale(1e3).translate([a/2,n/2]),l=b.f(c),i=[b.h("/india.json")];Promise.all(i).then((function(e){var a=Object(o.a)(e,1)[0];s.map((function(e,t){r.set(e.state.toLowerCase(),e.confirmed)})),t.append("g").attr("class","states").selectAll("path").data(w.a(a,a.objects.india).features).enter().append("path").attr("fill",(function(e){return b.g(e.confirmed=r.get(e.properties.ST_NM.toLowerCase())/50)})).attr("d",l).attr("pointer-events","all").on("mouseover",(function(e){var t;t=e.properties.ST_NM,s.map((function(e,a){e.state.toLowerCase()===t.toLowerCase()&&(f(e),N(a))})),b.n(b.c.target).attr("fill","#424242")})).on("mouseout",(function(e){b.n(b.c.target).attr("fill",b.g(e.confirmed=r.get(e.properties.ST_NM.toLowerCase())/50))})).style("cursor","pointer").append("title").text((function(e){return(100*e.confirmed).toFixed(2)+"% from "+k(e.properties.ST_NM)})),t.append("path").attr("stroke","#ff073a10").attr("fill","none").attr("stroke-width",2).attr("d",l(w.b(a,a.objects.india)))}))},k=function(e){e=e.toLowerCase().split(" ");for(var t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join(" ")};return r.a.createElement("div",{className:"ChoroplethMap fadeInUp",style:{animationDelay:"1.2s"}},r.a.createElement("h1",{className:"header"},"Map"),r.a.createElement("h6",{className:"header"},"Hover over a state for more details"),r.a.createElement("div",{className:"svg-parent"},r.a.createElement("svg",{id:"chart",width:"650",height:"750",viewBox:"0 0 650 750",preserveAspectRatio:"xMidYMid meet",ref:j})),r.a.createElement("div",{className:"map-stats"},r.a.createElement("h4",null,u.state),r.a.createElement("div",{className:"stats"},r.a.createElement("h5",null,"Confirmed"),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h1",null,u.confirmed),r.a.createElement("h6",null))),r.a.createElement("div",{className:"stats is-blue"},r.a.createElement("h5",null,"Active"),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h1",null,u.active),r.a.createElement("h6",null))),r.a.createElement("div",{className:"stats is-green"},r.a.createElement("h5",null,"Recovered"),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h1",null,u.recovered),r.a.createElement("h6",null))),r.a.createElement("div",{className:"stats is-gray"},r.a.createElement("h5",null,"Deceased"),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h1",null,u.deaths),r.a.createElement("h6",null)))))};var j=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)({}),i=Object(o.a)(s,2),d=i[0],m=i[1],u=Object(n.useState)(10),f=Object(o.a)(u,2),h=f[0],v=f[1],p=Object(n.useRef)(null),E=Object(n.useRef)(null),g=Object(n.useRef)(null),y=Object(n.useRef)(null),w=Object(n.useRef)(null),N=Object(n.useRef)(null);Object(n.useEffect)((function(){e.timeseries.length>1&&l(e.timeseries)}),[e.timeseries.length]),Object(n.useEffect)((function(){c.length>1&&A(c)}),[c.length]);var j=b.n(p.current),O=650-0-0,k=100-0-10,x=b.n(E.current),D=b.n(g.current),C=b.n(y.current),S=b.n(w.current),I=b.n(N.current),A=function(e){var t=e.slice(0,e.length-1);m(e[e.length-1]),v(e.length-1);var a=b.m().domain(b.d(t,(function(e){return new Date(e.date+"2020")}))).range([0,O]);j.append("g").attr("transform","translate(0,"+k+")").attr("class","axis").call(b.a(a)),x.append("g").attr("transform","translate(0,"+k+")").attr("class","axis").call(b.a(a)),D.append("g").attr("transform","translate(0,"+k+")").attr("class","axis").call(b.a(a)),C.append("g").attr("transform","translate(0,"+k+")").attr("class","axis").call(b.a(a)),S.append("g").attr("transform","translate(0,"+k+")").attr("class","axis").call(b.a(a)),I.append("g").attr("transform","translate(0,"+k+")").attr("class","axis").call(b.a(a));var n=b.l().domain([0,b.k(t,(function(e){return+e.totalconfirmed}))]).range([k,0]);j.append("path").datum(t).attr("fill","none").attr("stroke","#ff073a99").attr("stroke-width",3).attr("cursor","pointer").attr("d",b.i().x((function(e){return a(new Date(e.date+"2020"))})).y((function(e){return n(e.totalconfirmed)-5})).curve(b.b)),j.selectAll(".dot").data(t).enter().append("circle").attr("fill","#ff073a").attr("stroke","#ff073a").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return a(new Date(e.date+"2020"))})).attr("cy",(function(e){return n(e.totalconfirmed)-5})).on("mouseover",(function(e,t){b.n(b.c.target).attr("r","5"),m(e),v(t)})).on("mouseout",(function(e){b.n(b.c.target).attr("r","2")})),x.append("path").datum(t).attr("fill","none").attr("stroke","#28a74599").attr("stroke-width",3).attr("cursor","pointer").attr("d",b.i().x((function(e){return a(new Date(e.date+"2020"))})).y((function(e){return n(e.totalrecovered)-5})).curve(b.b)),x.selectAll(".dot").data(t).enter().append("circle").attr("fill","#28a745").attr("stroke","#28a745").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return a(new Date(e.date+"2020"))})).attr("cy",(function(e){return n(e.totalrecovered)-5})).on("mouseover",(function(e,t){b.n(b.c.target).attr("r","5"),m(e),v(t)})).on("mouseout",(function(e){b.n(b.c.target).attr("r","2")})),D.append("path").datum(t).attr("fill","none").attr("cursor","pointer").attr("stroke","#6c757d99").attr("stroke-width",3).attr("cursor","pointer").attr("cursor","pointer").attr("d",b.i().x((function(e){return a(new Date(e.date+"2020"))})).y((function(e){return n(e.totaldeceased)-5})).curve(b.b)),D.selectAll(".dot").data(t).enter().append("circle").attr("fill","#6c757d").attr("stroke","#6c757d").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return a(new Date(e.date+"2020"))})).attr("cy",(function(e){return n(e.totaldeceased)-5})).on("mouseover",(function(e,t){b.n(b.c.target).attr("r","5"),m(e),v(t)})).on("mouseout",(function(e){b.n(b.c.target).attr("r","2")})),C.append("path").datum(t).attr("fill","none").attr("stroke","#ff073a99").attr("stroke-width",3).attr("cursor","pointer").attr("d",b.i().x((function(e){return a(new Date(e.date+"2020"))})).y((function(e){return n(e.dailyconfirmed)-5})).curve(b.b)),C.selectAll(".dot").data(t).enter().append("circle").attr("fill","#ff073a").attr("stroke","#ff073a").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return a(new Date(e.date+"2020"))})).attr("cy",(function(e){return n(e.dailyconfirmed)-5})).on("mouseover",(function(e,t){b.n(b.c.target).attr("r","5"),m(e),v(t)})).on("mouseout",(function(e){b.n(b.c.target).attr("r","2")})),S.append("path").datum(t).attr("fill","none").attr("stroke","#28a74599").attr("stroke-width",3).attr("cursor","pointer").attr("d",b.i().x((function(e){return a(new Date(e.date+"2020"))})).y((function(e){return n(e.dailyrecovered)-5})).curve(b.b)),S.selectAll(".dot").data(t).enter().append("circle").attr("fill","#28a745").attr("stroke","#28a745").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return a(new Date(e.date+"2020"))})).attr("cy",(function(e){return n(e.dailyrecovered)-5})).on("mouseover",(function(e,t){b.n(b.c.target).attr("r","5"),m(e),v(t)})).on("mouseout",(function(e){b.n(b.c.target).attr("r","2")})),I.append("path").datum(t).attr("fill","none").attr("cursor","pointer").attr("stroke","#6c757d99").attr("stroke-width",3).attr("cursor","pointer").attr("cursor","pointer").attr("d",b.i().x((function(e){return a(new Date(e.date+"2020"))})).y((function(e){return n(e.dailydeceased)-5})).curve(b.b)),I.selectAll(".dot").data(t).enter().append("circle").attr("fill","#6c757d").attr("stroke","#6c757d").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return a(new Date(e.date+"2020"))})).attr("cy",(function(e){return n(e.dailydeceased)-5})).on("mouseover",(function(e,t){b.n(b.c.target).attr("r","5"),m(e),v(t)})).on("mouseout",(function(e){b.n(b.c.target).attr("r","2")}))};return r.a.createElement("div",{className:"TimeSeries-Parent fadeInUp",style:{animationDelay:"1.7s"}},r.a.createElement("div",{className:"timeseries",style:{display:1===e.type?"flex":"none"}},r.a.createElement("div",{className:"svg-parent"},r.a.createElement("div",{className:"stats"},r.a.createElement("h5",null,"Confirmed ",d.date),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h2",null,d.totalconfirmed),r.a.createElement("h6",null,c.length>0?c[h].totalconfirmed-c[h-1].totalconfirmed>=0?"+"+(c[h].totalconfirmed-c[h-1].totalconfirmed):c[h].totalconfirmed-c[h-1].totalconfirmed:""))),r.a.createElement("svg",{ref:p,width:"650",height:"100",viewBox:"0 0 650 100",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-green"},r.a.createElement("div",{className:"stats is-green"},r.a.createElement("h5",null,"Recovered ",d.date),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h2",null,d.totalrecovered),r.a.createElement("h6",null,c.length>0?c[h].totalrecovered-c[h-1].totalrecovered>=0?"+"+(c[h].totalrecovered-c[h-1].totalrecovered):c[h].totalrecovered-c[h-1].totalrecovered:""))),r.a.createElement("svg",{ref:E,width:"650",height:"100",viewBox:"0 0 650 100",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-gray"},r.a.createElement("div",{className:"stats is-gray"},r.a.createElement("h5",null,"Deceased ",r.a.createElement("br",null),d.date),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h2",null,d.totaldeceased),r.a.createElement("h6",null,c.length>0?c[h].totaldeceased-c[h-1].totaldeceased>=0?"+"+(c[h].totaldeceased-c[h-1].totaldeceased):c[h].totaldeceased-c[h-1].totaldeceased:""))),r.a.createElement("svg",{ref:g,width:"650",height:"100",viewBox:"0 0 650 100",preserveAspectRatio:"xMidYMid meet"}))),r.a.createElement("div",{className:"timeseries",style:{display:2===e.type?"flex":"none"}},r.a.createElement("div",{className:"svg-parent"},r.a.createElement("div",{className:"stats"},r.a.createElement("h5",null,"Confirmed ",d.date),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h2",null,d.dailyconfirmed),r.a.createElement("h6",null,c.length>0?c[h].dailyconfirmed-c[h-1].dailyconfirmed>=0?"+"+(c[h].dailyconfirmed-c[h-1].dailyconfirmed):c[h].dailyconfirmed-c[h-1].dailyconfirmed:""))),r.a.createElement("svg",{ref:y,width:"650",height:"100",viewBox:"0 0 650 100",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-green"},r.a.createElement("div",{className:"stats is-green"},r.a.createElement("h5",null,"Recovered ",d.date),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h2",null,d.dailyrecovered),r.a.createElement("h6",null,c.length>0?c[h].dailyrecovered-c[h-1].dailyrecovered>=0?"+"+(c[h].dailyrecovered-c[h-1].dailyrecovered):c[h].dailyrecovered-c[h-1].dailyrecovered:""))),r.a.createElement("svg",{ref:w,width:"650",height:"100",viewBox:"0 0 650 100",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-gray"},r.a.createElement("div",{className:"stats is-gray"},r.a.createElement("h5",null,"Deceased ",r.a.createElement("br",null),d.date),r.a.createElement("div",{className:"stats-bottom"},r.a.createElement("h2",null,d.dailydeceased),r.a.createElement("h6",null,c.length>0?c[h].dailydeceased-c[h-1].dailydeceased>=0?"+"+(c[h].dailydeceased-c[h-1].dailydeceased):c[h].dailydeceased-c[h-1].dailydeceased:""))),r.a.createElement("svg",{ref:N,width:"650",height:"100",viewBox:"0 0 650 100",preserveAspectRatio:"xMidYMid meet"}))))};var O=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)({}),i=Object(o.a)(s,2),d=(i[0],i[1]),m=Object(n.useRef)(null),u=Object(n.useRef)(null),f=Object(n.useRef)(null),h=Object(n.useRef)(null);Object(n.useEffect)((function(){e.timeseries.length>1&&l(e.timeseries)}),[e.timeseries.length]),Object(n.useEffect)((function(){c.length>1&&function(t){var a=t.slice(0,t.length-1);d(a[a.length-1]);var n=b.m().domain(b.d(a.slice(a.length-10,a.length-1),(function(e){return new Date(e.date+"2020")}))).range([0,p]),r=b.l().domain([0,b.k(a,(function(e){return+e.dailyconfirmed}))]).range([E,0]),c=(b.l().domain([0,b.k(a,(function(e){return+e.dailyconfirmed}))]).range([E,0]),b.l().domain([0,b.k(a,(function(e){return+e.dailyrecovered}))]).range([E,0]),b.l().domain([0,b.k(a,(function(e){return+e.dailydeceased}))]).range([E,0]),v.append("path").datum(a.slice(a.length-10,a.length-1)).attr("fill","none").attr("stroke","#ff073a99").attr("stroke-width",3).attr("cursor","pointer").attr("d",b.i().x((function(e){return n(new Date(e.date+"2020"))})).y((function(e,t){return r(e.dailyconfirmed)})).curve(b.b))),l=c.node().getTotalLength();c.attr("stroke-dasharray",l+" "+l).attr("stroke-dashoffset",l).transition().duration(e.animate?2e3:0).attr("stroke-dashoffset",0),v.selectAll(".dot").data(a.slice(a.length-2,a.length-1)).enter().append("circle").attr("fill","#ff073a").attr("stroke","#ff073a").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return n(new Date(e.date+"2020"))})).attr("cy",(function(e){return r(e.dailyconfirmed)})).on("mouseover",(function(e){b.n(b.c.target).attr("r","5"),d(e)})).on("mouseout",(function(e){b.n(b.c.target).attr("r","2"),d(e)})).style("opacity",0).transition().duration(e.animate?3e3:0).style("opacity",1);var s=g.append("path").datum(a.slice(a.length-10,a.length-1)).attr("fill","none").attr("cursor","pointer").attr("stroke","#007bff99").attr("stroke-width",3).attr("cursor","pointer").attr("cursor","pointer").attr("d",b.i().x((function(e){return n(new Date(e.date+"2020"))})).y((function(e,t){if(0===t){a[a.length-9].dailyconfirmed,a[a.length-9].dailyrecovered,a[a.length-9].dailydeceased,a[a.length-10].dailyconfirmed,a[a.length-10].dailyrecovered,a[a.length-10].dailydeceased;return r(e.dailyconfirmed-e.dailyrecovered-e.dailydeceased)}a[a.length-9+t].dailyconfirmed,a[a.length-9+t].dailyrecovered,a[a.length-9+t].dailydeceased,a[a.length-10+t].dailyconfirmed,a[a.length-10+t].dailyrecovered,a[a.length-10+t].dailydeceased;return r(e.dailyconfirmed-e.dailyrecovered-e.dailydeceased)})).curve(b.b)),i=s.node().getTotalLength();s.attr("stroke-dasharray",i+" "+i).attr("stroke-dashoffset",i).transition().duration(e.animate?2e3:0).attr("stroke-dashoffset",0),g.selectAll(".dot").data(a.slice(a.length-2,a.length-1)).enter().append("circle").attr("fill","#007bff").attr("stroke","#007bff").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return n(new Date(e.date+"2020"))})).attr("cy",(function(e){a[a.length-1].dailyconfirmed,a[a.length-1].dailyrecovered,a[a.length-1].dailydeceased,a[a.length-2].dailyconfirmed,a[a.length-2].dailyrecovered,a[a.length-2].dailydeceased;return r(e.dailyconfirmed-e.dailyrecovered-e.dailydeceased)})).on("mouseover",(function(e){b.n(b.c.target).attr("r","5"),d(e)})).on("mouseout",(function(e){b.n(b.c.target).attr("r","2"),d(e)})).style("opacity",0).transition().duration(e.animate?3e3:0).style("opacity",1);var o=y.append("path").datum(a.slice(a.length-10,a.length-1)).attr("fill","none").attr("stroke","#28a74599").attr("stroke-width",3).attr("cursor","pointer").attr("d",b.i().x((function(e){return n(new Date(e.date+"2020"))})).y((function(e,t){return r(e.dailyrecovered)})).curve(b.b)),m=c.node().getTotalLength();o.attr("stroke-dasharray",m+" "+m).attr("stroke-dashoffset",m).transition().duration(e.animate?2e3:0).attr("stroke-dashoffset",0),y.selectAll(".dot").data(a.slice(a.length-2,a.length-1)).enter().append("circle").attr("fill","#28a745").attr("stroke","#28a745").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return n(new Date(e.date+"2020"))})).attr("cy",(function(e){return r(e.dailyrecovered)})).on("mouseover",(function(e){b.n(b.c.target).attr("r","5"),d(e)})).on("mouseout",(function(e){b.n(b.c.target).attr("r","2"),d(e)})).style("opacity",0).transition().duration(e.animate?3e3:0).style("opacity",1);var u=w.append("path").datum(a.slice(a.length-10,a.length-1)).attr("fill","none").attr("cursor","pointer").attr("stroke","#6c757d99").attr("stroke-width",3).attr("cursor","pointer").attr("cursor","pointer").attr("d",b.i().x((function(e){return n(new Date(e.date+"2020"))})).y((function(e,t){return r(e.dailydeceased)})).curve(b.b)),f=u.node().getTotalLength();u.attr("stroke-dasharray",f+" "+f).attr("stroke-dashoffset",f).transition().duration(e.animate?2e3:0).attr("stroke-dashoffset",0),w.selectAll(".dot").data(a.slice(a.length-2,a.length-1)).enter().append("circle").attr("fill","#6c757d").attr("stroke","#6c757d").attr("r",2).attr("cursor","pointer").attr("cx",(function(e){return n(new Date(e.date+"2020"))})).attr("cy",(function(e){return r(e.dailydeceased)})).on("mouseover",(function(e){b.n(b.c.target).attr("r","5"),d(e)})).on("mouseout",(function(e){b.n(b.c.target).attr("r","2"),d(e)})).style("opacity",0).transition().duration(e.animate?3e3:0).style("opacity",1)}(c)}),[c.length]);var v=b.n(m.current),p=100-0-5,E=100-30-30,g=b.n(u.current),y=b.n(f.current),w=b.n(h.current);return r.a.createElement("div",{className:"Minigraph"},r.a.createElement("div",{className:"svg-parent fadeInUp",style:{animationDelay:"0.6s"}},r.a.createElement("svg",{ref:m,width:"100",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-blue fadeInUp",style:{animationDelay:"0.7s"}},r.a.createElement("svg",{ref:u,width:"100",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-green fadeInUp",style:{animationDelay:"0.8s"}},r.a.createElement("svg",{ref:f,width:"100",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet"})),r.a.createElement("div",{className:"svg-parent is-gray fadeInUp",style:{animationDelay:"0.9s"}},r.a.createElement("svg",{ref:h,width:"100",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet"})))};var k=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(!1),i=Object(o.a)(s,2),u=i[0],p=i[1],E=Object(n.useState)(1),b=Object(o.a)(E,2),w=b[0],k=b[1],x=Object(n.useState)(""),D=Object(o.a)(x,2),C=D[0],S=D[1],I=Object(n.useState)([]),A=Object(o.a)(I,2),M=A[0],R=A[1],B=Object(n.useState)([]),U=Object(o.a)(B,2),L=U[0],T=U[1];Object(n.useEffect)((function(){!1===u&&W()}),[u]);var W=function(){f.a.get("https://api.covid19india.org/data.json").then((function(e){l(e.data.statewise),R(e.data.cases_time_series),S(e.data.statewise[0].lastupdatedtime.slice(0,15)+e.data.statewise[0].lastupdatedtime.slice(18)),T(e.data.key_values[0]),p(!0)})).catch((function(e){console.log(e)}))};return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"home-left"},r.a.createElement("div",{className:"header fadeInUp",style:{animationDelay:"0.5s"}},r.a.createElement("h1",null,"India COVID-19 Tracker Test"),r.a.createElement("div",{className:"header-mid"},r.a.createElement("a",{className:"button",onClick:function(){document.location.href("https://bit.ly/patientdb")}},r.a.createElement(d.a,null),r.a.createElement("span",null,"Crowdsourced Patient Database\xa0")),r.a.createElement("div",{className:"last-update"},r.a.createElement("h6",null,"Last Reported Case"),r.a.createElement("h3",null,0===C.length?"":Object(v.a)(Object(h.a)(new Date(C),"Asia/Calcutta"),Object(h.a)(new Date))+" Ago"))),r.a.createElement("a",{className:"button telegram",onClick:function(){document.location.href("https://t.me/covid19indiaops")}},r.a.createElement(m.a,null),r.a.createElement("span",null,"Join Telegram to Collaborate!"))),r.a.createElement(y,{data:c,deltas:L}),r.a.createElement(O,{timeseries:M,animate:!0}),r.a.createElement(g,{states:c,summary:!1})),r.a.createElement("div",{className:"home-right"},r.a.createElement(N,{states:c}),r.a.createElement("div",{className:"timeseries-header fadeInUp",style:{animationDelay:"1.5s"}},r.a.createElement("h1",null,"Spread Trends"),r.a.createElement("div",{className:"tabs"},r.a.createElement("div",{className:"tab ".concat(1===w?"focused":""),onClick:function(){k(1)}},r.a.createElement("h4",null,"Cumulative")),r.a.createElement("div",{className:"tab ".concat(2===w?"focused":""),onClick:function(){k(2)}},r.a.createElement("h4",null,"Daily")))),r.a.createElement(j,{timeseries:M,type:w})))};var x=function(e){var t=Object(n.useState)("Home"),a=Object(o.a)(t,2),c=a[0],l=a[1];return"/summary"!==window.location.pathname?r.a.createElement("div",{className:"Navbar",style:{animationDelay:"0.5s"}},r.a.createElement("img",{className:"fadeInUp",src:"/icon.png",style:{animationDelay:"0.0s"}}),r.a.createElement("div",{className:"navbar-left"},r.a.createElement(s.b,{to:"/",onClick:function(){l("Home")}},r.a.createElement("span",{className:"fadeInUp ".concat("Home"===c?"focused":""),style:{animationDelay:"0.2s"}},"Home")),r.a.createElement(s.b,{to:"/networkmap",onClick:function(){l("Network Map")}},r.a.createElement("span",{className:"fadeInUp ".concat("Network Map"===c?"focused":""),style:{animationDelay:"0.3s"}},"Network Map")),r.a.createElement(s.b,{to:"/links",onClick:function(){l("Helpful Links")}},r.a.createElement("span",{className:"fadeInUp ".concat("Helpful Links"===c?"focused":""),style:{animationDelay:"0.4s"}},"Helpful Links"))),r.a.createElement("div",{className:"navbar-right"})):r.a.createElement("div",null)};var D=function(e){return r.a.createElement("div",{className:"Links"},r.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.2s"}},r.a.createElement("h3",null,"HELPLINE NUMBERS [by State]"),r.a.createElement("a",{href:"https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf"},"https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf")),r.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.3s"}},r.a.createElement("h3",null,"Ministry of Health and Family Welfare, Gov. of India"),r.a.createElement("a",{href:"https://www.mohfw.gov.in/"},"https://www.mohfw.gov.in/")),r.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.4s"}},r.a.createElement("h3",null,"WHO : COVID-19 Home Page"),r.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019"},"https://www.who.int/emergencies/diseases/novel-coronavirus-2019")),r.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.5s"}},r.a.createElement("h3",null,"CDC"),r.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/faq.html"},"https://www.cdc.gov/coronavirus/2019-ncov/faq.html")),r.a.createElement("div",{className:"link fadeInUp",style:{animationDelay:"0.6s"}},r.a.createElement("h3",null,"COVID-19 Global Tracker"),r.a.createElement("a",{href:"https://coronavirus.thebaselab.com/"},"https://coronavirus.thebaselab.com/")))};var C=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),d=i[0],m=i[1],u=Object(n.useState)([]),h=Object(o.a)(u,2),v=h[0],p=h[1],E=Object(n.useState)(!1),b=Object(o.a)(E,2),w=b[0],N=b[1];Object(n.useEffect)((function(){!1===w&&j()}),[w]);var j=function(){f.a.get("https://api.covid19india.org/data.json").then((function(e){l(e.data.statewise),m(e.data.key_values[0]),p(e.data.cases_time_series),N(!0)})).catch((function(e){console.log(e)}))};return r.a.createElement("div",{className:"Summary"},r.a.createElement("div",{className:"header fadeInUp",style:{animationDelay:"0.5s"}},r.a.createElement("h1",null,"India COVID-19 Tracker")),r.a.createElement(O,{timeseries:v,animate:!1}),r.a.createElement(y,{data:c,deltas:d}),r.a.createElement(g,{states:c,summary:!0}),r.a.createElement("div",{className:"summary-bottom"},r.a.createElement("div",{className:"summary-bottom-left"},r.a.createElement("img",{src:"icon.png",alt:"logo"}),r.a.createElement("h5",null,"We stand with everyone fighting on the frontlines")),r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"https://github.com/covid19india"},"covid19india.org"))))};var S=function(e){return Object(n.useEffect)((function(){window.location.replace("https://cluster.covid19india.org")})),r.a.createElement("div",null)},I=a(9).createBrowserHistory;var A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{history:I},r.a.createElement(i.b,{render:function(e){var t=e.location;return r.a.createElement("div",{className:"Almighty-Router"},r.a.createElement(x,null),r.a.createElement(i.b,{exact:!0,path:"/",render:function(){return r.a.createElement(i.a,{to:"/"})}}),r.a.createElement(i.d,{location:t},r.a.createElement(i.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(k,e)}}),r.a.createElement(i.b,{exact:!0,path:"/links",render:function(e){return r.a.createElement(D,e)}}),r.a.createElement(i.b,{exact:!0,path:"/summary",render:function(e){return r.a.createElement(C,e)}}),r.a.createElement(i.b,{exact:!0,path:"/networkmap",render:function(e){return r.a.createElement(S,e)}})))}})),r.a.createElement("footer",null,r.a.createElement("img",{src:"/icon.png",alt:"logo"}),r.a.createElement("h5",null,"We stand with everyone fighting on the frontlines"),r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"https://github.com/covid19india"},"covid19india"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[160,1,2]]]);
//# sourceMappingURL=main.21262805.chunk.js.map