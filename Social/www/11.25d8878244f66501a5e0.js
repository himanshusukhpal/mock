(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{lu3c:function(n,o,t){"use strict";t.r(o),t.d(o,"LoginPageModule",function(){return h});var i=t("ofXK"),e=t("3Pt+"),a=t("TEn/"),r=t("tyNb"),c=t("mrSG"),s=t("fXoL"),d=t("OaWH"),b=t("tk/3");function g(n,o){1&n&&(s.Ob(0,"ion-item",27),s.Ob(1,"div",28),s.oc(2,"Should be a valid email address!"),s.Nb(),s.Nb())}function p(n,o){1&n&&(s.Ob(0,"ion-item",27),s.Ob(1,"div",28),s.oc(2,"Password should be of minimum 6 characters!"),s.Nb(),s.Nb())}const l=[{path:"",component:(()=>{class n{constructor(n,o){this.appService=n,this.http=o,this.userdata={},this.newdata={}}ngOnInit(){}Signup(){this.appService.nav.navigateForward("/auth/sign-up")}onLogin(n){return Object(c.b)(this,void 0,void 0,function*(){this.appService.presentLoading("Logging In ..."),yield this.appService.auth.login(n.value.email,n.value.password).then(n=>Object(c.b)(this,void 0,void 0,function*(){this.appService.dismissLoading(),this.appService.nav.navigateForward("home/dashboard"),this.id=this.appService.auth.userdetails.id,console.log(this.id,"id"),this.appService.store.seToken(this.appService.auth.userToken),yield this.appService.store.getToken().then(n=>{this.token=n,console.log(n,"token1")}),this.userdata=yield this.http.get("https://synans-social-project-default-rtdb.firebaseio.com/userDetail/"+this.id+".json?auth="+this.token).toPromise(),console.log(this.userdata),yield this.appService.store.setUser(this.userdata),this.appService.store.getUser().then(n=>{console.log(n.id,"data")})})).catch(o=>{this.appService.dismissLoading(),this.showAlert(o.message),n.reset()})})}showAlert(n){this.appService.alert.presentAlert({header:"Authentication Failed!",message:n,buttons:["Okay"]})}}return n.\u0275fac=function(o){return new(o||n)(s.Lb(d.a),s.Lb(b.a))},n.\u0275cmp=s.Fb({type:n,selectors:[["app-login"]],decls:48,vars:3,consts:[["color","primary "],[1,"main"],[2,"padding-top","20vh"],["size-sm","4.5","offset-sm","4"],[3,"ngSubmit"],["f","ngForm"],[1,"wrapform"],["lines","full"],["placeholder","Enter your email address","type","email","required","","id","email","ngModel","","name","email"],["email","ngModel"],["name","mail-outline"],["lines","none",4,"ngIf"],["type","password","placeholder","**************","required","","minlength","6","id","password","ngModel","","name","password"],["password","ngModel"],["name","lock-closed"],[1,"password_forgot"],["fill","clear",1,"ion-no-padding"],[1,"sign-btn-wrap"],["expand","block","shape","round ","fill","solid","type","submit",1,"sign-btn",3,"disabled"],[1,"text-tag"],[1,"social-btns"],["fill","clear",1,"facebookbtn","ion-no-padding"],["src","https://i.pinimg.com/736x/d5/18/ec/d518eceea19f4b1a2ee032ddc634dd7d.jpg"],["fill","clear",1,"googlebtn","ion-no-padding"],["src","https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"],[1,"ion-card-footer"],[1,"ion-no-padding",3,"click"],["lines","none"],[1,"error"]],template:function(n,o){if(1&n){const n=s.Pb();s.Ob(0,"ion-header"),s.Ob(1,"ion-toolbar",0),s.Ob(2,"ion-title"),s.oc(3,"Login"),s.Nb(),s.Nb(),s.Nb(),s.Ob(4,"ion-content"),s.Ob(5,"div",1),s.Ob(6,"ion-grid"),s.Ob(7,"ion-row",2),s.Ob(8,"ion-col",3),s.Ob(9,"ion-card"),s.Ob(10,"ion-card-content"),s.Ob(11,"form",4,5),s.Wb("ngSubmit",function(){s.kc(n);const t=s.ic(12);return o.onLogin(t)}),s.Ob(13,"div",6),s.Ob(14,"ion-item",7),s.Ob(15,"ion-input",8,9),s.Mb(17,"ion-icon",10),s.Nb(),s.Nb(),s.nc(18,g,3,0,"ion-item",11),s.Ob(19,"ion-item",7),s.Ob(20,"ion-input",12,13),s.Mb(22,"ion-icon",14),s.Nb(),s.Nb(),s.nc(23,p,3,0,"ion-item",11),s.Ob(24,"ion-row"),s.Ob(25,"ion-col"),s.Ob(26,"div",15),s.Ob(27,"ion-button",16),s.oc(28,"Forgot Password?"),s.Nb(),s.Nb(),s.Ob(29,"div",17),s.Ob(30,"ion-button",18),s.oc(31,"Login"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(32,"div",19),s.Ob(33,"span"),s.oc(34,"Or via Social Media"),s.Nb(),s.Nb(),s.Ob(35,"div",20),s.Ob(36,"ion-button",21),s.Mb(37,"ion-img",22),s.Nb(),s.Ob(38,"ion-button",23),s.Mb(39,"ion-img",24),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(40,"ion-card"),s.Ob(41,"ion-card-content"),s.Ob(42,"ion-item"),s.Ob(43,"div",25),s.Ob(44,"span"),s.oc(45,"Don\u2019t have an account?"),s.Nb(),s.Ob(46,"button",26),s.Wb("click",function(){return o.Signup()}),s.oc(47,"Sign Up"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb()}if(2&n){const n=s.ic(16),o=s.ic(21);s.Bb(18),s.dc("ngIf",!n.valid&&n.touched),s.Bb(5),s.dc("ngIf",!o.valid&&o.touched),s.Bb(7),s.dc("disabled",!n.valid||!o.valid)}},directives:[a.t,a.P,a.O,a.p,a.s,a.J,a.o,a.i,a.j,e.j,e.f,e.g,a.z,a.y,a.Z,e.i,e.e,e.h,a.u,i.k,e.b,a.g,a.v],styles:["ion-header[_ngcontent-%COMP%]{position:absolute}.error[_ngcontent-%COMP%]{color:#ff2c2c;font-size:15px}ion-content[_ngcontent-%COMP%]{--ion-item-background:transparent!important}.wrapform[_ngcontent-%COMP%]{margin-top:15px}ion-item[_ngcontent-%COMP%]{--border-color:#d4d7db;--highlight-color-focused:#1248a0;--padding-start:0;--inner-padding-end:0;--highlight-color-invalid:#215ab7;--highlight-color-valid:#215ab7;--color-focused:#1248a0!important;font-size:13px}ion-item[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{color:#74787e}ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:18px;padding-right:6px}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]:hover{color:#1248a0}.password_forgot[_ngcontent-%COMP%]{text-align:right}.password_forgot[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{color:#0a4296;font-size:12px}.sign-btn-wrap[_ngcontent-%COMP%]{padding-top:20px;text-align:center}.sign-btn-wrap[_ngcontent-%COMP%]   .sign-btn[_ngcontent-%COMP%]{--ion-primary-color:#215ab7;--background-activated:#e1eaf9;--background-focused:#e1eaf9;--background-hover:#647b9d;--background:#215ab7;background-color:#215ab7;border-radius:25px;color:#f4f6fa}.text-tag[_ngcontent-%COMP%]{margin-top:35px;text-align:center}.text-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#334862;font-size:13px;font-weight:400}.social-btns[_ngcontent-%COMP%]{margin-top:25px;text-align:center}.social-btns[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{padding-left:5px!important;width:40px}ion-card[_ngcontent-%COMP%]{--ion-background-color:transparent!important;background-color:initial!important}.ion-card-footer[_ngcontent-%COMP%]{align-items:center;display:flex;height:40px;justify-content:center;width:100%}.ion-card-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#85888d;font-size:12px;font-weight:200}.ion-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:initial;color:#535558;font-size:14px;font-weight:600;padding-left:3px}.ion-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#969393}"]}),n})()}];let u=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=s.Jb({type:n}),n.\u0275inj=s.Ib({imports:[[r.h.forChild(l)],r.h]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=s.Jb({type:n}),n.\u0275inj=s.Ib({imports:[[i.c,e.a,a.R,u]]}),n})()}}]);