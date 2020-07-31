function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"8Xxu":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("fXoL"),o=function(){var e=function(){function e(){_classCallCheck(this,e),this.isDarkMode=!1}return _createClass(e,[{key:"get",value:function(){return this.isDarkMode}},{key:"set",value:function(e){this.isDarkMode=e}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},Qeml:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("fXoL"),o=function(){var e=function(){function e(){_classCallCheck(this,e),this.fontSize=1.25}return _createClass(e,[{key:"get",value:function(){return this.fontSize}},{key:"set",value:function(e){this.fontSize=e}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},iABV:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i,o,r,a=n("mrSG"),c=n("fXoL"),s=n("8Xxu"),l=n("Qeml"),u=((o=function(){function e(){_classCallCheck(this,e),this.isReaderMode=!1}return _createClass(e,[{key:"get",value:function(){return this.isReaderMode}},{key:"set",value:function(e){this.isReaderMode=e}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275prov=c.Fb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),b=((i=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"get",value:function(){return this.fontFamily}},{key:"set",value:function(e){this.fontFamily=e}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275prov=c.Fb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),f=n("TEn/"),d=((r=function(){function e(t,n,i,o,r,a){_classCallCheck(this,e),this.darkModeService=t,this.fontSizeService=n,this.readerModeService=i,this.fontFamilyService=o,this.modalController=r,this.changeDetectorRef=a,this.title="Universal Access"}return _createClass(e,[{key:"ngOnInit",value:function(){this.isDarkMode=this.darkModeService.get(),this.fontSize=this.fontSizeService.get(),this.isReaderMode=this.readerModeService.get(),this.fontFamily=this.fontFamilyService.get()}},{key:"onToggleDarkMode",value:function(e){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.detail.checked;case 2:if(!t.sent){t.next=6;break}this.darkModeService.set(!0),document.body.setAttribute("color-theme","dark"),t.next=7;break;case 6:this.darkModeService.set(!1),document.body.setAttribute("color-theme","light");case 7:console.info(this.isDarkMode);case 8:case"end":return t.stop()}}),t,this)})))}},{key:"onChangeFontSize",value:function(e){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.detail.value;case 2:n=t.sent,console.info(n),this.fontSizeService.set(n);case 4:case"end":return t.stop()}}),t,this)})))}},{key:"onToggleReaderMode",value:function(e){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.detail.checked;case 2:if(!t.sent){t.next=6;break}this.readerModeService.set(!0),document.body.setAttribute("font-readable","true"),t.next=7;break;case 6:this.readerModeService.set(!1),document.body.setAttribute("font-readable","false");case 7:console.info(this.isReaderMode);case 8:case"end":return t.stop()}}),t,this)})))}},{key:"onFontFamilyChange",value:function(e){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.detail.value;case 2:n=t.sent,this.fontFamilyService.set(n),document.body.setAttribute("font-family",n),console.info(n);case 4:case"end":return t.stop()}}),t,this)})))}},{key:"closeModal",value:function(){this.modalController.dismiss({dismissed:!0})}},{key:"ngAfterViewChecked",value:function(){this.getDefaults()}},{key:"getDefaults",value:function(){this.isDarkMode=this.darkModeService.get(),this.fontSize=this.fontSizeService.get(),this.isReaderMode=this.readerModeService.get(),this.fontFamily=this.fontFamilyService.get(),this.changeDetectorRef.detectChanges()}}]),e}()).\u0275fac=function(e){return new(e||r)(c.Jb(s.a),c.Jb(l.a),c.Jb(u),c.Jb(b),c.Jb(f.N),c.Jb(c.h))},r.\u0275cmp=c.Db({type:r,selectors:[["app-accessbility-features"]],decls:54,vars:11,consts:[["aria-label","Accessibility Features"],["slot","end"],[3,"click"],["slot","icon-only","name","close"],["fixed",""],["size","12","size-md","8","offset-md","2"],[3,"checked","ionChange"],["min","0.75","max","2","snaps","true","step","0.25",3,"value","ionChange"],["slot","start"],[3,"value","ionChange"],[1,"font-label--default"],["slot","end","value",""],[1,"font-label--open-dyslexic"],["slot","end","value","open-dyslexic"],[1,"font-label--andika-new-basic"],["slot","end","value","andika-new-basic"],[1,"font-label--inter"],["slot","end","value","inter"],[1,"font-label--tiresias"],["slot","end","value","tiresias"],["shape","round","expand","block",3,"click"]],template:function(e,t){1&e&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title",0),c.jc(3),c.Lb(),c.Mb(4,"ion-buttons",1),c.Mb(5,"ion-button",2),c.Ub("click",(function(){return t.closeModal()})),c.Kb(6,"ion-icon",3),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(7,"ion-content"),c.Mb(8,"ion-grid",4),c.Mb(9,"ion-row"),c.Mb(10,"ion-col",5),c.Mb(11,"ion-list"),c.Mb(12,"ion-item"),c.Mb(13,"ion-label"),c.jc(14,"Dark mode"),c.Lb(),c.Mb(15,"ion-toggle",6),c.Ub("ionChange",(function(e){return t.onToggleDarkMode(e)})),c.Lb(),c.Lb(),c.Mb(16,"ion-item"),c.Mb(17,"ion-label"),c.jc(18,"Reader Mode"),c.Lb(),c.Mb(19,"ion-toggle",6),c.Ub("ionChange",(function(e){return t.onToggleReaderMode(e)})),c.Lb(),c.Lb(),c.Mb(20,"ion-item"),c.Mb(21,"ion-range",7),c.Ub("ionChange",(function(e){return t.onChangeFontSize(e)})),c.Mb(22,"ion-label",8),c.jc(23,"A"),c.Lb(),c.Mb(24,"ion-label",1),c.jc(25,"A"),c.Lb(),c.Lb(),c.Lb(),c.Mb(26,"ion-radio-group",9),c.Ub("ionChange",(function(e){return t.onFontFamilyChange(e)})),c.Mb(27,"ion-list-header"),c.Mb(28,"ion-label"),c.jc(29,"Font Family"),c.Lb(),c.Lb(),c.Mb(30,"ion-item"),c.Mb(31,"ion-label",10),c.jc(32,"Default"),c.Lb(),c.Kb(33,"ion-radio",11),c.Lb(),c.Mb(34,"ion-item"),c.Mb(35,"ion-label",12),c.jc(36,"Open Dyslexic"),c.Lb(),c.Kb(37,"ion-radio",13),c.Lb(),c.Mb(38,"ion-item"),c.Mb(39,"ion-label",14),c.jc(40,"Andika"),c.Lb(),c.Kb(41,"ion-radio",15),c.Lb(),c.Mb(42,"ion-item"),c.Mb(43,"ion-label",16),c.jc(44,"Inter"),c.Lb(),c.Kb(45,"ion-radio",17),c.Lb(),c.Mb(46,"ion-item"),c.Mb(47,"ion-label",18),c.jc(48,"Tiresias"),c.Lb(),c.Kb(49,"ion-radio",19),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(50,"ion-footer"),c.Mb(51,"ion-toolbar"),c.Mb(52,"ion-button",20),c.Ub("click",(function(){return t.closeModal()})),c.jc(53," Done "),c.Lb(),c.Lb(),c.Lb()),2&e&&(c.zb(2),c.hc("font-size",t.fontSize,"em"),c.zb(1),c.lc(" ",t.title," "),c.zb(12),c.bc("checked",t.isDarkMode),c.zb(4),c.bc("checked",t.isReaderMode),c.zb(2),c.bc("value",t.fontSize),c.zb(1),c.hc("font-size",12,"px"),c.zb(2),c.hc("font-size",20,"px"),c.zb(2),c.bc("value",t.fontFamily))},directives:[f.o,f.K,f.I,f.d,f.c,f.p,f.k,f.n,f.C,f.j,f.t,f.r,f.s,f.J,f.a,f.A,f.S,f.z,f.u,f.y,f.Q,f.m],styles:[""]}),r)},vSxu:function(e,t,n){"use strict";n.r(t),n.d(t,"AccessbilityFeaturesPageModule",(function(){return d}));var i,o,r=n("ofXK"),a=n("3Pt+"),c=n("TEn/"),s=n("tyNb"),l=n("iABV"),u=n("fXoL"),b=[{path:"",component:l.a}],f=((o=function e(){_classCallCheck(this,e)}).\u0275mod=u.Hb({type:o}),o.\u0275inj=u.Gb({factory:function(e){return new(e||o)},imports:[[s.i.forChild(b)],s.i]}),o),d=((i=function e(){_classCallCheck(this,e)}).\u0275mod=u.Hb({type:i}),i.\u0275inj=u.Gb({factory:function(e){return new(e||i)},imports:[[r.b,a.e,c.L,f]]}),i)}}]);