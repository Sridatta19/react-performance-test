(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(7),r=a.n(l),c=(a(15),a(1)),o=a(2),i=a(4),u=a(3),h=a(5),m=a(8),d=a.n(m),p=a(9),f=a.n(p);var v=function(){return n.a.createElement("td",{className:"hour-cell"},n.a.createElement("div",{className:"searching"},"..."))},E=function(e){var t=e.options,a=f()({"good-results":t>3,"weak-results":t>1&&t<=3,"bad-results":t>=0&&t<=1});return n.a.createElement("td",{className:"hour-cell"},n.a.createElement("div",{className:a},n.a.createElement("div",null,t),n.a.createElement("div",{className:"result-label"},"results")))},b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={isSearching:!1,searchResults:void 0},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.searchCells!==this.props.searchCells||t.isSearching!==this.state.isSearching||t.searchResults.options&&t.searchResults.options!==this.state.searchResults.options}},{key:"componentDidUpdate",value:function(e){var t=this;e.searchCells!==this.props.searchCells&&(this.setState({isSearching:!0,searchResults:{options:void 0}}),setTimeout(function(){t.setState({isSearching:!1,searchResults:{options:Math.floor(5*Math.random())}})},Math.floor(500*Math.random())))}},{key:"render",value:function(){return this.state.searchResults&&void 0!==this.state.searchResults.options?n.a.createElement(E,{options:this.state.searchResults.options}):this.state.isSearching?n.a.createElement(v,null):n.a.createElement("td",{className:"hour-cell",onClick:this.clicked},n.a.createElement("div",{className:"time"},this.props.hour,":00"))}}]),t}(n.a.Component),g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={isLoaded:!1,searchCells:0,cells:[]},a.load=function(){a.setState({isLoaded:!0})},a.searchAll=function(){a.setState({searchCells:a.state.searchCells+1})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=Array.apply(null,{length:32}).map(function(e,t){return"Oct ".concat(t)});return n.a.createElement("div",{className:"flex"},n.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),!this.state.isLoaded&&n.a.createElement("button",{className:"btn",onClick:this.load},"Load"),this.state.isLoaded&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:"btn",onClick:this.searchAll},"Search all month"),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,t.map(function(t,a){return n.a.createElement("th",{className:"day-header",onClick:e.clicked,key:"th"+a},t)})),Array.apply(null,{length:24}).map(function(a,s){return n.a.createElement("tr",{key:"tr"+s},t.map(function(t,a){return n.a.createElement(b,{searchCells:e.state.searchCells,hour:a,day:t,key:"cell"+a})}))})))))}}]),t}(s.Component);r.a.createRoot(document.getElementById("root")).render(n.a.createElement(g,null))},8:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[10,2,1]]]);
//# sourceMappingURL=main.fdf4feac.chunk.js.map