(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Yj9t:function(n,o,t){"use strict";t.r(o),t.d(o,"AuthPageModule",function(){return d});var i=t("ofXK"),e=t("3Pt+"),a=t("TEn/"),r=t("tyNb"),c=t("mrSG"),s=t("fXoL"),l=t("OaWH");const b=[{path:"",component:(()=>{class n{constructor(n,o){this.appService=n,this.roue=o,this.isLoading=!1,this.login=!0}ngOnInit(){this.appService.nav.navigateForward("auth/login")}dashboard(){return Object(c.b)(this,void 0,void 0,function*(){console.log("In"),yield this.appService.nav.navigateBack("home/dashboard")})}onLogin(){return Object(c.b)(this,void 0,void 0,function*(){this.isLoading=!0,this.appService.nav.navigateForward("home/dashboard")})}onSwitch(){this.login=!this.login}onSubmit(n){console.log(n.value.email),console.log(n.value.password)}}return n.\u0275fac=function(o){return new(o||n)(s.Lb(l.a),s.Lb(r.f))},n.\u0275cmp=s.Fb({type:n,selectors:[["app-auth"]],decls:10,vars:0,consts:[["color","primary"],["slot","start"],[1,"main"],["color","primary","expand","block","type","submit",3,"click"]],template:function(n,o){1&n&&(s.Ob(0,"ion-header"),s.Ob(1,"ion-toolbar",0),s.Ob(2,"ion-buttons",1),s.Mb(3,"ion-back-button"),s.Nb(),s.Ob(4,"ion-title"),s.oc(5,"Profil"),s.Nb(),s.Nb(),s.Nb(),s.Ob(6,"ion-content"),s.Ob(7,"div",2),s.Ob(8,"ion-button",3),s.Wb("click",function(){return o.onLogin()}),s.oc(9,"Login"),s.Nb(),s.Nb(),s.Nb())},directives:[a.t,a.M,a.h,a.e,a.f,a.L,a.p,a.g],styles:[""]}),n})()},{path:"login",loadChildren:()=>t.e(10).then(t.bind(null,"lu3c")).then(n=>n.LoginPageModule)},{path:"sign-up",loadChildren:()=>t.e(11).then(t.bind(null,"dCP2")).then(n=>n.SignUpPageModule)}];let u=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=s.Jb({type:n}),n.\u0275inj=s.Ib({imports:[[r.h.forChild(b)],r.h]}),n})(),d=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=s.Jb({type:n}),n.\u0275inj=s.Ib({imports:[[i.c,e.a,a.O,u]]}),n})()}}]);