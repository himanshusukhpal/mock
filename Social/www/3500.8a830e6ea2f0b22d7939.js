(self.webpackChunksocial=self.webpackChunksocial||[]).push([[3500],{9170:(e,t,n)=>{"use strict";n.d(t,{q:()=>v});var i=n(1855),o=n(2304),s=n(3928),r=n(4250),a=n(5109),c=n(2249),l=n(6665);function g(e,t){1&e&&(o.TgZ(0,"ion-text",14),o.TgZ(1,"h3"),o.TgZ(2,"b"),o._uU(3,"Guest List"),o.qZA(),o.qZA(),o.qZA())}function u(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"ion-searchbar",19),o.NdJ("ngModelChange",function(t){return o.CHM(e),o.oxw(2).filterTerm=t}),o.qZA()}if(2&e){const e=o.oxw(2);o.Q6J("ngModel",e.filterTerm)}}function p(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"ion-col",25),o.TgZ(1,"ion-col"),o.TgZ(2,"ion-button",26),o.NdJ("click",function(){o.CHM(e);const t=o.oxw().$implicit;return o.oxw(2).accept(t)}),o._UZ(3,"ion-icon",27),o.qZA(),o.qZA(),o.TgZ(4,"ion-col"),o.TgZ(5,"ion-button",28),o.NdJ("click",function(){o.CHM(e);const t=o.oxw().$implicit;return o.oxw(2).reject(t)}),o._UZ(6,"ion-icon",3),o.qZA(),o.qZA(),o.qZA()}}function d(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"ion-col",25),o.TgZ(1,"ion-item",29),o.TgZ(2,"ion-select",30),o.NdJ("ngModelChange",function(t){return o.CHM(e),o.oxw().$implicit.requestStatus=t})("ionChange",function(){o.CHM(e);const t=o.oxw().$implicit;return o.oxw(2).option(t)}),o.TgZ(3,"ion-select-option",31),o._uU(4),o.qZA(),o.TgZ(5,"ion-select-option",32),o._uU(6,"accept"),o.qZA(),o.qZA(),o.qZA(),o.qZA()}if(2&e){const e=o.oxw().$implicit,t=o.oxw(2);o.xp6(2),o.s9C("value",t.status),o.Q6J("ngModel",e.requestStatus),o.xp6(1),o.s9C("value",e.requestStatus),o.xp6(1),o.Oqu(e.requestStatus)}}function Z(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"ion-col"),o.TgZ(1,"ion-select",30),o.NdJ("ngModelChange",function(t){return o.CHM(e),o.oxw().$implicit.requestStatus=t})("ionChange",function(){o.CHM(e);const t=o.oxw().$implicit;return o.oxw(2).option(t)}),o.TgZ(2,"ion-select-option",31),o._uU(3),o.qZA(),o.TgZ(4,"ion-select-option",33),o._uU(5,"reject"),o.qZA(),o.qZA(),o.qZA()}if(2&e){const e=o.oxw().$implicit;o.xp6(1),o.s9C("value",e.requestStatus),o.Q6J("ngModel",e.requestStatus),o.xp6(1),o.s9C("value",e.requestStatus),o.xp6(1),o.Oqu(e.requestStatus)}}function h(e,t){if(1&e&&(o.TgZ(0,"ion-item"),o.TgZ(1,"ion-row"),o.TgZ(2,"ion-col",20),o.TgZ(3,"ion-avatar",21),o._UZ(4,"ion-img",22),o.qZA(),o.qZA(),o.TgZ(5,"ion-col",20),o.TgZ(6,"ion-text",23),o.TgZ(7,"h3"),o._UZ(8,"br"),o._uU(9),o.qZA(),o.qZA(),o.qZA(),o.YNc(10,p,7,0,"ion-col",24),o.YNc(11,d,7,4,"ion-col",24),o.YNc(12,Z,6,4,"ion-col",15),o._UZ(13,"div"),o.qZA(),o.qZA()),2&e){const e=t.$implicit;o.xp6(9),o.Oqu(e.guestName),o.xp6(1),o.Q6J("ngIf","pending"===e.requestStatus),o.xp6(1),o.Q6J("ngIf","reject"===e.requestStatus),o.xp6(1),o.Q6J("ngIf","accept"===e.requestStatus)}}function m(e,t){if(1&e&&(o.TgZ(0,"ion-card"),o.TgZ(1,"ion-row"),o.TgZ(2,"ion-col"),o.YNc(3,g,4,0,"ion-text",16),o.qZA(),o.qZA(),o.YNc(4,u,1,1,"ion-searchbar",17),o.TgZ(5,"ion-list"),o.YNc(6,h,14,4,"ion-item",18),o.ALo(7,"filter"),o.qZA(),o.qZA()),2&e){const e=o.oxw();o.xp6(3),o.Q6J("ngIf",e.show),o.xp6(1),o.Q6J("ngIf",e.show),o.xp6(2),o.Q6J("ngForOf",o.xi3(7,3,e.goodResponse,e.filterTerm))}}let v=(()=>{class e{constructor(e){this.appService=e,this.goodResponse=[],this.evilResponseProps=[],this.show=!1,this.back=()=>(0,i.mG)(this,void 0,void 0,function*(){return yield this.appService.dismissModal()}),this.accept=e=>{e.requestStatus="accept",this.appService.calls.updateRequestStatusCall(this.eventId,e.guestId,e).subscribe(e=>{console.log(e)})},this.reject=e=>{e.requestStatus="reject",this.appService.calls.updateRequestStatusCall(this.eventId,e.guestId,e).subscribe(e=>{console.log(e)})},this.option=e=>{console.log(e.requestStatus),this.appService.calls.updateRequestStatusCall(this.eventId,e.guestId,e).subscribe(e=>{console.log(e)})},this.eventId=e.data.eventId,this.appService.data.openEvent.subscribe(e=>{console.log(e),this.hostId=e.HostId,this.eventDetails=e})}ngOnInit(){if(this.appService.data.userData.subscribe(e=>{this.userId=e.id}),console.log(this.userId,this.eventDetails.HostId),this.userId===this.eventDetails.HostId){this.show=!0,this.eventDetails.guestList&&(this.evilResponseProps=Object.keys(this.eventDetails.guestList));for(const e of this.evilResponseProps)this.goodResponse.push(this.eventDetails.guestList[e]);console.log(this.goodResponse,"a")}}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(s.z))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-event-details"]],decls:51,vars:18,consts:[["color","primary"],["slot","start"],[2,"position","absolute",3,"click"],["name","close","size","large"],[1,"mainContainer"],[1,"ion-no-padding"],[1,"img-container1"],[1,"img-container2"],["size","8"],["color","primary","size","large"],[2,"margin","0px"],["size","4"],["color","success"],["color","danger"],[2,"text-align","center"],[4,"ngIf"],["style","text-align: center;",4,"ngIf"],["placeholder","Search...","animated","true",3,"ngModel","ngModelChange",4,"ngIf"],[4,"ngFor","ngForOf"],["placeholder","Search...","animated","true",3,"ngModel","ngModelChange"],["size","3",1,"ion-no-padding"],[2,"align-self","center"],["src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrcSIYcfdCK1XNhHWpQfuoW5eZyUhuLBMKB5FzAWYJKbGy_XvpR4aAnPlOzYd2ptiDFw&usqp=CAU"],[2,"text-transform","capitalize","text-align","center"],["size","6",4,"ngIf"],["size","6"],["fill","outline","color","success",3,"click"],["name","checkmark","size","large"],["fill","outline","color","danger",3,"click"],[2,"justify-content","center"],[3,"value","ngModel","ngModelChange","ionChange"],[3,"value"],["value","accept"],["value","reject"]],template:function(e,t){1&e&&(o.TgZ(0,"ion-header"),o.TgZ(1,"ion-toolbar",0),o.TgZ(2,"ion-buttons",1),o.TgZ(3,"ion-button",2),o.NdJ("click",function(){return t.back()}),o._UZ(4,"ion-icon",3),o.qZA(),o.qZA(),o.TgZ(5,"ion-title"),o._uU(6,"Event Details"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(7,"ion-content"),o.TgZ(8,"div",4),o.TgZ(9,"ion-card"),o.TgZ(10,"ion-row"),o.TgZ(11,"ion-col",5),o._UZ(12,"div",6),o.qZA(),o.TgZ(13,"ion-col",5),o.TgZ(14,"ion-row"),o.TgZ(15,"ion-col"),o._UZ(16,"div",7),o.qZA(),o.qZA(),o.TgZ(17,"ion-row"),o.TgZ(18,"ion-col",5),o._UZ(19,"div",7),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(20,"ion-row"),o.TgZ(21,"ion-col",8),o.TgZ(22,"ion-row"),o.TgZ(23,"ion-col"),o.TgZ(24,"ion-text",9),o.TgZ(25,"h3",10),o.TgZ(26,"b"),o._uU(27),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(28,"ion-row"),o.TgZ(29,"ion-col"),o.TgZ(30,"ion-text"),o._uU(31),o.ALo(32,"date"),o.qZA(),o.qZA(),o.TgZ(33,"ion-col"),o.TgZ(34,"ion-text"),o._uU(35),o.ALo(36,"date"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(37,"ion-col",11),o.TgZ(38,"ion-row"),o.TgZ(39,"ion-col"),o.TgZ(40,"ion-text",12),o._uU(41),o.qZA(),o.qZA(),o.qZA(),o.TgZ(42,"ion-row"),o.TgZ(43,"ion-col"),o.TgZ(44,"ion-text",13),o._uU(45,"Distance"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(46,"ion-row"),o.TgZ(47,"ion-col"),o.TgZ(48,"ion-text",14),o._uU(49),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.YNc(50,m,8,6,"ion-card",15),o.qZA(),o.qZA()),2&e&&(o.xp6(12),o.Udp("background-image","url(https://i.pinimg.com/originals/31/78/95/317895e71b1c8e53e9450ab269608c04.jpg)"),o.xp6(4),o.Udp("background-image","url(https://www.breathehr.com/hubfs/policy%20for%20social%20events%20people%20dancing-min.png)"),o.xp6(3),o.Udp("background-image","url(https://www.marthascatering.com/uploads/images/Events/Social-Events/Events-Social-15-8.jpg)"),o.xp6(8),o.hij(" ",t.eventDetails.eventLabel,""),o.xp6(4),o.Oqu(o.xi3(32,12,t.eventDetails.date,"yyyy-MM-dd")),o.xp6(4),o.Oqu(o.xi3(36,15,t.eventDetails.date,"HH:mm")),o.xp6(6),o.Oqu(t.eventDetails.eventType),o.xp6(8),o.hij(" ",t.eventDetails.eventAddress," "),o.xp6(1),o.Q6J("ngIf",t.show))},directives:[r.Gu,r.sr,r.Sm,r.YG,r.gu,r.wd,r.W2,r.PM,r.Nd,r.wI,r.yW,a.O5,r.q_,a.sg,r.VI,r.j9,c.JJ,c.On,r.Ie,r.BJ,r.Xz,r.t9,r.QI,r.n0],pipes:[a.uU,l.Z],styles:[".img-container1[_ngcontent-%COMP%]{min-height:110px;min-width:150px}.img-container2[_ngcontent-%COMP%]{min-height:50px;min-width:150px}ion-img[_ngcontent-%COMP%]{width:70%!important;height:60%!important;max-width:75px!important;max-height:75px!important}ion-card[_ngcontent-%COMP%]{max-height:50%;display:flex;flex-direction:column}ion-list[_ngcontent-%COMP%]{overflow:hidden;overflow-y:auto}ion-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{display:none}ion-row[_ngcontent-%COMP%]{height:50%;flex-grow:2}ion-col[_ngcontent-%COMP%]{justify-content:center;text-transform:capitalize;text-align:center}.img-container1[_ngcontent-%COMP%]{min-height:100%}.img-container1[_ngcontent-%COMP%], .img-container2[_ngcontent-%COMP%]{min-width:170px;background-size:cover}.img-container2[_ngcontent-%COMP%]{min-height:60px}"]}),e})()},3500:(e,t,n)=>{"use strict";n.r(t),n.d(t,{HomePageModule:()=>k});var i=n(5109),o=n(4250),s=n(2249),r=n(3340),a=n(1855),c=n(2304),l=n(3928);function g(e,t){1&e&&(c.TgZ(0,"span",20),c.TgZ(1,"p",21),c._uU(2,"Event Name is required!"),c.qZA(),c.qZA())}function u(e,t){1&e&&(c.TgZ(0,"span",20),c.TgZ(1,"p",21),c._uU(2,"Date and Time is required!"),c.qZA(),c.qZA())}function p(e,t){if(1&e&&(c.TgZ(0,"ion-select-option"),c._uU(1),c.qZA()),2&e){const e=t.$implicit;c.xp6(1),c.Oqu(e)}}function d(e,t){1&e&&(c.TgZ(0,"span",20),c.TgZ(1,"p",21),c._uU(2,"Event Type is required!"),c.qZA(),c.qZA())}function Z(e,t){1&e&&(c.TgZ(0,"span",20),c.TgZ(1,"p",21),c._uU(2,"Event Address is required!"),c.qZA(),c.qZA())}function h(e,t){1&e&&(c.TgZ(0,"span",20),c.TgZ(1,"p",21),c._uU(2,"Event Privacy is required!"),c.qZA(),c.qZA())}function m(e,t){1&e&&(c.TgZ(0,"span",20),c.TgZ(1,"p",21),c._uU(2,"Event Status is required!"),c.qZA(),c.qZA())}let v=(()=>{class e{constructor(e,t,n){this.datePipe=e,this.appService=t,this.formBuilder=n,this.eventTypeList=[],this.date=new Date,this.formSubmit=!1,this.params="",this.eventDetailsForm=this.formBuilder.group({eventLabel:["",[s.kI.required]],date:["",[s.kI.required]],eventType:["",[s.kI.required]],eventAddress:["",[s.kI.required]],eventPrivacy:["",[s.kI.required]],eventStatus:["",[s.kI.required]]}),this.myDate=new Date,this.back=()=>(0,a.mG)(this,void 0,void 0,function*(){return yield this.appService.dismissModal()}),this.eventTypeList=t.data.eventType}ngOnInit(){this.test=this.datePipe.transform(this.myDate,"yyyy-MM-dd")}get eventDetailsFormError(){return this.eventDetailsForm.controls}onSubmit(){return(0,a.mG)(this,void 0,void 0,function*(){this.formSubmit=!0,console.log(this.eventDetailsForm.value.DateandTime),this.eventDetailsForm.valid&&(this.eventDetails=this.eventDetailsForm.value,yield this.appService.store.getUser().then(e=>{console.log(e),console.log(e.id),console.log(e.fullname),this.token=e.token,this.eventDetails.HostId=e.id,this.eventDetails.HostName=e.fullname}),this.appService.calls.addNewEventCall(this.token,this.params,this.eventDetails).subscribe(e=>{this.eventId=e.name}),console.log(this.eventDetails,"null"),this.appService.modal.dismiss())})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(i.uU),c.Y36(l.z),c.Y36(s.qu))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-host-event"]],features:[c._Bn([i.uU])],decls:55,vars:9,consts:[["color","primary"],["slot","start"],[2,"position","absolute",3,"click"],["name","close","size","large"],[3,"formGroup"],["position","floating"],["type","text","formControlName","eventLabel","placeholder","Event Name","required",""],["class","form-error",4,"ngIf"],["displayFormat","MMM DD, YYYY","pickerFormat","MMMM DD YYYY","formControlName","date","placeholder","Date","max","2121","required","",3,"min"],["placeholder","Event Type","formControlName","eventType"],[4,"ngFor","ngForOf"],["type","text","formControlName","eventAddress","placeholder","Event Address","required",""],["placeholder","Event Type","formControlName","eventPrivacy"],["value","Open"],["value","Closed"],["placeholder","Event Status","formControlName","eventStatus"],["value","Completed"],["value","Cancelled"],[1,"sign-btn-wrap"],["shape","round","type","button","expand","block","fill","solid",1,"sign-btn",3,"click"],[1,"form-error"],[1,"form-error-text"]],template:function(e,t){1&e&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar",0),c.TgZ(2,"ion-buttons",1),c.TgZ(3,"ion-button",2),c.NdJ("click",function(){return t.back()}),c._UZ(4,"ion-icon",3),c.qZA(),c.qZA(),c.TgZ(5,"ion-title"),c._uU(6,"Host Event"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(7,"ion-content"),c.TgZ(8,"ion-card"),c.TgZ(9,"ion-card-content"),c.TgZ(10,"form",4),c.TgZ(11,"ion-item"),c.TgZ(12,"ion-label",5),c._uU(13,"Event Name"),c.qZA(),c._UZ(14,"ion-input",6),c.YNc(15,g,3,0,"span",7),c.qZA(),c.TgZ(16,"ion-item"),c.TgZ(17,"ion-label",5),c._uU(18," Date "),c.qZA(),c._UZ(19,"ion-datetime",8),c.YNc(20,u,3,0,"span",7),c.qZA(),c.TgZ(21,"ion-item"),c.TgZ(22,"ion-label",5),c._uU(23,"Event Type"),c.qZA(),c.TgZ(24,"ion-select",9),c.YNc(25,p,2,1,"ion-select-option",10),c.qZA(),c.YNc(26,d,3,0,"span",7),c.qZA(),c.TgZ(27,"ion-item"),c.TgZ(28,"ion-label",5),c._uU(29," Event Address"),c.qZA(),c._UZ(30,"ion-input",11),c.YNc(31,Z,3,0,"span",7),c.qZA(),c.TgZ(32,"ion-item"),c.TgZ(33,"ion-label",5),c._uU(34," Event Privacy"),c.qZA(),c.TgZ(35,"ion-select",12),c.TgZ(36,"ion-select-option",13),c._uU(37,"Open"),c.qZA(),c.TgZ(38,"ion-select-option",14),c._uU(39,"Closed"),c.qZA(),c.qZA(),c.YNc(40,h,3,0,"span",7),c.qZA(),c.TgZ(41,"ion-item"),c.TgZ(42,"ion-label",5),c._uU(43," Event Status"),c.qZA(),c.TgZ(44,"ion-select",15),c.TgZ(45,"ion-select-option",13),c._uU(46,"Open"),c.qZA(),c.TgZ(47,"ion-select-option",16),c._uU(48,"Completed"),c.qZA(),c.TgZ(49,"ion-select-option",17),c._uU(50,"Cancelled"),c.qZA(),c.qZA(),c.YNc(51,m,3,0,"span",7),c.qZA(),c.TgZ(52,"div",18),c.TgZ(53,"ion-button",19),c.NdJ("click",function(){return t.onSubmit()}),c._uU(54,"Confirm"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(10),c.Q6J("formGroup",t.eventDetailsForm),c.xp6(5),c.Q6J("ngIf",t.formSubmit&&(null==t.eventDetailsFormError.eventLabel.errors?null:t.eventDetailsFormError.eventLabel.errors.required)),c.xp6(4),c.s9C("min",t.test),c.xp6(1),c.Q6J("ngIf",t.formSubmit&&(null==t.eventDetailsFormError.date.errors?null:t.eventDetailsFormError.date.errors.required)),c.xp6(5),c.Q6J("ngForOf",t.eventTypeList),c.xp6(1),c.Q6J("ngIf",t.formSubmit&&(null==t.eventDetailsFormError.eventType.errors?null:t.eventDetailsFormError.eventType.errors.required)),c.xp6(5),c.Q6J("ngIf",t.formSubmit&&(null==t.eventDetailsFormError.eventAddress.errors?null:t.eventDetailsFormError.eventAddress.errors.required)),c.xp6(9),c.Q6J("ngIf",t.formSubmit&&(null==t.eventDetailsFormError.eventPrivacy.errors?null:t.eventDetailsFormError.eventPrivacy.errors.required)),c.xp6(11),c.Q6J("ngIf",t.formSubmit&&(null==t.eventDetailsFormError.eventStatus.errors?null:t.eventDetailsFormError.eventStatus.errors.required)))},directives:[o.Gu,o.sr,o.Sm,o.YG,o.gu,o.wd,o.W2,o.PM,o.FN,s._Y,s.JL,s.sg,o.Ie,o.Q$,o.pK,o.j9,s.JJ,s.u,s.Q7,i.O5,o.x4,o.QI,o.t9,i.sg,o.n0],styles:[".sign-btn-wrap[_ngcontent-%COMP%]{text-align:center;padding-top:20px}.sign-btn-wrap[_ngcontent-%COMP%]   .sign-btn[_ngcontent-%COMP%]{--ion-primary-color:#215ab7;--background-activated:#e1eaf9;--background-focused:#e1eaf9;--background-hover:#647b9d;color:#f4f6fa;border-radius:25px;--background:#215ab7;background-color:#215ab7}"]}),e})();var q=n(9170);const f=["slides"];function A(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"ion-button",28),c.NdJ("click",function(){c.CHM(e);const t=c.oxw(2),n=t.$implicit,i=t.index;return c.oxw(2).interested(n,i)}),c._uU(1," Interested "),c.qZA()}}function T(e,t){1&e&&(c.TgZ(0,"ion-text",23),c._uU(1,"Already sent request to join this event!"),c.qZA())}function b(e,t){if(1&e&&(c.TgZ(0,"ion-row"),c.TgZ(1,"ion-col"),c.YNc(2,A,2,0,"ion-button",26),c.YNc(3,T,2,0,"ion-text",27),c.qZA(),c.qZA()),2&e){const e=c.oxw().$implicit;c.xp6(2),c.Q6J("ngIf","true"!==e.value.show),c.xp6(1),c.Q6J("ngIf","true"===e.value.show)}}function x(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"ion-item",14),c.NdJ("click",function(){const t=c.CHM(e).$implicit;return c.oxw(2).eventDetails(t)}),c.TgZ(1,"ion-card",15),c.TgZ(2,"ion-row"),c.TgZ(3,"ion-col",16),c._UZ(4,"div",17),c.qZA(),c.TgZ(5,"ion-col",16),c.TgZ(6,"ion-row"),c.TgZ(7,"ion-col",16),c._UZ(8,"div",18),c.qZA(),c.qZA(),c.TgZ(9,"ion-row"),c.TgZ(10,"ion-col",16),c._UZ(11,"div",18),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(12,"ion-grid"),c.TgZ(13,"ion-row"),c.TgZ(14,"ion-col",19),c.TgZ(15,"ion-row"),c.TgZ(16,"ion-col"),c.TgZ(17,"ion-text",20),c.TgZ(18,"h3",21),c.TgZ(19,"b"),c._uU(20),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(21,"ion-row"),c.TgZ(22,"ion-col"),c.TgZ(23,"ion-text"),c._uU(24),c.ALo(25,"date"),c.qZA(),c.qZA(),c.TgZ(26,"ion-col"),c.TgZ(27,"ion-text"),c._uU(28),c.ALo(29,"date"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(30,"ion-col",22),c.TgZ(31,"ion-row"),c.TgZ(32,"ion-col"),c.TgZ(33,"ion-text",23),c._uU(34),c.qZA(),c.qZA(),c.qZA(),c.TgZ(35,"ion-row"),c.TgZ(36,"ion-col"),c.TgZ(37,"ion-text",24),c._uU(38,"Distance"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.YNc(39,b,4,2,"ion-row",25),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=t.$implicit,n=c.oxw(2);c.xp6(4),c.Udp("background-image","url(https://i.pinimg.com/originals/31/78/95/317895e71b1c8e53e9450ab269608c04.jpg)"),c.xp6(4),c.Udp("background-image","url(https://www.breathehr.com/hubfs/policy%20for%20social%20events%20people%20dancing-min.png)"),c.xp6(3),c.Udp("background-image","url(https://www.marthascatering.com/uploads/images/Events/Social-Events/Events-Social-15-8.jpg)"),c.xp6(9),c.hij(" ",e.value.eventLabel,""),c.xp6(4),c.Oqu(c.xi3(25,11,e.value.date,"yyyy-MM-dd")),c.xp6(4),c.Oqu(c.xi3(29,14,e.value.date,"HH:mm")),c.xp6(6),c.Oqu(e.value.eventType),c.xp6(5),c.Q6J("ngIf",e.value.HostId!==n.hostId)}}function _(e,t){1&e&&(c.YNc(0,x,40,17,"ion-item",13),c.ALo(1,"keyvalue")),2&e&&c.Q6J("ngForOf",c.lcZ(1,1,t.$implicit))}const w=[{path:"",component:(()=>{class e{constructor(e){this.appService=e,this.profileImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrcSIYcfdCK1XNhHWpQfuoW5eZyUhuLBMKB5FzAWYJKbGy_XvpR4aAnPlOzYd2ptiDFw&usqp=CAU",this.status=!1,this.user={},this.eventsArr=[],this.eventBlocks=[],this.bool=[],this.swipeNext=()=>this.appService.nav.navigateForward("home/chat"),this.onAddActivity=()=>this.appService.nav.navigateBack("activities"),this.onLogout=()=>this.appService.auth.logout(),this.onProfile=()=>this.appService.nav.navigateForward("profile"),this.hostEventPage=()=>this.appService.presentModal(v,{}),this.myEvents=()=>{this.appService.nav.navigateForward("home/my-events")},this.appService.data.userData.subscribe(e=>{this.user=e,this.hostId=e.id,this.userName=e.fname}),this.appService.data.eventsList.subscribe(e=>{Object.keys(e).forEach(t=>{this.guestList=e[t].guestList,this.guestList&&Object.keys(this.guestList).forEach(n=>{n===this.hostId&&(e[t].show="true",console.log(e,"a"))}),this.eventsArr.push(e[t].guestList)}),console.log(this.eventsArr),this.eventBlocks.splice(0,this.eventBlocks.length,e)}),console.log(this.eventBlocks,"e")}ngOnInit(){}ionViewWillEnter(){}onClick(){this.appService.nav.navigateForward("profile")}eventDetails(e){console.log(e.key),this.appService.data.eventId=e.key,this.appService.data.openEvent.next(e.value),this.appService.presentModal(q.q,{})}loadMore(e){setTimeout(()=>{const t=Object.keys(this.eventBlocks[this.eventBlocks.length-1]).pop();this.appService.calls.loadMoreEventsCall(t,5).subscribe(e=>{Object.keys(e).forEach(t=>{this.guestList=e[t].guestList,this.guestList&&Object.keys(this.guestList).forEach(n=>{n===this.hostId&&(e[t].show="true",console.log(e,"a"))}),this.eventsArr.push(e[t].guestList)}),delete e[Object.keys(e).shift()],Object.keys(e).length&&this.eventBlocks.push(e),console.log(this.eventBlocks)}),e.target.complete()},1e3)}interested(e,t){this.bool[t]=!1,this.requestStatus="pending",console.log(this.userName),this.appService.calls.addGuestsToEventCall(e.key,this.hostId,{guestName:this.userName,guestId:this.hostId,requestStatus:this.requestStatus}).subscribe(e=>{console.log(e)})}close(){}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(l.z))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-home"]],viewQuery:function(e,t){if(1&e&&c.Gf(f,7),2&e){let e;c.iGM(e=c.CRH())&&(t.slides=e.first)}},decls:27,vars:2,consts:[["color","primary"],["slot","start",1,"profile",3,"click"],[3,"src"],["name","chatbubbles","size","large","slot","end",2,"margin-right","10px",3,"click"],[1,"mainContainer"],["ngFor","",3,"ngForOf"],["threshold","25%",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading..."],["slot","bottom"],[3,"click"],["name","list","size","large"],["name","add-circle","size","large"],["name","log-out","size","large"],["class","item","lines","none",3,"click",4,"ngFor","ngForOf"],["lines","none",1,"item",3,"click"],[1,"inner"],[1,"ion-no-padding"],[1,"img-container1"],[1,"img-container2"],["size","8"],["color","primary","size","large"],[2,"margin","0px"],["size","4"],["color","success"],["color","danger"],[4,"ngIf"],["color","primary","expand","block","shape","round ","fill","solid",3,"click",4,"ngIf"],["color","success",4,"ngIf"],["color","primary","expand","block","shape","round ","fill","solid",3,"click"]],template:function(e,t){1&e&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar",0),c.TgZ(2,"ion-avatar",1),c.NdJ("click",function(){return t.onClick()}),c._UZ(3,"ion-img",2),c.qZA(),c.TgZ(4,"ion-title"),c._uU(5,"Home"),c.qZA(),c.TgZ(6,"ion-icon",3),c.NdJ("click",function(){return t.swipeNext()}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(7,"ion-content"),c.TgZ(8,"div",4),c.YNc(9,_,2,3,"ng-template",5),c.TgZ(10,"ion-infinite-scroll",6),c.NdJ("ionInfinite",function(e){return t.loadMore(e)}),c._UZ(11,"ion-infinite-scroll-content",7),c.qZA(),c.qZA(),c.qZA(),c.TgZ(12,"ion-toolbar"),c.TgZ(13,"ion-tabs"),c.TgZ(14,"ion-tab-bar",8),c.TgZ(15,"ion-tab-button",9),c.NdJ("click",function(){return t.myEvents()}),c._UZ(16,"ion-icon",10),c.TgZ(17,"ion-label"),c._uU(18,"My Events"),c.qZA(),c.TgZ(19,"ion-badge"),c._uU(20,"9+"),c.qZA(),c.qZA(),c.TgZ(21,"ion-tab-button",9),c.NdJ("click",function(){return t.hostEventPage()}),c._UZ(22,"ion-icon",11),c.qZA(),c.TgZ(23,"ion-tab-button",9),c.NdJ("click",function(){return t.onLogout()}),c._UZ(24,"ion-icon",12),c.TgZ(25,"ion-label"),c._uU(26,"Log Out"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(3),c.Q6J("src",t.profileImageUrl),c.xp6(6),c.Q6J("ngForOf",t.eventBlocks))},directives:[o.Gu,o.sr,o.BJ,o.Xz,o.wd,o.gu,o.W2,i.sg,o.ju,o.MB,o.UN,o.yq,o.ZU,o.Q$,o.yp,o.Ie,o.PM,o.Nd,o.wI,o.jY,o.yW,i.O5,o.YG],pipes:[i.Nd,i.uU],styles:["ion-menu[_ngcontent-%COMP%]{--max-width:200px!important}.swiper-slide[_ngcontent-%COMP%]{display:block}#profile_img_div[_ngcontent-%COMP%]{width:75px;height:80px;line-height:80px;text-align:center;font-size:3.5em;font-weight:lighter;margin:10px auto;border-radius:10px;background-color:var(--ion-color-primary)}#user_profile_name[_ngcontent-%COMP%]{width:100%}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.myoverlay[_ngcontent-%COMP%]{width:100%;position:absolute;z-index:200;top:40%;opacity:.7;background:#000;color:#fff;text-align:center}img[_ngcontent-%COMP%]{width:100%;height:100%}.row[_ngcontent-%COMP%]{margin:5%;padding-bottom:10%}ion-grid[_ngcontent-%COMP%]{height:100%;padding-bottom:0}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{height:50%;flex-grow:2}.profile[_ngcontent-%COMP%]{height:40px;width:40px;margin:10px}.img-wrapper[_ngcontent-%COMP%]{min-height:200px;width:100%;background-size:cover;background-repeat:no-repeat}.outer[_ngcontent-%COMP%]{box-shadow:none!important}.inner[_ngcontent-%COMP%]{left:50%;transform:translateX(-50%)}.item[_ngcontent-%COMP%]{--padding-start:0}.noItem[_ngcontent-%COMP%]{display:block}.img-container1[_ngcontent-%COMP%]{min-height:100%;border-radius:1px;border:#000}.img-container1[_ngcontent-%COMP%], .img-container2[_ngcontent-%COMP%]{min-width:170px;background-size:cover}.img-container2[_ngcontent-%COMP%]{min-height:60px}ion-col[_ngcontent-%COMP%], ion-label[_ngcontent-%COMP%]{text-transform:capitalize}ion-col[_ngcontent-%COMP%]{text-align:center}ion-footer[_ngcontent-%COMP%]{display:inline-block}"]}),e})()},{path:"activities",loadChildren:()=>n.e(1163).then(n.bind(n,1163)).then(e=>e.ActivitiesPageModule)},{path:"friends",loadChildren:()=>n.e(3018).then(n.bind(n,3018)).then(e=>e.FriendsPageModule)},{path:"chat",loadChildren:()=>n.e(6096).then(n.bind(n,6096)).then(e=>e.ChatPageModule)},{path:"my-events",loadChildren:()=>n.e(3812).then(n.bind(n,3812)).then(e=>e.MyEventsPageModule)}];let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.Bz.forChild(w)],r.Bz]}),e})();var y=n(4389),M=n(6665);let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.ez,s.u5,o.Pc,M.h,y.IO,C,s.UX]]}),e})()}}]);