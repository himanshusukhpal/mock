(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3Wre":function(n,e,i){"use strict";i.r(e),i.d(e,"ProfilePageModule",function(){return d});var t=i("ofXK"),o=i("3Pt+"),a=i("TEn/"),r=i("tyNb"),c=i("fXoL"),s=i("OaWH");const b=[{path:"",component:(()=>{class n{constructor(n){this.appservice=n,this.profileImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrcSIYcfdCK1XNhHWpQfuoW5eZyUhuLBMKB5FzAWYJKbGy_XvpR4aAnPlOzYd2ptiDFw&usqp=CAU",this.profileName=this.appservice.data.username,this.profileEmail=void 0===this.appservice.data.userdetails[0].email?null:this.appservice.data.userdetails[0].email,this.contact=void 0===this.appservice.data.userdetails[0].phone?null:this.appservice.data.userdetails[0].phone,this.firstname=void 0===this.appservice.data.userdetails[0].fname?null:this.appservice.data.userdetails[0].fname,this.lastname=void 0===this.appservice.data.userdetails[0].lname?null:this.appservice.data.userdetails[0].lname,this.locate=void 0===this.appservice.data.userdetails[0].address?null:this.appservice.data.userdetails[0].address}ngOnInit(){}edit(){console.log(this.locate),this.appservice.nav.navigateForward("auth/edit-profile")}}return n.\u0275fac=function(e){return new(e||n)(c.Lb(s.a))},n.\u0275cmp=c.Fb({type:n,selectors:[["app-profile"]],decls:45,vars:7,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],[1,"main"],["size-sm","6","offset-sm","3",1,"ion-no-padding"],[1,"container"],[1,"overylay"],[3,"src"],["lines","none"],["name","mail"],["name","call"],["name","locate"],["name","person-outline-circle"],["name","person"],[1,"btn-wrap"],["expand","block","shape","round ","fill","solid",1,"btn",3,"click"]],template:function(n,e){1&n&&(c.Ob(0,"ion-header",0),c.Ob(1,"ion-toolbar",1),c.Ob(2,"ion-title"),c.oc(3,"Profile"),c.Nb(),c.Ob(4,"ion-buttons",2),c.Mb(5,"ion-back-button"),c.Nb(),c.Nb(),c.Nb(),c.Ob(6,"ion-content"),c.Ob(7,"div",3),c.Ob(8,"ion-grid"),c.Ob(9,"ion-row"),c.Ob(10,"ion-col",4),c.Ob(11,"div",5),c.Ob(12,"div",6),c.Ob(13,"ion-avatar"),c.Mb(14,"ion-img",7),c.Nb(),c.Nb(),c.Nb(),c.Ob(15,"ion-card"),c.Ob(16,"ion-card-header"),c.Ob(17,"ion-card-title"),c.oc(18),c.Nb(),c.Ob(19,"ion-card-subtitle"),c.oc(20," Location "),c.Nb(),c.Nb(),c.Ob(21,"ion-card-content"),c.Ob(22,"ion-item",8),c.Mb(23,"ion-icon",9),c.Ob(24,"ion-label"),c.oc(25),c.Nb(),c.Nb(),c.Ob(26,"ion-item",8),c.Mb(27,"ion-icon",10),c.Ob(28,"ion-label"),c.oc(29),c.Nb(),c.Nb(),c.Ob(30,"ion-item",8),c.Mb(31,"ion-icon",11),c.Ob(32,"ion-label"),c.oc(33),c.Nb(),c.Nb(),c.Ob(34,"ion-item",8),c.Mb(35,"ion-icon",12),c.Ob(36,"ion-label"),c.oc(37),c.Nb(),c.Nb(),c.Ob(38,"ion-item",8),c.Mb(39,"ion-icon",13),c.Ob(40,"ion-label"),c.oc(41),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(42,"div",14),c.Ob(43,"ion-button",15),c.Wb("click",function(){return e.edit()}),c.oc(44,"Edit Profile"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&n&&(c.Bb(14),c.dc("src",e.profileImageUrl),c.Bb(4),c.qc(" ",e.profileName," "),c.Bb(7),c.pc(e.profileEmail),c.Bb(4),c.pc(e.contact),c.Bb(4),c.pc(e.locate),c.Bb(4),c.pc(e.firstname),c.Bb(4),c.pc(e.lastname))},directives:[a.u,a.N,a.M,a.h,a.e,a.f,a.q,a.t,a.H,a.p,a.d,a.w,a.i,a.k,a.m,a.l,a.j,a.A,a.v,a.D,a.g],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:#fff}ion-header[_ngcontent-%COMP%]{position:absolute}ion-title[_ngcontent-%COMP%]{color:#fff;font-family:Trebuchet MS,Lucida Sans Unicode,Lucida Grande,Lucida Sans,Arial,sans-serif;font-style:normal}.container[_ngcontent-%COMP%]{background-color:#90f3f3;height:200px;padding:0;width:100%}.overylay[_ngcontent-%COMP%]{position:relative;text-align:center;top:60%}ion-avatar[_ngcontent-%COMP%]{border:4px solid #54b168;height:100px;margin:auto;width:100px}ion-card[_ngcontent-%COMP%]{--ion-background-color:transparent!important;margin-top:40px;text-align:center}ion-item[_ngcontent-%COMP%]{--ion-item-background:#90f3f3;--min-height:35px;border-radius:5px;color:#1c1c1d;font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-size:15px;font-style:italic;font-weight:400;height:35px;margin-bottom:15px;text-align:center}ion-label[_ngcontent-%COMP%]{margin:0;padding:0;text-align:center}.btn-wrap[_ngcontent-%COMP%]{padding-top:20px;text-align:center}.btn-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{--ion-primary-color:#215ab7;--background-activated:#e1eaf9;--background-focused:#e1eaf9;--background-hover:#647b9d;--background:#215ab7;background-color:#215ab7;border-radius:25px;color:#f4f6fa}"]}),n})()}];let l=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.Jb({type:n}),n.\u0275inj=c.Ib({imports:[[r.h.forChild(b)],r.h]}),n})(),d=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.Jb({type:n}),n.\u0275inj=c.Ib({imports:[[t.c,o.a,a.P,l]]}),n})()}}]);