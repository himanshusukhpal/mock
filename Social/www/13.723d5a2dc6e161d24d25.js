(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{dCP2:function(n,o,t){"use strict";t.r(o),t.d(o,"SignUpPageModule",function(){return h});var e=t("ofXK"),i=t("3Pt+"),a=t("TEn/"),c=t("tyNb"),r=t("fXoL"),s=t("OaWH"),b=t("tk/3");function d(n,o){1&n&&(r.Ob(0,"ion-item",31),r.Ob(1,"div",32),r.oc(2,"Should be a valid email address!"),r.Nb(),r.Nb())}function l(n,o){1&n&&(r.Ob(0,"ion-item",31),r.Ob(1,"div",32),r.oc(2,"Should be a valid name!"),r.Nb(),r.Nb())}function g(n,o){1&n&&(r.Ob(0,"ion-item",31),r.Ob(1,"div",32),r.oc(2,"Should be a valid username!"),r.Nb(),r.Nb())}function p(n,o){1&n&&(r.Ob(0,"ion-item",31),r.Ob(1,"div",32),r.oc(2,"Should be of at least 6 characters!"),r.Nb(),r.Nb())}const u=[{path:"",component:(()=>{class n{constructor(n,o){this.appService=n,this.http=o,this.userdetails={}}ngOnInit(){}login(){this.appService.nav.navigateForward("/auth/login")}onSignup(n){this.appService.presentLoading("Logging In ..."),this.appService.auth.signup(n.value.email,n.value.password).then(o=>{console.log("then"),this.userdetails=this.appService.auth.userdetails,this.userdetails.username=n.value.username,console.log(this.userdetails),this.appService.store.setUser(this.userdetails),this.http.put("https://synans-social-project-default-rtdb.firebaseio.com/userDetail/"+this.userdetails.id+".json",this.userdetails).subscribe(n=>{console.log(n),this.appService.nav.navigateForward("auth/profile")})}).catch(o=>{this.appService.dimissLoading(),this.showAlert(o.message),n.reset()}).finally(()=>{console.log("finally"),this.appService.dimissLoading()}),console.log("on signup")}showAlert(n){this.appService.alert.presentAlert({header:"Authentication Failed!",message:n,buttons:["Okay"]})}}return n.\u0275fac=function(o){return new(o||n)(r.Lb(s.a),r.Lb(b.a))},n.\u0275cmp=r.Fb({type:n,selectors:[["app-sign-up"]],decls:56,vars:5,consts:[["color","primary"],["slot","start"],[1,"main"],[2,"padding-top","15vh"],["size-sm","4.5","offset-sm","4"],[3,"ngSubmit"],["f","ngForm"],["lines","full"],["type","email","placeholder","Enter your email address","required","","id","email","ngModel","","name","email"],["email","ngModel"],["name","mail-outline"],["lines","none",4,"ngIf"],["type","text","placeholder","Full name","required","","id","name","ngModel","","name","name"],["name","ngModel"],["name","person-outline"],["type","text","placeholder","Enter your username","required","","id","username","ngModel","","name","username"],["username","ngModel"],["name","person-circle-outline"],["type","password","id","password","required","","minlength","6","ngModel","","name","password","placeholder","***********"],["password","ngModel"],["name","lock-closed"],[1,"sign-btn-wrap"],["shape","round","type","submit","expand","block","fill","solid",1,"sign-btn",3,"disabled"],[1,"text-tag"],[1,"social-btns"],["fill","clear",1,"facebookbtn","ion-no-padding"],["src","https://i.pinimg.com/736x/d5/18/ec/d518eceea19f4b1a2ee032ddc634dd7d.jpg"],["fill","clear",1,"googlebtn","ion-no-padding"],["src","https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"],[1,"ion-card-footer"],[1,"ion-no-padding",3,"click"],["lines","none"],[1,"error"]],template:function(n,o){if(1&n){const n=r.Pb();r.Ob(0,"ion-header"),r.Ob(1,"ion-toolbar",0),r.Ob(2,"ion-title"),r.oc(3,"Sign-up"),r.Nb(),r.Ob(4,"ion-buttons",1),r.Mb(5,"ion-back-button"),r.Nb(),r.Nb(),r.Nb(),r.Ob(6,"ion-content"),r.Ob(7,"div",2),r.Ob(8,"ion-grid"),r.Ob(9,"ion-row",3),r.Ob(10,"ion-col",4),r.Ob(11,"ion-card"),r.Ob(12,"ion-card-content"),r.Ob(13,"form",5,6),r.Wb("ngSubmit",function(){r.kc(n);const t=r.ic(14);return o.onSignup(t)}),r.Ob(15,"ion-item",7),r.Ob(16,"ion-input",8,9),r.Mb(18,"ion-icon",10),r.Nb(),r.Nb(),r.nc(19,d,3,0,"ion-item",11),r.Ob(20,"ion-item",7),r.Ob(21,"ion-input",12,13),r.Mb(23,"ion-icon",14),r.Nb(),r.Nb(),r.nc(24,l,3,0,"ion-item",11),r.Ob(25,"ion-item",7),r.Ob(26,"ion-input",15,16),r.Mb(28,"ion-icon",17),r.Nb(),r.Nb(),r.nc(29,g,3,0,"ion-item",11),r.Ob(30,"ion-item",7),r.Ob(31,"ion-input",18,19),r.Mb(33,"ion-icon",20),r.Nb(),r.Nb(),r.nc(34,p,3,0,"ion-item",11),r.Ob(35,"ion-row"),r.Ob(36,"ion-col"),r.Ob(37,"div",21),r.Ob(38,"ion-button",22),r.oc(39,"Sign Up"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(40,"div",23),r.Ob(41,"span"),r.oc(42,"Sign Up with"),r.Nb(),r.Nb(),r.Ob(43,"div",24),r.Ob(44,"ion-button",25),r.Mb(45,"ion-img",26),r.Nb(),r.Ob(46,"ion-button",27),r.Mb(47,"ion-img",28),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(48,"ion-card"),r.Ob(49,"ion-card-content"),r.Ob(50,"ion-item"),r.Ob(51,"div",29),r.Ob(52,"span"),r.oc(53,"Already have an account?"),r.Nb(),r.Ob(54,"button",30),r.Wb("click",function(){return o.login()}),r.oc(55,"Log In"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb()}if(2&n){const n=r.ic(17),o=r.ic(22),t=r.ic(27),e=r.ic(32);r.Bb(19),r.dc("ngIf",!n.valid&&n.touched),r.Bb(5),r.dc("ngIf",!o.valid&&o.touched),r.Bb(5),r.dc("ngIf",!t.valid&&t.touched),r.Bb(5),r.dc("ngIf",!e.valid&&e.touched),r.Bb(4),r.dc("disabled",!n.valid||!e.valid)}},directives:[a.t,a.M,a.L,a.h,a.e,a.f,a.p,a.s,a.G,a.o,a.i,a.j,i.j,i.f,i.g,a.z,a.y,a.W,i.i,i.e,i.h,a.u,e.k,i.b,a.g,a.v],styles:["ion-content[_ngcontent-%COMP%]{--ion-item-background:transparent!important}.bg-color[_ngcontent-%COMP%]{background:#e1eaf9}ion-card[_ngcontent-%COMP%]{--ion-background-color:transparent!important;background-color:initial!important}ion-item[_ngcontent-%COMP%]{--border-color:#d4d7db;--highlight-color-focused:#215ab7;--padding-start:0;--inner-padding-end:0;--highlight-color-invalid:#215ab7;--highlight-color-valid:#215ab7;--color-focused:#1248a0!important}ion-item[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{color:#74787e;font-size:13px}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:18px;padding-right:6px}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]:hover{color:#1248a0}ion-item[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:#ff2c2c;font-size:15px}.sign-btn-wrap[_ngcontent-%COMP%]{padding-top:20px;text-align:center}.sign-btn-wrap[_ngcontent-%COMP%]   .sign-btn[_ngcontent-%COMP%]{--ion-primary-color:#215ab7;--background-activated:#e1eaf9;--background-focused:#e1eaf9;--background-hover:#647b9d;--background:#215ab7;background-color:#215ab7;border-radius:25px;color:#f4f6fa}.text-tag[_ngcontent-%COMP%]{margin-top:35px;text-align:center}.text-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#334862;font-size:13px;font-weight:400}.social-btns[_ngcontent-%COMP%]{margin-top:18px;text-align:center}.social-btns[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{padding-left:5px!important;width:40px}.ion-card-footer[_ngcontent-%COMP%]{align-items:center;display:flex;height:40px;justify-content:center;width:100%}.ion-card-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#85888d;font-size:12px;font-weight:200}.ion-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:initial;color:#535558;font-size:14px;font-weight:600;padding-left:3px}.ion-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#969393}"]}),n})()}];let m=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=r.Jb({type:n}),n.\u0275inj=r.Ib({imports:[[c.h.forChild(u)],c.h]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=r.Jb({type:n}),n.\u0275inj=r.Ib({imports:[[e.c,i.a,a.O,m]]}),n})()}}]);