(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{IbZR:function(n,e,t){"use strict";t.r(e),t.d(e,"EditProfilePageModule",function(){return g});var o=t("ofXK"),i=t("3Pt+"),a=t("TEn/"),r=t("tyNb"),s=t("lJxs"),c=t("fXoL"),l=t("OaWH"),p=t("tk/3");const b=[{path:"",component:(()=>{class n{constructor(n,e){this.appservice=n,this.http=e}ngOnInit(){}editProfile(n){var e;this.appservice.data.userdetails.fname=n.value.fname,this.appservice.data.userdetails.lname=n.value.lname,this.appservice.data.userdetails.address=n.value.address,this.appservice.data.userdetails.phone=n.value.phone,this.appservice.data.userdetails.email=null===(e=this.appservice.auth)||void 0===e?void 0:e.email,this.appservice.data.userdetails.username=n.value.username,console.log(this.appservice.auth.userToken),this.http.get("https://synans-social-project-default-rtdb.firebaseio.com/userDetail.json?auth="+this.appservice.auth.userToken).pipe(Object(s.a)(n=>{let e=!1;for(const t in n)if(n[t].email===this.appservice.auth.email){e=!0,console.log("in if"),this.http.put("https://synans-social-project-default-rtdb.firebaseio.com/userDetail/"+t+".json?auth="+this.appservice.auth.userToken,this.appservice.data.userdetails).subscribe(n=>{console.log(n),this.appservice.nav.navigateForward("auth/profile")});break}!1===e&&(console.log("in else"),this.http.post("https://synans-social-project-default-rtdb.firebaseio.com/userDetail.json?auth="+this.appservice.auth.userToken,this.appservice.data.userdetails).subscribe(n=>{this.appservice.nav.navigateForward("auth/profile")}))})).subscribe(n=>{})}}return n.\u0275fac=function(e){return new(e||n)(c.Lb(l.a),c.Lb(p.a))},n.\u0275cmp=c.Fb({type:n,selectors:[["app-edit-profile"]],decls:55,vars:0,consts:[["color","primary"],["slot","start"],[1,"main"],[2,"padding-top","15vh"],["size-sm","6","offset-sm","3"],[3,"ngSubmit"],["f","ngForm"],["lines","full"],["type","text","placeholder","First Name","id","fname","ngModel","","name","fname"],["fname","ngModel"],["name","person-circle-outline"],["type","text","placeholder","Last name","id","lname","ngModel","","name","lname"],["lname","ngModel"],["name","person-outline"],["type","text","placeholder","Username","id","username","ngModel","","name","username"],["username","ngModel"],["name","person"],["type","tel","placeholder","Phone No.","id","phone","ngModel","","name","phone"],["phone","ngModel"],["name","call"],["type","text","placeholder","Address","id","address","ngModel","","name","address"],["address","ngModel"],["name","home"],["type","email","id","email","ngModel","","name","email","placeholder","Registration email"],["password","ngModel"],["name","mail"],[1,"social-btns"],["fill","clear",1,"facebookbtn","ion-no-padding"],["src","https://i.pinimg.com/736x/d5/18/ec/d518eceea19f4b1a2ee032ddc634dd7d.jpg"],["type","text","id","fb","ngModel","","name","fb","placeholder","Facebook URL here"],["fb","ngModel"],["fill","clear",1,"instabtn","ion-no-padding"],["src","https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"],["type","text","id","fb","ngModel","","name","fb","placeholder","Instagram URL here"],[1,"sign-btn-wrap"],["shape","round","type","submit","expand","block","fill","solid",1,"sign-btn"]],template:function(n,e){if(1&n){const n=c.Pb();c.Ob(0,"ion-header"),c.Ob(1,"ion-toolbar",0),c.Ob(2,"ion-title"),c.oc(3,"Edit Profile"),c.Nb(),c.Ob(4,"ion-buttons",1),c.Mb(5,"ion-back-button"),c.Nb(),c.Nb(),c.Nb(),c.Ob(6,"ion-content"),c.Ob(7,"div",2),c.Ob(8,"ion-grid"),c.Ob(9,"ion-row",3),c.Ob(10,"ion-col",4),c.Ob(11,"ion-card"),c.Ob(12,"ion-card-content"),c.Ob(13,"form",5,6),c.Wb("ngSubmit",function(){c.kc(n);const t=c.ic(14);return e.editProfile(t)}),c.Ob(15,"ion-item",7),c.Ob(16,"ion-input",8,9),c.Mb(18,"ion-icon",10),c.Nb(),c.Nb(),c.Ob(19,"ion-item",7),c.Ob(20,"ion-input",11,12),c.Mb(22,"ion-icon",13),c.Nb(),c.Nb(),c.Ob(23,"ion-item",7),c.Ob(24,"ion-input",14,15),c.Mb(26,"ion-icon",16),c.Nb(),c.Nb(),c.Ob(27,"ion-item",7),c.Ob(28,"ion-input",17,18),c.Mb(30,"ion-icon",19),c.Nb(),c.Nb(),c.Ob(31,"ion-item",7),c.Ob(32,"ion-input",20,21),c.Mb(34,"ion-icon",22),c.Nb(),c.Nb(),c.Ob(35,"ion-item",7),c.Ob(36,"ion-input",23,24),c.Mb(38,"ion-icon",25),c.Nb(),c.Nb(),c.Ob(39,"div",26),c.Ob(40,"ion-item"),c.Ob(41,"ion-button",27),c.Mb(42,"ion-img",28),c.Nb(),c.Mb(43,"ion-input",29,30),c.Nb(),c.Ob(45,"ion-item"),c.Ob(46,"ion-button",31),c.Mb(47,"ion-img",32),c.Nb(),c.Mb(48,"ion-input",33,30),c.Nb(),c.Nb(),c.Ob(50,"ion-row"),c.Ob(51,"ion-col"),c.Ob(52,"div",34),c.Ob(53,"ion-button",35),c.oc(54,"Save"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()}},directives:[a.t,a.M,a.L,a.h,a.e,a.f,a.p,a.s,a.G,a.o,a.i,a.j,i.j,i.f,i.g,a.z,a.y,a.W,i.e,i.h,a.u,a.g,a.v],styles:["ion-content[_ngcontent-%COMP%]{--ion-item-background:transparent!important}.bg-color[_ngcontent-%COMP%]{background:#e1eaf9}ion-card[_ngcontent-%COMP%]{--ion-background-color:transparent!important;background-color:initial!important}ion-item[_ngcontent-%COMP%]{--border-color:#d4d7db;--highlight-color-focused:#215ab7;--padding-start:0;--inner-padding-end:0;--highlight-color-invalid:#215ab7;--highlight-color-valid:#215ab7;--color-focused:#1248a0!important}ion-item[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{color:#74787e;font-size:13px}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:18px;padding-right:6px}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]:hover{color:#1248a0}ion-item[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:#ff2c2c;font-size:15px}.sign-btn-wrap[_ngcontent-%COMP%]{padding-top:20px;text-align:center}.sign-btn-wrap[_ngcontent-%COMP%]   .sign-btn[_ngcontent-%COMP%]{--ion-primary-color:#215ab7;--background-activated:#e1eaf9;--background-focused:#e1eaf9;--background-hover:#647b9d;--background:#215ab7;background-color:#215ab7;border-radius:25px;color:#f4f6fa}.text-tag[_ngcontent-%COMP%]{margin-top:35px;text-align:center}.text-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#334862;font-size:13px;font-weight:400}.social-btns[_ngcontent-%COMP%]{margin-top:18px;text-align:center}.social-btns[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{padding-left:2px!important;width:30px}.ion-card-footer[_ngcontent-%COMP%]{align-items:center;display:flex;height:40px;justify-content:center;width:100%}.ion-card-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#85888d;font-size:12px;font-weight:200}.ion-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:initial;color:#535558;font-size:14px;font-weight:600;padding-left:3px}.ion-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#969393}"]}),n})()}];let d=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.Jb({type:n}),n.\u0275inj=c.Ib({imports:[[r.h.forChild(b)],r.h]}),n})(),g=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.Jb({type:n}),n.\u0275inj=c.Ib({imports:[[o.c,i.a,a.O,d]]}),n})()}}]);