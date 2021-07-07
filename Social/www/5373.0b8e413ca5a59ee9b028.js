(self.webpackChunksocial=self.webpackChunksocial||[]).push([[5373],{5373:(e,n,t)=>{"use strict";t.r(n),t.d(n,{HomePageModule:()=>y});var i=t(5109),o=t(4250),r=t(2249),a=t(3340),s=t(1855),l=t(2304),c=t(3928);function g(e,n){1&e&&(l.TgZ(0,"span",21),l.TgZ(1,"p",22),l._uU(2,"Event Name is required!"),l.qZA(),l.qZA())}function Z(e,n){1&e&&(l.TgZ(0,"span",21),l.TgZ(1,"p",22),l._uU(2,"Date and Time is required!"),l.qZA(),l.qZA())}function p(e,n){1&e&&(l.TgZ(0,"span",21),l.TgZ(1,"p",22),l._uU(2,"Date and Time is required!"),l.qZA(),l.qZA())}function u(e,n){1&e&&(l.TgZ(0,"span",21),l.TgZ(1,"p",22),l._uU(2,"Event Type is required!"),l.qZA(),l.qZA())}function d(e,n){1&e&&(l.TgZ(0,"span",21),l.TgZ(1,"p",22),l._uU(2,"Event Address is required!"),l.qZA(),l.qZA())}function m(e,n){1&e&&(l.TgZ(0,"span",21),l.TgZ(1,"p",22),l._uU(2,"Event Privacy is required!"),l.qZA(),l.qZA())}function v(e,n){1&e&&(l.TgZ(0,"span",21),l.TgZ(1,"p",22),l._uU(2,"Event Status is required!"),l.qZA(),l.qZA())}let h=(()=>{class e{constructor(e,n){this.appService=e,this.formBuilder=n,this.date=new Date,this.formSubmit=!1,this.params="",this.eventDetailsForm=this.formBuilder.group({eventLabel:["",[r.kI.required]],time:["",[r.kI.required]],date:["",[r.kI.required]],eventType:["",[r.kI.required]],eventAddress:["",[r.kI.required]],eventPrivacy:["",[r.kI.required]],eventStatus:["",[r.kI.required]]}),this.back=()=>(0,s.mG)(this,void 0,void 0,function*(){return yield this.appService.dismissModal()})}ngOnInit(){}get eventDetailsFormError(){return this.eventDetailsForm.controls}onSubmit(){return(0,s.mG)(this,void 0,void 0,function*(){this.formSubmit=!0,console.log(this.eventDetailsForm.value.DateandTime),this.eventDetailsForm.valid&&(this.eventDetails=this.eventDetailsForm.value,yield this.appService.store.getUser().then(e=>{console.log(e),console.log(e.id),console.log(e.fullname),this.token=e.token,this.eventDetails.HostId=e.id,this.eventDetails.HostName=e.fullname}),this.appService.calls.addNewEventCall(this.token,this.params,this.eventDetails).subscribe(e=>{this.eventId=e.name}),console.log(this.eventDetails,"null"),this.appService.modal.dismiss())})}}return e.\u0275fac=function(n){return new(n||e)(l.Y36(c.z),l.Y36(r.qu))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-host-event"]],decls:63,vars:8,consts:[["color","primary"],["slot","start"],[2,"position","absolute",3,"click"],["name","close","size","large"],[3,"formGroup"],["position","floating"],["type","text","formControlName","eventLabel","placeholder","Event Name","required",""],["class","form-error",4,"ngIf"],["displayFormat","MMM DD, YYYY","pickerFormat","MMMM DD YYYY","formControlName","date","placeholder","Date","required",""],["placeholder","Event Type","formControlName","eventType"],["value","abc"],["value","def"],["type","text","formControlName","eventAddress","placeholder","Event Address","required",""],["placeholder","Event Type","formControlName","eventPrivacy"],["value","Open"],["value","Closed"],["placeholder","Event Status","formControlName","eventStatus"],["value","Completed"],["value","Cancelled"],[1,"sign-btn-wrap"],["shape","round","type","button","expand","block","fill","solid",1,"sign-btn",3,"click"],[1,"form-error"],[1,"form-error-text"]],template:function(e,n){1&e&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar",0),l.TgZ(2,"ion-buttons",1),l.TgZ(3,"ion-button",2),l.NdJ("click",function(){return n.back()}),l._UZ(4,"ion-icon",3),l.qZA(),l.qZA(),l.TgZ(5,"ion-title"),l._uU(6,"Host Event"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(7,"ion-content"),l.TgZ(8,"ion-card"),l.TgZ(9,"ion-card-content"),l.TgZ(10,"form",4),l.TgZ(11,"ion-item"),l.TgZ(12,"ion-label",5),l._uU(13,"Event Name"),l.qZA(),l._UZ(14,"ion-input",6),l.YNc(15,g,3,0,"span",7),l.qZA(),l.TgZ(16,"ion-item"),l.TgZ(17,"ion-label",5),l._uU(18," Date "),l.qZA(),l._UZ(19,"ion-datetime",8),l.YNc(20,Z,3,0,"span",7),l.qZA(),l.TgZ(21,"ion-item"),l.TgZ(22,"ion-label",5),l._uU(23," Time "),l.qZA(),l._UZ(24,"ion-select"),l.YNc(25,p,3,0,"span",7),l.qZA(),l.TgZ(26,"ion-item"),l.TgZ(27,"ion-label",5),l._uU(28,"Event Type"),l.qZA(),l.TgZ(29,"ion-select",9),l.TgZ(30,"ion-select-option",10),l._uU(31,"Abc"),l.qZA(),l.TgZ(32,"ion-select-option",11),l._uU(33,"Def"),l.qZA(),l.qZA(),l.YNc(34,u,3,0,"span",7),l.qZA(),l.TgZ(35,"ion-item"),l.TgZ(36,"ion-label",5),l._uU(37," Event Address"),l.qZA(),l._UZ(38,"ion-input",12),l.YNc(39,d,3,0,"span",7),l.qZA(),l.TgZ(40,"ion-item"),l.TgZ(41,"ion-label",5),l._uU(42," Event Privacy"),l.qZA(),l.TgZ(43,"ion-select",13),l.TgZ(44,"ion-select-option",14),l._uU(45,"Open"),l.qZA(),l.TgZ(46,"ion-select-option",15),l._uU(47,"Closed"),l.qZA(),l.qZA(),l.YNc(48,m,3,0,"span",7),l.qZA(),l.TgZ(49,"ion-item"),l.TgZ(50,"ion-label",5),l._uU(51," Event Status"),l.qZA(),l.TgZ(52,"ion-select",16),l.TgZ(53,"ion-select-option",14),l._uU(54,"Open"),l.qZA(),l.TgZ(55,"ion-select-option",17),l._uU(56,"Completed"),l.qZA(),l.TgZ(57,"ion-select-option",18),l._uU(58,"Cancelled"),l.qZA(),l.qZA(),l.YNc(59,v,3,0,"span",7),l.qZA(),l.TgZ(60,"div",19),l.TgZ(61,"ion-button",20),l.NdJ("click",function(){return n.onSubmit()}),l._uU(62,"Confirm"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(10),l.Q6J("formGroup",n.eventDetailsForm),l.xp6(5),l.Q6J("ngIf",n.formSubmit&&(null==n.eventDetailsFormError.eventLabel.errors?null:n.eventDetailsFormError.eventLabel.errors.required)),l.xp6(5),l.Q6J("ngIf",n.formSubmit&&(null==n.eventDetailsFormError.date.errors?null:n.eventDetailsFormError.date.errors.required)),l.xp6(5),l.Q6J("ngIf",n.formSubmit&&(null==n.eventDetailsFormError.time.errors?null:n.eventDetailsFormError.time.errors.required)),l.xp6(9),l.Q6J("ngIf",n.formSubmit&&(null==n.eventDetailsFormError.eventType.errors?null:n.eventDetailsFormError.eventType.errors.required)),l.xp6(5),l.Q6J("ngIf",n.formSubmit&&(null==n.eventDetailsFormError.eventAddress.errors?null:n.eventDetailsFormError.eventAddress.errors.required)),l.xp6(9),l.Q6J("ngIf",n.formSubmit&&(null==n.eventDetailsFormError.eventPrivacy.errors?null:n.eventDetailsFormError.eventPrivacy.errors.required)),l.xp6(11),l.Q6J("ngIf",n.formSubmit&&(null==n.eventDetailsFormError.eventStatus.errors?null:n.eventDetailsFormError.eventStatus.errors.required)))},directives:[o.Gu,o.sr,o.Sm,o.YG,o.gu,o.wd,o.W2,o.PM,o.FN,r._Y,r.JL,r.sg,o.Ie,o.Q$,o.pK,o.j9,r.JJ,r.u,r.Q7,i.O5,o.x4,o.QI,o.t9,o.n0],styles:[".sign-btn-wrap[_ngcontent-%COMP%]{text-align:center;padding-top:20px}.sign-btn-wrap[_ngcontent-%COMP%]   .sign-btn[_ngcontent-%COMP%]{--ion-primary-color:#215ab7;--background-activated:#e1eaf9;--background-focused:#e1eaf9;--background-hover:#647b9d;color:#f4f6fa;border-radius:25px;--background:#215ab7;background-color:#215ab7}"]}),e})(),q=(()=>{class e{constructor(e){this.appService=e,this.back=()=>(0,s.mG)(this,void 0,void 0,function*(){return yield this.appService.dismissModal()}),this.appService.data.openEvent.subscribe(e=>this.eventDetails=e)}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(l.Y36(c.z))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-event-details"]],decls:49,vars:16,consts:[["color","primary"],["slot","start"],[2,"position","absolute",3,"click"],["name","close","size","large"],[1,"img-container1"],[1,"ion-no-padding"],[1,"img-container2"],[2,"text-align","center","text-transform","capitalize"]],template:function(e,n){1&e&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar",0),l.TgZ(2,"ion-buttons",1),l.TgZ(3,"ion-button",2),l.NdJ("click",function(){return n.back()}),l._UZ(4,"ion-icon",3),l.qZA(),l.qZA(),l.TgZ(5,"ion-title"),l._uU(6,"Event Details"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(7,"ion-content"),l.TgZ(8,"ion-card"),l.TgZ(9,"ion-card-content"),l.TgZ(10,"ion-row"),l.TgZ(11,"ion-col"),l._UZ(12,"div",4),l.qZA(),l.TgZ(13,"ion-col",5),l.TgZ(14,"ion-row"),l.TgZ(15,"ion-col"),l._UZ(16,"div",6),l.qZA(),l.qZA(),l.TgZ(17,"ion-row"),l.TgZ(18,"ion-col"),l._UZ(19,"div",6),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(20,"ion-card-header"),l.TgZ(21,"h2",7),l.TgZ(22,"b"),l._uU(23),l.qZA(),l.qZA(),l.qZA(),l.TgZ(24,"ion-row"),l.TgZ(25,"ion-col"),l.TgZ(26,"ion-row"),l.TgZ(27,"ion-col"),l.TgZ(28,"ion-item"),l.TgZ(29,"ion-label"),l._uU(30),l.ALo(31,"date"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(32,"ion-row"),l.TgZ(33,"ion-col"),l.TgZ(34,"ion-item"),l.TgZ(35,"ion-label"),l._uU(36),l.ALo(37,"date"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(38,"ion-col"),l.TgZ(39,"ion-row"),l.TgZ(40,"ion-col"),l.TgZ(41,"ion-item"),l.TgZ(42,"ion-label"),l._uU(43,"Distance"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(44,"ion-row"),l.TgZ(45,"ion-col"),l.TgZ(46,"ion-item"),l.TgZ(47,"ion-label"),l._uU(48),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(12),l.Udp("background-image","url(https://i.pinimg.com/originals/31/78/95/317895e71b1c8e53e9450ab269608c04.jpg)"),l.xp6(4),l.Udp("background-image","url(https://i.pinimg.com/originals/31/78/95/317895e71b1c8e53e9450ab269608c04.jpg)"),l.xp6(3),l.Udp("background-image","url(https://i.pinimg.com/originals/31/78/95/317895e71b1c8e53e9450ab269608c04.jpg)"),l.xp6(4),l.Oqu(n.eventDetails.EventLabel),l.xp6(7),l.Oqu(l.xi3(31,10,n.eventDetails.Date,"yyyy-MM-dd")),l.xp6(6),l.Oqu(l.xi3(37,13,n.eventDetails.Time,"HH:mm")),l.xp6(12),l.Oqu(n.eventDetails.EventAddress))},directives:[o.Gu,o.sr,o.Sm,o.YG,o.gu,o.wd,o.W2,o.PM,o.FN,o.Nd,o.wI,o.Zi,o.Ie,o.Q$],pipes:[i.uU],styles:[".img-container1[_ngcontent-%COMP%]{min-height:110px}.img-container1[_ngcontent-%COMP%], .img-container2[_ngcontent-%COMP%]{min-width:150px;background-size:cover}.img-container2[_ngcontent-%COMP%]{min-height:50px}"]}),e})();const A=["slides"];function T(e,n){if(1&e){const e=l.EpF();l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col"),l.TgZ(2,"ion-button",28),l.NdJ("click",function(n){l.CHM(e);const t=l.oxw().$implicit;return l.oxw(2).interested(t,n)}),l._uU(3," Interested "),l.qZA(),l.qZA(),l.qZA()}if(2&e){const e=l.oxw(3);l.xp6(2),l.Q6J("disabled",e.status)}}function b(e,n){if(1&e){const e=l.EpF();l.TgZ(0,"ion-item",16),l.NdJ("click",function(){const n=l.CHM(e).$implicit;return l.oxw(2).eventDetails(n)}),l.TgZ(1,"ion-card",17),l.TgZ(2,"ion-row"),l.TgZ(3,"ion-col",18),l._UZ(4,"div",19),l.qZA(),l.TgZ(5,"ion-col",18),l.TgZ(6,"ion-row"),l.TgZ(7,"ion-col",18),l._UZ(8,"div",20),l.qZA(),l.qZA(),l.TgZ(9,"ion-row"),l.TgZ(10,"ion-col",18),l._UZ(11,"div",20),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(12,"ion-grid"),l.TgZ(13,"ion-row"),l.TgZ(14,"ion-col",21),l.TgZ(15,"ion-row"),l.TgZ(16,"ion-col"),l.TgZ(17,"ion-text",22),l.TgZ(18,"h3",23),l.TgZ(19,"b"),l._uU(20),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(21,"ion-row"),l.TgZ(22,"ion-col"),l.TgZ(23,"ion-text"),l._uU(24),l.ALo(25,"date"),l.qZA(),l.qZA(),l.TgZ(26,"ion-col"),l.TgZ(27,"ion-text"),l._uU(28),l.ALo(29,"date"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(30,"ion-col",24),l.TgZ(31,"ion-row"),l.TgZ(32,"ion-col"),l.TgZ(33,"ion-text",25),l._uU(34),l.qZA(),l.qZA(),l.qZA(),l.TgZ(35,"ion-row"),l.TgZ(36,"ion-col"),l.TgZ(37,"ion-text",26),l._uU(38,"Distance"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.YNc(39,T,4,1,"ion-row",27),l.qZA(),l.qZA(),l.qZA()}if(2&e){const e=n.$implicit,t=l.oxw(2);l.xp6(4),l.Udp("background-image","url(https://i.pinimg.com/originals/31/78/95/317895e71b1c8e53e9450ab269608c04.jpg)"),l.xp6(4),l.Udp("background-image","url(https://www.breathehr.com/hubfs/policy%20for%20social%20events%20people%20dancing-min.png)"),l.xp6(3),l.Udp("background-image","url(https://www.marthascatering.com/uploads/images/Events/Social-Events/Events-Social-15-8.jpg)"),l.xp6(9),l.hij(" ",e.value.EventLabel,""),l.xp6(4),l.Oqu(l.xi3(25,11,e.value.Date,"yyyy-MM-dd")),l.xp6(4),l.Oqu(l.xi3(29,14,e.value.Time,"HH:mm")),l.xp6(6),l.Oqu(e.value.EventType),l.xp6(5),l.Q6J("ngIf",e.value.HostId===t.hostId)}}function f(e,n){1&e&&(l.YNc(0,b,40,17,"ion-item",15),l.ALo(1,"keyvalue")),2&e&&l.Q6J("ngForOf",l.lcZ(1,1,n.$implicit))}const _=[{path:"",component:(()=>{class e{constructor(e){this.appService=e,this.profileImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrcSIYcfdCK1XNhHWpQfuoW5eZyUhuLBMKB5FzAWYJKbGy_XvpR4aAnPlOzYd2ptiDFw&usqp=CAU",this.status=!1,this.user={},this.eventBlocks=[],this.swipeNext=()=>this.appService.nav.navigateForward("home/chat"),this.onAddActivity=()=>this.appService.nav.navigateBack("activities"),this.onLogout=()=>this.appService.auth.logout(),this.onProfile=()=>this.appService.nav.navigateForward("profile"),this.hostEventPage=()=>this.appService.presentModal(h,{}),this.myEvents=()=>{this.appService.nav.navigateForward("home/my-events")},this.appService.data.userData.subscribe(e=>{this.user=e,this.hostId=e.id,this.userName=e.fname,console.log(e,"n")}),this.appService.data.eventsList.subscribe(e=>{this.eventBlocks.splice(0,this.eventBlocks.length,e)}),console.log(this.eventBlocks)}ngOnInit(){}ionViewWillEnter(){}onClick(){this.appService.nav.navigateForward("profile")}eventDetails(e){this.appService.data.openEvent.next(e.value),this.appService.presentModal(q,{})}loadMore(e){setTimeout(()=>{const n=Object.keys(this.eventBlocks[this.eventBlocks.length-1]).pop();this.appService.calls.loadMoreEventsCall(n,5).subscribe(e=>{delete e[Object.keys(e).shift()],Object.keys(e).length&&this.eventBlocks.push(e),console.log(this.eventBlocks)}),e.target.complete()},1e3)}interested(e,n){console.log(this.userName),this.appService.calls.addGuestsToEventCall(e.key,{guestName:this.userName,guestId:this.hostId}).subscribe(e=>{console.log(e)}),n.target.disabled=!0}close(){}}return e.\u0275fac=function(n){return new(n||e)(l.Y36(c.z))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-home"]],viewQuery:function(e,n){if(1&e&&l.Gf(A,7),2&e){let e;l.iGM(e=l.CRH())&&(n.slides=e.first)}},decls:35,vars:2,consts:[["color","primary"],["slot","start",1,"profile",3,"click"],[3,"src"],["name","chatbubbles","size","large","slot","end",2,"margin-right","10px",3,"click"],[1,"mainContainer"],["ngFor","",3,"ngForOf"],["threshold","25%",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading..."],["slot","bottom"],[3,"click"],["name","calendar"],["name","person-circle"],["name","add-circle","size","large"],["name","map"],["name","information-circle"],["class","item","lines","none",3,"click",4,"ngFor","ngForOf"],["lines","none",1,"item",3,"click"],["align-text-center","","ion-justify-content-center","",1,"inner"],[1,"ion-no-padding"],[1,"img-container1"],[1,"img-container2"],["size","8"],["color","primary","size","large"],[2,"margin","0px"],["size","4"],["color","success"],["color","danger"],[4,"ngIf"],["color","primary","expand","block","shape","round ","fill","solid",3,"disabled","click"]],template:function(e,n){1&e&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar",0),l.TgZ(2,"ion-avatar",1),l.NdJ("click",function(){return n.onClick()}),l._UZ(3,"ion-img",2),l.qZA(),l.TgZ(4,"ion-title"),l._uU(5,"Home"),l.qZA(),l.TgZ(6,"ion-icon",3),l.NdJ("click",function(){return n.swipeNext()}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(7,"ion-content"),l.TgZ(8,"div",4),l.YNc(9,f,2,3,"ng-template",5),l.TgZ(10,"ion-infinite-scroll",6),l.NdJ("ionInfinite",function(e){return n.loadMore(e)}),l._UZ(11,"ion-infinite-scroll-content",7),l.qZA(),l.qZA(),l.qZA(),l.TgZ(12,"ion-toolbar"),l.TgZ(13,"ion-tabs"),l.TgZ(14,"ion-tab-bar",8),l.TgZ(15,"ion-tab-button",9),l.NdJ("click",function(){return n.myEvents()}),l._UZ(16,"ion-icon",10),l.TgZ(17,"ion-label"),l._uU(18,"My Events"),l.qZA(),l.TgZ(19,"ion-badge"),l._uU(20,"9+"),l.qZA(),l.qZA(),l.TgZ(21,"ion-tab-button"),l._UZ(22,"ion-icon",11),l.TgZ(23,"ion-label"),l._uU(24,"Speakers"),l.qZA(),l.qZA(),l.TgZ(25,"ion-tab-button",9),l.NdJ("click",function(){return n.hostEventPage()}),l._UZ(26,"ion-icon",12),l.qZA(),l.TgZ(27,"ion-tab-button"),l._UZ(28,"ion-icon",13),l.TgZ(29,"ion-label"),l._uU(30,"Map"),l.qZA(),l.qZA(),l.TgZ(31,"ion-tab-button",9),l.NdJ("click",function(){return n.onLogout()}),l._UZ(32,"ion-icon",14),l.TgZ(33,"ion-label"),l._uU(34,"About"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(3),l.Q6J("src",n.profileImageUrl),l.xp6(6),l.Q6J("ngForOf",n.eventBlocks))},directives:[o.Gu,o.sr,o.BJ,o.Xz,o.wd,o.gu,o.W2,i.sg,o.ju,o.MB,o.UN,o.yq,o.ZU,o.Q$,o.yp,o.Ie,o.PM,o.Nd,o.wI,o.jY,o.yW,i.O5,o.YG],pipes:[i.Nd,i.uU],styles:["ion-menu[_ngcontent-%COMP%]{--max-width:200px!important}.swiper-slide[_ngcontent-%COMP%]{display:block}#profile_img_div[_ngcontent-%COMP%]{width:75px;height:80px;line-height:80px;text-align:center;font-size:3.5em;font-weight:lighter;margin:10px auto;border-radius:10px;background-color:var(--ion-color-primary)}#user_profile_name[_ngcontent-%COMP%]{width:100%}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.myoverlay[_ngcontent-%COMP%]{width:100%;position:absolute;z-index:200;top:40%;opacity:.7;background:#000;color:#fff;text-align:center}img[_ngcontent-%COMP%]{width:100%;height:100%}.row[_ngcontent-%COMP%]{margin:5%;padding-bottom:10%}ion-grid[_ngcontent-%COMP%]{height:100%;padding-bottom:0}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{height:50%;flex-grow:2}.profile[_ngcontent-%COMP%]{height:40px;width:40px;margin:10px}.img-wrapper[_ngcontent-%COMP%]{min-height:200px;width:100%;background-size:cover;background-repeat:no-repeat}.outer[_ngcontent-%COMP%]{box-shadow:none!important}.inner[_ngcontent-%COMP%]{left:50%;transform:translateX(-50%)}.item[_ngcontent-%COMP%]{--padding-start:0}.noItem[_ngcontent-%COMP%]{display:block}.img-container1[_ngcontent-%COMP%]{min-height:100%;border-radius:1px;border:#000}.img-container1[_ngcontent-%COMP%], .img-container2[_ngcontent-%COMP%]{min-width:170px;background-size:cover}.img-container2[_ngcontent-%COMP%]{min-height:60px}ion-col[_ngcontent-%COMP%], ion-label[_ngcontent-%COMP%]{text-transform:capitalize}ion-col[_ngcontent-%COMP%]{text-align:center}ion-footer[_ngcontent-%COMP%]{display:inline-block}"]}),e})()},{path:"activities",loadChildren:()=>t.e(1163).then(t.bind(t,1163)).then(e=>e.ActivitiesPageModule)},{path:"friends",loadChildren:()=>t.e(3018).then(t.bind(t,3018)).then(e=>e.FriendsPageModule)},{path:"chat",loadChildren:()=>t.e(6096).then(t.bind(t,6096)).then(e=>e.ChatPageModule)},{path:"my-events",loadChildren:()=>t.e(3812).then(t.bind(t,3812)).then(e=>e.MyEventsPageModule)}];let x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[a.Bz.forChild(_)],a.Bz]}),e})();var k=t(4389),U=t(6665);let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[i.ez,r.u5,o.Pc,U.h,k.IO,x,r.UX]]}),e})()}}]);