(this["webpackJsonpfriends3-clicky-game"]=this["webpackJsonpfriends3-clicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://i.pinimg.com/originals/a4/a4/7d/a4a47d837726daa86ece52c8dc5b812a.jpg"},{"id":2,"image":"https://cdn3.whatculture.com/images/2016/06/48605cadccb1f477-600x338.jpg"},{"id":3,"image":"https://img.buzzfeed.com/buzzfeed-static/static/2014-09/15/22/enhanced/webdr02/original-grid-image-12319-1410834791-10.jpg?crop=385:582;57,0&downsize=300:*&output-format=auto&output-quality=auto"},{"id":4,"image":"https://www.nzherald.co.nz/resizer/8ONvlX0cYQgc3XH-dJ3U-ptucIw=/360x384/filters:quality(70)/arc-anglerfish-syd-prod-nzme.s3.amazonaws.com/public/JV23H7JYIZBHNPLPPIJJMAUYUU.jpg"},{"id":5,"image":"https://www.cheatsheet.com/wp-content/uploads/2019/10/matt-le-blanc-1024x745.jpg"},{"id":6,"image":"https://nypdecider.files.wordpress.com/2016/11/friends-monica.jpg?quality=80&strip=all&w=646&h=431&crop=1"},{"id":7,"image":"https://www.thesun.co.uk/wp-content/uploads/2016/03/2657467.main_image.jpg?strip=all"},{"id":8,"image":"https://i.pinimg.com/736x/70/ba/36/70ba3603733c38c8ad3d830bb052d228.jpg"},{"id":9,"image":"https://vignette.wikia.nocookie.net/friends/images/9/9d/Ross_Unagi.jpg/revision/latest?cb=20190210055223"},{"id":10,"image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/turkey-head-1600x1080-1568137978.jpg"},{"id":11,"image":"https://i.pinimg.com/736x/91/d3/f7/91d3f76c0be5e45e0016cbdb28e05e3a.jpg"},{"id":12,"image":"https://i.ytimg.com/vi/Yfi4sr_vlZA/maxresdefault.jpg"}]')},,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(3),s=a.n(n),r=a(4),o=a(5),l=a(7),d=a(6),m=a(8),u=(a(14),function(e){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",null,e.children))}),p=(a(15),function(e){return c.a.createElement("div",{className:"myjumbo"},c.a.createElement("h1",{className:"display-4"},"Friends Clicky Game"),c.a.createElement("p",{className:"lead"},"Click on the images to win points but if you click on the same image you will lose"))}),g=(a(16),function(e){return c.a.createElement("div",{className:"card col-md-3 hover"},c.a.createElement("div",{className:"img-container"},c.a.createElement("div",{className:"row"},c.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(){return e.ClickedId(e.id)}}))))}),h=(a(17),function(e){return c.a.createElement("div",{className:"container",id:"nav"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"scores"},c.a.createElement("div",{className:"col-md-1"},c.a.createElement("h2",null,"Score: ",e.scores)),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("h2",null,"High Score: ",e.highscore)))))}),f=a(1),w=(a(18),function(e){function t(){var e,a;Object(r.a)(this,t);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={score:0,highScore:0,fendId:f,outCome:!1,userClicked:[]},a.ClickedId=function(e){var t=a.state.userClicked;-1===t.indexOf(e)?(t.push(e),console.log(t)):(a.setState({outCome:0}),a.outCome())},a.outCome=function(){a.state.score>a.state.highscore&&a.setState.apply({highscore:a.state.score},(function(){console.log(this.state.highscore)})),a.state.fendId((function(e){f.count=0}))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(u,null,c.a.createElement(h,{score:this.state.score,highscore:this.state.highscore}),c.a.createElement(p,null),c.a.createElement("ul",{className:"list flex-container"},this.state.fendId.sort((function(e){return Math.random()-.5})).map((function(t){return c.a.createElement(g,{key:t.id,id:t.id,image:t.image,FendCards:t.id,ShuffleFendsCard:e.state.FendsCard,clickIt:e.shuffleFendsCard,ClickedId:e.ClickedId})}))))}}]),t}(i.Component));s.a.render(c.a.createElement(w,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.4a97c088.chunk.js.map