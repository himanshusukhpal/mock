(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{dCP2:function(n,i,o){"use strict";o.r(i),o.d(i,"SignUpPageModule",function(){return f});var e=o("ofXK"),t=o("3Pt+"),a=o("TEn/"),b=o("tyNb"),c=o("mrSG"),r=o("fXoL"),l=o("OaWH");function d(n,i){1&n&&(r.Ob(0,"ion-item",19),r.oc(1," Should be a valid email address! "),r.Nb())}function s(n,i){1&n&&(r.Ob(0,"ion-item",19),r.oc(1," Should be a valid name! "),r.Nb())}function u(n,i){1&n&&(r.Ob(0,"ion-item",19),r.oc(1," Should be a valid username! "),r.Nb())}function p(n,i){1&n&&(r.Ob(0,"ion-item",19),r.oc(1," Should be of at least 6 characters! "),r.Nb())}const m=[{path:"",component:(()=>{class n{constructor(n){this.appService=n}ngOnInit(){}login(){this.appService.nav.navigateForward("/auth/login")}onSignup(n){return Object(c.b)(this,void 0,void 0,function*(){this.appService.auth.signup(n.value.email,n.value.password).subscribe(n=>{console.log(n),console.log("Hi"),this.appService.presentLoading("Logging In ..."),console.log("Hi"),this.appService.dimissLoading(),this.appService.login(),this.appService.nav.navigateForward("home/dashboard")})})}}return n.\u0275fac=function(i){return new(i||n)(r.Lb(l.a))},n.\u0275cmp=r.Fb({type:n,selectors:[["app-sign-up"]],decls:47,vars:5,consts:[["color","primary"],[1,"main"],[2,"padding-top","10vw"],["size-sm","6","offset-sm","3"],[3,"ngSubmit"],["f","ngForm"],["lines","full"],["position","floating"],["type","email","required","","id","email","ngModel","","name","email"],["email","ngModel"],["lines","none",4,"ngIf"],["type","text","required","","id","name","ngModel","","name","name"],["name","ngModel"],["type","text","required","","id","username","ngModel","","name","username"],["username","ngModel"],["type","password","id","password","required","","minlength","6","ngModel","","name","password"],["password","ngModel"],["expand","block","type","submit",1,"primary",3,"disabled"],["fill","clear",3,"click"],["lines","none"]],template:function(n,i){if(1&n){const n=r.Pb();r.Ob(0,"ion-header"),r.Ob(1,"ion-toolbar",0),r.Ob(2,"ion-title"),r.oc(3,"Sign-up"),r.Nb(),r.Nb(),r.Nb(),r.Ob(4,"ion-content"),r.Ob(5,"div",1),r.Ob(6,"ion-grid"),r.Ob(7,"ion-row",2),r.Ob(8,"ion-col",3),r.Ob(9,"ion-card"),r.Ob(10,"ion-card-content"),r.Ob(11,"form",4,5),r.Wb("ngSubmit",function(){r.kc(n);const o=r.ic(12);return i.onSignup(o)}),r.Ob(13,"ion-item",6),r.Ob(14,"ion-label",7),r.oc(15,"Email"),r.Nb(),r.Mb(16,"ion-input",8,9),r.Nb(),r.nc(18,d,2,0,"ion-item",10),r.Ob(19,"ion-item",6),r.Ob(20,"ion-label",7),r.oc(21,"Full Name"),r.Nb(),r.Mb(22,"ion-input",11,12),r.Nb(),r.nc(24,s,2,0,"ion-item",10),r.Ob(25,"ion-item",6),r.Ob(26,"ion-label",7),r.oc(27,"Username"),r.Nb(),r.Mb(28,"ion-input",13,14),r.Nb(),r.nc(30,u,2,0,"ion-item",10),r.Ob(31,"ion-item",6),r.Ob(32,"ion-label",7),r.oc(33,"Password"),r.Nb(),r.Mb(34,"ion-input",15,16),r.Nb(),r.nc(36,p,2,0,"ion-item",10),r.Ob(37,"ion-row"),r.Ob(38,"ion-col"),r.Ob(39,"ion-button",17),r.oc(40,"Signup"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(41,"ion-card"),r.Ob(42,"ion-card-content"),r.Ob(43,"ion-label"),r.oc(44,"Have an account? "),r.Ob(45,"ion-button",18),r.Wb("click",function(){return i.login()}),r.oc(46,"Login"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb()}if(2&n){const n=r.ic(17),i=r.ic(23),o=r.ic(29),e=r.ic(35);r.Bb(18),r.dc("ngIf",!n.valid&&n.touched),r.Bb(6),r.dc("ngIf",!i.valid&&i.touched),r.Bb(6),r.dc("ngIf",!o.valid&&o.touched),r.Bb(6),r.dc("ngIf",!e.valid&&e.touched),r.Bb(3),r.dc("disabled",!n.valid||!e.valid)}},directives:[a.t,a.M,a.L,a.p,a.s,a.G,a.o,a.i,a.j,t.j,t.f,t.g,a.z,a.C,a.y,a.W,t.i,t.e,t.h,e.k,t.b,a.g],styles:[""]}),n})()}];let g=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=r.Jb({type:n}),n.\u0275inj=r.Ib({imports:[[b.i.forChild(m)],b.i]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=r.Jb({type:n}),n.\u0275inj=r.Ib({imports:[[e.c,t.a,a.O,g]]}),n})()}}]);