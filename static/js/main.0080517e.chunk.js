(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"/img/kda-Akali-1.jpg","name":"Akali-1","clicked":false},{"id":2,"image":"/img/kda-Akali-2.gif","name":"Akali-2","clicked":false},{"id":3,"image":"/img/kda-Akali-3.jpg","name":"Akali-3","clicked":false},{"id":4,"image":"/img/kda-Akali-4.jpg","name":"Akali-4","clicked":false},{"id":5,"image":"/img/kda-Akali-5.jpg","name":"Akali-5","clicked":false},{"id":6,"image":"/img/kda-Akali-6.jpg","name":"Akali-6","clicked":false},{"id":7,"image":"/img/kda-Akali-7.jpg","name":"Akali-7","clicked":false},{"id":8,"image":"/img/kda-Akali-8.jpg","name":"Akali-8","clicked":false},{"id":9,"image":"/img/kda-Akali-9.jpg","name":"Akali-9","clicked":false},{"id":10,"image":"/img/kda-Akali-10.jpg","name":"Akali-10","clicked":false},{"id":11,"image":"/img/kda-Akali-11.jpg","name":"Akali-11","clicked":false}]')},,,,,,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(3),c=t.n(l);t(14),t(15),t(16);var r=function(){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},i.a.createElement("div",{className:"navbar-brand"},"KDA ",i.a.createElement("span",{className:"akali"},"Akali")," Clicky Game"))},o=t(7),m=t(4),s=t(5),d=t(8),k=t(6),g=(t(17),t(1));t(18);var u=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("img",{src:e.image,className:"card-img",onClick:e.handleClick,alt:e.name,id:e.id}))},f=function(e){Object(d.a)(t,e);var a=Object(k.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={score:0,topScore:0,Img:g,clicked:!1},e.shuffleIndex=function(){for(var e=0,a=g.length-1;a>0;a--){e=Math.floor(Math.random()*(a+1));var t=[g[e],g[a]];g[a]=t[0],g[e]=t[1]}},e.handleItemClick=function(a){var t=a.target.id;console.log("Clicked ID:"+t);var n=Object(o.a)({},e.state);if(!1===g[t-1].clicked)g[t-1].clicked=!0,n.score++,console.log("add point"),console.log(g);else{e.state.score>e.state.topScore&&(n.topScore=e.state.score),n.score=0;for(var i=0;i<g.length;i++)g[i].clicked=!1;console.log("Game Restart")}e.setState(n),console.log("setting the newState"),e.shuffleIndex()},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{className:"m-3"},i.a.createElement("p",null,"Choose a Card to Play"),i.a.createElement("div",{className:"text-right"},i.a.createElement("span",null,"Score:",this.state.score," High Score:",this.state.topScore))),i.a.createElement("div",{className:"container-fluid p-2 col-9 justify-content-center"},this.state.Img.map((function(a){return i.a.createElement(u,{key:a.id,id:a.id,name:a.name,handleClick:e.handleItemClick,image:a.image})}))))}}]),t}(n.Component);t(19);var p=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("span",null,"ernestUrzua Click Game 2020"))};var h=function(){return i.a.createElement("div",null,i.a.createElement(r,null),i.a.createElement(f,null),i.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.0080517e.chunk.js.map