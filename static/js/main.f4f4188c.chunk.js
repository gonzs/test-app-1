(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,a){e.exports=a(264)},139:function(e,t,a){},141:function(e,t,a){},264:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),s=a.n(l),c=(a(139),a(141),a(275)),o=function(){return r.a.createElement(c.a,{as:"h1"},"APP : test-app-1")},u=a(30),i=a(31),h=a(33),d=a(32),p=a(34),m=a(271),f=a(272),E=a(116),v=a(270),g=a(274),S=function(e){function t(e){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).call(this,e))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement(v.a,{focus:!0,placeholder:"Type User ID...",value:this.props.userIdProp,onChange:function(t){return e.props.handleChangeProp(t)}}),r.a.createElement(g.a,{onClick:function(){return e.props.handleSearchProp()}},"Search"),r.a.createElement(g.a,{onClick:function(){return e.props.handleListProp()}},"Show all Users"))}}]),t}(n.Component),b=a(273),P=a(265),j=a(261);function C(e){return r.a.createElement(b.a.Row,null,r.a.createElement(b.a.Cell,null,e.value.first_name),r.a.createElement(b.a.Cell,null,e.value.last_name))}function I(e){return e.users.map(function(e,t){return r.a.createElement(C,{key:e.id,value:e})})}var w=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t;return e=void 0!==this.props.stateProp.results?r.a.createElement(P.a.Group,null,r.a.createElement(P.a,null,r.a.createElement(P.a.Image,{size:"tiny",src:this.props.stateProp.results.avatar}),r.a.createElement(P.a.Content,{verticalAlign:"middle"},r.a.createElement(P.a.Header,{as:"a"},this.props.stateProp.results.first_name+" "+this.props.stateProp.results.last_name)))):r.a.createElement(j.a,null),t=0!==this.props.stateProp.allResults.length?r.a.createElement(b.a,{fixed:!0},r.a.createElement(b.a.Header,null,r.a.createElement(b.a.Row,null,r.a.createElement(b.a.HeaderCell,null,"First Name"),r.a.createElement(b.a.HeaderCell,null,"Last Name"))),r.a.createElement(b.a.Body,null,r.a.createElement(I,{users:this.props.stateProp.allResults}))):r.a.createElement(b.a,null),r.a.createElement(m.a,null,e,t)}}]),t}(n.Component),O=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).setStateHandlerChange=function(t){e.setState({userId:t})},e.setStateHandlerSearch=function(t,a){e.setState({userId:t,results:a})},e.setStateHandlerList=function(t){e.setState({allResults:t})},e.handleChange=function(t){console.log("Input value has been changed"),e.setStateHandlerChange(t.target.value)},e.handleSearch=function(){console.log("Search clicked - UserId: "+e.state.userId),fetch("https://reqres.in/api/users/"+e.state.userId).then(function(e){return e.json()}).then(function(t){e.setStateHandlerSearch(e.state.userId,t.data)}).catch(function(t){e.setStateHandlerSearch(e.state.userId,void 0),alert("APIRest Error")})},e.handleList=function(){console.log("Search clicked for all"),fetch("https://reqres.in/api/users?page=2").then(function(e){return e.json()}).then(function(t){e.setStateHandlerList(t.data)}).catch(function(t){e.setStateHandlerList([]),alert("APIRest Error")})},e.state={userId:"",results:void 0,allResults:[]},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.handleList()}},{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement("p",null,"First React App:"),r.a.createElement(S,{userIdProp:this.state.userId,handleChangeProp:function(t){return e.handleChange(t)},handleSearchProp:function(){return e.handleSearch()},handleListProp:function(){return e.handleList()}}),r.a.createElement(f.a,{horizontal:!0},r.a.createElement(c.a,{as:"h4"},r.a.createElement(E.a,{name:"bar chart"}),"Results")),r.a.createElement(w,{stateProp:this.state}))}}]),t}(n.Component),k=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(o,null),r.a.createElement("br",null),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[134,2,1]]]);
//# sourceMappingURL=main.f4f4188c.chunk.js.map