(self.webpackChunksocial=self.webpackChunksocial||[]).push([[7934],{7934:(n,e,i)=>{"use strict";i.r(e),i.d(e,{ProfilePageModule:()=>p});var o=i(5109),t=i(2249),l=i(4250),r=i(3340),a=i(1855),c=i(2304),s=i(3928),g=i(6972);const d=[{path:"",component:(()=>{class n{constructor(n,e){this.appservice=n,this.http=e,this.element1={},this.getdata={},this.profileImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrcSIYcfdCK1XNhHWpQfuoW5eZyUhuLBMKB5FzAWYJKbGy_XvpR4aAnPlOzYd2ptiDFw&usqp=CAU"}ngOnInit(){console.log("in init"),this.appservice.store.getUser().then(n=>{console.log(n.uid),this.id=n.uid,console.log(this.id)})}ionViewWillEnter(){return(0,a.mG)(this,void 0,void 0,function*(){console.log("In view"),this.fetchUser()})}edit(){this.appservice.nav.navigateForward("profile/edit-profile")}home(){console.log("home"),this.appservice.nav.navigateBack("home")}fetchUser(){return(0,a.mG)(this,void 0,void 0,function*(){console.log(this.id,"this"),this.element1=yield this.appservice.store.getUser(),console.log("ELement: ",this.element1)})}}return n.\u0275fac=function(e){return new(e||n)(c.Y36(s.z),c.Y36(g.eN))},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-profile"]],decls:47,vars:7,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],[2,"position","absolute",3,"click"],["name","arrow-back","size","large"],[1,"mainContainer"],["size-sm","6","offset-sm","3",1,"ion-no-padding"],[1,"container"],[1,"overylay"],[3,"src"],["lines","none"],["name","mail"],["name","call"],["name","locate"],["name","person-circle-outline"],["name","person"],[1,"btn-wrap"],["expand","block","shape","round ","fill","solid",1,"btn",3,"click"]],template:function(n,e){1&n&&(c.TgZ(0,"ion-header",0),c.TgZ(1,"ion-toolbar",1),c.TgZ(2,"ion-buttons",2),c.TgZ(3,"ion-button",3),c.NdJ("click",function(){return e.home()}),c._UZ(4,"ion-icon",4),c.qZA(),c.qZA(),c.TgZ(5,"ion-title"),c._uU(6,"Profile"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(7,"ion-content"),c.TgZ(8,"div",5),c.TgZ(9,"ion-grid"),c.TgZ(10,"ion-row"),c.TgZ(11,"ion-col",6),c.TgZ(12,"div",7),c.TgZ(13,"div",8),c.TgZ(14,"ion-avatar"),c._UZ(15,"ion-img",9),c.qZA(),c.qZA(),c.qZA(),c.TgZ(16,"ion-card"),c.TgZ(17,"ion-card-header"),c.TgZ(18,"ion-card-title"),c._uU(19),c.qZA(),c.qZA(),c.TgZ(20,"ion-card-content"),c.TgZ(21,"ion-item",10),c._UZ(22,"ion-icon",11),c.TgZ(23,"ion-label"),c._uU(24),c.qZA(),c.qZA(),c.TgZ(25,"ion-item",10),c._UZ(26,"ion-icon",12),c.TgZ(27,"ion-label"),c._uU(28),c.qZA(),c.qZA(),c.TgZ(29,"ion-item",10),c._UZ(30,"ion-icon",13),c.TgZ(31,"ion-label"),c._uU(32),c.qZA(),c.qZA(),c.TgZ(33,"ion-item",10),c._UZ(34,"ion-icon",14),c.TgZ(35,"ion-label"),c._uU(36),c.qZA(),c.qZA(),c.TgZ(37,"ion-item",10),c._UZ(38,"ion-icon",15),c.TgZ(39,"ion-label"),c._uU(40),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(41,"div",16),c.TgZ(42,"ion-button",17),c.NdJ("click",function(){return e.edit()}),c._uU(43,"Edit Profile"),c.qZA(),c.qZA(),c.TgZ(44,"div",16),c.TgZ(45,"ion-button",17),c.NdJ("click",function(){return e.home()}),c._uU(46,"Back to Home"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&n&&(c.xp6(15),c.Q6J("src",e.profileImageUrl),c.xp6(4),c.hij(" ",null==e.element1?null:e.element1.username," "),c.xp6(5),c.Oqu(null==e.element1?null:e.element1.email),c.xp6(4),c.Oqu(null==e.element1?null:e.element1.phone),c.xp6(4),c.hij(" ",null==e.element1?null:e.element1.address," "),c.xp6(4),c.hij(" ",null==e.element1?null:e.element1.fname," "),c.xp6(4),c.hij(" ",null==e.element1?null:e.element1.lname," "))},directives:[l.Gu,l.sr,l.Sm,l.YG,l.gu,l.wd,l.W2,l.jY,l.Nd,l.wI,l.BJ,l.Xz,l.PM,l.Zi,l.Dq,l.FN,l.Ie,l.Q$],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:#fff}ion-title[_ngcontent-%COMP%]{font-family:Trebuchet MS,Lucida Sans Unicode,Lucida Grande,Lucida Sans,Arial,sans-serif;font-style:normal;color:#fff}.container[_ngcontent-%COMP%]{width:100%;height:200px;background-color:#90f3f3;padding:0}.overylay[_ngcontent-%COMP%]{position:relative;text-align:center;top:60%}ion-avatar[_ngcontent-%COMP%]{height:100px;width:100px;margin:auto;border:4px solid #54b168}ion-card[_ngcontent-%COMP%]{margin-top:40px;--ion-background-color:#0000!important;text-align:center}ion-item[_ngcontent-%COMP%]{--ion-item-background:#90f3f3;text-align:center;color:#1c1c1d;font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-style:italic;font-weight:400;font-size:15px;border-radius:5px;height:35px;--min-height:35px;margin-bottom:15px}ion-label[_ngcontent-%COMP%]{text-align:center;padding:0;margin:0}.btn-wrap[_ngcontent-%COMP%]{text-align:center;padding-top:20px}.btn-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{--ion-primary-color:#215ab7;--background-activated:#e1eaf9;--background-focused:#e1eaf9;--background-hover:#647b9d;color:#f4f6fa;border-radius:25px;--background:#215ab7;background-color:#215ab7}"]}),n})()},{path:"edit-profile",loadChildren:()=>i.e(1504).then(i.bind(i,1504)).then(n=>n.EditProfilePageModule)}];let u=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[r.Bz.forChild(d)],r.Bz]}),n})(),p=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[o.ez,t.u5,l.Pc,u]]}),n})()}}]);