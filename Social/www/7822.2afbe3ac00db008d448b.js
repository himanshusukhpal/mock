(self.webpackChunksocial=self.webpackChunksocial||[]).push([[7822],{7822:(e,t,n)=>{"use strict";n.r(t),n.d(t,{HostEventPageModule:()=>T});var r=n(5109),o=n(2249),i=n(4250),s=n(3340),a=n(1855),l=n(2304),u=n(3928);function c(e,t){1&e&&(l.TgZ(0,"span",20),l.TgZ(1,"p",21),l._uU(2,"Event Name is required!"),l.qZA(),l.qZA())}function p(e,t){1&e&&(l.TgZ(0,"span",20),l.TgZ(1,"p",21),l._uU(2,"Date and Time is required!"),l.qZA(),l.qZA())}function d(e,t){if(1&e&&(l.TgZ(0,"ion-select-option"),l._uU(1),l.qZA()),2&e){const e=t.$implicit;l.xp6(1),l.Oqu(e)}}function m(e,t){1&e&&(l.TgZ(0,"span",20),l.TgZ(1,"p",21),l._uU(2,"Event Type is required!"),l.qZA(),l.qZA())}function v(e,t){1&e&&(l.TgZ(0,"span",20),l.TgZ(1,"p",21),l._uU(2,"Event Address is required!"),l.qZA(),l.qZA())}function Z(e,t){1&e&&(l.TgZ(0,"span",20),l.TgZ(1,"p",21),l._uU(2,"Event Privacy is required!"),l.qZA(),l.qZA())}function g(e,t){1&e&&(l.TgZ(0,"span",20),l.TgZ(1,"p",21),l._uU(2,"Event Status is required!"),l.qZA(),l.qZA())}const q=[{path:"",component:(()=>{class e{constructor(e,t,n){this.datePipe=e,this.appService=t,this.formBuilder=n,this.eventTypeList=[],this.date=new Date,this.formSubmit=!1,this.params="",this.eventDetailsForm=this.formBuilder.group({eventLabel:["",[o.kI.required]],date:["",[o.kI.required]],eventType:["",[o.kI.required]],eventAddress:["",[o.kI.required]],eventPrivacy:["",[o.kI.required]],eventStatus:["",[o.kI.required]]}),this.myDate=new Date,this.back=()=>this.appService.nav.navigateBack("home"),this.eventTypeList=t.data.eventType}ngOnInit(){this.test=this.datePipe.transform(this.myDate,"yyyy-MM-dd")}get eventDetailsFormError(){return this.eventDetailsForm.controls}onSubmit(){return(0,a.mG)(this,void 0,void 0,function*(){this.formSubmit=!0,console.log(this.eventDetailsForm.value.DateandTime),this.eventDetailsForm.valid&&(this.eventDetails=this.eventDetailsForm.value,yield this.appService.store.getUser().then(e=>{console.log(e),console.log(e.id),console.log(e.fullname),this.token=e.token,this.eventDetails.HostId=e.id,this.eventDetails.HostName=e.fullname}),this.appService.calls.addNewEventCall(this.token,this.params,this.eventDetails).subscribe(e=>{this.eventId=e.name}),console.log(this.eventDetails,"null"),this.appService.modal.dismiss())})}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(r.uU),l.Y36(u.z),l.Y36(o.qu))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-host-event"]],decls:55,vars:9,consts:[["color","primary"],["slot","start"],[2,"position","absolute",3,"click"],["name","close","size","large"],[3,"formGroup"],["position","floating"],["type","text","formControlName","eventLabel","placeholder","Event Name","required",""],["class","form-error",4,"ngIf"],["displayFormat","MMM DD, YYYY","pickerFormat","MMMM DD YYYY","formControlName","date","placeholder","Date","max","2121","required","",3,"min"],["placeholder","Event Type","formControlName","eventType"],[4,"ngFor","ngForOf"],["type","text","formControlName","eventAddress","placeholder","Event Address","required",""],["placeholder","Event Type","formControlName","eventPrivacy"],["value","Open"],["value","Closed"],["placeholder","Event Status","formControlName","eventStatus"],["value","Completed"],["value","Cancelled"],[1,"sign-btn-wrap"],["shape","round","type","button","expand","block","fill","solid",1,"sign-btn",3,"click"],[1,"form-error"],[1,"form-error-text"]],template:function(e,t){1&e&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar",0),l.TgZ(2,"ion-buttons",1),l.TgZ(3,"ion-button",2),l.NdJ("click",function(){return t.back()}),l._UZ(4,"ion-icon",3),l.qZA(),l.qZA(),l.TgZ(5,"ion-title"),l._uU(6,"Host Event"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(7,"ion-content"),l.TgZ(8,"ion-card"),l.TgZ(9,"ion-card-content"),l.TgZ(10,"form",4),l.TgZ(11,"ion-item"),l.TgZ(12,"ion-label",5),l._uU(13,"Event Name"),l.qZA(),l._UZ(14,"ion-input",6),l.YNc(15,c,3,0,"span",7),l.qZA(),l.TgZ(16,"ion-item"),l.TgZ(17,"ion-label",5),l._uU(18," Date "),l.qZA(),l._UZ(19,"ion-datetime",8),l.YNc(20,p,3,0,"span",7),l.qZA(),l.TgZ(21,"ion-item"),l.TgZ(22,"ion-label",5),l._uU(23,"Event Type"),l.qZA(),l.TgZ(24,"ion-select",9),l.YNc(25,d,2,1,"ion-select-option",10),l.qZA(),l.YNc(26,m,3,0,"span",7),l.qZA(),l.TgZ(27,"ion-item"),l.TgZ(28,"ion-label",5),l._uU(29," Event Address"),l.qZA(),l._UZ(30,"ion-input",11),l.YNc(31,v,3,0,"span",7),l.qZA(),l.TgZ(32,"ion-item"),l.TgZ(33,"ion-label",5),l._uU(34," Event Privacy"),l.qZA(),l.TgZ(35,"ion-select",12),l.TgZ(36,"ion-select-option",13),l._uU(37,"Open"),l.qZA(),l.TgZ(38,"ion-select-option",14),l._uU(39,"Closed"),l.qZA(),l.qZA(),l.YNc(40,Z,3,0,"span",7),l.qZA(),l.TgZ(41,"ion-item"),l.TgZ(42,"ion-label",5),l._uU(43," Event Status"),l.qZA(),l.TgZ(44,"ion-select",15),l.TgZ(45,"ion-select-option",13),l._uU(46,"Open"),l.qZA(),l.TgZ(47,"ion-select-option",16),l._uU(48,"Completed"),l.qZA(),l.TgZ(49,"ion-select-option",17),l._uU(50,"Cancelled"),l.qZA(),l.qZA(),l.YNc(51,g,3,0,"span",7),l.qZA(),l.TgZ(52,"div",18),l.TgZ(53,"ion-button",19),l.NdJ("click",function(){return t.onSubmit()}),l._uU(54,"Confirm"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(10),l.Q6J("formGroup",t.eventDetailsForm),l.xp6(5),l.Q6J("ngIf",t.formSubmit&&(null==t.eventDetailsFormError.eventLabel.errors?null:t.eventDetailsFormError.eventLabel.errors.required)),l.xp6(4),l.s9C("min",t.test),l.xp6(1),l.Q6J("ngIf",t.formSubmit&&(null==t.eventDetailsFormError.date.errors?null:t.eventDetailsFormError.date.errors.required)),l.xp6(5),l.Q6J("ngForOf",t.eventTypeList),l.xp6(1),l.Q6J("ngIf",t.formSubmit&&(null==t.eventDetailsFormError.eventType.errors?null:t.eventDetailsFormError.eventType.errors.required)),l.xp6(5),l.Q6J("ngIf",t.formSubmit&&(null==t.eventDetailsFormError.eventAddress.errors?null:t.eventDetailsFormError.eventAddress.errors.required)),l.xp6(9),l.Q6J("ngIf",t.formSubmit&&(null==t.eventDetailsFormError.eventPrivacy.errors?null:t.eventDetailsFormError.eventPrivacy.errors.required)),l.xp6(11),l.Q6J("ngIf",t.formSubmit&&(null==t.eventDetailsFormError.eventStatus.errors?null:t.eventDetailsFormError.eventStatus.errors.required)))},directives:[i.Gu,i.sr,i.Sm,i.YG,i.gu,i.wd,i.W2,i.PM,i.FN,o._Y,o.JL,o.sg,i.Ie,i.Q$,i.pK,i.j9,o.JJ,o.u,o.Q7,r.O5,i.x4,i.QI,i.t9,r.sg,i.n0],styles:[".sign-btn-wrap[_ngcontent-%COMP%]{text-align:center;padding-top:20px}.sign-btn-wrap[_ngcontent-%COMP%]   .sign-btn[_ngcontent-%COMP%]{--ion-primary-color:#215ab7;--background-activated:#e1eaf9;--background-focused:#e1eaf9;--background-hover:#647b9d;color:#f4f6fa;border-radius:25px;--background:#215ab7;background-color:#215ab7}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[s.Bz.forChild(q)],s.Bz]}),e})(),T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({providers:[r.uU],imports:[[r.ez,o.u5,o.UX,i.Pc,f]]}),e})()}}]);