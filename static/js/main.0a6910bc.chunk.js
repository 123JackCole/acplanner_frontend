(this.webpackJsonpacplanner_client=this.webpackJsonpacplanner_client||[]).push([[0],{28:function(e,t,a){e.exports=a(40)},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(21),r=a.n(c),s=(a(33),a(34),a(6)),i=a(1),o="https://ac-planner.herokuapp.com/api/v1",m=function(){return{"Content-Type":"application/json",Accept:"application/json",Authorization:localStorage.getItem("token")}},u={login:function(e){return fetch("".concat(o,"/login"),{method:"POST",headers:m(),body:JSON.stringify(e)}).then((function(e){return e.json()}))},getCurrentUser:function(){return fetch("".concat(o,"/current_user"),{headers:m()}).then((function(e){return e.json()}))},newUser:function(e){return fetch("".concat(o,"/signup"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:e})}).then((function(e){return e.json()}))}},d={getBugs:function(){return fetch("".concat(o,"/bugs/"),{headers:m()}).then((function(e){return e.json()}))}},h={getFish:function(){return fetch("".concat(o,"/fish/"),{headers:m()}).then((function(e){return e.json()}))}},f={getFossils:function(){return fetch("".concat(o,"/fossils/"),{headers:m()}).then((function(e){return e.json()}))}},E={getVillagers:function(){return fetch("".concat(o,"/villagers/"),{headers:m()}).then((function(e){return e.json()}))}},p={getChecklist:function(e){return fetch("".concat(o,"/dailychecklists/").concat(e),{headers:m()}).then((function(e){return e.json()}))},putChecklist:function(e){var t="";return e.checked_statuses.forEach((function(e){t+="[",e.forEach((function(a,n){t+=a,n!==e.length-1&&(t+=",")})),t+="]"})),fetch("".concat(o,"/dailychecklists/").concat(e.user_id),{method:"PUT",headers:m(),body:JSON.stringify({dailychecklist:{id:e.id,user_id:e.user_id,checked_statuses:t}})}).then((function(e){return e.json()}))}},v={getTasks:function(e){return fetch("".concat(o,"/tasks/").concat(e),{headers:m()}).then((function(e){return e.json()}))}},g={getEventsToday:function(){return fetch("".concat("https://nookipedia.com/api","/today/?api_key=").concat("1df0466a-0645-4a04-a2e4-4c1b69b92c4b"),{headers:{Accept:"application/json"}}).then((function(e){return e.json()}))}},b=a(2),N=a(9);var y=function(e){var t=!!localStorage.getItem("token");return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-custom"},t?l.a.createElement(b.d,{className:"navbar-brand d-none d-lg-inline-block",to:"/dashboard",exact:!0},"AC Planner"):l.a.createElement(b.d,{className:"navbar-brand d-none d-lg-inline-block",to:"/",exact:!0},"AC Planner"),l.a.createElement("div",{className:"navbar-nav ml-auto flex-nowrap",id:"myNavbar"},l.a.createElement(b.d,{className:"nav-link",to:"/bugs",exact:!0},"Bugs"),l.a.createElement(b.d,{className:"nav-link",to:"/fish",exact:!0},"Fish"),l.a.createElement(b.d,{className:"nav-link",to:"/fossils",exact:!0},"Fossils"),l.a.createElement(b.d,{className:"nav-link",to:"/villagers",exact:!0},"Villagers"),t?null:l.a.createElement(b.d,{className:"nav-link",to:"/login",exact:!0}," ","Log In"),t?l.a.createElement(b.d,{className:"nav-link",to:"/",exact:!0,onClick:e.logout}," ","Logout"):null))},k=function(){return l.a.createElement("div",{className:"full-width-div",style:{backgroundImage:"url(https://i.redd.it/pqkhcwcsp5x41.jpg)",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",marginTop:"-20px"}},l.a.createElement("div",{className:"row h-75 justify-content-center"},l.a.createElement("div",{className:"col-4 align-self-center d-flex justify-content-center"},l.a.createElement("div",{className:"card card-block d-table-cell mx-auto"},l.a.createElement(b.c,{to:"/login"},l.a.createElement("button",{className:"btn btn-info btn-lg w-100"},"Log In")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.c,{to:"/signup"},l.a.createElement("button",{className:"btn btn-info btn-lg w-100"},"Sign Up"))))))},j=a(11);var x=function(e){var t=Object(n.useState)({username:"",password:""}),a=Object(i.a)(t,2),c=a[0],r=a[1],o=function(e){var t=Object(s.a)({},c,Object(j.a)({},e.target.name,e.target.value));r(t)};return l.a.createElement("div",{className:"full-width-div",style:{backgroundImage:"url(https://i.redd.it/pqkhcwcsp5x41.jpg)",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",marginTop:"-20px"}},l.a.createElement("div",{className:"row h-75 justify-content-center"},l.a.createElement("div",{className:"col-4 align-self-center d-flex justify-content-center"},l.a.createElement("div",{className:"card card-block d-table-cell mx-auto"},e.appState.errors?l.a.createElement("h3",{className:"small text-center"},"This username is taken. Please try again."):l.a.createElement("h3",{className:"small text-center"},"Enter the information below to create an account."),l.a.createElement("br",null),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("form",{id:"event-form",className:"",onSubmit:function(t){t.preventDefault(),e.onNewUser(t,(function(){e.history.push("/dashboard")})),t.target.username.value="",t.target.password.value=""}},l.a.createElement("div",{className:"text-right"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",name:"username",value:c.username,onChange:o})),l.a.createElement("br",null),l.a.createElement("div",{className:"text-right"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",name:"password",value:c.password,onChange:o})),l.a.createElement("div",{className:"text-center"},l.a.createElement("br",null),l.a.createElement("input",{type:"submit",className:"btn btn-info"}))))))))},O=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)({username:"",password:""}),m=Object(i.a)(o,2),d=m[0],h=m[1],f=function(e){var t=Object(s.a)({},d,Object(j.a)({},e.target.name,e.target.value));h(t)};return Object(n.useEffect)((function(){return function(){r(!1),h({username:"",password:""})}}),[]),l.a.createElement("div",{className:"full-width-div",style:{backgroundImage:"url(https://i.redd.it/pqkhcwcsp5x41.jpg)",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",marginTop:"-20px"}},l.a.createElement("div",{className:"row h-75 justify-content-center"},l.a.createElement("div",{className:"col-4 align-self-center d-flex justify-content-center"},l.a.createElement("div",{className:"card card-block d-table-cell mx-auto"},c?l.a.createElement("h3",{className:"small text-center"},"Your password was incorrect. Please try again."):null,l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),u.login(d).then((function(t){t.error?r(!0):(e.onLogin(t),e.history.push("/dashboard"))}))},className:""},l.a.createElement("div",{className:"text-right"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",name:"username",value:d.username,onChange:f})),l.a.createElement("br",null),l.a.createElement("div",{className:"text-right"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{name:"password",type:"password",value:d.password,onChange:f})),l.a.createElement("br",null),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{type:"submit",className:"btn btn-info "},"Login"))))))))},w=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],r=a[1];return e.images&&r(e.images.map((function(t){return l.a.createElement("img",{src:t,alt:e.event,key:t})}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("hr",null),l.a.createElement("div",{className:"text-center"},e.event,l.a.createElement("br",null),c)))},S=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)([]),o=Object(i.a)(s,2),m=o[0],u=o[1],d=Object(n.useState)([]),h=Object(i.a)(d,2),f=(h[0],h[1]);return Object(n.useEffect)((function(){var t,a=e.events.message,n=e.events.villager_images;t=e.events.events?e.events.events.map((function(e){return e.includes("birthday")?l.a.createElement(w,{event:e,images:n,key:e}):l.a.createElement(w,{event:e,key:e})})):[],r(a),u(t),f(n)}),[e.events]),l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("h4",{className:"text-center"},c),l.a.createElement("h4",null,m))},A=a(7),C=a(24),_=a(25),P=a(15),I=a(27),T=a(26);var U=function(e){for(var t=e.message,a=[],n=0;n<e.num_of_boxes;n++)a.push(l.a.createElement("input",{key:n,name:n,type:"checkbox",defaultChecked:!!e.checked&&e.checked[n],onClick:function(t){return e.onClick(t,e.name)}}));return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("hr",null),l.a.createElement("div",{className:"text-center"},t,l.a.createElement("br",null),a)))},F=function(e){Object(I.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this)).state={tasks:[],checked:[]},n.handleClick=n.handleClick.bind(Object(P.a)(n)),n}return Object(_.a)(a,[{key:"handleClick",value:function(e,t){var a=Object(A.a)(this.state.checked);a[t][e.target.name]=!a[t][e.target.name],this.setState({checked:a});var n=Object(s.a)({},this.props.checklist,{checked_statuses:a});p.putChecklist(n)}},{key:"componentDidMount",value:function(){var e=this;v.getTasks(this.props.checklist.id).then((function(t){if(e.props.checklist.checked_statuses===[]){var a=t.map((function(e){for(var t=[],a=0;a<e.num_of_boxes;a++)t.push(!1);return t}));e.setState({checked:a})}else e.setState({checked:e.props.checklist.checked_statuses});var n=t.map((function(t,a){return l.a.createElement(U,{message:t.name,num_of_boxes:t.num_of_boxes,key:a,name:a,onClick:e.handleClick,checked:e.state.checked[a]})}));e.setState({tasks:n})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h4",null,this.state.tasks))}}]),a}(n.Component),M=function(e){var t=e.history,a=Object(n.useState)([]),c=Object(i.a)(a,2),r=c[0],o=c[1],m=Object(n.useState)({}),d=Object(i.a)(m,2),h=d[0],f=d[1];return Object(n.useEffect)((function(){localStorage.getItem("token")?u.getCurrentUser().then((function(e){e.error?t.push("/#"):(p.getChecklist(e.id).then((function(e){var t=e.checked_statuses,a=(t=t.slice(1,t.length-1)).split("][").map((function(e){return e.split(",").map((function(e){return"true"===e}))}));e=Object(s.a)({},e,{checked_statuses:a}),o(e)})),g.getEventsToday().then((function(e){f(e)})))})):t.push("/#")}),[t]),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col-md-6"},l.a.createElement("div",{className:"card h-100"},l.a.createElement("br",null),l.a.createElement("h2",{className:"card-title text-center"}," Current Events "),h.message?l.a.createElement(S,{events:h}):null)),l.a.createElement("div",{className:"col col-md-6"},l.a.createElement("div",{className:"card h-100"},l.a.createElement("br",null),l.a.createElement("h2",{className:"card-title text-center"}," Daily Checklist "),r.id?l.a.createElement(F,{checklist:r}):null)))},z=function(e){var t=e.show,a=e.children,n=t?"modal display-block":"modal display-none";return l.a.createElement("div",{className:n},l.a.createElement("section",{className:"modal-main"},a))},L=function(e){var t=e.bug,a=Object(n.useState)(!1),c=Object(i.a)(a,2),r=c[0],s=c[1],o=function(){s(!r)};return l.a.createElement("div",{className:"card rounded mb-4 box-shadow h-100"},"N/A"===t.image?null:l.a.createElement("img",{className:"card-img-top img-responsive-bug",src:t.image,alt:t.name,style:{objectFit:"contain",maxWidth:"100%",maxHeight:"100%"}}),l.a.createElement("div",{className:"card-body d-flex flex-column"},"N/A"!==t.name?l.a.createElement("h4",{className:"card-title"},t.name):null,"N/A"!==t.location?l.a.createElement("p",{className:"card-text"},"Location: ",t.location):null,"N/A"!==t.price?l.a.createElement("p",{className:"card-text"},"Price: ",t.price):null,"N/A"!==t.time_day?l.a.createElement("p",{className:"card-text"},"Time: ",t.time_day):null,"N/A"!==t.time_year?l.a.createElement("p",{className:"card-text"},"Months: ",t.time_year):null,l.a.createElement("button",{className:"mt-auto btn btn-sm btn-block btn-outline-info","data-toggle":"modal",onClick:o},"More Info")),l.a.createElement("div",null,l.a.createElement(z,{show:r},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"image text-center"},l.a.createElement("img",{src:t.image,alt:t.name})),l.a.createElement("div",null,l.a.createElement("div",null,t.name),"N/A"!==t.scientific_name?l.a.createElement("div",null,"Scientific name: ",t.scientific_name):null,"N/A"!==t.family?l.a.createElement("div",null,"Scientific family: ",t.family):null,l.a.createElement("br",null),l.a.createElement("div",null,"N/A"!==t.location?l.a.createElement("p",null,"Location: ",t.location):null,"N/A"!==t.price?l.a.createElement("p",null,"Price: ",t.price):null,"N/A"!==t.time_day?l.a.createElement("p",null,"Time: ",t.time_day):null,"N/A"!==t.time_year?l.a.createElement("p",null,"Season: ",t.time_year):null,"N/A"!==t.size?l.a.createElement("p",null,"Size: ",t.size):null,"N/A"!==t.rarity?l.a.createElement("p",null,"Rarity: ",t.rarity):null)),l.a.createElement("button",{type:"button",className:"btn btn-info",onClick:o},"Close")))))))},B=function(e){for(var t=e.bugs,a=[Math.ceil(t.length/4)],n=[],c=0;c<a;c++)n.push.apply(n,Object(A.a)(t.slice(4*c,4*c+4)));var r=n.map((function(e,t){return l.a.createElement("div",{className:"row",key:t},e.map((function(e){return null!==e?l.a.createElement("div",{key:e.id,className:"col-md-3"},l.a.createElement(L,{key:e.id,bug:e})):null})))}));return l.a.createElement("div",null,r)},W=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){localStorage.getItem("token")?u.getCurrentUser().then((function(t){t.error?e.history.push("/login"):d.getBugs().then((function(e){for(var t=[],a=[],n=e.length+(4-e.length%4),l=0;l<n;l++)e[l]?a.push(e[l]):a.push(null),4===a.length&&(t.push(a),a=[]);r(t)}))})):e.history.push("/login")}),[e.history]),l.a.createElement("div",null,l.a.createElement(N.c,null,l.a.createElement(N.a,{path:"/bugs",render:function(){return l.a.createElement(B,{bugs:c})}})))},q=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],r=a[1],s=function(){r(!c)};return l.a.createElement("div",{className:"card rounded mb-4 box-shadow h-100"},l.a.createElement("img",{className:"card-img-top img-responsive-fish",src:e.fish.image,alt:e.fish.name,style:{objectFit:"contain",maxWidth:"100%",maxHeight:"100%"}}),l.a.createElement("div",{className:"card-body d-flex flex-column"},"N/A"!==e.fish.name?l.a.createElement("h4",null,e.fish.name):null,"N/A"!==e.fish.location?l.a.createElement("div",null,"Location: ",e.fish.location):null,"N/A"!==e.fish.price?l.a.createElement("div",null,"Price: ",e.fish.price):null,"N/A"!==e.fish.time_day?l.a.createElement("div",null,"Time: ",e.fish.time_day):null,"N/A"!==e.fish.time_year?l.a.createElement("div",null,"Months: ",e.fish.time_year):null,"N/A"!==e.fish.shadow?l.a.createElement("div",null,"Shadow: ",e.fish.shadow):null,l.a.createElement("button",{className:"mt-auto btn btn-sm btn-block btn-outline-info","data-toggle":"modal",onClick:s},"More Info")),l.a.createElement("div",null,l.a.createElement(z,{show:c},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"image text-center"},l.a.createElement("img",{src:e.fish.image,alt:e.fish.name})),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"header"},e.fish.name),"N/A"!==e.fish.scientific_name?l.a.createElement("div",{className:"meta"},"Scientific name: ",e.fish.scientific_name):null,"N/A"!==e.fish.family?l.a.createElement("div",null,"Scientific family: ",e.fish.family):null,l.a.createElement("div",null,"N/A"!==e.fish.location?l.a.createElement("p",null,"Location: ",e.fish.location):null,"N/A"!==e.fish.price?l.a.createElement("p",null,"Price: ",e.fish.price):null,"N/A"!==e.fish.time_day?l.a.createElement("p",null,"Time: ",e.fish.time_day):null,"N/A"!==e.fish.time_year?l.a.createElement("p",null,"Season: ",e.fish.time_year):null,"N/A"!==e.fish.size?l.a.createElement("p",null,"Size: ",e.fish.size):null,"N/A"!==e.fish.shadow?l.a.createElement("div",null,"Shadow: ",e.fish.shadow):null,"N/A"!==e.fish.rarity?l.a.createElement("p",null,"Rarity: ",e.fish.rarity):null)),l.a.createElement("button",{type:"button",className:"btn btn-info",onClick:s},"Close")))))))},D=function(e){for(var t=e.fishes,a=[Math.ceil(t.length/4)],n=[],c=0;c<a;c++)n.push.apply(n,Object(A.a)(t.slice(4*c,4*c+4)));var r=n.map((function(e,t){return l.a.createElement("div",{className:"row",key:t},e.map((function(e){return null!==e?l.a.createElement("div",{key:e.id,className:"col-md-3"},l.a.createElement(q,{key:e.id,fish:e})):null})))}));return l.a.createElement("div",null,r)},H=function(e){var t=e.history,a=Object(n.useState)([]),c=Object(i.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){localStorage.getItem("token")?h.getFish().then((function(e){for(var t=[],a=[],n=e.length+(4-e.length%4),l=0;l<n;l++)e[l]?a.push(e[l]):a.push(null),4===a.length&&(t.push(a),a=[]);s(t)})):t.push("/login")}),[t]),l.a.createElement("div",null,l.a.createElement(N.c,null,l.a.createElement(N.a,{path:"/fish",render:function(){return l.a.createElement(D,{fishes:r})}})))},J=function(e){var t=e.fossil,a=Object(n.useState)(!1),c=Object(i.a)(a,2),r=c[0],s=c[1],o=function(){s(!r)};return l.a.createElement("div",{className:"card rounded mb-4 box-shadow h-100"},t.image?l.a.createElement("img",{className:"card-img-top img-responsive-fossil",src:t.image,alt:t.name,style:{objectFit:"contain",maxWidth:"100%",maxHeight:"100%"}}):null,l.a.createElement("div",{className:"card-body d-flex flex-column"},"N/A"!==t.name?l.a.createElement("h4",null,t.name):null,"N/A"!==t.price?l.a.createElement("div",null,"Price: ",t.price):null,l.a.createElement("button",{className:"mt-auto btn btn-sm btn-block btn-outline-info","data-toggle":"modal",onClick:o},"More Info")),l.a.createElement("div",null,l.a.createElement(z,{show:r},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:t.image,alt:t.name})),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"header"},t.name),"N/A"!==t.scientific_name?l.a.createElement("div",null,"Scientific name: ",t.scientific_name):null,l.a.createElement("div",null,"N/A"!==t.price?l.a.createElement("p",null,"Price: ",t.price):null,"N/A"!==t.sections?l.a.createElement("p",null,"Sections: ",t.sections):null,"N/A"!==t.period?l.a.createElement("p",null,"Period: ",t.period):null,"N/A"!==t.length?l.a.createElement("p",null,"Size: ",t.length):null)),l.a.createElement("button",{type:"button",className:"btn btn-info",onClick:o},"Close")))))))},R=function(e){for(var t=e.fossils,a=[Math.ceil(t.length/4)],n=[],c=0;c<a;c++)n.push.apply(n,Object(A.a)(t.slice(4*c,4*c+4)));var r=n.map((function(e,t){return l.a.createElement("div",{className:"row",key:t},e.map((function(e){return null!==e?l.a.createElement("div",{key:e.id,className:"col-md-3"},l.a.createElement(J,{key:e.id,fossil:e})):null})))}));return l.a.createElement("div",null,r)},G=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){localStorage.getItem("token")?u.getCurrentUser().then((function(t){t.error?e.history.push("/login"):f.getFossils().then((function(e){for(var t=[],a=[],n=e.length+(4-e.length%4),l=0;l<n;l++)e[l]?a.push(e[l]):a.push(null),4===a.length&&(t.push(a),a=[]);r(t)}))})):e.history.push("/login")}),[e.history]),l.a.createElement("div",null,l.a.createElement(N.c,null,l.a.createElement(N.a,{path:"/fossils",render:function(){return l.a.createElement(R,{fossils:c})}})))},V=function(e){var t=e.villager,a=Object(n.useState)(!1),c=Object(i.a)(a,2),r=c[0],s=c[1],o=function(){s(!r)};return l.a.createElement("div",{className:"card rounded mb-4 box-shadow h-100"},l.a.createElement("img",{className:"card-img-top img-responsive-villager",src:t.image,alt:t.name,style:{objectFit:"contain",maxWidth:"100%",maxHeight:"100%"}}),l.a.createElement("div",{className:"card-body d-flex flex-column"},"N/A"!==t.name?l.a.createElement("h4",null,t.name):null,"N/A"!==t.gender?l.a.createElement("div",null,"Gender: ",t.gender):null,"N/A"!==t.personality?l.a.createElement("div",null,"Personality: ",t.personality):null,"N/A"!==t.species?l.a.createElement("div",null,"Species: ",t.species):null,"N/A"!==t.birthday?l.a.createElement("div",null,"Birthday: ",t.birthday):null,l.a.createElement("button",{className:"mt-auto btn btn-sm btn-block btn-outline-info","data-toggle":"modal",onClick:o},"More Info")),l.a.createElement("div",null,l.a.createElement(z,{show:r},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"image text-center"},l.a.createElement("img",{src:t.image,alt:t.name})),l.a.createElement("div",{className:"content"},l.a.createElement("h5",{className:"header"},t.name),"N/A"!==t.gender?l.a.createElement("p",null,"Gender: ",t.gender):null,"N/A"!==t.personality?l.a.createElement("p",null,"Personality: ",t.personality):null,"N/A"!==t.species?l.a.createElement("p",null,"Species: ",t.species):null,"N/A"!==t.birthday?l.a.createElement("p",null,"Birthday: ",t.birthday):null,l.a.createElement("div",null,"N/A"!==t.quote?l.a.createElement("p",null,"Quote: ",t.quote):null,"N/A"!==t.sign?l.a.createElement("p",null,"Sign: ",t.sign):null,"N/A"!==t.phrase?l.a.createElement("p",null,"Phrase: ",t.phrase):null,"N/A"!==t.clothes?l.a.createElement("p",null,"Clothes: ",t.clothes):null,"N/A"!==t.picture?l.a.createElement("p",null,"Picture:"," ",l.a.createElement("img",{src:t.picture,alt:t.name})):null,"N/A"!==t.siblings?l.a.createElement("p",null,"Siblings: ",t.siblings):null,"N/A"!==t.goal?l.a.createElement("p",null,"Goal: ",t.goal):null,"N/A"!==t.fear?l.a.createElement("p",null,"Fear: ",t.fear):null,"N/A"!==t.favclothing?l.a.createElement("p",null,"Favorite Clothing: ",t.favclothing):null,"N/A"!==t.leastfavclothing?l.a.createElement("p",null,"Hated Clothes: ",t.leastfavclothing):null,"N/A"!==t.favcolor?l.a.createElement("p",null,"Favorite Color: ",t.favcolor):null)),l.a.createElement("button",{type:"button",className:"btn btn-info",onClick:o},"Close")))))))},Q=function(e){for(var t=e.villagers,a=[Math.ceil(t.length/4)],n=[],c=0;c<a;c++)n.push.apply(n,Object(A.a)(t.slice(4*c,4*c+4)));var r=n.map((function(e,t){return l.a.createElement("div",{className:"row",key:t},e.map((function(e){return null!==e?l.a.createElement("div",{key:e.id,className:"col-md-3"},l.a.createElement(V,{key:e.id,villager:e})):null})))}));return l.a.createElement("div",null,r)};var Y=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(N.f)();return Object(n.useEffect)((function(){localStorage.getItem("token")?u.getCurrentUser().then((function(e){e.error?r.push("/login"):E.getVillagers().then((function(e){for(var t=[],a=[],n=e.length+(4-e.length%4),l=0;l<n;l++)e[l]?a.push(e[l]):a.push(null),4===a.length&&(t.push(a),a=[]);c(t)}))})):r.push("/login")}),[r]),l.a.createElement("div",null,l.a.createElement(N.c,null,l.a.createElement(N.a,{path:"/villagers",render:function(){return l.a.createElement(Q,{villagers:a})}})))};var $=function(){var e=Object(n.useState)({user:{}}),t=Object(i.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){localStorage.getItem("token")&&u.getCurrentUser().then((function(e){var t=Object(s.a)({},a,{user:e});c(t)}))}),[]);var r=function(e){var t=Object(s.a)({},a,{user:{id:e.id,username:e.username}});localStorage.setItem("token",e.jwt),c(t)};return l.a.createElement("div",null,l.a.createElement(b.a,null,l.a.createElement(b.b,null,l.a.createElement("header",null,l.a.createElement(y,{className:"navbar",logout:function(){localStorage.removeItem("token"),c({user:{}})},user:a.user})),l.a.createElement("div",null,l.a.createElement(N.a,{exact:!0,path:"/",render:function(e){return l.a.createElement(k,e)}}),l.a.createElement(N.a,{exact:!0,path:"/login",render:function(e){return l.a.createElement(O,Object.assign({},e,{onLogin:r}))}}),l.a.createElement(N.a,{exact:!0,path:"/signup",render:function(e){return l.a.createElement(x,Object.assign({},e,{appState:a,onNewUser:function(e){return function(e){e.preventDefault();var t={username:e.target.username.value,password:e.target.password.value};u.newUser(t).then((function(e){e.error||(r(e),window.location.hash="/dashboard")}))}(e)}}))}}),l.a.createElement(N.a,{exact:!0,path:"/dashboard",render:function(e){return l.a.createElement(M,Object.assign({},e,{appState:a}))}}),l.a.createElement(N.a,{path:"/bugs",component:W}),l.a.createElement(N.a,{path:"/fish",component:H}),l.a.createElement(N.a,{path:"/fossils",component:G}),l.a.createElement(N.a,{path:"/villagers",component:Y})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.0a6910bc.chunk.js.map