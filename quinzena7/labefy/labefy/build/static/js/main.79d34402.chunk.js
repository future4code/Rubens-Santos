(this.webpackJsonplabefy=this.webpackJsonplabefy||[]).push([[0],{33:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var a,r,c,s,i,l,o,u,d,p,h,b,j,f,O,x=n(1),g=n.n(x),k=n(25),y=n.n(k),m=(n(33),n(7)),v=n(8),C=n(10),A=n(9),P=n(2),w=n(3),T=n(6),S=n.n(T),z=n(0),B=w.a.button(a||(a=Object(P.a)(["\n    background-color: #1ED760;\n    border-radius: 50px;\n    padding: 15px;\n    width: 150px;\n    margin-right: 30px;\n    border: solid;\n    font-weight: bold;\n    color: #2941AB;\n    border-color: #1ED760;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n\n    :hover{\n        border-color: goldenrod;\n    }\n    :active{\n        border-color:#1ED760;\n    }\n"]))),D=function(t){Object(C.a)(n,t);var e=Object(A.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(z.jsx)(B,{onClick:this.props.onclick,children:this.props.buttontext})}}]),n}(g.a.Component),M=w.a.input(r||(r=Object(P.a)(["\n    padding: 3px;\n    border-radius: 10px;\n    border: solid;\n    text-align: center;\n    margin-bottom: 10px;\n\n    :focus{\n        outline: none;\n    }\n"]))),N=w.a.div(c||(c=Object(P.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),E=function(t){Object(C.a)(n,t);var e=Object(A.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(z.jsxs)(N,{children:[Object(z.jsx)("h3",{children:"Criar Playlist"}),Object(z.jsx)(M,{required:!0,placeholder:"Nome da Playlist",onChange:this.props.onChange,value:this.props.value}),Object(z.jsx)("button",{onClick:this.props.createPlaylist,children:"Criar"})]})}}]),n}(g.a.Component),F=n(5),q=n.n(F),U=n(11),I=w.a.div(s||(s=Object(P.a)(["\n    display: flex;\n    \n"]))),J=w.a.div(i||(i=Object(P.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),L=w.a.div(l||(l=Object(P.a)(["\n    height: 100%;\n    margin-left: 5%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 300px;\n    \n\n"]))),G=w.a.div(o||(o=Object(P.a)(["\n    display: flex;\n"]))),H=w.a.button(u||(u=Object(P.a)(["\n    background-color: #2941AB;\n"]))),K=w.a.img(d||(d=Object(P.a)(["\n    width: 20px;\n"]))),Q=w.a.div(p||(p=Object(P.a)(["\n"]))),R=w.a.button(h||(h=Object(P.a)(["\n    width: 250px;\n    background-color: #2941AB;\n"]))),V=function(t){Object(C.a)(n,t);var e=Object(A.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={clickedname:" ",clickedid:" ",clickedtracks:[],clicked:!1,playlistarraycopy:[t.props.playlists],allplaylists:[]},t.getAll=Object(U.a)(q.a.mark((function e(){var n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",{headers:{Authorization:"rubens-santos-johnson"}});case 3:n=e.sent,t.setState({allplaylists:n.data.result.list}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Ocorreu um erro");case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),t.deletePlaylist=function(){var e=Object(U.a)(q.a.mark((function e(n){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.delete("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/".concat(n.id),{headers:{Authorization:"rubens-santos-johnson"}});case 3:e.sent,t.getAll(),alert("Playlist Apagada"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),alert("Ocorreu um erro"),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),t.renderPlaylists=function(){return t.state.allplaylists.map((function(e){return Object(z.jsxs)(G,{children:[Object(z.jsx)(R,{onClick:function(){return t.getAllTracks(e)},children:Object(z.jsx)("p",{children:e.name})}),Object(z.jsx)(H,{onClick:function(){return t.deletePlaylist(e)},children:Object(z.jsx)(K,{src:"https://img.icons8.com/ios/100/000000/delete--v1.png"})})]},e.id)}))},t.getAllTracks=function(){var e=Object(U.a)(q.a.mark((function e(n){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/".concat(n.id,"/tracks"),{headers:{Authorization:"rubens-santos-johnson"}});case 3:a=e.sent,t.setState({clickedname:n.name,clickedid:n.id,clicked:!0,clickedtracks:a.data.result.tracks}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Ocorreu um erro");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),t.renderTracks=function(){return t.state.clickedtracks.map((function(e){return Object(z.jsxs)(Q,{children:[Object(z.jsxs)("p",{children:["Nome:",e.name]}),Object(z.jsxs)("p",{children:["Artista:",e.artist]}),Object(z.jsx)("audio",{controls:!0,children:Object(z.jsx)("source",{src:e.url,type:"audio/mp3"})}),Object(z.jsx)("button",{onClick:function(){return t.deleteTrack(e)},children:"Apagar"})]})}))},t.deleteTrack=function(){var e=Object(U.a)(q.a.mark((function e(n){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.delete("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/".concat(t.state.clickedid,"/tracks/").concat(n.id),{headers:{Authorization:"rubens-santos-johnson"}});case 3:e.sent,alert("M\xfasica Apagada,atualize a p\xe1gina."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Ocorreu um erro");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),t}return Object(v.a)(n,[{key:"componentDidMount",value:function(){return this.getAll()}},{key:"render",value:function(){return Object(z.jsxs)(I,{children:[Object(z.jsxs)(J,{children:[Object(z.jsx)("h3",{children:"Todas as playlists"}),this.renderPlaylists()]}),Object(z.jsxs)(L,{children:[Object(z.jsx)("h3",{children:this.state.clickedname}),this.renderTracks()]})]})}}]),n}(g.a.Component),W=w.a.div(b||(b=Object(P.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]))),X=w.a.select(j||(j=Object(P.a)(["\n    width: 250px;\n    margin-bottom: 20px;\n    padding: 10px;\n    border-radius: 20px;\n\n    :focus{\n        outline: none;\n    }\n\n"]))),Y=function(t){Object(C.a)(n,t);var e=Object(A.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={trackname:"",trackartist:"",trackurl:"",trackid:"",allplaylists:[],option:"Escolha a Playlist"},t.trackNameOnChange=function(e){t.setState({trackname:e.target.value})},t.trackArtistOnChange=function(e){t.setState({trackartist:e.target.value})},t.trackUrlOnChange=function(e){t.setState({trackurl:e.target.value})},t.OptionOnChange=function(e){t.setState({option:e.target.value})},t.createOption=function(){return t.state.allplaylists.map((function(t){return Object(z.jsx)("option",{id:t.id,children:t.name},t.id)}))},t.createbutton=function(){return t.state.allplaylists.map((function(e){if(e.name===t.state.option)return Object(z.jsx)("div",{children:Object(z.jsx)("button",{onClick:function(){return t.addTrackToPlaylist(e)},children:"Adicionar"})})}))},t.addTrackToPlaylist=function(e){var n="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/".concat(e.id,"/tracks"),a={name:t.state.trackname,artist:t.state.trackartist,url:t.state.trackurl};S.a.post(n,a,{headers:{Authorization:"rubens-santos-johnson"}}).then((function(e){console.log("funcionou"),t.setState({trackname:"",trackartist:"",trackurl:""})})).catch((function(e){console.log(e),console.log(t.state.trackid)}))},t.getAll=Object(U.a)(q.a.mark((function e(){var n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",{headers:{Authorization:"rubens-santos-johnson"}});case 3:n=e.sent,t.setState({allplaylists:n.data.result.list}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Ocorreu um erro");case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),t}return Object(v.a)(n,[{key:"componentDidMount",value:function(){return this.getAll()}},{key:"render",value:function(){return Object(z.jsxs)(W,{children:[Object(z.jsxs)(X,{onChange:this.OptionOnChange,children:[Object(z.jsx)("option",{children:this.state.option}),this.createOption()]}),Object(z.jsx)("input",{required:!0,placeholder:"Nome da M\xfasica",onChange:this.trackNameOnChange,value:this.state.trackname}),Object(z.jsx)("input",{required:!0,placeholder:"Artista",onChange:this.trackArtistOnChange,value:this.state.trackartist}),Object(z.jsx)("input",{required:!0,placeholder:"Url",onChange:this.trackUrlOnChange,value:this.state.trackurl}),this.createbutton()]})}}]),n}(g.a.Component),Z=w.a.div(f||(f=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  background-color: #2941AB;\n"]))),$=w.a.div(O||(O=Object(P.a)(["\n  margin-top: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height:300px\n"]))),_=function(t){Object(C.a)(n,t);var e=Object(A.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={pagecontroller:1,playlistname:"",allplaylists:[]},t.createPlaylistPage=function(){t.setState({pagecontroller:1})},t.playlists=function(){t.setState({pagecontroller:2})},t.addTrackPage=function(){t.setState({pagecontroller:3})},t.createOnChange=function(e){t.setState({playlistname:e.target.value})},t.createPlaylist=function(){var e={name:t.state.playlistname};S.a.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",e,{headers:{Authorization:"rubens-santos-johnson"}}).then((function(t){alert("Playlist Criada")})).catch((function(t){console.log(t),alert("Ocorreu um erro")}))},t.screenChange=function(){switch(t.state.pagecontroller){case 1:return Object(z.jsx)(E,{onChange:t.createOnChange,createPlaylist:t.createPlaylist,value:t.state.name});case 2:return Object(z.jsx)(V,{url:"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",name:t.state.name});case 3:return Object(z.jsx)(Y,{})}},t}return Object(v.a)(n,[{key:"render",value:function(){return Object(z.jsxs)(Z,{children:[Object(z.jsxs)("div",{children:[Object(z.jsx)(D,{buttontext:"Criar Playlist",onclick:this.createPlaylistPage}),Object(z.jsx)(D,{buttontext:"Todas as Playlists",onclick:this.playlists}),Object(z.jsx)(D,{buttontext:"Adicionar ",onclick:this.addTrackPage})]}),Object(z.jsx)($,{children:this.screenChange()})]})}}]),n}(g.a.Component),tt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),r(t),c(t),s(t)}))};y.a.render(Object(z.jsx)(g.a.StrictMode,{children:Object(z.jsx)(_,{})}),document.getElementById("root")),tt()}},[[56,1,2]]]);
//# sourceMappingURL=main.79d34402.chunk.js.map