(self.webpackChunksocial=self.webpackChunksocial||[]).push([[1504],{1504:(n,e,o)=>{"use strict";o.r(e),o.d(e,{EditProfilePageModule:()=>u});var t=o(5109),i=o(2249),a=o(7634),r=o(3340),s=o(1855),l=o(2304),c=o(7698),g=o(6972);const d=[{path:"",component:(()=>{class n{constructor(n,e){this.appservice=n,this.http=e,this.userDetails={}}ngOnInit(){this.callUser()}callUser(){return(0,s.mG)(this,void 0,void 0,function*(){yield this.appservice.store.getUser().then(n=>{console.log(n,"res1"),this.userDetails=n}),console.log(this.userDetails,"before")})}editProfile(n){return(0,s.mG)(this,void 0,void 0,function*(){this.userDetails.fname=n.value.fname,this.userDetails.lname=n.value.lname,this.userDetails.address=n.value.address,this.userDetails.phone=n.value.phone,this.userDetails.username=n.value.username,yield this.appservice.store.getToken().then(n=>{this.token=n}),console.log(this.userDetails,"after")})}}return n.\u0275fac=function(e){return new(e||n)(l.Y36(c.z),l.Y36(g.eN))},n.\u0275cmp=l.Xpm({type:n,selectors:[["app-edit-profile"]],decls:53,vars:5,consts:[["color","primary"],[1,"mainContainer"],[2,"padding-top","15vh"],["size-sm","6","offset-sm","3"],[3,"ngSubmit"],["f","ngForm"],["lines","full"],["type","text","placeholder","First Name","id","fname","ngModel","","name","fname",3,"value"],["fname","ngModel"],["name","person-circle-outline"],["type","text","placeholder","Last name","id","lname","ngModel","","name","lname",3,"value"],["lname","ngModel"],["name","person-outline"],["type","text","placeholder","Username","id","username","ngModel","","name","username",3,"value"],["username","ngModel"],["name","person"],["type","tel","placeholder","Phone No.","id","phone","ngModel","","name","phone",3,"value"],["phone","ngModel"],["name","call"],["type","text","placeholder","Address","id","address","ngModel","","name","address",3,"value"],["address","ngModel"],["name","home"],["type","email","id","email","ngModel","","name","email","placeholder","Registration email"],["password","ngModel"],["name","mail"],[1,"social-btns"],["fill","clear",1,"facebookbtn","ion-no-padding"],["src","https://i.pinimg.com/736x/d5/18/ec/d518eceea19f4b1a2ee032ddc634dd7d.jpg"],["type","text","id","fb","ngModel","","name","fb","placeholder","Facebook URL here"],["fb","ngModel"],["fill","clear",1,"instabtn","ion-no-padding"],["src","https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"],["type","text","id","fb","ngModel","","name","fb","placeholder","Instagram URL here"],[1,"sign-btn-wrap"],["shape","round","type","submit","expand","block","fill","solid",1,"sign-btn"]],template:function(n,e){if(1&n){const n=l.EpF();l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar",0),l.TgZ(2,"ion-title"),l._uU(3,"Edit Profile"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(4,"ion-content"),l.TgZ(5,"div",1),l.TgZ(6,"ion-grid"),l.TgZ(7,"ion-row",2),l.TgZ(8,"ion-col",3),l.TgZ(9,"ion-card"),l.TgZ(10,"ion-card-content"),l.TgZ(11,"form",4,5),l.NdJ("ngSubmit",function(){l.CHM(n);const o=l.MAs(12);return e.editProfile(o)}),l.TgZ(13,"ion-item",6),l.TgZ(14,"ion-input",7,8),l._UZ(16,"ion-icon",9),l.qZA(),l.qZA(),l.TgZ(17,"ion-item",6),l.TgZ(18,"ion-input",10,11),l._UZ(20,"ion-icon",12),l.qZA(),l.qZA(),l.TgZ(21,"ion-item",6),l.TgZ(22,"ion-input",13,14),l._UZ(24,"ion-icon",15),l.qZA(),l.qZA(),l.TgZ(25,"ion-item",6),l.TgZ(26,"ion-input",16,17),l._UZ(28,"ion-icon",18),l.qZA(),l.qZA(),l.TgZ(29,"ion-item",6),l.TgZ(30,"ion-input",19,20),l._UZ(32,"ion-icon",21),l.qZA(),l.qZA(),l.TgZ(33,"ion-item",6),l.TgZ(34,"ion-input",22,23),l._UZ(36,"ion-icon",24),l.qZA(),l.qZA(),l.TgZ(37,"div",25),l.TgZ(38,"ion-item"),l.TgZ(39,"ion-button",26),l._UZ(40,"ion-img",27),l.qZA(),l._UZ(41,"ion-input",28,29),l.qZA(),l.TgZ(43,"ion-item"),l.TgZ(44,"ion-button",30),l._UZ(45,"ion-img",31),l.qZA(),l._UZ(46,"ion-input",32,29),l.qZA(),l.qZA(),l.TgZ(48,"ion-row"),l.TgZ(49,"ion-col"),l.TgZ(50,"div",33),l.TgZ(51,"ion-button",34),l._uU(52,"Save"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()}2&n&&(l.xp6(14),l.s9C("value",e.userDetails.fname),l.xp6(4),l.s9C("value",e.userDetails.lname),l.xp6(4),l.s9C("value",e.userDetails.username),l.xp6(4),l.s9C("value",e.userDetails.phone),l.xp6(4),l.s9C("value",e.userDetails.address))},directives:[a.Gu,a.sr,a.wd,a.W2,a.jY,a.Nd,a.wI,a.PM,a.FN,i._Y,i.JL,i.F,a.Ie,a.pK,a.j9,i.JJ,i.On,a.gu,a.YG,a.Xz],styles:["ion-content[_ngcontent-%COMP%]{--ion-item-background:#0000!important}.bg-color[_ngcontent-%COMP%]{background:#e1eaf9}ion-card[_ngcontent-%COMP%]{--ion-background-color:#0000!important;background-color:initial!important}ion-item[_ngcontent-%COMP%]{--border-color:#d4d7db;--highlight-color-focused:#215ab7;--padding-start:0;--inner-padding-end:0;--highlight-color-invalid:#215ab7;--highlight-color-valid:#215ab7;--color-focused:#1248a0!important}ion-item[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{color:#74787e;font-size:13px}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{padding-right:6px;font-size:18px}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]:hover{color:#1248a0}ion-item[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:#ff2c2c;font-size:15px}.sign-btn-wrap[_ngcontent-%COMP%]{text-align:center;padding-top:20px}.sign-btn-wrap[_ngcontent-%COMP%]   .sign-btn[_ngcontent-%COMP%]{--ion-primary-color:#215ab7;--background-activated:#e1eaf9;--background-focused:#e1eaf9;--background-hover:#647b9d;color:#f4f6fa;border-radius:25px;--background:#215ab7;background-color:#215ab7}.text-tag[_ngcontent-%COMP%]{margin-top:35px;text-align:center}.text-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;font-weight:400;color:#334862}.social-btns[_ngcontent-%COMP%]{margin-top:18px;text-align:center}.social-btns[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:30px;padding-left:2px!important}.ion-card-footer[_ngcontent-%COMP%]{width:100%;height:40px;align-items:center;justify-content:center;display:flex}.ion-card-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#85888d;font-size:12px;font-weight:200}.ion-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:initial;font-size:14px;font-weight:600;padding-left:3px;color:#535558}.ion-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#969393}"]}),n})()}];let p=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[r.Bz.forChild(d)],r.Bz]}),n})(),u=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[t.ez,i.u5,a.Pc,p]]}),n})()}}]);