(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3Wre":function(n,e,t){"use strict";t.r(e),t.d(e,"ProfilePageModule",function(){return u});var o=t("ofXK"),i=t("3Pt+"),a=t("TEn/"),r=t("tyNb"),c=t("mrSG"),l=t("fXoL"),b=t("OaWH"),s=t("tk/3");const d=[{path:"",component:(()=>{class n{constructor(n,e){this.appservice=n,this.http=e,this.element1={},this.getdata={},this.profileImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrcSIYcfdCK1XNhHWpQfuoW5eZyUhuLBMKB5FzAWYJKbGy_XvpR4aAnPlOzYd2ptiDFw&usqp=CAU"}ngOnInit(){console.log("in init"),this.appservice.store.getUser().then(n=>{console.log(n.uid),this.id=n.uid,console.log(this.id)})}ionViewWillEnter(){return Object(c.b)(this,void 0,void 0,function*(){console.log("In view"),this.fetchUser()})}edit(){this.appservice.nav.navigateForward("auth/edit-profile")}home(){this.appservice.nav.navigateBack("home/dashboard")}fetchUser(){return Object(c.b)(this,void 0,void 0,function*(){console.log(this.id,"this"),this.element1=yield this.appservice.store.getUser(),console.log("ELement: ",this.element1)})}}return n.\u0275fac=function(e){return new(e||n)(l.Lb(b.a),l.Lb(s.a))},n.\u0275cmp=l.Fb({type:n,selectors:[["app-profile"]],decls:46,vars:7,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],[1,"main"],["size-sm","6","offset-sm","3",1,"ion-no-padding"],[1,"container"],[1,"overylay"],[3,"src"],["lines","none"],["name","mail"],["name","call"],["name","locate"],["name","person-circle-outline"],["name","person"],[1,"btn-wrap"],["expand","block","shape","round ","fill","solid",1,"btn",3,"click"]],template:function(n,e){1&n&&(l.Ob(0,"ion-header",0),l.Ob(1,"ion-toolbar",1),l.Ob(2,"ion-title"),l.oc(3,"Profile"),l.Nb(),l.Ob(4,"ion-buttons",2),l.Mb(5,"ion-back-button"),l.Nb(),l.Nb(),l.Nb(),l.Ob(6,"ion-content"),l.Ob(7,"div",3),l.Ob(8,"ion-grid"),l.Ob(9,"ion-row"),l.Ob(10,"ion-col",4),l.Ob(11,"div",5),l.Ob(12,"div",6),l.Ob(13,"ion-avatar"),l.Mb(14,"ion-img",7),l.Nb(),l.Nb(),l.Nb(),l.Ob(15,"ion-card"),l.Ob(16,"ion-card-header"),l.Ob(17,"ion-card-title"),l.oc(18),l.Nb(),l.Nb(),l.Ob(19,"ion-card-content"),l.Ob(20,"ion-item",8),l.Mb(21,"ion-icon",9),l.Ob(22,"ion-label"),l.oc(23),l.Nb(),l.Nb(),l.Ob(24,"ion-item",8),l.Mb(25,"ion-icon",10),l.Ob(26,"ion-label"),l.oc(27),l.Nb(),l.Nb(),l.Ob(28,"ion-item",8),l.Mb(29,"ion-icon",11),l.Ob(30,"ion-label"),l.oc(31),l.Nb(),l.Nb(),l.Ob(32,"ion-item",8),l.Mb(33,"ion-icon",12),l.Ob(34,"ion-label"),l.oc(35),l.Nb(),l.Nb(),l.Ob(36,"ion-item",8),l.Mb(37,"ion-icon",13),l.Ob(38,"ion-label"),l.oc(39),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(40,"div",14),l.Ob(41,"ion-button",15),l.Wb("click",function(){return e.edit()}),l.oc(42,"Edit Profile"),l.Nb(),l.Nb(),l.Ob(43,"div",14),l.Ob(44,"ion-button",15),l.Wb("click",function(){return e.home()}),l.oc(45,"Go Back to Dashboard"),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&n&&(l.Bb(14),l.dc("src",e.profileImageUrl),l.Bb(4),l.qc(" ",null==e.element1?null:e.element1.username," "),l.Bb(5),l.pc(null==e.element1?null:e.element1.email),l.Bb(4),l.pc(null==e.element1?null:e.element1.phone),l.Bb(4),l.qc(" ",null==e.element1?null:e.element1.address," "),l.Bb(4),l.qc(" ",null==e.element1?null:e.element1.fname," "),l.Bb(4),l.qc(" ",null==e.element1?null:e.element1.lname," "))},directives:[a.t,a.P,a.O,a.h,a.e,a.f,a.p,a.s,a.J,a.o,a.d,a.v,a.i,a.k,a.l,a.j,a.z,a.u,a.C,a.g],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:#fff}ion-header[_ngcontent-%COMP%]{position:absolute}ion-title[_ngcontent-%COMP%]{color:#fff;font-family:Trebuchet MS,Lucida Sans Unicode,Lucida Grande,Lucida Sans,Arial,sans-serif;font-style:normal}.container[_ngcontent-%COMP%]{background-color:#90f3f3;height:200px;padding:0;width:100%}.overylay[_ngcontent-%COMP%]{position:relative;text-align:center;top:60%}ion-avatar[_ngcontent-%COMP%]{border:4px solid #54b168;height:100px;margin:auto;width:100px}ion-card[_ngcontent-%COMP%]{--ion-background-color:transparent!important;margin-top:40px;text-align:center}ion-item[_ngcontent-%COMP%]{--ion-item-background:#90f3f3;--min-height:35px;border-radius:5px;color:#1c1c1d;font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-size:15px;font-style:italic;font-weight:400;height:35px;margin-bottom:15px;text-align:center}ion-label[_ngcontent-%COMP%]{margin:0;padding:0;text-align:center}.btn-wrap[_ngcontent-%COMP%]{padding-top:20px;text-align:center}.btn-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{--ion-primary-color:#215ab7;--background-activated:#e1eaf9;--background-focused:#e1eaf9;--background-hover:#647b9d;--background:#215ab7;background-color:#215ab7;border-radius:25px;color:#f4f6fa}"]}),n})()}];let p=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=l.Jb({type:n}),n.\u0275inj=l.Ib({imports:[[r.h.forChild(d)],r.h]}),n})(),u=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=l.Jb({type:n}),n.\u0275inj=l.Ib({imports:[[o.c,i.a,a.R,p]]}),n})()}}]);