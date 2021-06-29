(self.webpackChunksocial=self.webpackChunksocial||[]).push([[5373],{5373:(e,t,n)=>{"use strict";n.r(t),n.d(t,{HomePageModule:()=>y});var i=n(5109),o=n(7634),r=n(2249),a=n(3340),s=n(1855),c=n(2304),l=n(7698);function g(e,t){1&e&&(c.TgZ(0,"span",19),c.TgZ(1,"p",20),c._uU(2,"Event Name is required!"),c.qZA(),c.qZA())}function p(e,t){1&e&&(c.TgZ(0,"span",19),c.TgZ(1,"p",20),c._uU(2,"Date and Time is required!"),c.qZA(),c.qZA())}function d(e,t){1&e&&(c.TgZ(0,"span",19),c.TgZ(1,"p",20),c._uU(2,"Date and Time is required!"),c.qZA(),c.qZA())}function Z(e,t){1&e&&(c.TgZ(0,"span",19),c.TgZ(1,"p",20),c._uU(2,"Event Type is required!"),c.qZA(),c.qZA())}function u(e,t){1&e&&(c.TgZ(0,"span",19),c.TgZ(1,"p",20),c._uU(2,"Event Address is required!"),c.qZA(),c.qZA())}function m(e,t){1&e&&(c.TgZ(0,"span",19),c.TgZ(1,"p",20),c._uU(2,"Event Privacy is required!"),c.qZA(),c.qZA())}let h=(()=>{class e{constructor(e,t){this.appService=e,this.formBuilder=t,this.date=new Date,this.formSubmit=!1,this.params="",this.back=()=>(0,s.mG)(this,void 0,void 0,function*(){yield this.appService.dismissModal(),console.log("back")}),this.EventDetailsForm=this.formBuilder.group({EventLabel:["",[r.kI.required]],Time:["",[r.kI.required]],Date:["",[r.kI.required]],EventType:["",[r.kI.required]],EventAddress:["",[r.kI.required]],EventPrivacy:["",[r.kI.required]]})}ngOnInit(){}get EventDetailsFormError(){return this.EventDetailsForm.controls}onSubmit(){return(0,s.mG)(this,void 0,void 0,function*(){this.formSubmit=!0,console.log(this.EventDetailsForm.value.DateandTime),this.EventDetailsForm.valid&&(this.eventDetails=this.EventDetailsForm.value,yield this.appService.store.getUser().then(e=>{console.log(e),console.log(e.id),console.log(e.fullname),this.token=e.token,this.eventDetails.HostId=e.id,this.eventDetails.HostName=e.fullname}),this.appService.calls.eventListCall(this.token,this.params,this.eventDetails).subscribe(e=>{this.eventId=e.name}),console.log(this.eventDetails,"null"),this.appService.modal.dismiss())})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(l.z),c.Y36(r.qu))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-host-event"]],decls:52,vars:7,consts:[["color","primary"],["slot","start"],[2,"position","absolute",3,"click"],["name","close","size","large"],[3,"formGroup"],["position","floating"],["type","text","formControlName","EventLabel","placeholder","Event Name","required",""],["class","form-error",4,"ngIf"],["displayFormat","MMM DD, YYYY","pickerFormat","MMMM DD YYYY","formControlName","Date","placeholder","Date","required",""],["displayFormat","HH: mm","pickerFormat","HH :mm","formControlName","Time","placeholder","Time","required",""],["placeholder","Event Type","formControlName","EventType"],["value","abc"],["value","def"],["type","text","formControlName","EventAddress","placeholder","Event Address","required",""],["placeholder","Event Type","formControlName","EventPrivacy"],["value","Open"],["value","Closed"],[1,"sign-btn-wrap"],["shape","round","type","button","expand","block","fill","solid",1,"sign-btn",3,"click"],[1,"form-error"],[1,"form-error-text"]],template:function(e,t){1&e&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar",0),c.TgZ(2,"ion-buttons",1),c.TgZ(3,"ion-button",2),c.NdJ("click",function(){return t.back()}),c._UZ(4,"ion-icon",3),c.qZA(),c.qZA(),c.TgZ(5,"ion-title"),c._uU(6,"Host Event"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(7,"ion-content"),c.TgZ(8,"ion-card"),c.TgZ(9,"ion-card-content"),c.TgZ(10,"form",4),c.TgZ(11,"ion-item"),c.TgZ(12,"ion-label",5),c._uU(13,"Event Name"),c.qZA(),c._UZ(14,"ion-input",6),c.YNc(15,g,3,0,"span",7),c.qZA(),c.TgZ(16,"ion-item"),c.TgZ(17,"ion-label",5),c._uU(18," Date "),c.qZA(),c._UZ(19,"ion-datetime",8),c.YNc(20,p,3,0,"span",7),c.qZA(),c.TgZ(21,"ion-item"),c.TgZ(22,"ion-label",5),c._uU(23," Time "),c.qZA(),c._UZ(24,"ion-datetime",9),c.YNc(25,d,3,0,"span",7),c.qZA(),c.TgZ(26,"ion-item"),c.TgZ(27,"ion-label",5),c._uU(28,"Event Type"),c.qZA(),c.TgZ(29,"ion-select",10),c.TgZ(30,"ion-select-option",11),c._uU(31,"Abc"),c.qZA(),c.TgZ(32,"ion-select-option",12),c._uU(33,"Def"),c.qZA(),c.qZA(),c.YNc(34,Z,3,0,"span",7),c.qZA(),c.TgZ(35,"ion-item"),c.TgZ(36,"ion-label",5),c._uU(37," Event Address"),c.qZA(),c._UZ(38,"ion-input",13),c.YNc(39,u,3,0,"span",7),c.qZA(),c.TgZ(40,"ion-item"),c.TgZ(41,"ion-label",5),c._uU(42," Event Privacy"),c.qZA(),c.TgZ(43,"ion-select",14),c.TgZ(44,"ion-select-option",15),c._uU(45,"Open"),c.qZA(),c.TgZ(46,"ion-select-option",16),c._uU(47,"Closed"),c.qZA(),c.qZA(),c.YNc(48,m,3,0,"span",7),c.qZA(),c.TgZ(49,"div",17),c.TgZ(50,"ion-button",18),c.NdJ("click",function(){return t.onSubmit()}),c._uU(51,"Confirm"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(10),c.Q6J("formGroup",t.EventDetailsForm),c.xp6(5),c.Q6J("ngIf",t.formSubmit&&(null==t.EventDetailsFormError.EventLabel.errors?null:t.EventDetailsFormError.EventLabel.errors.required)),c.xp6(5),c.Q6J("ngIf",t.formSubmit&&(null==t.EventDetailsFormError.Date.errors?null:t.EventDetailsFormError.Date.errors.required)),c.xp6(5),c.Q6J("ngIf",t.formSubmit&&(null==t.EventDetailsFormError.Time.errors?null:t.EventDetailsFormError.Time.errors.required)),c.xp6(9),c.Q6J("ngIf",t.formSubmit&&(null==t.EventDetailsFormError.EventType.errors?null:t.EventDetailsFormError.EventType.errors.required)),c.xp6(5),c.Q6J("ngIf",t.formSubmit&&(null==t.EventDetailsFormError.EventAddress.errors?null:t.EventDetailsFormError.EventAddress.errors.required)),c.xp6(9),c.Q6J("ngIf",t.formSubmit&&(null==t.EventDetailsFormError.EventPrivacy.errors?null:t.EventDetailsFormError.EventPrivacy.errors.required)))},directives:[o.Gu,o.sr,o.Sm,o.YG,o.gu,o.wd,o.W2,o.PM,o.FN,r._Y,r.JL,r.sg,o.Ie,o.Q$,o.pK,o.j9,r.JJ,r.u,r.Q7,i.O5,o.x4,o.QI,o.t9,o.n0],styles:[".sign-btn-wrap[_ngcontent-%COMP%]{text-align:center;padding-top:20px}.sign-btn-wrap[_ngcontent-%COMP%]   .sign-btn[_ngcontent-%COMP%]{--ion-primary-color:#215ab7;--background-activated:#e1eaf9;--background-focused:#e1eaf9;--background-hover:#647b9d;color:#f4f6fa;border-radius:25px;--background:#215ab7;background-color:#215ab7}"]}),e})();var v=n(8300);let q=(()=>{class e{constructor(e){this.appService=e,this.back=()=>(0,s.mG)(this,void 0,void 0,function*(){yield this.appService.dismissModal()})}ngOnInit(){this.id=this.appService.data.eventId,this.appService.calls.getEventbyId(this.id).subscribe(e=>{console.log(e),this.eventDetails=e})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(l.z))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-event-details"]],decls:49,vars:16,consts:[["color","primary"],["slot","start"],[2,"position","absolute",3,"click"],["name","close","size","large"],[1,"img-container1"],[1,"ion-no-padding"],[1,"img-container2"],[2,"text-align","center","text-transform","capitalize"]],template:function(e,t){1&e&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar",0),c.TgZ(2,"ion-buttons",1),c.TgZ(3,"ion-button",2),c.NdJ("click",function(){return t.back()}),c._UZ(4,"ion-icon",3),c.qZA(),c.qZA(),c.TgZ(5,"ion-title"),c._uU(6,"Event Details"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(7,"ion-content"),c.TgZ(8,"ion-card"),c.TgZ(9,"ion-card-content"),c.TgZ(10,"ion-row"),c.TgZ(11,"ion-col"),c._UZ(12,"div",4),c.qZA(),c.TgZ(13,"ion-col",5),c.TgZ(14,"ion-row"),c.TgZ(15,"ion-col"),c._UZ(16,"div",6),c.qZA(),c.qZA(),c.TgZ(17,"ion-row"),c.TgZ(18,"ion-col"),c._UZ(19,"div",6),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(20,"ion-card-header"),c.TgZ(21,"h2",7),c.TgZ(22,"b"),c._uU(23),c.qZA(),c.qZA(),c.qZA(),c.TgZ(24,"ion-row"),c.TgZ(25,"ion-col"),c.TgZ(26,"ion-row"),c.TgZ(27,"ion-col"),c.TgZ(28,"ion-item"),c.TgZ(29,"ion-label"),c._uU(30),c.ALo(31,"date"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(32,"ion-row"),c.TgZ(33,"ion-col"),c.TgZ(34,"ion-item"),c.TgZ(35,"ion-label"),c._uU(36),c.ALo(37,"date"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(38,"ion-col"),c.TgZ(39,"ion-row"),c.TgZ(40,"ion-col"),c.TgZ(41,"ion-item"),c.TgZ(42,"ion-label"),c._uU(43,"Distance"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(44,"ion-row"),c.TgZ(45,"ion-col"),c.TgZ(46,"ion-item"),c.TgZ(47,"ion-label"),c._uU(48),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(12),c.Udp("background-image","url(https://i.pinimg.com/originals/31/78/95/317895e71b1c8e53e9450ab269608c04.jpg)"),c.xp6(4),c.Udp("background-image","url(https://i.pinimg.com/originals/31/78/95/317895e71b1c8e53e9450ab269608c04.jpg)"),c.xp6(3),c.Udp("background-image","url(https://i.pinimg.com/originals/31/78/95/317895e71b1c8e53e9450ab269608c04.jpg)"),c.xp6(4),c.Oqu(t.eventDetails.EventLabel),c.xp6(7),c.Oqu(c.xi3(31,10,t.eventDetails.Date,"yyyy-MM-dd")),c.xp6(6),c.Oqu(c.xi3(37,13,t.eventDetails.Time,"HH:mm")),c.xp6(12),c.Oqu(t.eventDetails.EventAddress))},directives:[o.Gu,o.sr,o.Sm,o.YG,o.gu,o.wd,o.W2,o.PM,o.FN,o.Nd,o.wI,o.Zi,o.Ie,o.Q$],pipes:[i.uU],styles:[".img-container1[_ngcontent-%COMP%]{min-height:110px}.img-container1[_ngcontent-%COMP%], .img-container2[_ngcontent-%COMP%]{min-width:150px;background-size:cover}.img-container2[_ngcontent-%COMP%]{min-height:50px}"]}),e})();const A=["slides"];function T(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"ion-item",16),c.NdJ("click",function(){const t=c.CHM(e).$implicit;return c.oxw().eventDetails(t)}),c.TgZ(1,"ion-card",17),c.TgZ(2,"ion-row"),c.TgZ(3,"ion-col",18),c._UZ(4,"div",19),c.qZA(),c.TgZ(5,"ion-col",18),c.TgZ(6,"ion-row"),c.TgZ(7,"ion-col",18),c._UZ(8,"div",20),c.qZA(),c.qZA(),c.TgZ(9,"ion-row"),c.TgZ(10,"ion-col",18),c._UZ(11,"div",20),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(12,"ion-grid"),c.TgZ(13,"ion-row"),c.TgZ(14,"ion-col",21),c.TgZ(15,"ion-row"),c.TgZ(16,"ion-col"),c.TgZ(17,"ion-text",22),c.TgZ(18,"h3",23),c.TgZ(19,"b"),c._uU(20),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(21,"ion-row"),c.TgZ(22,"ion-col"),c.TgZ(23,"ion-text"),c._uU(24),c.ALo(25,"date"),c.qZA(),c.qZA(),c.TgZ(26,"ion-col"),c.TgZ(27,"ion-text"),c._uU(28),c.ALo(29,"date"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(30,"ion-col",24),c.TgZ(31,"ion-row"),c.TgZ(32,"ion-col"),c.TgZ(33,"ion-text",25),c._uU(34),c.qZA(),c.qZA(),c.qZA(),c.TgZ(35,"ion-row"),c.TgZ(36,"ion-col"),c.TgZ(37,"ion-text",26),c._uU(38,"Distance"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(39,"ion-row"),c.TgZ(40,"ion-col"),c.TgZ(41,"ion-text"),c._uU(42),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=t.$implicit;c.xp6(4),c.Udp("background-image","url(https://i.pinimg.com/originals/31/78/95/317895e71b1c8e53e9450ab269608c04.jpg)"),c.xp6(4),c.Udp("background-image","url(https://www.breathehr.com/hubfs/policy%20for%20social%20events%20people%20dancing-min.png)"),c.xp6(3),c.Udp("background-image","url(https://www.marthascatering.com/uploads/images/Events/Social-Events/Events-Social-15-8.jpg)"),c.xp6(9),c.hij(" ",e.EventLabel,""),c.xp6(4),c.Oqu(c.xi3(25,11,e.Date,"yyyy-MM-dd")),c.xp6(4),c.Oqu(c.xi3(29,14,e.Time,"HH:mm")),c.xp6(6),c.Oqu(e.EventType),c.xp6(8),c.hij(" ",e.EventAddress," ")}}const b=[{path:"",component:(()=>{class e{constructor(e){this.appService=e,this.page_number=1,this.page_limit=8,this.user={},this.mydata=[],this.eventList=[],this.userDetails={},this.sampleLoc="Miraj Cinemas",this.slideOpts={initialSlide:1,speed:400},this.profileImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrcSIYcfdCK1XNhHWpQfuoW5eZyUhuLBMKB5FzAWYJKbGy_XvpR4aAnPlOzYd2ptiDFw&usqp=CAU",this.onLogout=()=>this.appService.auth.logout(),this.hostEventPage=()=>{this.appService.presentModal(h,{})},this.appService.data.userData.subscribe(e=>this.user=e),console.log(this.user)}swipeNext(){this.appService.nav.navigateForward("home/chat")}ngOnInit(){return(0,s.mG)(this,void 0,void 0,function*(){yield this.getEvent()})}ionViewWillEnter(){return(0,s.mG)(this,void 0,void 0,function*(){yield this.getEvent()})}getEvent(){return(0,s.mG)(this,void 0,void 0,function*(){this.url='?orderBy="$key"&limitToFirst=4',this.token=yield this.appService.store.getToken(),this.appService.calls.getEventListCall(this.token,this.url).pipe((0,v.U)(e=>{const t=[];for(const n in e)t.push(Object.assign({eventId:n},e[n]));return console.log(t),t})).subscribe(e=>(0,s.mG)(this,void 0,void 0,function*(){this.eventList=e,this.mydata=Object.keys(this.eventList).map(e=>(this.lastkey=this.eventList[e].eventId,this.mydata.push(Object.assign({eventId:e},this.eventList[e])),this.eventList[e]))}),e=>{console.log(e)}),console.log(this.mydata,"my")})}onClick(){console.log(this.mydata),this.appService.nav.navigateForward("profile")}onAddActivity(){this.appService.nav.navigateBack("activities")}onProfile(){this.appService.nav.navigateForward("profile")}eventDetails(e){console.log(e.eventId),this.appService.data.eventId=e.eventId,this.appService.presentModal(q,{})}loadMore(e){console.log("load"),console.log(this.lastkey),this.url='?orderBy="$key"&startAt="'+this.lastkey+'"&limitToFirst=2',this.appService.calls.getEventListCall(this.token,this.url).pipe((0,v.U)(e=>{const t=[];for(const n in e)t.push(Object.assign({eventId:n},e[n]));return console.log(t),t})).subscribe(e=>(0,s.mG)(this,void 0,void 0,function*(){this.eventList=e,this.mydata=Object.keys(this.eventList).map(e=>(this.lastkey=this.eventList[e].eventId,this.mydata.push(Object.assign({eventId:e},this.eventList[e])),this.eventList[e]))}),e=>{console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(l.z))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-home"]],viewQuery:function(e,t){if(1&e&&(c.Gf(A,7),c.Gf(o.ju,5)),2&e){let e;c.iGM(e=c.CRH())&&(t.slides=e.first),c.iGM(e=c.CRH())&&(t.infiniteScroll=e.first)}},decls:36,vars:2,consts:[["color","primary"],["button","","slot","start",1,"profile",3,"click"],[3,"src"],["name","chatbubbles","size","large","slot","end",2,"margin-right","10px",3,"click"],[1,"mainContainer"],[1,"outer"],["class","item",3,"click",4,"ngFor","ngForOf"],["threshold","25%",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading..."],["slot","bottom"],["name","calendar"],["name","person-circle"],[3,"click"],["name","add-circle","size","large"],["name","map"],["name","information-circle"],[1,"item",3,"click"],["align-text-center","","ion-justify-content-center","",1,"inner"],[1,"ion-no-padding"],[1,"img-container1"],[1,"img-container2"],["size","8"],["color","primary","size","large"],[2,"margin","0px"],["size","4"],["color","success"],["color","danger"]],template:function(e,t){1&e&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar",0),c.TgZ(2,"ion-title"),c._uU(3,"Home"),c.qZA(),c.TgZ(4,"ion-avatar",1),c.NdJ("click",function(){return t.onClick()}),c._UZ(5,"ion-img",2),c.qZA(),c.TgZ(6,"ion-icon",3),c.NdJ("click",function(){return t.swipeNext()}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(7,"ion-content"),c.TgZ(8,"div",4),c.TgZ(9,"ion-card",5),c.YNc(10,T,43,17,"ion-item",6),c.TgZ(11,"ion-infinite-scroll",7),c.NdJ("ionInfinite",function(e){return t.loadMore(e)}),c._UZ(12,"ion-infinite-scroll-content",8),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(13,"ion-footer"),c.TgZ(14,"ion-tabs"),c.TgZ(15,"ion-tab-bar",9),c.TgZ(16,"ion-tab-button"),c._UZ(17,"ion-icon",10),c.TgZ(18,"ion-label"),c._uU(19,"Schedule"),c.qZA(),c.TgZ(20,"ion-badge"),c._uU(21,"6"),c.qZA(),c.qZA(),c.TgZ(22,"ion-tab-button"),c._UZ(23,"ion-icon",11),c.TgZ(24,"ion-label"),c._uU(25,"Speakers"),c.qZA(),c.qZA(),c.TgZ(26,"ion-tab-button",12),c.NdJ("click",function(){return t.hostEventPage()}),c._UZ(27,"ion-icon",13),c.qZA(),c.TgZ(28,"ion-tab-button"),c._UZ(29,"ion-icon",14),c.TgZ(30,"ion-label"),c._uU(31,"Map"),c.qZA(),c.qZA(),c.TgZ(32,"ion-tab-button",12),c.NdJ("click",function(){return t.onLogout()}),c._UZ(33,"ion-icon",15),c.TgZ(34,"ion-label"),c._uU(35,"About"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(5),c.Q6J("src",t.profileImageUrl),c.xp6(5),c.Q6J("ngForOf",t.mydata))},directives:[o.Gu,o.sr,o.wd,o.BJ,o.Xz,o.gu,o.W2,o.PM,i.sg,o.ju,o.MB,o.fr,o.UN,o.yq,o.ZU,o.Q$,o.yp,o.Ie,o.Nd,o.wI,o.jY,o.yW],pipes:[i.uU],styles:["ion-menu[_ngcontent-%COMP%]{--max-width:200px!important}.swiper-slide[_ngcontent-%COMP%]{display:block}#profile_img_div[_ngcontent-%COMP%]{width:75px;height:80px;line-height:80px;text-align:center;font-size:3.5em;font-weight:lighter;margin:10px auto;border-radius:10px;background-color:var(--ion-color-primary)}#user_profile_name[_ngcontent-%COMP%]{width:100%}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.myoverlay[_ngcontent-%COMP%]{width:100%;position:absolute;z-index:200;top:40%;opacity:.7;background:#000;color:#fff;text-align:center}img[_ngcontent-%COMP%]{width:100%;height:100%}.row[_ngcontent-%COMP%]{margin:5%;padding-bottom:10%}ion-grid[_ngcontent-%COMP%]{height:100%}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{height:50%;flex-grow:2}.profile[_ngcontent-%COMP%]{height:40px;width:40px;margin:auto auto auto 10px}.img-wrapper[_ngcontent-%COMP%]{min-height:200px;width:100%;background-size:cover;background-repeat:no-repeat}.outer[_ngcontent-%COMP%]{box-shadow:none!important}.inner[_ngcontent-%COMP%], .outer[_ngcontent-%COMP%]{align-items:center}.inner[_ngcontent-%COMP%]{align-content:center}.item[_ngcontent-%COMP%]{margin-left:5px!important;display:inline-block;padding:0!important;--padding-end:0px;--inner-padding-end:0px}.noItem[_ngcontent-%COMP%]{display:block}.img-container1[_ngcontent-%COMP%]{min-height:60px}.img-container1[_ngcontent-%COMP%], .img-container2[_ngcontent-%COMP%]{min-width:150px;background-size:cover;border-radius:1px;border:#000}.img-container2[_ngcontent-%COMP%]{min-height:30px}ion-col[_ngcontent-%COMP%], ion-label[_ngcontent-%COMP%]{text-transform:capitalize}ion-col[_ngcontent-%COMP%]{text-align:center}"]}),e})()},{path:"activities",loadChildren:()=>n.e(1163).then(n.bind(n,1163)).then(e=>e.ActivitiesPageModule)},{path:"friends",loadChildren:()=>n.e(3018).then(n.bind(n,3018)).then(e=>e.FriendsPageModule)},{path:"chat",loadChildren:()=>n.e(6096).then(n.bind(n,6096)).then(e=>e.ChatPageModule)}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[a.Bz.forChild(b)],a.Bz]}),e})();var _=n(4389),x=n(6665);let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.ez,r.u5,o.Pc,x.h,_.IO,f,r.UX]]}),e})()}}]);