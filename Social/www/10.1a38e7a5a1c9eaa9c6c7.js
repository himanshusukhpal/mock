(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{lu3c:function(i,n,o){"use strict";o.r(n),o.d(n,"LoginPageModule",function(){return g});var e=o("ofXK"),t=o("3Pt+"),a=o("TEn/"),b=o("tyNb"),c=o("mrSG"),r=o("fXoL"),s=o("OaWH");function l(i,n){1&i&&(r.Ob(0,"ion-item",15),r.oc(1," Should be a valid email address! "),r.Nb())}function d(i,n){1&i&&(r.Ob(0,"ion-item",15),r.oc(1," Should be a valid email address! "),r.Nb())}const p=[{path:"",component:(()=>{class i{constructor(i){this.appService=i}ngOnInit(){}Signup(){this.appService.nav.navigateForward("/auth/sign-up")}onLogin(i){return Object(c.b)(this,void 0,void 0,function*(){this.appService.presentLoading("Logging In ..."),this.appService.auth.login(i.value.email,i.value.password).subscribe(i=>{console.log(i),console.log("Hi"),this.appService.dimissLoading(),this.appService.login(),this.appService.nav.navigateForward("home/dashboard")})})}}return i.\u0275fac=function(n){return new(n||i)(r.Lb(s.a))},i.\u0275cmp=r.Fb({type:i,selectors:[["app-login"]],decls:36,vars:3,consts:[["color","primary "],[1,"main"],[2,"padding-top","15vw"],["size-sm","6","offset-sm","3"],[3,"ngSubmit"],["f","ngForm"],["lines","full"],["position","floating"],["type","email","required","","id","email","ngModel","","name","email"],["email","ngModel"],["lines","none",4,"ngIf"],["type","password","required","","minlength","6","id","password","ngModel","","name","password"],["password","ngModel"],["expand","block","type","submit",1,"primary",3,"disabled"],["fill","clear",3,"click"],["lines","none"]],template:function(i,n){if(1&i){const i=r.Pb();r.Ob(0,"ion-header"),r.Ob(1,"ion-toolbar",0),r.Ob(2,"ion-title"),r.oc(3,"Login"),r.Nb(),r.Nb(),r.Nb(),r.Ob(4,"ion-content"),r.Ob(5,"div",1),r.Ob(6,"ion-grid"),r.Ob(7,"ion-row",2),r.Ob(8,"ion-col",3),r.Ob(9,"ion-card"),r.Ob(10,"ion-card-content"),r.Ob(11,"form",4,5),r.Wb("ngSubmit",function(){r.kc(i);const o=r.ic(12);return n.onLogin(o)}),r.Ob(13,"ion-item",6),r.Ob(14,"ion-label",7),r.oc(15,"Email"),r.Nb(),r.Mb(16,"ion-input",8,9),r.Nb(),r.nc(18,l,2,0,"ion-item",10),r.Ob(19,"ion-item",6),r.Ob(20,"ion-label",7),r.oc(21,"Password"),r.Nb(),r.Mb(22,"ion-input",11,12),r.Nb(),r.nc(24,d,2,0,"ion-item",10),r.Ob(25,"ion-row"),r.Ob(26,"ion-col"),r.Ob(27,"ion-button",13),r.oc(28,"Login"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(29,"ion-card"),r.Ob(30,"ion-card-content"),r.Ob(31,"ion-item"),r.Ob(32,"ion-label"),r.oc(33,"Don't have an account? "),r.Ob(34,"ion-button",14),r.Wb("click",function(){return n.Signup()}),r.oc(35,"Sign- up here"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb()}if(2&i){const i=r.ic(17),n=r.ic(23);r.Bb(18),r.dc("ngIf",!i.valid&&i.touched),r.Bb(6),r.dc("ngIf",!n.valid&&n.touched),r.Bb(3),r.dc("disabled",!i.valid||!n.valid)}},directives:[a.t,a.M,a.L,a.p,a.s,a.G,a.o,a.i,a.j,t.j,t.f,t.g,a.z,a.C,a.y,a.W,t.i,t.e,t.h,e.k,t.b,a.g],styles:[""]}),i})()}];let u=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=r.Jb({type:i}),i.\u0275inj=r.Ib({imports:[[b.i.forChild(p)],b.i]}),i})(),g=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=r.Jb({type:i}),i.\u0275inj=r.Ib({imports:[[e.c,t.a,a.O,u]]}),i})()}}]);