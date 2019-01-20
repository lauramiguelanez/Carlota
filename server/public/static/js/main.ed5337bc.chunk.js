(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),i=(a(49),a(2)),l=a(3),s=a(5),u=a(4),m=a(6),p=a(119),h=a(115),d=(a(52),a(28),a(55),a(116)),g=(a(17),n.Component,function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={loggedInUser:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"nav-style",id:"top-nav",role:"navigation"},r.a.createElement("div",{className:"nav-width"},r.a.createElement(d.a,{className:"nav-link",to:"/"},"Carlota Mir")))}}]),t}(n.Component)),f=(a(29),a(26)),v=f.langList.ActionLangList,E=f.langList.ObjectLangList,b=(n.Component,function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){},a.state={loggedInUser:null,isHover:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"showText",value:function(e){this.setState({isHover:"portfolio"})}},{key:"hideText",value:function(e){this.setState({isHover:""})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement("div",{className:"fix-top"}),r.a.createElement("div",{className:"landing-wrapper landing-area",onMouseEnter:function(t){return e.showText(t)},onMouseLeave:function(t){return e.hideText(t)}},r.a.createElement("a",{className:"landing-text landing-link",href:"https://issuu.com/carlotajerez/docs/carlota_mir_portfolio_august_2018"},this.state.isHover)),r.a.createElement("div",{className:"fix-bottom"}))}}]),t}(n.Component)),j=(a(18),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){},a.state={loggedInUser:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"about-area"},r.a.createElement("p",null,"Hey! I\u2019m Carlota. I work in curating, translating and research. And I also do boring work at home, which I like to think of as self-care."),r.a.createElement("p",null," I work from these fields simultaneously, and I find they often speak to each other."),r.a.createElement("p",null,"I\u2019m keen on making connections between gender, territories, people, affects, spaces, race and sexuality in art, architecture, and basically everywhere, through feminist pedagogies and the curatorial. I like to work with a variety of contexts, from public programmes to publications or spatial interventions/exhibitions."),r.a.createElement("p",null,"As a translator, I have been working freelance for a number of years and I love working with texts that have to do with art, culture, politics, journalism, or academia, but adapt to other contexts as well. I\u2019m happy to chat over any questions or requests you may have - just drop me a line!"),r.a.createElement("p",null,"I like to move. I\u2019m currently based in Stockholm, Sweden, though I have been based in the UK, France and Spain before."),r.a.createElement("p",null,"I\u2019m currently working independently and doing research at the Stockholm Royal Institute of Arts. As a curator or editor, I am or have been involved with institutions like Moderna Museet, C2M, Kulturhuset, Index Contemporary Arts Foundation, EUNIC Stockholm, KTH/ KKH, Global Challenges Foundation, ETSAM, or Matadero Madrid, as well as with a bunch of independent and self managed projects."),r.a.createElement("p",null,"I graduated from my BA in Art History and French in 2013 (University of Sussex, Great Britain/Paris Sorbonne IV, France) and I hold an MA in Contemporary Art and Visual Culture from Universidad Aut\xf3noma de Madrid/Museo Nacional Reina Sofia and Post MA in Architectural History and Theory from Stockholm\u2019s Royal Institute of Arts.")))}}]),t}(n.Component)),y=a(22),N=a(12),k=a.n(N);a(16).config();var w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).createProject=function(e,t,n,r,o,c,i,l,s,u,m,p){var h={coverImage:e,title:t,subtitle:n,date:r,context:o,organiser:c,collaboratingEntitites:i,category:l,tagsTopic:s,tagsFormat:u,description:m,authorship:p};return console.log(h),a.service.post("/project",h).then(function(e){console.log("CREATED NEW PROJECT:"),console.log(e.data)}).catch(function(e){return console.log(e)})},a.componentDidMount=function(){a.props.newPage()},a.state={loggedInUser:null,redirect:!1},a.service=k.a.create({baseURL:"".concat("https://carlotamir.herokuapp.com","/api")}),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(y.a)({},a,n))}},{key:"handleChangeFile",value:function(e){var t=e.target;t.name,t.files;this.setState({file:e.target.files[0]})}},{key:"uploadImage",value:function(e,t){var a=this,n=new FormData;return n.append("photo",e),this.service.post("/uploadCloud",n,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){a.setState({img_url:e.data.secure_url,redirect:!0})}).catch(function(e){return console.log(e)})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.uploadImage(this.state.file).then(function(){console.log("uploaded image to this space"),console.log(t.state.img_url),t.createProject(t.state.img_url,t.state.title,t.state.subtitle,t.state.date,t.state.context,t.state.organiser,t.state.collaboratingEntitites,t.state.category,t.state.tagsTopic,t.state.tagsFormat,t.state.description,t.state.authorship)})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"form-card"},r.a.createElement("div",{className:"field"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("div",{className:"control"},r.a.createElement("label",{className:"label"},"Title"),r.a.createElement("input",{className:"input is-primary",type:"text",name:"title",onChange:function(t){return e.handleChange(t)},placeholder:"My Project"})),r.a.createElement("div",{className:"control"},r.a.createElement("label",{className:"label"},"Subtitle"),r.a.createElement("input",{className:"input is-primary",type:"text",name:"subtitle",onChange:function(t){return e.handleChange(t)},placeholder:"My Project subtitle"})),r.a.createElement("div",{className:"control"},r.a.createElement("label",{className:"label"},"Description"),r.a.createElement("input",{className:"input is-primary",type:"text",name:"description",onChange:function(t){return e.handleChange(t)},placeholder:"This is an awesome project"})),r.a.createElement("div",{className:"control"},r.a.createElement("label",{className:"label"},"Context"),r.a.createElement("input",{className:"input is-primary",type:"text",name:"context",onChange:function(t){return e.handleChange(t)},placeholder:"Madrid, Spain"})),r.a.createElement("div",{className:"control"},r.a.createElement("label",{className:"label"},"Organiser"),r.a.createElement("input",{className:"input is-primary",type:"text",name:"organiser",onChange:function(t){return e.handleChange(t)},placeholder:"Madrid, Spain"})),r.a.createElement("div",{className:"control"},r.a.createElement("label",{className:"label"},"Collaborating entitites"),r.a.createElement("input",{className:"input is-primary",type:"text",name:"collaboratingEntitites",onChange:function(t){return e.handleChange(t)},placeholder:"Madrid, Spain"})),r.a.createElement("div",{className:"control"},r.a.createElement("label",{className:"label"},"Date"),r.a.createElement("input",{className:"input is-primary",type:"date",name:"date",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"control"},r.a.createElement("label",{className:"label"},"Tags (topic)"),r.a.createElement("input",{className:"input is-primary",type:"text",name:"tagsTopic",onChange:function(t){return e.handleChange(t)},placeholder:"Enter comma-separated tags"})),r.a.createElement("div",{className:"control"},r.a.createElement("label",{className:"label"},"Tags (format)"),r.a.createElement("input",{className:"input is-primary",type:"text",name:"tagsFormat",onChange:function(t){return e.handleChange(t)},placeholder:"Enter comma-separated tags"})),r.a.createElement("div",{className:"control"},r.a.createElement("label",{className:"label"},"Category"),r.a.createElement("select",{name:"category",onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",{value:"RESEARCH"},"Research"),r.a.createElement("option",{value:"CURATING"},"Curating"),r.a.createElement("option",{value:"TRASLATION"},"Traslation"))),r.a.createElement("div",{className:"control"},r.a.createElement("label",{className:"label"},"Authorship"),r.a.createElement("select",{name:"category",onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",{value:"INDIVIDUAL"},"Individual"),r.a.createElement("option",{value:"COLLECTIVE"},"Collective"))),r.a.createElement("div",{className:"control"},r.a.createElement("label",{className:"file-label"},"Cover image"),r.a.createElement("input",{className:"file-input",name:"coverImage",type:"file",onChange:function(t){return e.handleChangeFile(t)}})),r.a.createElement("button",{className:"button is-primary",type:"submit"}," ","Upload"," "))))}}]),t}(n.Component),C=a(61);a(16).config();var I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.props.newPage()},a.getProjects=function(){var e;return a.service.get("/project").then(function(t){e=t.data,console.log(e),a.setState({projectArr:e})}).catch(function(e){return console.log(e)})},a.state={loggedInUser:null},a.service=k.a.create({baseURL:"".concat("https://carlotamir.herokuapp.com","/api")}),a.getProjects(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"filterProjects",value:function(e){}},{key:"render",value:function(){var e=this.state.projectArr;return e?(e.forEach(function(e){}),r.a.createElement("section",{className:"all-projects"},e.map(function(e){return r.a.createElement("div",{key:e._id,className:"project-in-feed"},r.a.createElement(C.a,{to:"/project/".concat(e._id)},"/* ",r.a.createElement("img",{className:"project-img-feed",width:"200px",src:e.coverImage})," */",r.a.createElement("h3",null,e.title)))}))):r.a.createElement("section",{className:"profile-feed"})}}]),t}(n.Component),O=a(14),S=a(117),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={loggedInUser:null,project:a.props.project},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(O.a)({},this.state,{project:e.project}))}},{key:"showDescription",value:function(e,t){console.log(e,t)}},{key:"hideDescription",value:function(e,t){}},{key:"render",value:function(){var e=this,t=this.props.project.images;return r.a.createElement("div",{className:".ant-carousel .slick-slide"},r.a.createElement(S.a,{autoplay:!0,style:"display: flex",onMouseEnter:function(t){return e.showDescription(t,e.props.project)},onMouseLeave:function(t){return e.hideDescription(t,e.props.project)}},t.map(function(e){return r.a.createElement("div",{className:"project-img-wrapper"},r.a.createElement("img",{src:e,className:"project-img-list"}))})))}}]),t}(n.Component);a(112);a(16).config();var A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.props.newPage(),console.log(a.props.category),a.setState({category:a.props.category}),console.log(a.state)},a.getProjects=function(e){var t;return e?a.service.get("/project/".concat(e)).then(function(e){t=e.data,console.log(t),a.setState({projectArr:t})}).catch(function(e){return console.log(e)}):a.service.get("/project").then(function(e){t=e.data,console.log(t),a.setState({projectArr:t})}).catch(function(e){return console.log(e)})},a.state={loggedInUser:null,category:a.props.category},a.service=k.a.create({baseURL:"".concat("https://carlotamir.herokuapp.com","/api")}),a.getProjects(a.state.category),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(O.a)({},this.state,{category:e.category})),this.getProjects(this.state.category)}},{key:"filterProjects",value:function(e){}},{key:"getAboutCategory",value:function(){return"TRANSLATION"==this.state.category?r.a.createElement("div",null,"Translation\t\n        I have 5 years\u2019 experience in freelance translation work within cultural and academic contexts, both in the private and public sectors. I work across fields like architecture, art history, humanities, politics, journalism or digital communications. I have worked with clients like Matadero Madrid, ETSAM, Migrant Journal, UGR, Juan Herreros Studio, Lluis Alexandre Casanovas Studio, Cadena Ser, FilmAffinity, or Ed. Traficantes de Sue\xf1os.\t \n        I also carry out proofreading and editing work of original texts and translations.\t\n          \n        <<<<< I work from English, Spanish, French, Italian and Catalan \t\n        >>>>> into English and Spanish.\t\n        Just drop me a line with any general questions, suggestions, or if you want to have a chat about a project in particular!\t\n        Full translation CV available upon request"):r.a.createElement("div",null)}},{key:"showImg",value:function(e,t){console.log(t),this.setState({currentProject:t})}},{key:"hideImg",value:function(e,t){}},{key:"render",value:function(){var e=this,t=this.state.projectArr;return t?(t.forEach(function(e){}),r.a.createElement("section",null,r.a.createElement(x,{project:this.state.currentProject?this.state.currentProject:t[0]}),r.a.createElement("div",{className:"projects-list"},t.map(function(t){return r.a.createElement("div",{key:t._id,className:"project-in-list",onMouseEnter:function(a){return e.showImg(a,t)},onMouseLeave:function(a){return e.hideImg(a,t)}},r.a.createElement(C.a,{to:"/project/".concat(t._id)},r.a.createElement("h3",null,t.title),r.a.createElement("h2",null,t.context),r.a.createElement("p",null,t.tagsTopic),r.a.createElement("p",null,t.tagsFormat)))})))):r.a.createElement("section",{className:"profile-list"})}}]),t}(n.Component);a(16).config();var P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getProject=function(e){return a.service.get("/project/".concat(e)).then(function(e){a.setState({title:e.data.title,subtitle:e.data.subtitle,date:e.data.date,context:e.data.context,category:e.data.category,coverImage:e.data.coverImage,images:e.data.images,tagsTopic:e.data.tagsTopic,tagsFormat:e.data.tagsFormat,description:e.data.description,externalLink:e.data.externalLink,authorship:e.data.authorship})}).then(function(){return console.log(a.state)}).catch(function(e){return console.log(e)})},a.componentDidMount=function(){var e;a.props.newPage(),a.props.id?e=a.props.id:a.props.match.params.id?e=a.props.match.params.id:a.setState({projectID:e}),a.getProject(e)},a.state={loggedInUser:null},a.service=k.a.create({baseURL:"".concat("https://carlotamir.herokuapp.com","/api")}),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.coverImage,a=e.title,n=e.subtitle,o=e.date,c=e.context,i=e.category,l=e.tagsTopic,s=e.tagsFormat,u=e.description,m=e.authorship,p=o?new Date(o).getFullYear():"";return r.a.createElement("section",{className:"project-detail"},r.a.createElement("h1",{className:"project-title"},a),r.a.createElement("h2",{className:"project-subtitle"},n),r.a.createElement("p",{className:"project-author"},"Authorship: ",m),r.a.createElement("h3",{lassName:"project-context"},c),r.a.createElement("img",{className:"project-img",src:t,alt:a}),r.a.createElement("p",{className:"project-description"},u),r.a.createElement("h3",{className:"project-category"},i," - ",p),r.a.createElement("p",{className:"project-tags"},l,", ",s))}}]),t}(n.Component),T=(n.Component,function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).sendCategory=function(e){a.props.newFilter(e)},a.state={loggedInUser:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"nav-style",id:"botom-nav",role:"navigation"},r.a.createElement("div",{className:"nav-width"},r.a.createElement(d.a,{className:"nav-link",to:"/about"},"About"),r.a.createElement("a",{className:"nav-link",href:"mailto:mir.carlota@gmail.com"},"Contact")))}}]),t}(n.Component));a(16).config();var M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.props.newPage(),console.log(a.props.category),a.setState({category:a.props.category}),console.log(a.state)},a.getProjects=function(e){var t;return a.service.get("/project/".concat(e)).then(function(e){t=e.data,console.log(t),a.setState({projectArr:t})}).catch(function(e){return console.log(e)})},a.state={loggedInUser:null,category:a.props.category},a.service=k.a.create({baseURL:"".concat("https://carlotamir.herokuapp.com","/api")}),a.getProjects(a.state.category),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(O.a)({},this.state,{category:e.category})),this.getProjects(this.state.category)}},{key:"filterProjects",value:function(e){}},{key:"getAboutCategory",value:function(){return"TRANSLATION"==this.state.category?r.a.createElement("div",null,"Translation\t\n        I have 5 years\u2019 experience in freelance translation work within cultural and academic contexts, both in the private and public sectors. I work across fields like architecture, art history, humanities, politics, journalism or digital communications. I have worked with clients like Matadero Madrid, ETSAM, Migrant Journal, UGR, Juan Herreros Studio, Lluis Alexandre Casanovas Studio, Cadena Ser, FilmAffinity, or Ed. Traficantes de Sue\xf1os.\t \n        I also carry out proofreading and editing work of original texts and translations.\t\n          \n        <<<<< I work from English, Spanish, French, Italian and Catalan \t\n        >>>>> into English and Spanish.\t\n        Just drop me a line with any general questions, suggestions, or if you want to have a chat about a project in particular!\t\n        Full translation CV available upon request"):r.a.createElement("div",null)}},{key:"render",value:function(){var e=this,t=this.state.projectArr;return t?(t.forEach(function(e){}),r.a.createElement("section",{className:"all-projects"},t.map(function(t){return r.a.createElement("div",null,e.getAboutCategory(),r.a.createElement("div",{key:t._id,className:"project-in-feed"},r.a.createElement(C.a,{to:"/project/".concat(t._id)},r.a.createElement("img",{className:"project-img-feed",width:"200px",src:t.coverImage})),r.a.createElement("p",{className:"projects-title"},t.title)))}))):r.a.createElement("section",{className:"profile-feed"})}}]),t}(n.Component),L=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={page:"Home"},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header"},r.a.createElement(g,null)),r.a.createElement("main",null,r.a.createElement(p.a,null,r.a.createElement(h.a,{key:"home",exact:!0,path:"/",render:function(){return r.a.createElement(b,{newPage:function(){e.setState({page:"Home"})}})}}),r.a.createElement(h.a,{exact:!0,path:"/about",render:function(){return r.a.createElement(j,{newPage:function(){e.setState({page:"About"})}})}}),r.a.createElement(h.a,{exact:!0,path:"/curating",render:function(){return r.a.createElement(M,{category:"curating",newPage:function(){e.setState({page:"Curating"})}})}}),r.a.createElement(h.a,{exact:!0,path:"/translation",render:function(){return r.a.createElement(M,{category:"translation",newPage:function(){e.setState({page:"Translation"})}})}}),r.a.createElement(h.a,{exact:!0,path:"/research",render:function(){return r.a.createElement(M,{category:"research",newPage:function(){e.setState({page:"Research"})}})}}),r.a.createElement(h.a,{exact:!0,path:"/upload",render:function(){return r.a.createElement(w,{newPage:function(){e.setState({page:"Upload"})}})}}),"/* ",r.a.createElement(h.a,{exact:!0,path:"/projectsgrid",render:function(){return r.a.createElement(I,{newPage:function(){e.setState({page:"Projects"})}})}})," */",r.a.createElement(h.a,{exact:!0,path:"/projects",render:function(){return r.a.createElement(A,{category:"curating",newPage:function(){e.setState({page:"ProjectsStrip"})}})}}),r.a.createElement(h.a,{path:"/project/:id",render:function(t){return r.a.createElement(P,Object.assign({newPage:function(){e.setState({page:"ProjectDetail"})}},t))}}))),r.a.createElement("footer",null,r.a.createElement(T,null))))}}]),t}(n.Component),U=a(118);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(U.a,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},17:function(e,t,a){},18:function(e,t,a){},26:function(e,t){var a=[["I build ","I translate ","I curate ","I question ","I research ","I write "],["Je construis ","Je traduis ","Je cure ","Je questionne ","Je recherche ","J'\xe9cris "],["Construyo ","Traduzco ","Comisario ","Cuestiono ","Investigo ","Escribo "]],n=[["architecture","language","art","gender","research","text"],["l'architecture","le langage","l'art","le genre","la recherche","des textes"],["arquitectura","el lenguaje","el arte","el g\xe9nero","la investigaci\xf3n","textos"]];t.langList={ActionLangList:a,ObjectLangList:n}},28:function(e,t,a){},29:function(e,t,a){},44:function(e,t,a){e.exports=a(114)},49:function(e,t,a){},55:function(e,t,a){}},[[44,2,1]]]);
//# sourceMappingURL=main.ed5337bc.chunk.js.map